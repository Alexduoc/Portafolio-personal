const Styles = {
  title: { margin: '0 0 24px', fontFamily: 'var(--heading)', fontSize: 32, fontWeight: 700, color: 'var(--text-h)' },
}

function SectionTitle({ children, style }) {
  return <h2 style={{ ...Styles.title, ...style }}>{children}</h2>
}

export default SectionTitle
