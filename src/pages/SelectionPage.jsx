import { Link } from 'react-router-dom'
import { fractals } from '../fractals';


export default function SelectionPage() {
  return (
    <div style={design.container}>
        <div style={design.content}>
            <h1 style={design.title}>図形の選択</h1>
            
            <div style={design.bubbleGrid}>
                {fractals.map((f) => (
                    <Link
                        key={f.path}
                        to={`/${f.path}`}
                        style={design.bubble}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-10px) scale(1.05)';
                            e.target.style.boxShadow = 'inset 0 0 040px rgba(255, 255, 255, 0.8), 0 10px 25px rgba(0, 0, 0, 0.08)';
                            e.target.style.borderColor = 'rgba(255, 255, 255, 0.8)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0) scale(1)';
                            e.target.style.boxShadow = 'inset 0 0 20px rgba(255, 255, 255, 0.4), 0 4px 15px rgba(0, 0, 0, 0.03)';
                            e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                        }}
                    >
                        <span style={design.bubbleText}>{f.name}</span>
                    </Link>
                ))}
            </div>
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
    fontFamily: '"Zen Maru Gothic", "Hiragino Rounded W3 JIS2004", "Noto Sans JP", sans-serif',
  },

  content: {
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1000px',
    padding: '2rem',
    gap: '4rem'
  },

  title: {
    fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
    color: '#52525b',
    margin: 0,
    fontWeight: '300',
    letterSpacing: '0.1em'
  },

  bubbleGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '3rem'
  },

  bubble: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'clamp(150px, 20vw, 200px)', 
    aspectRatio: '1 / 1', 
    borderRadius: '50%',
    textDecoration: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
    border: '1px solid rgba(255, 255, 255, 0.4)', 
    backdropFilter: 'blur(4px)', 
    WebkitBackdropFilter: 'blur(4px)',
    boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.4), 0 4px 15px rgba(0, 0, 0, 0.03)',
    transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
  },

  bubbleText: {
    color: '#4b4848',
    fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
    fontWeight: 'normal',
    letterSpacing: '0.05em',
    textAlign: 'center',
    padding: '1rem',
    pointerEvents: 'none'
  }
};