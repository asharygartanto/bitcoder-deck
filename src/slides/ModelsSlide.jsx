import { AnimatedTitle, AnimatedText, GradientBlob, Badge, StaggerContainer, StaggerItem } from '../components/PlayfulUI.jsx'
import { getColorClasses } from '../components/colorMap.js'
import { motion } from 'framer-motion'

const models = [
  {
    name: 'bitcoder-mini',
    tagline: 'Lightweight & Fast',
    colorKey: 'tosca',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    description: 'Model ringan untuk task cepat dan efisien. Unlimited token tersedia di sini.',
    features: ['Unlimited token', 'Respons tercepat', 'Ideal untuk coding harian'],
    unlimited: true,
  },
  {
    name: 'bitcoder-flash',
    tagline: 'Balanced & Smart',
    colorKey: 'blue',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    description: 'Keseimbangan sempurna antara kecepatan dan kualitas output.',
    features: ['Kualitas tinggi', 'Konteks lebih luas', 'Refactoring & debugging'],
    unlimited: false,
  },
  {
    name: 'bitcoder-jago',
    tagline: 'Powerful & Advanced',
    colorKey: 'purple',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    description: 'Model terkuat untuk task kompleks. Architecture, analysis & advanced coding.',
    features: ['Pemahaman mendalam', 'Architecture design', 'Complex problem solving'],
    unlimited: false,
  },
]

export default function ModelsSlide() {
  return (
    <div className="relative">
      <GradientBlob color="purple" size={350} x="80%" y="0%" />
      <GradientBlob color="tosca" size={250} x="0%" y="60%" />

      <div className="flex flex-col items-center text-center mb-10 gap-4">
        <Badge color="tosca">Models</Badge>
        <AnimatedTitle className="text-4xl md:text-5xl" delay={0.1}>
          Pilih <span className="text-tosca">Model</span>-nya
        </AnimatedTitle>
        <AnimatedText className="text-[#475569] text-base md:text-lg max-w-2xl leading-relaxed text-center" delay={0.2}>
          Tiga model AI dengan karakteristik berbeda untuk setiap kebutuhan
        </AnimatedText>
      </div>

      <StaggerContainer className="deck-grid-3" stagger={0.15}>
        {models.map((model) => {
          const c = getColorClasses(model.colorKey)
          return (
            <StaggerItem key={model.name}>
              <motion.div
                className="deck-card relative h-full min-h-[440px] flex flex-col overflow-hidden"
                whileHover={{ scale: 1.03, y: -6 }}
                transition={{ duration: 0.8 }}
              >
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${c.bar}`} />
                <div className={`w-16 h-16 rounded-2xl ${c.bg10} flex items-center justify-center ${c.text} mb-5`}>
                  {model.icon}
                </div>
                <h3 className="text-[#0f1419] font-heading font-bold text-2xl">{model.name}</h3>
                <p className={`${c.text} text-sm font-semibold mt-1`}>{model.tagline}</p>
                <p className="text-[#475569] text-base mt-4 flex-1 leading-[1.7]">{model.description}</p>
                <ul className="mt-5 space-y-2.5">
                  {model.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-[#475569] text-sm">
                      <span className={`w-2 h-2 rounded-full ${c.dot}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                {model.unlimited && (
                  <div className="mt-5 px-3 py-2 bg-tosca-10 border border-tosca-20 rounded-lg text-center">
                    <span className="text-tosca text-xs font-bold tracking-wider">UNLIMITED TOKEN</span>
                  </div>
                )}
              </motion.div>
            </StaggerItem>
          )
        })}
      </StaggerContainer>
    </div>
  )
}
