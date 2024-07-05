import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import MainRoutes from './routes/MainRoutes'
import MainLayout from './layouts/MainLayout'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <MainLayout>
    <MainRoutes />
    </MainLayout>
  </QueryClientProvider>
  )
}

export default App
