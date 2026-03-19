import { Link } from 'react-router-dom'
import { fractals } from '../fractals';

export default function SelectionPage() {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#242424',
        color: 'white',
        fontFamily: 'sans-serif',
        padding: '40px'
    }}>
        <h1>図形の選択</h1>
        <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            marginTop: '30px'
        }}>
            {fractals.map((f) => (
                <Link
                    key={f.path}
                    to={`/${f.path}`}
                    style={{
                        padding: '16px 32px',
                        backgroundColor: '#333',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        border: '1px solid #555',
                        fontSize: '18px',
                        transition: '0.2s'
                    }}
                >
                    {f.name}
                </Link>
            ))}
        </div>
    </div>
  );
}
