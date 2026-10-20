import { Alert, Button } from 'antd'
import FormField from '../molecules/FormField'
import { useContactForm } from '../../hooks/useContactForm'

function ContactForm() {
  const { values, errors, sent, handleChange, handleSubmit } = useContactForm()
  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Formulario de contacto">
      <FormField id="nombre" label="Nombre" value={values.nombre} onChange={handleChange('nombre')} error={errors.nombre} />
      <FormField id="email" label="Correo" type="email" value={values.email} onChange={handleChange('email')} error={errors.email} />
      <FormField id="mensaje" label="Mensaje" multiline value={values.mensaje} onChange={handleChange('mensaje')} error={errors.mensaje} />
      <Button type="primary" htmlType="submit">Enviar mensaje</Button>
      {sent && <Alert style={{ marginTop: 16 }} type="success" showIcon title="¡Mensaje enviado! Gracias por contactarme." />}
    </form>
  )
}

export default ContactForm
