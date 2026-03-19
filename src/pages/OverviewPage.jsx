import { Link } from 'react-router-dom'

export default function OverviewPage() {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '5vh 20px',
        minHeight: '100vh',
        backgroundColor: '#242424',
        color: 'white',
        fontFamily: 'sans-serif'
    }}>
        <h1 style={{
            fontSize: '3rem',
            margin: 0,
            textShadow: '4px 4px 10px #ffefb4, 8px 8px 15px rgba(255,239,180,0.6)' 
        }}>
            フラクタルとは？</h1>
        <div style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
        }}>
            <h2 style={{ margin: 0, fontSize: '1.7rm'}}>
                一部と全体が相似であるような図形           
            </h2>
            <p style={{ margin: 0, fontSize: '1.25rm', color: '#cccccc' }}>
                フラクタル次元は整数でない  
            </p> 
        </div>
        
        <Link
            to="/selection"
            style={{
                padding: '16px 40px',
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#242424',
                backgroundColor: '#105fcd',
                border: 'none',
                borderRadius: '8px',
                textDecoration: 'none',
                cursor: 'pointer', 
                boxShadow: '0px 1px 10px rgba(255,239,180,0.2)'
            }}
        >
            Select
        </Link>
    </div>
  );
}
