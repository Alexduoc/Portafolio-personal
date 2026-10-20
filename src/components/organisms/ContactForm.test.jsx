import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ContactForm from './ContactForm'

const llenar = (nombre, email, mensaje) => {
  fireEvent.change(screen.getByLabelText('Nombre'), { target: { value: nombre } })
  fireEvent.change(screen.getByLabelText('Correo'), { target: { value: email } })
  fireEvent.change(screen.getByLabelText('Mensaje'), { target: { value: mensaje } })
}

describe('ContactForm', () => {
  it('muestra errores si se envía vacío', () => {
    render(<ContactForm />)
    fireEvent.click(screen.getByRole('button', { name: /Enviar mensaje/ }))
    expect(screen.getAllByRole('alert')).toHaveLength(3)
    expect(screen.getByText('El nombre es obligatorio.')).toBeVisible()
  })

  it('valida el formato del correo', () => {
    render(<ContactForm />)
    llenar('Ana', 'correo-malo', 'Mensaje suficientemente largo')
    fireEvent.click(screen.getByRole('button', { name: /Enviar mensaje/ }))
    expect(screen.getByText('Ingresa un correo válido.')).toBeInTheDocument()
  })

  it('muestra confirmación y limpia los campos con datos válidos', () => {
    render(<ContactForm />)
    llenar('Ana', 'ana@correo.com', 'Hola, me gustaría conversar.')
    fireEvent.click(screen.getByRole('button', { name: /Enviar mensaje/ }))
    expect(screen.getByText(/Mensaje enviado/)).toBeInTheDocument()
    expect(screen.getByLabelText('Nombre')).toHaveValue('')
  })
})
