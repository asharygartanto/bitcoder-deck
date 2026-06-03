import { AnimatedTitle, AnimatedText, GradientBlob, Badge, StaggerContainer, StaggerItem } from '../components/PlayfulUI.jsx'
import { getColorClasses } from '../components/colorMap.js'
import { motion } from 'framer-motion'

const capabilities = [
  { label: 'Produktivitas membuat product', colorKey: 'tosca' },
  { label: 'Produktivitas bekerja via office tools', colorKey: 'blue' },
  { label: 'Otomasi dengan integrasi n8n', colorKey: 'purple' },
]

export default function IntegrationSlide() {
  return (
    <div className="relative">
      <GradientBlob color="purple" size={400} x="80%" y="-5%" />
      <GradientBlob color="orange" size={300} x="0%" y="50%" />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Badge color="purple">Integration</Badge>
          <AnimatedTitle className="text-4xl md:text-6xl leading-[1.1]" delay={0.1}>
            Otomasi &<br />
            <span className="text-tosca">Integrasi</span>
          </AnimatedTitle>
          <AnimatedText className="text-[#475569] text-lg md:text-xl leading-[1.8]" delay={0.3}>
            Kemampuan BITCoder dapat terintegrasi dengan automation system seperti{' '}
            <span className="text-[#0f1419] font-bold">n8n</span> — membuka kemungkinan tanpa batas
            untuk workflow automation.
          </AnimatedText>
        </div>

        <div>
          <StaggerContainer className="deck-stack-lg" stagger={0.15}>
            <StaggerItem>
              <motion.div
                className="deck-card flex items-center gap-8"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-10 flex items-center justify-center shrink-0 p-2.5">
                  <img src="/logo-n8n.png" alt="n8n" className="w-full h-full object-contain" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-[#0f1419] font-heading font-bold text-xl">n8n Integration</h3>
                  <p className="text-[#64748b] text-sm leading-[1.7]">Automation workflow builder — connect BITCoder dengan ribuan apps</p>
                </div>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <div className="deck-card-lg" style={{ background: '#f8fafc' }}>
                <h4 className="text-[#0f1419] text-base font-heading font-bold uppercase tracking-[0.08em] mb-6">
                  BITCoder saat ini menghadirkan
                </h4>
                <div className="space-y-5">
                  {capabilities.map((cap, i) => {
                    const c = getColorClasses(cap.colorKey)
                    return (
                      <motion.div
                        key={i}
                        className="deck-card-sm flex items-center gap-5"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.15 }}
                      >
                        <div className={`w-10 h-10 rounded-lg ${c.bg10} flex items-center justify-center shrink-0`}>
                          <span className={`w-2.5 h-2.5 rounded-full ${c.dot}`} />
                        </div>
                        <span className="text-[#0f1419] text-base font-medium">{cap.label}</span>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </div>
  )
}
