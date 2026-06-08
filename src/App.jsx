import React, { Suspense, lazy } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ReactLenis from 'lenis/react';
import Loader from './components/Loader';

const RootLayouts = lazy(() => import('./components/layouts/RootLayouts'));
const Home = lazy(() => import('./components/pages/Home'));
const Error = lazy(() => import('./components/pages/Error'));

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

      <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothWheel: true, smoothTouch: false }}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<RootLayouts />}>
              <Route index element={<Home />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </ReactLenis>
    </>
  );
}

export default App;