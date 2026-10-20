const Styles = {
  main: { maxWidth: 1000, margin: '0 auto', padding: '48px 24px', display: 'flex', flexDirection: 'column', gap: 72 },
}

function PortfolioTemplate({ header, sections, footer }) {
  return (
    <>
      {header}
      <main style={Styles.main}>{sections}</main>
      {footer}
    </>
  )
}

export default PortfolioTemplate
