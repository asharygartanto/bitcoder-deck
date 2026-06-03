import { AnimatedTitle, AnimatedText, AnimatedCard, GradientBlob, Badge, StaggerContainer, StaggerItem } from '../components/PlayfulUI.jsx'
import { motion } from 'framer-motion'

const products = [
  { name: 'BITCoder', url: 'https://bitcoder.id', logo: '/logo-bitcoder.png', color: 'tosca' },
  { name: 'Squadrones', url: 'https://squadrones.ai', logo: '/logo-squadrones.svg', color: 'blue' },
  { name: 'Tanggap Bencana ID', url: 'https://tanggapbencana.id', logo: '/logo-tanggapbencana.svg', color: 'pink' },
  { name: 'Samalas 3D', url: 'https://www.samalas-3d.com', logo: '/logo-samalas3d.png', color: 'purple' },
]

export default function AboutBitSlide() {
  return (
    <div className="relative space-y-10">
      <GradientBlob color="purple" size={400} x="60%" y="-10%" />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Badge color="purple">About</Badge>
          <AnimatedTitle className="text-4xl md:text-6xl leading-[1.1]" delay={0.1}>
            Dari Lombok,<br />
            <span className="text-tosca">Untuk Dunia</span>
          </AnimatedTitle>
          <AnimatedText className="text-[#475569] text-lg md:text-xl leading-[1.8]" delay={0.3}>
            <strong className="text-[#0f1419]">PT. Bale Inovasi Teknologi (BIT)</strong> berbasis di Lombok, Indonesia.
            Bermula dari komunitas teknologi dengan mimpi menciptakan produk teknologi berkelas dunia.
          </AnimatedText>
          <AnimatedText className="text-[#475569] text-xl md:text-2xl font-semibold leading-relaxed" delay={0.4}>
            <strong className="text-[#0f1419]">B</strong>ale <strong className="text-[#0f1419]">I</strong>novasi <strong className="text-[#0f1419]">T</strong>eknologi = <strong className="text-tosca">BIT</strong>
          </AnimatedText>
          <motion.div
            className="flex flex-wrap gap-3 pt-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a href="http://baleinovasiteknologi.com/" target="_blank" rel="noopener noreferrer"
              className="text-sm px-4 py-2 bg-[#f4f6f9] text-[#475569] rounded-lg border border-[#e2e8f0] hover:text-[#0f1419] hover:border-[#cbd5e1] transition-all">
              baleinovasiteknologi.com
            </a>
          </motion.div>
        </div>

        <div>
          <StaggerContainer className="space-y-10" stagger={0.15}>
            <StaggerItem>
              <AnimatedCard className="flex items-start gap-5" delay={0}>
                <div className="w-16 h-16 rounded-xl bg-tosca-10 border border-tosca-20 flex items-center justify-center shrink-0 p-2.5">
                  <motion.img
                    src="/logo.png"
                    alt="BIT"
                    className="w-full h-full object-contain"
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                </div>
                <div className="space-y-3 p-2">
                  <h3 className="text-[#0f1419] font-heading font-semibold text-xl">Filosofi Logo BIT</h3>
                  <ul className="space-y-2.5 text-[#475569] text-base leading-relaxed">
                    <li className="flex items-center gap-2.5">
                      <span className="w-3 h-3 rounded-sm bg-tosca shrink-0" />
                      Kotak = <span className="text-tosca font-semibold">Proses</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-purple shrink-0 ml-0.5" />
                      Bulatan Kecil = <span className="text-purple font-semibold">Input</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-3.5 h-3.5 rounded-full bg-pink shrink-0" />
                      Bulatan Besar = <span className="text-pink font-semibold">Output</span>
                    </li>
                  </ul>
                  <p className="text-[#0f1419] text-base font-bold italic leading-relaxed pt-3 border-t border-[#e2e8f0]">
                    "Dengan input kecil, akan menghasilkan impact besar"
                  </p>
                </div>
              </AnimatedCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-base md:text-lg font-bold tracking-[0.12em] uppercase text-tosca">Our Products</span>
          <span className="flex-1 h-px bg-[#e2e8f0]" />
        </div>
        <StaggerContainer className="deck-grid-4" stagger={0.1}>
          {products.map((p) => (
            <StaggerItem key={p.name}>
              <motion.a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="deck-card-sm flex items-center gap-3 hover:border-tosca/40 transition-colors"
                whileHover={{ scale: 1.03, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-14 h-14 rounded-lg bg-[#f4f6f9] border border-[#e2e8f0] flex items-center justify-center shrink-0 overflow-hidden p-0.5">
                  <img src={p.logo} alt={p.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-[#0f1419] font-heading font-semibold text-base">{p.name}</span>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  )
}
