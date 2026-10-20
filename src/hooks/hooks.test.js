import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, vi, afterEach } from 'vitest'
import { useProjects } from './useProjects'
import { useContactForm, validate } from './useContactForm'

afterEach(() => vi.useRealTimers())

describe('useProjects', () => {
  it('comienza cargando y entrega los proyectos tras el retraso', () => {
    vi.useFakeTimers()
    const { result } = renderHook(() => useProjects(500))
    expect(result.current.loading).toBe(true)
    expect(result.current.projects).toHaveLength(0)
    act(() => vi.advanceTimersByTime(500))
    expect(result.current.loading).toBe(false)
    expect(result.current.projects.length).toBeGreaterThan(0)
  })
})

describe('useContactForm', () => {
  it('actualiza un campo con handleChange', () => {
    const { result } = renderHook(() => useContactForm())
    act(() => result.current.handleChange('nombre')({ target: { value: 'Ana' } }))
    expect(result.current.values.nombre).toBe('Ana')
  })

  it('validate detecta campos inválidos', () => {
    const errores = validate({ nombre: '', email: 'x', mensaje: 'corto' })
    expect(Object.keys(errores)).toEqual(['nombre', 'email', 'mensaje'])
  })
})
