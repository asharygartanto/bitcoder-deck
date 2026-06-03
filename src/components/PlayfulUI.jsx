import { motion } from 'framer-motion'

export function FloatingShape({ className, delay = 0, duration = 6, children }) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  )
}

export function GradientBlob({ color = 'tosca', size = 300, x = 0, y = 0, opacity = 0.08 }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        background: `radial-gradient(circle, var(--color-${color}) ${opacity * 2}, transparent 70%)`,
        filter: 'blur(80px)',
      }}
    />
  )
}

export function AnimatedTitle({ children, className = '', delay = 0 }) {
  return (
    <motion.h1
      className={`font-heading font-bold text-white ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.h1>
  )
}

export function AnimatedText({ children, className = '', delay = 0 }) {
  return (
    <motion.p
      className={`font-body ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.p>
  )
}

export function AnimatedCard({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={`deck-card-lg ${className}`}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.02, borderColor: 'rgba(0, 184, 148, 0.5)', boxShadow: '0 16px 40px -12px rgba(0, 184, 148, 0.25)' }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({ children, className = '', stagger = 0.1 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function Badge({ children, color = 'tosca' }) {
  const colors = {
    tosca: 'bg-tosca-10 text-tosca border-tosca-20 shadow-[0_0_20px_-5px_rgba(0,212,170,0.4)]',
    purple: 'bg-purple-10 text-purple border-purple-20 shadow-[0_0_20px_-5px_rgba(168,85,247,0.4)]',
    pink: 'bg-pink-10 text-pink border-pink-20 shadow-[0_0_20px_-5px_rgba(236,72,153,0.4)]',
    blue: 'bg-blue-10 text-blue border-blue-20 shadow-[0_0_20px_-5px_rgba(59,130,246,0.4)]',
    orange: 'bg-orange-10 text-orange border-orange',
    yellow: 'bg-yellow-10 text-yellow border-yellow',
  }
  const dotColors = {
    tosca: 'bg-tosca',
    purple: 'bg-purple',
    pink: 'bg-pink',
    blue: 'bg-blue',
    orange: 'bg-orange',
    yellow: 'bg-yellow',
  }
  return (
    <span className={`inline-flex items-center gap-2.5 px-4 py-2 text-sm font-semibold rounded-full border ${colors[color] || colors.tosca}`}>
      <span className={`w-2.5 h-2.5 rounded-full ${dotColors[color] || dotColors.tosca} animate-pulse`} />
      {children}
    </span>
  )
}
