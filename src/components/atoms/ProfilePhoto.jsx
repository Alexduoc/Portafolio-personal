import { Avatar } from 'antd'

const Styles = {
  photo: { border: '4px solid var(--accent)', boxShadow: 'var(--shadow)', background: 'var(--accent-bg)', color: 'var(--accent)', fontFamily: 'var(--heading)' },
}

const initials = (name) =>
  name.split(' ').filter(Boolean).slice(0, 2).map((word) => word[0].toUpperCase()).join('')

function ProfilePhoto({ src, name, size = 160, style }) {
  return (
    <Avatar size={size} src={src || undefined} alt={`Foto de ${name}`} style={{ ...Styles.photo, fontSize: size / 3, ...style }}>
      {initials(name)}
    </Avatar>
  )
}

export default ProfilePhoto
