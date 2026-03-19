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
            <Route 
              key={f.path} 
              path={`/${f.path}`} 
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
                      padding: '12px 24px',
                      backgroundColor: '#4a89db',
                      color: '#242424',
                      fontWeight: 'bold',
                      textDecoration: 'none',
                      borderRadius: '30px',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.5)'
                    }}
                  >
                    終了する
                  </Link>
                </>
              } 
            />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
