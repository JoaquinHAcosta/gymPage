import { Header } from '@/components/Header/Header'
import { FifthSection } from '@/components/Sections/FifthSection'
import FirstSection from '@/components/Sections/FirstSection'
import { Footer } from '@/components/Sections/Footer'
import { FourthSection } from '@/components/Sections/FourthSection'
import { PricingSection } from '@/components/Sections/PricingSection'
import { SecondSection } from '@/components/Sections/SecondSection'
import { StatsSection } from '@/components/Sections/StatsSection'
import { ThirdSection } from '@/components/Sections/ThirdSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      {/*<StatsSection />
      <FifthSection />
      <PricingSection />
      <Footer /> */}
    </main>
  )
}
