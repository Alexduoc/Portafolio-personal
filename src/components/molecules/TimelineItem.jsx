import Chip from '../atoms/Chip'

const Styles = {
  item: { padding: '16px 20px', marginBottom: 12, background: 'var(--surface)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', borderRadius: 8 },
  title: { margin: 0, fontFamily: 'var(--heading)', fontSize: 18, color: 'var(--text-h)' },
  sub: { margin: '2px 0 8px', color: 'var(--text)' },
}


function TimelineItem({ title, subtitle, period }) {
  return (
    <li style={{ ...Styles.item, listStyle: 'none' }}>
      <h3 style={Styles.title}>{title}</h3>
      <p style={Styles.sub}>{subtitle}</p>
      {period && <Chip>{period}</Chip>}
    </li>
  )
}

export default TimelineItem
