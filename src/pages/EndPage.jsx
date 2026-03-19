import { Link } from 'react-router-dom'

export default function EndPage() {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#242424',
        color: 'white',
        fontFamily: 'ui-sans-serif'
    }}>
        <h1>ご利用ありがとうございました！</h1>
        <Link
            to="/"
            style={{
                marginTop: '20px',
                padding: '10px 20px', 
                backgroundColor: '#105fcd',
                color: 'black',
                textDecoration: 'none',
                borderRadius: '5px'
            }}
        >
  Back to start page.
        </Link>
    </div>
  );
}
