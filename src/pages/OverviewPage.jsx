import { Link } from 'react-router-dom';

export default function OverviewPage() {
  return (
    <div style={design.container}>
      <div style={design.window}>
        <h2 style={design.heading}>WHAT IS FRACTALS?</h2>
        
        <div style={design.textContainer}>
          <p style={design.text}>
            説明文<br />
          </p>
          <p style={design.text}>
            説明文<br />
          </p>
         
        </div>

        <Link to="/selection" style={design.nextButton}>
          NEXT &gt;&gt;
        </Link>
      </div>
    </div>
  );
}

const design = {
  container: {
    minHeight: '100vh', width: '100vw', 
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    fontFamily: '"Impact", "Arial Black", "Noto Sans JP", sans-serif',
    padding: '2rem'
  },

  window: {
    backgroundColor: 'rgba(0, 229, 255, 0.05)', 
    border: '2px solid #00e5ff',
    boxShadow: '0 0 15px rgba(0, 229, 255, 0.3), inset 0 0 20px rgba(0, 229, 255, 0.1)',
    padding: '3rem', width: '100%', maxWidth: '700px',
    clipPath: 'polygon(0 0, 95% 0, 100% 5%, 100% 100%, 5% 100%, 0 95%)'
  },

  heading: {
    color: '#fc0fc0', fontSize: '2.5rem', marginTop: 0,
    textShadow: '2px 2px 0px rgba(255,255,255,0.8)', letterSpacing: '0.1em',
    borderBottom: '2px dashed #fc0fc0', paddingBottom: '1rem'
  },

  textContainer: {
    margin: '2rem 0', display: 'flex', flexDirection: 'column', gap: '1.5rem'
  },

  text: {
    color: '#e0e0e0', fontSize: '1.2rem', lineHeight: '1.8',
    fontWeight: 'bold', fontFamily: '"Noto Sans JP", sans-serif'
  },

  nextButton: {
    display: 'inline-block', padding: '10px 30px',
    backgroundColor: '#00e5ff', color: '#000', textDecoration: 'none',
    fontSize: '1.5rem', fontWeight: 'bold', float: 'right',
    boxShadow: '4px 4px 0 #008899', transition: 'all 0.1s', cursor: 'pointer'
  }
};