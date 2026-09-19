import { Nav } from '@/components/nav'
import { Hero } from '@/components/hero'
import { Currently } from '@/components/currently'
import { ExperienceTimeline } from '@/components/experience-timeline'
import { ProjectGrid } from '@/components/project-grid'
import { SkillsGrid } from '@/components/skills-grid'
import { Achievements } from '@/components/achievements'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { BackgroundMesh } from '@/components/background-mesh'

export default function Home() {
  return (
    <>
      <BackgroundMesh />
      <Nav />
      <main>
        <Hero />
        <Currently />
        <ExperienceTimeline />
        <ProjectGrid />
        <Achievements />
        <SkillsGrid />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
