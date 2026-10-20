import { Col, Row, Spin } from 'antd'
import SectionTitle from '../atoms/SectionTitle'
import ProjectCard from '../molecules/ProjectCard'

function ProjectsSection({ projects, loading }) {
  return (
    <section id="proyectos" aria-labelledby="proyectos-title">
      <SectionTitle>Desarrollos y Proyectos</SectionTitle>
      {loading ? (
        <div style={{ textAlign: 'center', padding: 32 }}>
          <Spin size="large" />
          <p>Cargando proyectos...</p>
        </div>
      ) : (
        <Row gutter={[16, 16]} id="proyectos-title">
          {projects.map((project) => (
            <Col key={project.id} xs={24} sm={12} lg={8}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      )}
    </section>
  )
}

export default ProjectsSection
