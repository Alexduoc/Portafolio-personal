import { Button } from 'antd'

function SocialButton({ href, label, icon }) {
  return (
    <Button href={href} target="_blank" rel="noreferrer" icon={icon}>
      {label}
    </Button>
  )
}

export default SocialButton
