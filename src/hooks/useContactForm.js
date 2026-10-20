import { useState } from 'react'

const INITIAL = { nombre: '', email: '', mensaje: '' }
const EMAIL_REGEX = /^\S+@\S+\.\S+$/

export const validate = ({ nombre, email, mensaje }) => {
  const errors = {}
  if (!nombre.trim()) errors.nombre = 'El nombre es obligatorio.'
  if (!email.trim()) errors.email = 'El correo es obligatorio.'
  else if (!EMAIL_REGEX.test(email)) errors.email = 'Ingresa un correo válido.'
  if (mensaje.trim().length < 10) errors.mensaje = 'El mensaje debe tener al menos 10 caracteres.'
  return errors
}

export const useContactForm = () => {
  const [values, setValues] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const handleChange = (field) => (event) => {
    const value = event.target.value
    setValues((current) => ({ ...current, [field]: value }))
    setSent(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length === 0) {
      setSent(true)
      setValues(INITIAL)
    }
  }

  return { values, errors, sent, handleChange, handleSubmit }
}
