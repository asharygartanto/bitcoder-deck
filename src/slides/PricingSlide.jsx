import { AnimatedTitle, AnimatedText, GradientBlob, Badge, StaggerContainer, StaggerItem } from '../components/PlayfulUI.jsx'
import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Free',
    price: 'Free',
    period: '',
    weekly: null,
    saving: null,
    features: ['Mini — 10 reqs/day', 'Flash — 2 reqs/day', 'Jago — 0'],
    highlight: false,
  },
  {
    name: 'Starter',
    price: 'Rp 74.900',
    period: '/month',
    weekly: 'Rp 19.400 /week',
    saving: 'Save Rp 8.700/mo vs weekly',
    features: ['Mini — Unlimited', 'Flash — 30 reqs/day', 'Jago — 40 reqs/day', 'Unlimited tokens', 'Studio Storage 2GB'],
    highlight: false,
  },
  {
    name: 'Explorer',
    price: 'Rp 199.000',
    period: '/month',
    weekly: 'Rp 53.900 /week',
    saving: 'Save Rp 16.600/mo vs weekly',
    features: ['Mini — Unlimited', 'Flash — 100 reqs/day', 'Jago — 150 reqs/day', 'Unlimited tokens', 'Studio Storage 5GB'],
    highlight: false,
  },
  {
    name: 'Pro',
    price: 'Rp 299.000',
    period: '/month',
    weekly: 'Rp 76.900 /week',
    saving: 'Save Rp 8.600/mo vs weekly',
    features: ['Mini — Unlimited', 'Flash — 200 reqs/day', 'Jago — 300 reqs/day', 'Unlimited tokens', 'Studio Storage 10GB'],
    highlight: true,
  },
  {
    name: 'Business',
    price: 'Call',
    period: '',
    weekly: null,
    saving: 'Volume pricing · SLA',
    features: ['Mini — Call', 'Flash — Call', 'Jago — Call', 'Volume pricing', 'SLA · Invoicing'],
    highlight: false,
  },
]

export default function PricingSlide() {
  return (
    <div className="relative">
      <GradientBlob color="tosca" size={350} x="50%" y="-15%" />

      <div className="flex flex-col items-center text-center mb-10 gap-4">
        <Badge color="tosca">Pricing</Badge>
        <AnimatedTitle className="text-4xl md:text-5xl" delay={0.1}>
          Harga <span className="text-tosca">Termurah</span>
        </AnimatedTitle>
        <AnimatedText className="text-[#475569] text-base md:text-lg max-w-2xl leading-relaxed text-center" delay={0.2}>
          Tersedia paket mingguan, bulanan &amp; tahunan — termasuk unlimited tokens
        </AnimatedText>
      </div>

      <StaggerContainer className="deck-grid-5" stagger={0.08}>
        {plans.map((plan) => (
          <StaggerItem key={plan.name}>
            <motion.div
              className={`deck-card relative h-full min-h-[440px] flex flex-col ${
                plan.highlight
                  ? '!border-purple shadow-[0_12px_40px_-10px_rgba(168,85,247,0.4)]'
                  : ''
              }`}
              whileHover={{ scale: 1.03, y: -6 }}
              transition={{ duration: 0.8 }}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 bg-purple text-[#fff] text-xs font-bold rounded-full shadow-[0_6px_16px_-3px_rgba(168,85,247,0.5)]">
                  POPULAR
                </span>
              )}

              <h3 className="text-[#0f1419] font-heading font-bold text-xl">{plan.name}</h3>

              <div className="mt-5 flex flex-col gap-3">
                {plan.weekly && (
                  <div>
                    <div className="flex items-baseline gap-1 flex-wrap">
                      <span className="font-heading font-bold text-2xl tracking-tight text-tosca">{plan.weekly.replace(' /week', '')}</span>
                      <span className="text-[#64748b] text-sm font-medium">/week</span>
                    </div>
                  </div>
                )}
                <div className={plan.weekly ? 'border-t border-[#e2e8f0] pt-3' : ''}>
                  <div className="flex items-baseline gap-1 flex-wrap">
                    <span className={`font-heading font-bold text-2xl tracking-tight ${plan.highlight ? 'text-purple' : 'text-[#0f1419]'}`}>{plan.price}</span>
                    {plan.period && <span className="text-[#64748b] text-sm font-medium">{plan.period}</span>}
                  </div>
                </div>
                {plan.saving && (
                  <p className="text-tosca text-xs font-semibold leading-snug">{plan.saving}</p>
                )}
              </div>

              <ul className="mt-5 space-y-2.5 flex-1">
                {plan.features.map((f, i) => (
                  <li key={i} className="text-[#475569] text-sm flex items-start gap-2 leading-relaxed">
                    <span className="mt-0.5 flex w-4 h-4 shrink-0 items-center justify-center rounded-full bg-tosca-10">
                      <svg className="w-2.5 h-2.5 text-tosca" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>

    </div>
  )
}
