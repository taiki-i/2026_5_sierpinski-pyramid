import { Link } from 'react-router-dom';

export default function StartPage() {
  return (
    <div style={design.container}>
      <div style={design.scanlines}></div> 
      
      <div style={design.content}>
        <h1 style={design.title}>
          <span style={design.neonCyan}>FRACTAL</span><br />
          <span style={design.neonPink}>3D VIEWER</span>
        </h1>
        
        <Link to="/overview" style={design.startButton}>
          PRESS START
        </Link>
      </div>
    </div>
  );
}

const design = {
  container: {
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    minHeight: '100vh', width: '100vw',
    backgroundColor: '#0a0a0f', 
    fontFamily: '"Impact", "Arial Black", sans-serif',
    position: 'relative', overflow: 'hidden'
  },

  scanlines: {
    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
    background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
    backgroundSize: '100% 4px, 3px 100%',
    pointerEvents: 'none', zIndex: 1
  },

  content: {
    zIndex: 10, textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '4rem'
  },

  title: {
    fontSize: 'clamp(4rem, 10vw, 7rem)', margin: 0, lineHeight: '1.1',
    letterSpacing: '0.05em', transform: 'skew(-5deg)'
  },

  neonCyan: {
    color: '#fff', textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #00e5ff, 0 0 40px #00e5ff, 0 0 80px #00e5ff'
  },

  neonPink: {
    color: '#fff', textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fc0fc0, 0 0 40px #ff0055, 0 0 80px #ff0055'
  },

  startButton: {
    display: 'inline-block', padding: '15px 40px', fontSize: '1.5rem',
    color: '#ffee00', textDecoration: 'none',
    border: '4px solid #ffee00', borderRadius: '0',
    boxShadow: '0 0 10px #ffee00, inset 0 0 10px #ffee00',
    backgroundColor: 'rgba(255, 238, 0, 0.1)',
    textShadow: '0 0 5px #ffee00',
    animation: 'blink 1.5s infinite alternate', 
    transition: 'all 0.1s', cursor: 'pointer'
  }
};