import { AnimatedTitle, AnimatedText, GradientBlob, Badge, StaggerContainer, StaggerItem } from '../components/PlayfulUI.jsx'
import { getColorClasses } from '../components/colorMap.js'
import { motion } from 'framer-motion'

const items = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: 'Mobile First',
    desc: 'Akses dari HP kapan saja, di mana saja',
    colorKey: 'tosca',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    title: 'Cloud Workspace',
    desc: 'Space dan storage cloud pribadi untuk setiap user',
    colorKey: 'blue',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: 'Full Coding Environment',
    desc: 'Chat-based coding dengan AI yang memahami konteks project',
    colorKey: 'purple',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    title: 'No Install Required',
    desc: 'Langsung di browser, tanpa install apapun',
    colorKey: 'pink',
  },
]

export default function StudioSlide() {
  return (
    <div className="relative">
      <GradientBlob color="blue" size={400} x="70%" y="-10%" />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Badge color="blue">BITCoder Studio</Badge>
          <AnimatedTitle className="text-4xl md:text-6xl leading-[1.1]" delay={0.1}>
            Vibe Coding<br />
            <span className="text-tosca">Dari Mana Saja</span>
          </AnimatedTitle>
          <AnimatedText className="text-[#475569] text-lg md:text-xl leading-[1.8]" delay={0.3}>
            Tidak perlu laptop. Cukup <span className="text-[#0f1419] font-bold">handphone dalam genggaman</span> dan internet —
            kamu sudah bisa membuat product sendiri.
          </AnimatedText>
          <AnimatedText className="text-[#64748b] text-base leading-relaxed" delay={0.4}>
            <span className="text-tosca font-semibold">chat.bitcoder.id</span> memberikan cloud workspace dan storage pribadi untuk setiap user.
          </AnimatedText>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="https://chat.bitcoder.id"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pop inline-flex items-center gap-2 px-6 py-3 bg-tosca text-[#fff] font-heading font-semibold text-base"
            >
              chat.bitcoder.id
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </motion.div>
        </div>

        <div>
          <StaggerContainer className="deck-stack-lg" stagger={0.12}>
            {items.map((item, i) => {
              const c = getColorClasses(item.colorKey)
              return (
                <StaggerItem key={i}>
                  <motion.div
                    className="deck-card flex items-center gap-7"
                    whileHover={{ scale: 1.02, x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`w-14 h-14 rounded-xl ${c.bg10} flex items-center justify-center ${c.text} shrink-0`}>
                      {item.icon}
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-[#0f1419] font-semibold text-lg">{item.title}</h4>
                      <p className="text-[#64748b] text-sm leading-[1.7]">{item.desc}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </div>
    </div>
  )
}
