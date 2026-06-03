import { useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionConfig } from 'framer-motion'
import SlideWrapper from './SlideWrapper.jsx'
import TitleSlide from '../slides/TitleSlide.jsx'
import AboutBitSlide from '../slides/AboutBitSlide.jsx'
import VisionMissionSlide from '../slides/VisionMissionSlide.jsx'
import PricingSlide from '../slides/PricingSlide.jsx'
import ModelsSlide from '../slides/ModelsSlide.jsx'
import StudioSlide from '../slides/StudioSlide.jsx'
import ExtensionsSlide from '../slides/ExtensionsSlide.jsx'
import IntegrationSlide from '../slides/IntegrationSlide.jsx'
import PixelBitSlide from '../slides/PixelBitSlide.jsx'
import PixelBitBusinessSlide from '../slides/PixelBitBusinessSlide.jsx'
import ConclusionSlide from '../slides/ConclusionSlide.jsx'

const allSlides = [
  TitleSlide, AboutBitSlide, VisionMissionSlide, PricingSlide, ModelsSlide,
  StudioSlide, ExtensionsSlide, IntegrationSlide, PixelBitSlide, PixelBitBusinessSlide, ConclusionSlide,
]

const SLIDE_W = 1600
const SLIDE_H = 900

export default function ExportPDF() {
  const [busy, setBusy] = useState(false)
  const [progress, setProgress] = useState(0)
  const hostRef = useRef(null)

  const handleExport = async () => {
    if (busy) return
    setBusy(true)
    setProgress(0)

    const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
      import('html2canvas-pro'),
      import('jspdf'),
    ])

    // Fullscreen opaque overlay so the user doesn't see the host rendering
    const overlay = document.createElement('div')
    overlay.id = 'pdf-export-overlay'
    overlay.style.cssText = `
      position: fixed; inset: 0; z-index: 100000;
      background: rgba(15, 20, 25, 0.65); backdrop-filter: blur(8px);
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      font-family: 'Plus Jakarta Sans', system-ui, sans-serif; color: #fff;
      gap: 12px;
    `
    overlay.innerHTML = `
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" style="animation: spin 1s linear infinite">
        <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.25)" stroke-width="3" />
        <path d="M12 2a10 10 0 0 1 10 10" stroke="#00b894" stroke-width="3" stroke-linecap="round" />
      </svg>
      <div style="font-size: 18px; font-weight: 600">Membuat PDF…</div>
      <div id="pdf-export-progress" style="font-size: 14px; opacity: 0.75">0%</div>
    `
    document.body.appendChild(overlay)

    const host = document.createElement('div')
    host.className = 'pdf-export-mode'
    host.style.position = 'fixed'
    host.style.left = '0'
    host.style.top = '0'
    host.style.width = `${SLIDE_W}px`
    host.style.height = `${SLIDE_H}px`
    host.style.pointerEvents = 'none'
    // z-index BELOW overlay so user doesn't see, but no opacity:0 / clip-path
    // so browser fully renders & paints everything (images decode properly)
    host.style.zIndex = '99000'
    host.style.overflow = 'hidden'
    host.style.background = '#f4f6f9'
    document.body.appendChild(host)
    hostRef.current = host

    const exportStyle = document.createElement('style')
    exportStyle.id = 'pdf-export-styles'
    exportStyle.textContent = `
      @keyframes spin { to { transform: rotate(360deg); } }
      .pdf-export-mode * {
        opacity: 1 !important;
        transform: none !important;
        filter: none !important;
      }
      .pdf-export-mode [class*="bg-clip-text"],
      .pdf-export-mode .text-transparent {
        background: none !important;
        -webkit-background-clip: border-box !important;
        background-clip: border-box !important;
        -webkit-text-fill-color: currentColor !important;
        color: #0f1419 !important;
      }
      .pdf-export-mode .bg-clip-text.from-tosca,
      .pdf-export-mode .bg-clip-text [class*="from-tosca"] { color: #00b894 !important; }
      .pdf-export-mode [class*="animate-pulse"],
      .pdf-export-mode [class*="animate-spin"],
      .pdf-export-mode [class*="animate-float"] { animation: none !important; }
      .pdf-export-mode img {
        opacity: 1 !important;
        max-width: 100% !important;
      }
      .pdf-export-mode img[data-pdf-hidden="1"] {
        visibility: hidden !important;
      }
    `
    document.head.appendChild(exportStyle)

    const stage = document.createElement('div')
    host.appendChild(stage)

    const slideRefs = []

    const ExportRoot = () => (
      <MotionConfig reducedMotion="always">
        {allSlides.map((Slide, i) => (
          <div
            key={i}
            ref={(el) => { slideRefs[i] = el }}
            style={{
              width: `${SLIDE_W}px`,
              height: `${SLIDE_H}px`,
              background: 'var(--color-background, #f4f6f9)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute inset-0 bg-grid opacity-70" />
              <div className="absolute top-[-25%] right-[-15%] w-[700px] h-[700px] rounded-full bg-tosca/15 blur-[140px]" />
              <div className="absolute bottom-[-25%] left-[-15%] w-[600px] h-[600px] rounded-full bg-purple/12 blur-[140px]" />
            </div>
            <div className="relative z-10 w-full h-full">
              <SlideWrapper>
                <Slide />
              </SlideWrapper>
            </div>
          </div>
        ))}
      </MotionConfig>
    )

    const root = createRoot(stage)
    root.render(<ExportRoot />)

    try {
      console.group('[PDF Export] Debug')
      await document.fonts?.ready
      await new Promise((r) => setTimeout(r, 500))

      const imgs = Array.from(host.querySelectorAll('img'))
      console.log('[1] Host built. Found', imgs.length, 'img elements:')
      imgs.forEach((img, i) => {
        const rect = img.getBoundingClientRect()
        console.log(`    [${i}] src="${img.getAttribute('src')}" | natural=${img.naturalWidth}x${img.naturalHeight} | rendered=${Math.round(rect.width)}x${Math.round(rect.height)} | complete=${img.complete}`)
      })

      const cache = new Map()
      const svgToPng = (svgDataUrl) => new Promise((resolve, reject) => {
        const tmp = new Image()
        tmp.onload = async () => {
          // Force decode before draw (Chromium sometimes needs this for SVG)
          if (typeof tmp.decode === 'function') {
            try { await tmp.decode() } catch { /* ignore */ }
          }
          const w = (tmp.naturalWidth || 256) * 2
          const h = (tmp.naturalHeight || 256) * 2
          const c = document.createElement('canvas')
          c.width = w
          c.height = h
          const cx = c.getContext('2d')
          cx.drawImage(tmp, 0, 0, w, h)
          const sample = cx.getImageData(Math.round(w / 2), Math.round(h / 2), 1, 1).data
          console.log(`    [svgToPng] result ${w}x${h}, center pixel rgba(${sample[0]},${sample[1]},${sample[2]},${sample[3]})`)
          // If the conversion produced an empty image (fully transparent center),
          // the SVG didn't render properly. Fall through and return whatever
          // toDataURL gives — the consumer will draw empty pixels (no visible image).
          try { resolve(c.toDataURL('image/png')) } catch (e) { reject(e) }
        }
        tmp.onerror = reject
        tmp.src = svgDataUrl
      })
      const toDataURL = async (src) => {
        const abs = new URL(src, location.href).href
        if (cache.has(abs)) return cache.get(abs)
        const res = await fetch(abs, { cache: 'force-cache' })
        const blob = await res.blob()
        let dataUrl = await new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.onload = () => resolve(reader.result)
          reader.onerror = reject
          reader.readAsDataURL(blob)
        })
        // Pre-rasterize SVG → PNG. ctx.drawImage(svgImg, ...) is unreliable
        // (silently no-op in some Chromium configs, especially with filters).
        // PNG always renders correctly on canvas.
        if (typeof dataUrl === 'string' && dataUrl.startsWith('data:image/svg+xml')) {
          try {
            dataUrl = await svgToPng(dataUrl)
          } catch (e) {
            console.warn('SVG → PNG conversion failed:', e)
          }
        }
        cache.set(src, dataUrl)
        cache.set(abs, dataUrl)
        return dataUrl
      }

      console.log('[2] Pre-fetching all images as base64…')
      await Promise.all(
        imgs.map(async (img, idx) => {
          try {
            const originalSrc = img.getAttribute('src')
            const dataUrl = await toDataURL(img.src)
            console.log(`    [${idx}] ${originalSrc} → ${dataUrl.slice(0, 50)}… (${Math.round(dataUrl.length / 1024)}KB)`)
            await new Promise((resolve) => {
              const done = () => resolve()
              img.addEventListener('load', done, { once: true })
              img.addEventListener('error', done, { once: true })
              img.src = dataUrl
              setTimeout(done, 2000)
            })
            if (typeof img.decode === 'function') {
              try { await img.decode() } catch { /* ignore */ }
            }
          } catch (e) {
            console.warn(`    [${idx}] FAILED to inline ${img.src}:`, e)
          }
        }),
      )
      console.log('[3] Cache populated. Entries:', cache.size, 'keys:', [...cache.keys()])

      // Strip framer-motion inline transform/opacity that may leak into html2canvas
      let stripped = 0
      host.querySelectorAll('[style]').forEach((el) => {
        let changed = false
        if (el.style.transform) { el.style.transform = 'none'; changed = true }
        if (el.style.opacity !== '' && el.style.opacity !== '1') { el.style.opacity = '1'; changed = true }
        if (el.style.visibility === 'hidden') { el.style.visibility = 'visible'; changed = true }
        if (changed) stripped++
      })
      console.log('[4] Stripped inline styles from', stripped, 'elements')

      // Two animation frames + small delay to ensure all paints settle
      await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)))
      await new Promise((r) => setTimeout(r, 400))

      // Verify images STILL have base64 src after our inlining
      const imgsAfter = Array.from(host.querySelectorAll('img'))
      const dataUrlImgs = imgsAfter.filter((img) => (img.getAttribute('src') || '').startsWith('data:'))
      console.log(`[5] After inlining wait: ${dataUrlImgs.length}/${imgsAfter.length} imgs have data: src`)

      const pdf = new jsPDF({ orientation: 'landscape', unit: 'px', format: [SLIDE_W, SLIDE_H] })

      for (let i = 0; i < slideRefs.length; i++) {
        const el = slideRefs[i]
        if (!el) continue
        const slideImgsBefore = el.querySelectorAll('img').length
        const slideDataImgsBefore = Array.from(el.querySelectorAll('img')).filter((im) => (im.getAttribute('src') || '').startsWith('data:')).length
        console.log(`[6.${i}] Capturing slide ${i + 1}/${slideRefs.length} — imgs in slide: ${slideImgsBefore} (${slideDataImgsBefore} data:)`)

        let canvas = await html2canvas(el, {
          width: SLIDE_W,
          height: SLIDE_H,
          scale: 2,
          backgroundColor: '#f4f6f9',
          useCORS: true,
          allowTaint: true,
          imageTimeout: 0,
          logging: false,
          onclone: (clonedDoc, clonedEl) => {
            // Hide all <img> from html2canvas — it ignores object-fit and stretches
            // images into their bounding box. We will draw images manually with
            // correct aspect ratio in the overlay step below. Layout is preserved
            // because visibility:hidden keeps the img's box.
            // Replace every <img> in the clone with a sized placeholder div.
            // This guarantees html2canvas cannot draw any image — only our
            // manual overlay (post-capture) handles image pixels.
            const clonedImgs = Array.from(clonedEl.querySelectorAll('img'))
            clonedImgs.forEach((img) => {
              const w = img.offsetWidth || parseFloat(img.style.width) || 1
              const h = img.offsetHeight || parseFloat(img.style.height) || 1
              const ph = clonedDoc.createElement('div')
              ph.style.cssText = `display:inline-block;width:${w}px;height:${h}px;vertical-align:top;`
              img.parentNode?.replaceChild(ph, img)
            })
            console.log(`    [onclone slide ${i}] replaced ${clonedImgs.length} imgs with placeholders`)
            clonedEl.querySelectorAll('[style]').forEach((node) => {
              if (node.style.transform) node.style.transform = 'none'
              if (node.style.opacity !== '' && node.style.opacity !== '1') node.style.opacity = '1'
            })
          },
        })

        // ── Manual image overlay ─────────────────────────────────────────
        // html2canvas-pro silently drops <img> rendering in some cases.
        // We re-draw each source img directly onto the captured canvas at
        // its computed position so images are guaranteed to appear.
        // Copy html2canvas output to a FRESH canvas to escape any lingering
        // state (transform, clip region, composite mode) that html2canvas-pro
        // may leave on the original canvas context. The original canvas was
        // showing background pixels at y>1000 because of leftover clipping.
        const cleanCanvas = document.createElement('canvas')
        cleanCanvas.width = canvas.width
        cleanCanvas.height = canvas.height
        const ctx = cleanCanvas.getContext('2d', { willReadFrequently: true })
        ctx.drawImage(canvas, 0, 0)
        // Replace `canvas` reference for the rest of this iteration
        // so downscale + addImage uses the clean one
        // eslint-disable-next-line no-param-reassign
        canvas = cleanCanvas

        try {
          const slideRect = el.getBoundingClientRect()
          const captureScale = canvas.width / SLIDE_W
          const currentTransform = ctx.getTransform()
          console.log(`    [6.${i}.geom] slideRect={left:${slideRect.left.toFixed(1)}, top:${slideRect.top.toFixed(1)}, w:${slideRect.width.toFixed(1)}, h:${slideRect.height.toFixed(1)}} canvas=${canvas.width}x${canvas.height} captureScale=${captureScale.toFixed(3)} ctxTransform=[${currentTransform.a},${currentTransform.b},${currentTransform.c},${currentTransform.d},${currentTransform.e},${currentTransform.f}]`)
          const sourceImgs = Array.from(el.querySelectorAll('img'))
          let drawn = 0
          for (const img of sourceImgs) {
            const imgRect = img.getBoundingClientRect()
            const x = (imgRect.left - slideRect.left) * captureScale
            const y = (imgRect.top - slideRect.top) * captureScale
            const w = imgRect.width * captureScale
            const h = imgRect.height * captureScale
            if (w < 1 || h < 1) continue

            // Build a FRESH Image from the cached data URL so we don't depend
            // on the live host img's decoded state (which may be incomplete
            // for elements outside the host's visible 900px viewport).
            const originalSrc = img.getAttribute('src') || ''
            const dataUrl = originalSrc.startsWith('data:')
              ? originalSrc
              : (cache.get(originalSrc) || cache.get(new URL(originalSrc, location.href).href))
            if (!dataUrl) {
              console.warn(`    [6.${i}.draw] no cached data URL for "${originalSrc}", skipping`)
              continue
            }
            const freshImg = await new Promise((resolve, reject) => {
              const im = new Image()
              im.onload = () => resolve(im)
              im.onerror = reject
              im.src = dataUrl
            }).catch(() => null)
            if (!freshImg) {
              console.warn(`    [6.${i}.draw] fresh image load failed`)
              continue
            }
            if (typeof freshImg.decode === 'function') {
              try { await freshImg.decode() } catch { /* ignore */ }
            }

            const cs = window.getComputedStyle(img)
            const fit = cs.objectFit
            let dx = x, dy = y, dw = w, dh = h
            if (fit === 'contain' || fit === 'scale-down') {
              const natRatio = freshImg.naturalWidth / freshImg.naturalHeight
              const boxRatio = w / h
              if (natRatio > boxRatio) {
                dh = w / natRatio
                dy = y + (h - dh) / 2
              } else {
                dw = h * natRatio
                dx = x + (w - dw) / 2
              }
            }
            // Use 9-arg form to explicitly specify source rect
            ctx.drawImage(
              freshImg,
              0, 0, freshImg.naturalWidth, freshImg.naturalHeight,
              dx, dy, dw, dh,
            )
            drawn++
          }
          console.log(`    [6.${i}.overlay] drew ${drawn}/${sourceImgs.length} images manually`)
        } catch (e) {
          console.warn(`    [6.${i}.overlay] failed:`, e)
        }

        // Downscale canvas to exact PDF page size so jsPDF doesn't have to
        // (some versions don't scale via the w/h params correctly).
        const targetCanvas = document.createElement('canvas')
        targetCanvas.width = SLIDE_W
        targetCanvas.height = SLIDE_H
        const targetCtx = targetCanvas.getContext('2d')
        targetCtx.imageSmoothingEnabled = true
        targetCtx.imageSmoothingQuality = 'high'
        targetCtx.fillStyle = '#f4f6f9'
        targetCtx.fillRect(0, 0, SLIDE_W, SLIDE_H)
        targetCtx.drawImage(canvas, 0, 0, SLIDE_W, SLIDE_H)
        const img = targetCanvas.toDataURL('image/jpeg', 0.92)
        if (i > 0) pdf.addPage([SLIDE_W, SLIDE_H], 'landscape')
        pdf.addImage(img, 'JPEG', 0, 0, SLIDE_W, SLIDE_H)

        // Add clickable links: iterate <a href> in this slide and add PDF
        // link annotations at the same positions.
        try {
          const slideRectForLinks = el.getBoundingClientRect()
          const anchors = el.querySelectorAll('a[href]')
          let linksAdded = 0
          anchors.forEach((a) => {
            const href = a.getAttribute('href')
            if (!href || href.startsWith('#')) return
            const r = a.getBoundingClientRect()
            if (r.width < 1 || r.height < 1) return
            // PDF page is in CSS px (1600 × 900). Slide is also 1600 × 900 CSS.
            // So PDF coords = position relative to slide top-left.
            const lx = r.left - slideRectForLinks.left
            const ly = r.top - slideRectForLinks.top
            pdf.link(lx, ly, r.width, r.height, { url: href })
            linksAdded++
          })
          if (linksAdded) console.log(`    [6.${i}.links] added ${linksAdded} clickable link(s)`)
        } catch (e) {
          console.warn(`    [6.${i}.links] failed:`, e)
        }

        const pct = Math.round(((i + 1) / slideRefs.length) * 100)
        setProgress(pct)
        const node = document.getElementById('pdf-export-progress')
        if (node) node.textContent = `${pct}%`
      }

      console.log('[7] PDF assembled — saving file')
      pdf.save('BITCoder-Deck-2026.pdf')
      console.groupEnd()
    } catch (err) {
      console.error('PDF export failed:', err)
      console.groupEnd()
      alert('PDF export gagal: ' + err.message)
    } finally {
      root.unmount()
      host.remove()
      document.getElementById('pdf-export-styles')?.remove()
      document.getElementById('pdf-export-overlay')?.remove()
      hostRef.current = null
      setBusy(false)
      setProgress(0)
    }
  }

  return (
    <button
      onClick={handleExport}
      disabled={busy}
      className="fixed top-4 right-24 z-40 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tosca text-[#fff] text-sm font-semibold border-2 border-[#0f1419] shadow-[3px_3px_0_0_#0f1419] hover:shadow-[4px_4px_0_0_#0f1419] hover:-translate-y-px active:shadow-[1px_1px_0_0_#0f1419] active:translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-wait"
      title="Export semua halaman ke 1 file PDF"
    >
      {busy ? (
        <>
          <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.3" strokeWidth="3" />
            <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
          Exporting {progress}%
        </>
      ) : (
        <>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="12" y1="18" x2="12" y2="12" />
            <polyline points="9 15 12 18 15 15" />
          </svg>
          Export PDF
        </>
      )}
    </button>
  )
}
