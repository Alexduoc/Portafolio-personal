import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Header from './Header'
import PersonalSection from './PersonalSection'
import ExperienceSection from './ExperienceSection'
import EducationSection from './EducationSection'
import ProjectsSection from './ProjectsSection'
import Footer from './Footer'
import { perfil, experiencias, estudios, proyectos } from '../../data/portfolio'

describe('Organismos del portafolio', () => {
  it('Header muestra el nombre y los 5 enlaces de navegación', () => {
    render(<Header nombre="Ana Pérez" />)
    expect(screen.getByText('Ana Pérez')).toBeInTheDocument()
    expect(screen.getAllByRole('link')).toHaveLength(5)
  })

  it('PersonalSection muestra nombre, título y descripción', () => {
    render(<PersonalSection {...perfil} />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(perfil.nombre)
    expect(screen.getByText(perfil.descripcion)).toBeInTheDocument()
  })

  it('ExperienceSection lista empresa, cargo y fechas', () => {
    render(<ExperienceSection experiencias={experiencias} />)
    const { empresa, cargo, inicio, termino } = experiencias[0]
    expect(screen.getByText(empresa)).toBeInTheDocument()
    expect(screen.getByText(cargo)).toBeInTheDocument()
    expect(screen.getByText(`${inicio} – ${termino}`)).toBeVisible()
  })

  it('EducationSection lista institución, título y año', () => {
    render(<EducationSection estudios={estudios} />)
    const { institucion, titulo } = estudios[0]
    expect(screen.getByText(institucion)).toBeInTheDocument()
    expect(screen.getByText(titulo)).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(estudios.length)
  })

  it('ProjectsSection muestra Spin mientras carga y no renderiza proyectos', () => {
    render(<ProjectsSection projects={[]} loading />)
    expect(screen.getAllByText('Cargando proyectos...').length).toBeGreaterThan(0)
    expect(screen.queryByText('Ver repositorio')).not.toBeInTheDocument()
  })

  it('ProjectsSection muestra título y enlace al repositorio de cada proyecto', () => {
    render(<ProjectsSection projects={proyectos} loading={false} />)
    expect(screen.getByText(proyectos[0].titulo)).toBeInTheDocument()
    const enlaces = screen.getAllByRole('link', { name: /Ver repositorio/ })
    expect(enlaces).toHaveLength(proyectos.length)
    expect(enlaces[0]).toHaveAttribute('href', proyectos[0].repo)
  })

  it('Footer calcula el año actual por código', () => {
    render(<Footer nombre="Ana Pérez" email="ana@correo.com" />)
    expect(screen.getByText(new RegExp(String(new Date().getFullYear())))).toBeInTheDocument()
  })
})
