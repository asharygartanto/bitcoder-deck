import { AnimatedTitle, AnimatedText, GradientBlob, Badge, FloatingShape } from '../components/PlayfulUI.jsx'
import { getColorClasses } from '../components/colorMap.js'
import { motion } from 'framer-motion'

const cards = [
  { label: 'Product', sub: 'Build & Ship', colorKey: 'tosca' },
  { label: 'Office', sub: 'Work Smarter', colorKey: 'blue' },
  { label: 'Automation', sub: 'Connect & Flow', colorKey: 'purple' },
  { label: 'Next: PixelBIT', sub: 'Video / Movie', colorKey: 'pink' },
]

export default function ConclusionSlide() {
  return (
    <div className="relative flex flex-col items-center justify-center text-center gap-2">
      <GradientBlob color="tosca" size={500} x="30%" y="0%" />
      <GradientBlob color="purple" size={400} x="60%" y="40%" />

      <FloatingShape
        className="absolute top-12 left-[15%] w-14 h-14 rounded-xl bg-tosca-10 border border-tosca-20"
        delay={0.8}
        duration={5}
      />
      <FloatingShape
        className="absolute bottom-16 right-[15%] w-10 h-10 rounded-full bg-purple-10 border border-purple-20"
        delay={1.5}
        duration={6}
      />
      <FloatingShape
        className="absolute top-24 right-[25%] w-8 h-8 rounded-lg bg-pink-10 border border-pink-20 rotate-45"
        delay={0.8}
        duration={4}
      />

      <Badge color="tosca">Conclusion</Badge>

      <AnimatedTitle className="text-2xl md:text-3xl lg:text-4xl leading-tight max-w-3xl" delay={0.1}>
        Dengan <span className="text-tosca">BITCoder</span>,<br />
        Siapapun Bisa<br />
        <span className="bg-gradient-to-r from-tosca via-purple to-pink bg-clip-text text-transparent">Membuat Karya</span>
      </AnimatedTitle>

      <AnimatedText className="text-[#475569] text-lg md:text-xl max-w-3xl leading-[1.8]" delay={0.3}>
        Dari coding product, bekerja dengan office tools, otomasi workflow, hingga membuat animasi —
        semua dimulai dari input kecil yang menghasilkan impact besar.
      </AnimatedText>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-2 max-w-5xl w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        {cards.map((item, i) => {
          const c = getColorClasses(item.colorKey)
          return (
            <motion.div
              key={i}
              className="bg-[#fff] border border-[#e2e8f0] rounded-xl p-8 md:p-10 text-center shadow-[0_4px_20px_-6px_rgba(15,20,25,0.06)]"
              whileHover={{ scale: 1.05, y: -4 }}
            >
              <span className={`w-3.5 h-3.5 rounded-full ${c.dot} inline-block mb-3`} />
              <p className="text-[#0f1419] font-heading font-bold text-base md:text-lg">{item.label}</p>
              <p className="text-[#64748b] text-sm mt-1">{item.sub}</p>
            </motion.div>
          )
        })}
      </motion.div>

      <motion.div
        className="flex flex-col items-center gap-1.5 mt-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <a
          href="https://bitcoder.id"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-pop inline-flex items-center gap-2 px-8 py-3.5 bg-tosca text-[#fff] font-heading font-bold text-lg"
        >
          Mulai Sekarang — bitcoder.id
        </a>
        <div className="flex items-center gap-4 mt-1">
          <a
            href="http://baleinovasiteknologi.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#475569] text-sm font-medium hover:text-tosca transition-all"
          >
            Bale Inovasi Teknologi
          </a>
        </div>
        <p className="text-[#94a3b8] text-xs mt-1">
          © 2026 Bale Inovasi Teknologi. All rights reserved.
        </p>
      </motion.div>
    </div>
  )
}
