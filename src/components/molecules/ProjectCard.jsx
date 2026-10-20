import { Card } from 'antd'
import { GithubOutlined } from '@ant-design/icons'
import ProjectPreview from '../atoms/ProjectPreview'

function ProjectCard({ titulo, descripcion, repo, imagen }) {
  return (
    <Card hoverable cover={<ProjectPreview title={titulo} image={imagen} />} style={{ height: '100%' }}>
      <Card.Meta title={titulo} description={descripcion} />
      <p style={{ marginBottom: 0 }}>
        <a href={repo} target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', fontWeight: 600 }}>
          <GithubOutlined /> Ver repositorio
        </a>
      </p>
    </Card>
  )
}

export default ProjectCard
