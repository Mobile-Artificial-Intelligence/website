import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage'
import Topbar from './layout/Topbar'
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <div>
      <Topbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  )
}

export default App
