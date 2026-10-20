import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons'
import SocialButton from '../atoms/SocialButton'

function SocialLinks({ linkedin, github }) {
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <SocialButton href={linkedin} label="LinkedIn" icon={<LinkedinOutlined />} />
      <SocialButton href={github} label="GitHub" icon={<GithubOutlined />} />
    </div>
  )
}

export default SocialLinks
