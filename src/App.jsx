import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Suspense } from 'react'
import { fractals } from './fractals'
import StartPage  from './pages/StartPage'
import OverviewPage from './pages/OverviewPage'
import SelectionPage from './pages/SelectionPage'
import DescriptionPage from './pages/DescriptionPage'
import EndPage from './pages/EndPage'
import Background from './pages/background/Background'
/**
 * トップページ。フラクタル一覧へのリンクを表示する。
 */
export default function App() {
  return (
    <BrowserRouter>
      <Background />
      <Suspense fallback={<div style={{ color: "white", padding: 40 }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/selection" element={<SelectionPage />} />
          <Route path="/end" element={<EndPage />} />
          {fractals.map((f) => (
            <React.Fragment key={f.path}>
              <Route 
                path={`/${f.path}`} 
                element={<DescriptionPage fractal={f} />} 
              />
              <Route
                path={`/${f.path}/generate`}
                element={
                  <>
                    <f.component />

                    <Link
                      to="/end"
                      style={{
                        position:'fixed',
                        bottom: '30px',
                        right: '30px',
                        zIndex: 1000,
                        padding: '12px 32px',
                         backgroundColor: '#fdfdf7',
                         color: '#52525b',
                         fontWeight: 'normal',
                         textDecoration: 'none',
                         borderRadius: '50px',
                         boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                         border: '1px solid #e4e4e7',
                         transition: 'all 0.3s ease'
                      }}
                    >
                      終わる
                    </Link>
                  </>
                }
              >

              </Route>
            </React.Fragment>
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
