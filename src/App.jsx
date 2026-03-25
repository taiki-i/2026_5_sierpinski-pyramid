import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Suspense } from 'react'
import { fractals } from './fractals'
import StartPage  from './pages/StartPage'
import OverviewPage from './pages/OverviewPage'
import SelectionPage from './pages/SelectionPage'
import EndPage from './pages/EndPage'

/**
 * トップページ。フラクタル一覧へのリンクを表示する。
 */
export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div style={{ color: "white", padding: 40 }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/selection" element={<SelectionPage />} />
          <Route path="/end" element={<EndPage />} />
          {fractals.map((f) => (
            <Fragment key={f.path}>
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
                        backgroundColor: '#ee00ee', 
                        color: '#000', 
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        borderRadius: '0', 
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1), 4px 4px 0 #880088', 
                        border: '2px solid #ee00ee',
                        transition: 'all 0.3s ease',
                        fontFamily: '"Impact", "Arial Black", sans-serif',
                        fontSize: '1.2rem'
                      }}
                    >
                      FINISH STAGE
                    </Link>
                  </>
                } 
              />
            </Fragment>
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
