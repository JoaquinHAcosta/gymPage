import { Header } from '@/components/Header/Header'
import FirstSection from '@/components/Sections/FirstSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <FirstSection />
      <section className="bg-white w-full h-screen">Test</section>
    </main>
  )
}
