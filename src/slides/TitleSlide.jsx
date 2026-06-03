import { motion } from 'framer-motion'
import { AnimatedText, FloatingShape, GradientBlob, Badge } from '../components/PlayfulUI.jsx'

export default function TitleSlide() {
  return (
    <div className="relative flex flex-col items-center justify-center text-center gap-6">
      <GradientBlob color="tosca" size={500} x="30%" y="10%" />
      <GradientBlob color="purple" size={400} x="10%" y="50%" />

      <FloatingShape
        className="absolute top-8 right-[15%] w-16 h-16 rounded-xl bg-tosca-10 border border-tosca-20"
        delay={0}
        duration={5}
      />
      <FloatingShape
        className="absolute bottom-20 left-[10%] w-12 h-12 rounded-full bg-purple-10 border border-purple-20"
        delay={1}
        duration={7}
      />
      <FloatingShape
        className="absolute top-20 left-[20%] w-8 h-8 rounded-lg bg-pink-10 border border-pink-20 rotate-45"
        delay={0.5}
        duration={4}
      />

      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 -m-5 rounded-full bg-tosca/25 blur-3xl animate-pulse-glow pointer-events-none" />
        <img
          src="/logo-bitcoder.png"
          alt="BITCoder"
          className="relative w-10 h-10 md:w-[380px] md:h-[380px] object-contain mx-auto"
        />
      </motion.div>

      <Badge color="tosca">Product by Bale Inovasi Teknologi</Badge>

      <AnimatedText className="text-xl md:text-2xl text-[#475569] max-w-3xl leading-relaxed font-medium" delay={0.4}>
        Unlimited AI Coding Assistant — Code Smarter, Ship Faster
      </AnimatedText>

      <motion.div
        className="flex flex-wrap items-center justify-center gap-4 mt-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <a
          href="https://bitcoder.id"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-pop inline-flex items-center gap-2 px-6 py-3 bg-tosca text-[#fff] font-heading font-semibold text-base"
        >
          bitcoder.id
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fff] text-[#475569] text-sm font-medium border border-[#e2e8f0]">
          <span className="w-1.5 h-1.5 rounded-full bg-tosca" />
          Presentation Deck · 2026
        </span>
      </motion.div>
    </div>
  )
}
