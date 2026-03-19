import { Link } from 'react-router-dom'

export default function StartPage() {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#242424',
        color: 'white',
        fontFamily: 'sans-serif'
    }}>
        <h1>フラクタル 3D ビューア</h1>
        
        <Link
            to="/overview"
            style={{
                padding: '12px 32px',
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#242424',
                backgroundColor: '#646cff',
                border: 'none',
                borderRadius: '8px',
                textDecoration: 'none',
                cursor: 'pointer'
            }}
        >
            Start
        </Link>
    </div>
  );
}
