import SectionTitle from '../atoms/SectionTitle'
import TimelineItem from '../molecules/TimelineItem'

function EducationSection({ estudios }) {
  return (
    <section id="estudios" aria-labelledby="estudios-title">
      <SectionTitle>Estudios</SectionTitle>
      <ul style={{ padding: 0, margin: 0 }} id="estudios-title">
        {estudios.map(({ id, institucion, titulo, anio }) => (
          <TimelineItem key={id} title={institucion} subtitle={titulo} period={anio} />
        ))}
      </ul>
    </section>
  )
}

export default EducationSection
