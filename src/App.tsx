import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import AboutBreeder from './pages/AboutBreeder';
import { PuppiesGrid } from './components/PuppiesGrid';
import PuppyDetail from './components/PuppyDetail';
import ContactPage from './pages/ContactPage';


export default function App() {
  return (
    <BrowserRouter basename="/midwest-frenchies/">
      <div className="min-h-screen bg-neutral dark:bg-neutral-dark">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about-breeder" element={<AboutBreeder />} />
            <Route path="puppies" element={<PuppiesGrid />} />
            <Route path="/puppy/:id" element={<PuppyDetail />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
