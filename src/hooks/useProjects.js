import { useEffect, useState } from 'react'
import { proyectos } from '../data/portfolio'

export const useProjects = (delay = 1200) => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setProjects(proyectos)
      setLoading(false)
    }, delay)
    return () => clearTimeout(timer)
  }, [delay])

  return { projects, loading }
}
