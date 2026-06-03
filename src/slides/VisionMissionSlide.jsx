import { AnimatedTitle, AnimatedText, AnimatedCard, GradientBlob, Badge, StaggerContainer, StaggerItem } from '../components/PlayfulUI.jsx'

export default function VisionMissionSlide() {
  return (
    <div className="relative">
      <GradientBlob color="blue" size={400} x="-5%" y="-10%" />
      <GradientBlob color="tosca" size={300} x="70%" y="50%" />

      <div className="flex flex-col items-center text-center mb-10 md:mb-12 gap-3">
        <Badge color="blue">Vision &amp; Mission</Badge>
        <AnimatedTitle className="text-4xl md:text-5xl" delay={0.1}>
          Visi &amp; <span className="text-tosca">Misi</span> BITCoder
        </AnimatedTitle>
      </div>

      <StaggerContainer className="grid md:grid-cols-2 gap-4 md:gap-5" stagger={0.2}>
        <StaggerItem>
          <AnimatedCard className="h-full relative overflow-hidden" delay={0}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-tosca-5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-tosca/25 to-tosca/8 flex items-center justify-center">
                <svg className="w-8 h-8 text-tosca" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-[#0f1419] font-heading font-bold text-2xl text-center">Visi</h3>
              <p className="text-[#475569] text-base md:text-lg leading-[1.8] text-center">
                Menjadi platform AI coding yang paling <span className="text-tosca font-bold">accessible</span> dan{' '}
                <span className="text-tosca font-bold">affordable</span> untuk setiap orang —
                sehingga siapa saja dapat membuat product dan karya sendiri melalui <span className="text-[#0f1419] font-semibold">vibe coding</span>.
              </p>
            </div>
          </AnimatedCard>
        </StaggerItem>

        <StaggerItem>
          <AnimatedCard className="h-full relative overflow-hidden" delay={0}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple/25 to-purple/8 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </div>
              <h3 className="text-[#0f1419] font-heading font-bold text-2xl text-center">Misi</h3>
              <ul className="space-y-3.5 pl-4 md:pl-6">
                {[
                  'Meningkatkan produktivitas setiap orang dalam membuat product',
                  'Menyediakan AI dengan harga termurah dan unlimited token',
                  'Memberikan akses coding dari mana saja — HP saja cukup',
                  'Menghadirkan integrasi tools untuk workflow sehari-hari',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#475569] text-base leading-relaxed">
                    <span className="w-6 h-6 rounded-full bg-purple-10 border border-purple-20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-purple" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedCard>
        </StaggerItem>
      </StaggerContainer>

      <AnimatedCard delay={0.4} className="mt-5 md:mt-6">
        <div className="pl-4 md:pl-6 space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-tosca animate-pulse" />
            <span className="text-[#0f1419] text-base font-semibold">Est. April 2026</span>
          </div>
          <AnimatedText className="text-[#475569] text-base md:text-lg leading-[1.8]" delay={0.5}>
            Meski baru dimulai, kami cukup <span className="text-tosca font-bold">optimis</span> dengan
            visi besar untuk menghadirkan AI yang accessible untuk semua orang.
          </AnimatedText>
          <div className="pt-2">
            <a href="https://bitcoder.id" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm px-4 py-2 bg-tosca-10 text-tosca font-semibold rounded-lg border border-tosca-20 hover:bg-tosca-20 transition-all">
              bitcoder.id
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </div>
      </AnimatedCard>
    </div>
  )
}
