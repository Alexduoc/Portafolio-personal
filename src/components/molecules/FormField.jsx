import { Input } from 'antd'

const Styles = {
  group: { display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 16 },
  label: { fontWeight: 600, color: 'var(--text-h)' },
  error: { margin: 0, color: '#cf1322', fontSize: 13 },
}

function FormField({ id, label, value, onChange, error, multiline = false, type = 'text' }) {
  const Control = multiline ? Input.TextArea : Input
  return (
    <div style={Styles.group}>
      <label htmlFor={id} style={Styles.label}>{label}</label>
      <Control id={id} type={type} value={value} onChange={onChange} status={error ? 'error' : undefined} aria-invalid={Boolean(error)} {...(multiline ? { rows: 4 } : {})} />
      {error && <p role="alert" style={Styles.error}>{error}</p>}
    </div>
  )
}

export default FormField
