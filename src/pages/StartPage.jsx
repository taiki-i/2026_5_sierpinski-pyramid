import { Link } from 'react-router-dom';

export default function StartPage() {
  return (
    <div style={design.container}>
      <div style={design.content}>
        <h1 style={design.title}>
          フラクタル</h1>
        
        <Link 
          to="/overview" 
          style={design.button}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.08)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.04)';
          }}
        >
          はじめる
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
    color: '#52525b'
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '2.5rem', 
    padding: '2rem',
    zIndex: 10
  },

  title: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: '300', 
    letterSpacing: '0.05em',
    lineHeight: '1.2',
    margin: 0,
    color: '#3f3f46'
  },
  
  button: {
    marginTop: '1rem',
    padding: '1rem 3.5rem',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    letterSpacing: '0.1em',
    color: '#52525b',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
    backdropFilter: 'blur(10px)', 
    border: '1px solid rgba(255, 255, 255, 0.8)',
    borderRadius: '50px', 
    textDecoration: 'none',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.04)', 
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', 
    cursor: 'pointer'
  }
};