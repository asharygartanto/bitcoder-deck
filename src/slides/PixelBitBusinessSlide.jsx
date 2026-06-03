import { AnimatedText, GradientBlob, Badge, StaggerContainer, StaggerItem } from '../components/PlayfulUI.jsx'
import { motion } from 'framer-motion'

const items = [
  {
    title: 'Token / Credit',
    sub: 'Personal Use',
    desc: 'Top up credit sesuai kebutuhan — beli token saat dibutuhkan, gunakan kapan saja.',
    colorKey: 'tosca',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" d="M12 7v10M9 10h4.5a1.5 1.5 0 110 3H10a1.5 1.5 0 100 3h5" />
      </svg>
    ),
  },
  {
    title: 'Pay as You Go',
    sub: 'Credit Card Billing',
    desc: 'Bayar sesuai pemakaian via credit card billing — fleksibel untuk skala kecil hingga besar.',
    colorKey: 'blue',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <rect x="2.5" y="5.5" width="19" height="13" rx="2" />
        <path strokeLinecap="round" d="M2.5 10h19M6 15h4" />
      </svg>
    ),
  },
  {
    title: 'Bagi Hasil Studio',
    sub: 'Revenue Sharing',
    desc: 'Skema kemitraan untuk studio — bagi hasil dari setiap karya yang diproduksi bersama.',
    colorKey: 'purple',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <circle cx="8" cy="8" r="3" />
        <circle cx="16" cy="16" r="3" />
        <path strokeLinecap="round" d="M11 8h6a3 3 0 013 3v2M13 16H7a3 3 0 01-3-3v-2" />
      </svg>
    ),
    link: 'https://drive.google.com/file/d/1Eqo7XUnIm5I9yeGQXcTEVLw1_oKQoDbC/view?usp=sharing',
    linkLabel: 'Lihat Detail Skema',
  },
]

export default function PixelBitBusinessSlide() {
  return (
    <div className="relative">
      <GradientBlob color="pink" size={400} x="-5%" y="-10%" />
      <GradientBlob color="purple" size={350} x="75%" y="55%" />

      <div className="flex flex-col items-center text-center mb-8 gap-4">
        <Badge color="pink">Business Model</Badge>
        <motion.div
          className="flex items-center justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative inline-flex">
            <div className="absolute inset-0 -m-4 rounded-full bg-pink/20 blur-2xl pointer-events-none" />
            <img
              src="/logo-pixelbit.png"
              alt="PixelBit"
              className="relative h-12 md:h-16 w-auto object-contain"
            />
          </div>
        </motion.div>
        <AnimatedText className="text-[#475569] text-base md:text-lg max-w-2xl leading-relaxed text-center" delay={0.2}>
          Tiga skema monetisasi untuk kebutuhan personal, bisnis, hingga kemitraan - Bagi Hasil studio.
        </AnimatedText>
      </div>

      <StaggerContainer className="deck-grid-3" stagger={0.12}>
        {items.map((it, i) => (
          <StaggerItem key={it.title}>
            <motion.div
              className="deck-card h-full flex flex-col gap-4 relative overflow-hidden"
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                  it.colorKey === 'tosca' ? 'bg-tosca-10 text-tosca' :
                  it.colorKey === 'blue'  ? 'bg-blue-10 text-blue' :
                  'bg-purple-10 text-purple'
                }`}>
                  {it.icon}
                </div>
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#f4f6f9] border border-[#e2e8f0] text-[#64748b] text-sm font-heading font-bold">
                  {i + 1}
                </div>
              </div>
              <div>
                <h3 className="text-[#0f1419] font-heading font-bold text-xl">{it.title}</h3>
                <p className={`text-xs font-semibold mt-1 ${
                  it.colorKey === 'tosca' ? 'text-tosca' :
                  it.colorKey === 'blue'  ? 'text-blue' :
                  'text-purple'
                }`}>{it.sub}</p>
              </div>
              <p className="text-[#475569] text-sm leading-[1.7] flex-1">{it.desc}</p>
              {it.link && (
                <a
                  href={it.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-sm px-4 py-2 bg-purple-10 text-purple font-semibold rounded-lg border border-purple-20 hover:bg-purple-20 transition-all"
                >
                  {it.linkLabel}
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              )}
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  )
}
