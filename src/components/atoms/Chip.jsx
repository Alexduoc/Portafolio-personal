const Styles = {
  chip: { display: 'inline-block', padding: '2px 10px', fontSize: 12, fontWeight: 600, letterSpacing: '0.04em', color: 'var(--accent)', background: 'var(--accent-bg)', border: '1px solid var(--accent)', borderRadius: 999 },
}

function Chip({ children, style }) {
  return <span style={{ ...Styles.chip, ...style }}>{children}</span>
}

export default Chip
