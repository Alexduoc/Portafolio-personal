import { Col, Row } from 'antd'
import SectionTitle from '../atoms/SectionTitle'
import SocialLinks from '../molecules/SocialLinks'
import ContactForm from './ContactForm'

function ContactSection({ linkedin, github }) {
  return (
    <section id="contacto" aria-labelledby="contacto-title">
      <SectionTitle>Contacto</SectionTitle>
      <Row gutter={[32, 24]} id="contacto-title">
        <Col xs={24} md={8}>
          <p>Encuéntrame en mis redes o escríbeme directamente:</p>
          <SocialLinks linkedin={linkedin} github={github} />
        </Col>
        <Col xs={24} md={16}>
          <ContactForm />
        </Col>
      </Row>
    </section>
  )
}

export default ContactSection
