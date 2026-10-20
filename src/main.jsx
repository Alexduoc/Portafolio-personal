import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider, theme } from 'antd'
import './index.css'
import HomePage from './components/pages/HomePage'

// Tema oscuro metálico para los componentes de Ant Design
const tema = {
    algorithm: theme.darkAlgorithm,
    token: {
        colorPrimary: '#5f7a94',
        colorBgBase: '#14171a',
        colorBgContainer: '#1d2126',
        colorBorder: '#2c333b',
    },
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ConfigProvider theme={tema}>
            <HomePage />
        </ConfigProvider>
    </StrictMode>,
)