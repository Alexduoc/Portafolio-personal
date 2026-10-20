const Styles = {
    footer: { padding: '24px', textAlign: 'center', background: '#0d0f11', color: 'var(--text)', borderTop: '1px solid var(--border)' },
}

function Footer({ nombre, email }) {
    const year = new Date().getFullYear() // año calculado por código
    return (
        <footer style={Styles.footer}>
            <p style={{ margin: 0 }}>© {year} {nombre}. Todos los derechos reservados.</p>
            <p style={{ margin: 0 }}>Contacto: <a href={`mailto:${email}`} style={{ color: 'var(--accent)' }}>{email}</a></p>
        </footer>
    )
}

export default Footer