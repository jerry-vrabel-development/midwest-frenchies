import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import AboutBreeder from './pages/AboutBreeder';
import { PuppiesGrid } from './components/PuppiesGrid';


export default function App() {
  return (
    <BrowserRouter basename="/midwest-frenchies">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about-breeder" element={<AboutBreeder />} />
          <Route path="puppies" element={<PuppiesGrid />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
