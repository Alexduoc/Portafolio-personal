import PortfolioTemplate from '../templates/PortfolioTemplate'
import Header from '../organisms/Header'
import PersonalSection from '../organisms/PersonalSection'
import ExperienceSection from '../organisms/ExperienceSection'
import EducationSection from '../organisms/EducationSection'
import ProjectsSection from '../organisms/ProjectsSection'
import ContactSection from '../organisms/ContactSection'
import Footer from '../organisms/Footer'
import { perfil, experiencias, estudios } from '../../data/portfolio'
import { useProjects } from '../../hooks/useProjects'

function HomePage({ loadingDelay }) {
  const { projects, loading } = useProjects(loadingDelay)
  return (
    <PortfolioTemplate
      header={<Header nombre={perfil.nombre} />}
      sections={
        <>
          <PersonalSection {...perfil} />
          <ExperienceSection experiencias={experiencias} />
          <EducationSection estudios={estudios} />
          <ProjectsSection projects={projects} loading={loading} />
          <ContactSection linkedin={perfil.linkedin} github={perfil.github} />
        </>
      }
      footer={<Footer nombre={perfil.nombre} email={perfil.email} />}
    />
  )
}

export default HomePage
