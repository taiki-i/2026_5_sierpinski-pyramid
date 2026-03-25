import { Link } from 'react-router-dom'


export default function EndPage() {
  return (
    <div style={design.container}>
        <div style={design.overlay}></div>
        <div style={design.content}>
            <h1 style={design.title}>ご利用ありがとうございました！</h1>
            <Link  
                to="/" 
                style={design.button}
                onMouseEnter={(e) => {
                    e.target.style.color = '#3f3f46';
                    e.target.style.letterSpacing = '0.3em';
                }}
                onMouseLeave={(e) => {
                    e.target.style.color = '#71717a';
                    e.target.style.letterSpacing = '0.15em';
                }}
            >
                始めのページへ
            </Link>
        </div>
    </div>
  );
}

const design = {
  container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    width: '100vw',
    fontFamily: '"Shippori Mincho", "Hiragino Mincho ProN", "Noto Serif JP", serif'
  },

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle, transparent 30%, rgba(253, 251, 247, 0.9) 100%)',
    zIndex: 1,
    pointerEvents: 'none'
  },

  content: {
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '4rem', 
    padding: '2rem'
  },

  title: {
    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
    color: '#52525b',
    lineHeight: '2.5',
    letterSpacing: '0.15em',
    margin: 0,
    fontWeight: 'normal'
  },

  button: {
    marginTop: '2rem',
    padding: '1rem',
    fontSize: '0.9rem',
    color: '#71717a',
    textDecoration: 'none',
    letterSpacing: '0.15em',
    borderBottom: '1px solid #d4d4d8', 
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)', 
    cursor: 'pointer'
  }
};