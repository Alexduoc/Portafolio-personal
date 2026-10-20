const Styles = {
  header: { position: 'sticky', top: 0, zIndex: 10, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 8, padding: '12px 24px', background: 'var(--surface)', borderBottom: '1px solid var(--border)' },
  brand: { fontFamily: 'var(--heading)', fontWeight: 700, fontSize: 20, color: 'var(--text-h)' },
  nav: { display: 'flex', flexWrap: 'wrap', gap: 16 },
  link: { color: 'var(--text)', textDecoration: 'none', fontWeight: 500 },
}

const LINKS = [
  { href: '#personal', label: 'Personal' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#estudios', label: 'Estudios' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
]

function Header({ nombre }) {
  return (
    <header style={Styles.header}>
      <span style={Styles.brand}>{nombre}</span>
      <nav aria-label="Principal" style={Styles.nav}>
        {LINKS.map(({ href, label }) => (
          <a key={href} href={href} style={Styles.link}>{label}</a>
        ))}
      </nav>
    </header>
  )
}

export default Header
