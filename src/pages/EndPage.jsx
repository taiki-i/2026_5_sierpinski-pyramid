import { Link } from 'react-router-dom';

export default function EndPage() {
  return (
    <div style={design.container}>
      <div style={design.content}>
        <h1 style={design.title}>THANK YOU FOR PLAYING.</h1>
        <p style={design.message}>GOOD LUCK!</p>
        
        <Link to="/" style={design.restartButton}>
          PRESS TO RESTART
        </Link>
      </div>
    </div>
  );
}

const design = {
  container: {
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    minHeight: '100vh', width: '100vw', backgroundColor: '#0a0a0f',
    fontFamily: '"Impact", "Arial Black", sans-serif'
  },

  content: { textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '2rem' },

  title: {
    fontSize: '5rem', margin: 0, color: '#fcfae1',
    textShadow: '0 0 20px #ffee00, 4px 4px 0px #ff0055'
  },

  score: { color: '#00e5ff', fontSize: '2rem', margin: 0 },

  message: { color: '#fff', fontFamily: 'sans-serif', letterSpacing: '0.2em' },

  restartButton: {
    marginTop: '3rem', display: 'inline-block', padding: '15px 30px',
    backgroundColor: '#ffee00', color: '#fff', textDecoration: 'none',
    fontSize: '1.2rem', fontWeight: 'bold', boxShadow: '0 6px 0 #990033', 
    transition: 'all 0.1s', cursor: 'pointer'
  }
};