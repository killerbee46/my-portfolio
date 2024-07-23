import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import MainRoutes from './routes/MainRoutes'
import { themeConfig } from './themes/themeConfig'
import { ConfigProvider } from 'antd'

const queryClient = new QueryClient()

function App() {

  return (
    <ConfigProvider
      theme={themeConfig}>
      <QueryClientProvider client={queryClient}>
        <MainRoutes />
      </QueryClientProvider>
    </ConfigProvider>
  )
}

export default App
