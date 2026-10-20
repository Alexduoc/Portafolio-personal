import SectionTitle from '../atoms/SectionTitle'
import TimelineItem from '../molecules/TimelineItem'

function ExperienceSection({ experiencias }) {
  return (
    <section id="experiencia" aria-labelledby="experiencia-title">
      <SectionTitle>Experiencia Laboral</SectionTitle>
      <ul style={{ padding: 0, margin: 0 }} id="experiencia-title">
        {experiencias.map(({ id, empresa, cargo, inicio, termino }) => (
          <TimelineItem key={id} title={empresa} subtitle={cargo} period={`${inicio} – ${termino}`} />
        ))}
      </ul>
    </section>
  )
}

export default ExperienceSection
