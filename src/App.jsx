import { motion, AnimatePresence } from 'framer-motion'
import { useState, useCallback, useEffect } from 'react'
import SlideWrapper from './components/SlideWrapper.jsx'
import ExportPDF from './components/ExportPDF.jsx'
import TitleSlide from './slides/TitleSlide.jsx'
import AboutBitSlide from './slides/AboutBitSlide.jsx'
import VisionMissionSlide from './slides/VisionMissionSlide.jsx'
import PricingSlide from './slides/PricingSlide.jsx'
import ModelsSlide from './slides/ModelsSlide.jsx'
import StudioSlide from './slides/StudioSlide.jsx'
import ExtensionsSlide from './slides/ExtensionsSlide.jsx'
import IntegrationSlide from './slides/IntegrationSlide.jsx'
import PixelBitSlide from './slides/PixelBitSlide.jsx'
import PixelBitBusinessSlide from './slides/PixelBitBusinessSlide.jsx'
import ConclusionSlide from './slides/ConclusionSlide.jsx'

const slides = [
  TitleSlide,
  AboutBitSlide,
  VisionMissionSlide,
  PricingSlide,
  ModelsSlide,
  StudioSlide,
  ExtensionsSlide,
  IntegrationSlide,
  PixelBitSlide,
  PixelBitBusinessSlide,
  ConclusionSlide,
]

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
    scale: 0.95,
  }),
}

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(1)

  const goNext = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1)
      setCurrentSlide((prev) => prev + 1)
    }
  }, [currentSlide])

  const goPrev = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1)
      setCurrentSlide((prev) => prev - 1)
    }
  }, [currentSlide])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault()
        goNext()
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        goPrev()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goNext, goPrev])

  const handleTouch = useCallback(() => {
    let startX = 0
    return {
      onTouchStart: (e) => { startX = e.touches[0].clientX },
      onTouchEnd: (e) => {
        const diff = startX - e.changedTouches[0].clientX
        if (Math.abs(diff) > 50) {
          diff > 0 ? goNext() : goPrev()
        }
      }
    }
  }, [goNext, goPrev])

  const SlideComponent = slides[currentSlide]

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      style={{ background: 'var(--color-background)' }}
      {...handleTouch()}
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid opacity-70" />
        <div className="absolute top-[-25%] right-[-15%] w-[700px] h-[700px] rounded-full bg-tosca/15 blur-[140px]" />
        <div className="absolute bottom-[-25%] left-[-15%] w-[600px] h-[600px] rounded-full bg-purple/12 blur-[140px]" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-orange/8 blur-[120px]" />
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-10"
        >
          <SlideWrapper>
            <SlideComponent />
          </SlideWrapper>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-2 py-2 rounded-full bg-[#fff]/90 backdrop-blur-xl border border-[#e2e8f0] shadow-[0_8px_30px_-8px_rgba(15,20,25,0.15)]">
        <button
          onClick={goPrev}
          disabled={currentSlide === 0}
          className="w-9 h-9 rounded-full bg-[#f4f6f9] border border-[#e2e8f0] flex items-center justify-center text-[#475569] hover:bg-tosca/15 hover:border-tosca/40 hover:text-tosca transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>

        <div className="flex items-center gap-1.5 px-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentSlide ? 1 : -1)
                setCurrentSlide(i)
              }}
              className={`rounded-full transition-all duration-300 ${
                i === currentSlide
                  ? 'w-7 h-2 bg-tosca shadow-[0_0_12px_rgba(0,184,148,0.5)]'
                  : 'w-2 h-2 bg-[#cbd5e1] hover:bg-[#94a3b8]'
              }`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          disabled={currentSlide === slides.length - 1}
          className="w-9 h-9 rounded-full bg-[#f4f6f9] border border-[#e2e8f0] flex items-center justify-center text-[#475569] hover:bg-tosca/15 hover:border-tosca/40 hover:text-tosca transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>

      <div className="absolute top-4 right-6 z-30 px-3 py-1 rounded-full bg-[#fff]/80 backdrop-blur-md border border-[#e2e8f0] text-[#64748b] text-xs font-mono">
        <span className="text-tosca font-semibold">{String(currentSlide + 1).padStart(2, '0')}</span>
        <span className="text-white/20 mx-1">/</span>
        <span>{String(slides.length).padStart(2, '0')}</span>
      </div>

      <ExportPDF />
    </div>
  )
}

export default App
