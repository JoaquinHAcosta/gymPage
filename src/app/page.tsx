import { Header } from '@/components/Header/Header'
import FirstSection from '@/components/Sections/FirstSection'
import { FourthSection } from '@/components/Sections/FourthSection'
import { SecondSection } from '@/components/Sections/SecondSection'
import { ThirdSection } from '@/components/Sections/ThirdSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <section className="bg-white w-full h-screen">Test</section>
    </main>
  )
}
