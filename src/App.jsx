import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './components/Home';
import Checklist from './components/Checklist';
import Discover from './components/Discover';
import Roulette from './components/Roulette';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/checklist" element={<Checklist />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/roulette" element={<Roulette />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
