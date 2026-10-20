import { Col, Row } from 'antd'
import ProfilePhoto from '../atoms/ProfilePhoto'
import Chip from '../atoms/Chip'

const Styles = {
  name: { margin: '0 0 8px', fontFamily: 'var(--heading)', fontSize: 44, lineHeight: 1.1, color: 'var(--text-h)' },
  desc: { fontSize: 18, maxWidth: 560 },
}

function PersonalSection({ nombre, titulo, descripcion, foto }) {
  return (
    <section id="personal" aria-labelledby="personal-title">
      <Row gutter={[32, 24]} align="middle">
        <Col xs={24} md={8} style={{ display: 'flex', justifyContent: 'center' }}>
          <ProfilePhoto src={foto} name={nombre} />
        </Col>
        <Col xs={24} md={16}>
          <Chip>¿Quién soy?</Chip>
          <h1 id="personal-title" style={Styles.name}>{nombre}</h1>
          <p style={{ ...Styles.desc, fontWeight: 600, color: 'var(--accent)', margin: '0 0 8px' }}>{titulo}</p>
          <p style={Styles.desc}>{descripcion}</p>
        </Col>
      </Row>
    </section>
  )
}

export default PersonalSection
