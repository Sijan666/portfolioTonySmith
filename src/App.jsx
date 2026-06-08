import './App.css';
import Home from './components/pages/Home';
import { Routes, Route } from 'react-router-dom';
import RootLayouts from './components/layouts/RootLayouts';
import Error from './components/pages/Error';
import ReactLenis from 'lenis/react';

function App() {
  return (
    <>
      <style>{`
        html.lenis, html.lenis body {
          height: auto;
        }
        .lenis.lenis-smooth {
          scroll-behavior: auto !important;
        }
        .lenis.lenis-smooth [data-lenis-prevent] {
          overscroll-behavior: contain;
        }
        .lenis.lenis-stopped {
          overflow: hidden;
        }
        .lenis.lenis-smooth iframe {
          pointer-events: none;
        }
      `}</style>

      <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothWheel: true, smoothTouch: false,}}>
        <Routes>
          <Route path="/" element={<RootLayouts />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </ReactLenis>
    </>
  );
}

export default App;