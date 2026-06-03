import { AnimatedText, GradientBlob, Badge, FloatingShape, StaggerContainer, StaggerItem } from '../components/PlayfulUI.jsx'
import { getColorClasses } from '../components/colorMap.js'
import { motion } from 'framer-motion'

const features = [
  {
    title: 'Story Driven Sequences',
    desc: 'Buat cerita animasi secara sequential — step by step yang mudah',
    colorKey: 'pink',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
      </svg>
    ),
  },
  {
    title: 'AI Coach di Setiap Step',
    desc: 'Dibantu oleh bitcoder-mini di setiap tahap pembuatan',
    colorKey: 'tosca',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    title: 'Character Flexible',
    desc: 'Pakai character suggest atau upload character sendiri',
    colorKey: 'purple',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: 'Scene-based Input',
    desc: 'Definisikan lokasi dan setting untuk setiap adegan',
    colorKey: 'blue',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
]

export default function PixelBitSlide() {
  return (
    <div className="relative">
      <GradientBlob color="pink" size={400} x="60%" y="-5%" />
      <GradientBlob color="purple" size={300} x="-5%" y="40%" />

      <FloatingShape
        className="absolute top-4 right-[10%] w-10 h-10 rounded-lg bg-pink-10 border border-pink-20 rotate-12"
        delay={0}
        duration={4}
      />
      <FloatingShape
        className="absolute bottom-10 right-[30%] w-8 h-8 rounded-full bg-purple-10 border border-purple-20"
        delay={1}
        duration={6}
      />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Badge color="pink">Coming Soon</Badge>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 -m-10 rounded-full bg-pink/20 blur-3xl pointer-events-none" />
            <img
              src="/logo-pixelbit.png"
              alt="PixelBit"
              className="relative w-64 h-64 md:w-80 md:h-80 object-contain"
            />
          </motion.div>
          <AnimatedText className="text-[#475569] text-lg md:text-xl leading-[1.8]" delay={0.3}>
            Tidak cukup di ranah textual — kami merambah dunia{' '}
            <span className="text-pink font-bold">animasi & movie</span> dengan product baru ini.
          </AnimatedText>
          <AnimatedText className="text-[#64748b] text-base italic" delay={0.4}>
            Saat ini masih dalam tahap development.
          </AnimatedText>
        </div>

        <div>
          <StaggerContainer className="space-y-8" stagger={0.12}>
            {features.map((item, i) => {
              const c = getColorClasses(item.colorKey)
              return (
                <StaggerItem key={i}>
                  <motion.div
                    className="flex items-start gap-7 bg-[#fff] border border-[#e2e8f0] rounded-xl p-9 md:p-10 shadow-[0_2px_12px_-4px_rgba(15,20,25,0.06)]"
                    whileHover={{ scale: 1.02, x: 4 }}
                  >
                    <div className={`w-12 h-12 rounded-xl ${c.bg10} flex items-center justify-center ${c.text} shrink-0`}>
                      {item.icon}
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-[#0f1419] font-semibold text-base">{item.title}</h4>
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
