import { Link } from 'react-router-dom'


export default function OverviewPage() {
  return (
    <div style={design.container}>
        <div style={design.overlay}></div>
        <div style={design.content}>
            <h1 style={design.title}>フラクタルとは？</h1>

            <p style={design.description}>
                説明文<br />
                説明文
            </p> 
              
            <Link 
                to="/selection" 
                style={design.button}
                onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxshadow = '0 4px 15px rgba(0, 0, 0, 0.03)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.transform = 'tranlateY(0)';
                    e.target.style.backgroundColor = 'transparent';
                }}
            >
                図形を選ぶ
            </Link>
        </div>
    </div>
  );
}

const design = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    width: '100vw',
    fontFamily: '"Zen Maru Gothic", "Hiragino Rounded W3 JIS2004", "Noto Sans JP", sans-serif',
    padding: '2rem',
    boxSizing: 'border-box'
  },

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(8px)',
    zIndex: 1
  },

  content: {
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '2.rem',
    padding: '2rem',
    width: '100%'
  },

  title: {
    fontSize: 'clamp(1.8rem, 3vw, 2.2rem)',
    color: '#4b4848',
    margin: 0,
    fontWeight: 'normal',
    letterSpacing: '0.1em'
  },

  description: {
    fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
    color: '#63636b',
    lineHeight: '2.2', 
    letterSpacing: '0.05em',
    margin: 0
  },

  button: {
    marginTop: '1rem',
    padding: '1rem 3.5rem',
    fontSize: '1.05rem',
    fontWeight: 'bold',
    letterSpacing: '0.1em',
    color: '#52525b',
    backgroundColor: '#ffffff', 
    border: '1px solid rgba(0, 0, 0, 0.05)',
    borderRadius: '50px',
    textDecoration: 'none',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.07)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
  }
};