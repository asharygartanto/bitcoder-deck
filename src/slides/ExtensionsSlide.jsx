import { AnimatedTitle, AnimatedText, GradientBlob, Badge, StaggerContainer, StaggerItem } from '../components/PlayfulUI.jsx'
import { getColorClasses } from '../components/colorMap.js'
import { motion } from 'framer-motion'

const extensions = [
  {
    name: 'BITCoder VS Code Extension',
    desc: 'Integrasi langsung di Visual Studio Code — AI assistant di editor favorit kamu.',
    tags: [
      { label: 'VS Code', variant: 'brand-blue' },
      { label: 'IDE', variant: 'default' },
    ],
    colorKey: 'blue',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.583 2.322l-4.93 3.818L7.07 2.084 2.5 5.53v12.94l4.57 3.445 5.583-4.06 4.93 3.82 4.417-3.24V5.562l-4.417-3.24zM7.07 15.95V8.05l5.013 3.95L7.07 15.95zm9.513.722l-3.535-2.672 3.535-2.672v5.344z"/>
      </svg>
    ),
  },
  {
    name: 'BITCoder AI Office',
    desc: 'Chrome extension untuk Google Docs — bantu pekerjaan administratif dengan AI. Request data, analisa, hingga cross document (Sheet → Slide).',
    tags: [
      { label: 'Chrome', variant: 'brand-orange' },
      { label: 'Google Docs', variant: 'brand-green' },
      { label: 'New!', variant: 'new' },
    ],
    colorKey: 'tosca',
    iconImage: '/logo.png',
    isNew: true,
  },
]

const tagStyles = {
  default: 'bg-[#f1f5f9] text-[#475569] border-[#cbd5e1]',
  'brand-blue': 'bg-[#dbeafe] text-[#1d4ed8] border-[#93c5fd]',
  'brand-orange': 'bg-[#ffedd5] text-[#c2410c] border-[#fdba74]',
  'brand-green': 'bg-[#d1fae5] text-[#047857] border-[#6ee7b7]',
  new: 'bg-tosca text-[#fff] border-tosca shadow-[0_4px_12px_-2px_rgba(0,184,148,0.5)]',
}

export default function ExtensionsSlide() {
  return (
    <div className="relative">
      <GradientBlob color="tosca" size={350} x="10%" y="-10%" />
      <GradientBlob color="pink" size={250} x="70%" y="60%" />

      <div className="flex flex-col items-center text-center mb-10 gap-4">
        <Badge color="pink">Extensions</Badge>
        <AnimatedTitle className="text-4xl md:text-5xl" delay={0.1}>
          Masuk ke <span className="text-tosca">Daily Tools</span> Kamu
        </AnimatedTitle>
        <AnimatedText className="text-[#475569] text-base md:text-lg max-w-2xl leading-relaxed text-center" delay={0.2}>
          BITCoder hadir di tools yang sudah kamu gunakan sehari-hari
        </AnimatedText>
      </div>

      <StaggerContainer className="deck-grid-2" stagger={0.2}>
        {extensions.map((ext) => {
          const c = getColorClasses(ext.colorKey)
          return (
            <StaggerItem key={ext.name}>
              <motion.div
                className="deck-card-lg relative h-full min-h-[340px] overflow-hidden"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.8 }}
              >
                {ext.isNew && (
                  <div className="absolute top-5 right-5">
                    <span className="px-3 py-1.5 bg-tosca text-[#fff] text-xs font-bold rounded-full shadow-[0_4px_12px_-2px_rgba(0,184,148,0.5)] animate-pulse">
                      NEW RELEASE
                    </span>
                  </div>
                )}

                <div className={`w-16 h-16 rounded-2xl ${c.bg10} border ${c.border20} flex items-center justify-center ${c.text} mb-6 p-2.5`}>
                  {ext.iconImage ? (
                    <img src={ext.iconImage} alt={ext.name} className="w-full h-full object-contain" />
                  ) : (
                    ext.icon
                  )}
                </div>

                <h3 className="text-[#0f1419] font-heading font-bold text-2xl">{ext.name}</h3>
                <p className="text-[#475569] text-base mt-4 leading-[1.8]">{ext.desc}</p>

                <div className="flex flex-wrap gap-2.5 mt-6">
                  {ext.tags.map((tag) => (
                    <span key={tag.label} className={`px-3.5 py-1.5 text-xs font-bold rounded-full border ${tagStyles[tag.variant] || tagStyles.default}`}>
                      {tag.label}
                    </span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          )
        })}
      </StaggerContainer>
    </div>
  )
}
