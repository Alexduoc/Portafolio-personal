import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import HomePage from './HomePage'
import { proyectos } from '../../data/portfolio'

describe('HomePage (integración)', () => {
  it('muestra todas las secciones y carga los proyectos', async () => {
    render(<HomePage loadingDelay={10} />)
    for (const titulo of ['Experiencia Laboral', 'Estudios', 'Desarrollos y Proyectos', 'Contacto']) {
      expect(screen.getByRole('heading', { name: titulo })).toBeInTheDocument()
    }
    expect(await screen.findByText(proyectos[0].titulo)).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
