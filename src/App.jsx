import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './components/Home';
import Checklist from './components/Checklist';
import Discover from './components/Discover';
import Watchlist from './components/Watchlist';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/checklist" element={<Checklist />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App


// Background Color: bg-neutral-900 || bg-zinc-900
//Gold (R & W) Text Color: text-amber-500 || text-amber-400
//White Text Color: text-neutral-100 || text-stone-100
