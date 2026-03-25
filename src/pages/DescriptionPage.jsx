import { Link } from 'react-router-dom'

export default function DescriptionPage({ fractal }) {
  return (
    <div style={design.container}>
        <div style={design.content}>
            <h1 style={design.title}>
                {fractal.name}
            </h1>
            <p style={design.text}>
                {fractal.description || '説明文を入れてください'}
            </p>

            <Link
                to={`/${fractal.path}/generate`}
                style={design.button}
                onMouseEnter={(e) => {
                    e.target.style.tranform = 'translateY(-2px)';
                    e.target.style.backgroundColor = 'rgba(82, 82, 91, 0.05)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.tranform = 'translateY(0)';
                    e.target.style.backgroundColor = 'transparent';
                }}
            >
                描画する
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
    fontFamily: '"Zen Maru Gothic", "Hiragino Rounded W3 JIS2004", "Noto Sans JP", sans-serif'
  },

  content: {
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '3rem',
    padding: '2rem',
    maxWidth: '800px'
  },

  title: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    color: '#3f3f46',
    margin: 0,
    fontWeight: '300',
    letterSpacing: '0.1em'
  },

  text: {
    fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
    color: '#52525b',
    lineHeight: '2.5',
    letterSpacing: '0.08em',
    margin: 0
  },

  button: {
    marginTop: '1rem',
    padding: '1rem 3.5rem',
    fontSize: '1.1rem',
    fontWeight: 'normal',
    letterSpacing: '0.1em',
    color: '#52525b',
    backgroundColor: 'transparent',
    border: '1px solid #a1a1aa',
    borderRadius: '50px',
    textDecoration: 'none',
    transition: 'all 0.3s ease'
  }
};