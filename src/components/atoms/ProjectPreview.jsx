const Styles = {
  preview: { height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--heading)', fontSize: 48, fontWeight: 700, color: '#fff', background: 'linear-gradient(135deg, #c2410c, #7c2d12)' },
}

function ProjectPreview({ title, image }) {
  if (image) return <img src={image} alt={`Vista previa de ${title}`} style={{ width: '100%', height: 140, objectFit: 'cover' }} />
  return (
    <div role="img" aria-label={`Vista previa de ${title}`} style={Styles.preview}>
      {title[0]}
    </div>
  )
}

export default ProjectPreview
