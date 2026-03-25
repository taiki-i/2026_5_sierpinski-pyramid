import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { fractals } from '../fractals';

export default function SelectionPage() {
  const [selected, setSelected] = useState(null); 
  const navigate = useNavigate();

  return (
    <div style={design.container}>
      <h2 style={design.stageTitle}>SELECT STAGE</h2>
      
      <div style={design.grid}>
        {fractals.map((f) => (
          <button 
            key={f.path} 
            style={design.card}
            onClick={() => setSelected(f)} 
            onMouseEnter={(e) => { e.target.style.boxShadow = '0 0 20px #00e5ff, inset 0 0 10px #00e5ff'; }}
            onMouseLeave={(e) => { e.target.style.boxShadow = 'none'; }}
          >
            {f.name}
          </button>
        ))}
      </div>

      {/*モーダルウィンドウ*/}
      {selected && (
        <div style={design.modalOverlay}>
          <div style={design.modalContent}>
            <h3 style={design.modalTitle}>{selected.name}</h3>
            <p style={design.modalText}>{selected.description}</p>
            
            <div style={design.buttonGroup}>
              {/* 生成画面へジャンプ！ */}
              <button 
                style={design.goButton} 
                onClick={() => navigate(`/${selected.path}/generate`)}
              >
                GENERATE NOW
              </button>
              {/* モーダルを閉じる */}
              <button 
                style={design.cancelButton} 
                onClick={() => setSelected(null)}
              >
                CANCEL
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const design = {
  container: {
    minHeight: '100vh', width: '100vw', backgroundColor: '#0a0a0f',
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    fontFamily: '"Impact", "Arial Black", sans-serif', padding: '2rem'
  },

  stageTitle: {
    color: '#00e5ff', fontSize: '3rem', letterSpacing: '0.2em',
    textShadow: '3px 3px 0px #fc0fc0', marginBottom: '3rem'
  },

  grid: {
    display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center'
  },

  card: {
    width: '200px', height: '100px', backgroundColor: 'transparent',
    border: '2px solid #00e5ff', color: '#fff', fontSize: '1.2rem',
    cursor: 'pointer', transition: '0.2s', transform: 'skew(-10deg)'
  },

  //モーダル用
  modalOverlay: {
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(5px)',
    display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 100
  },

  modalContent: {
    backgroundColor: '#1a1a24', border: '4px solid #fc0fc0',
    boxShadow: '0 0 30px #fcofc0', padding: '3rem', width: '90%', maxWidth: '500px',
    textAlign: 'center', transform: 'skew(-5deg)'
  },

  modalTitle: { color: '#fff', fontSize: '2.5rem', margin: '0 0 1rem 0' },

  modalText: { color: '#aaa', fontSize: '1.2rem', fontFamily: 'sans-serif', marginBottom: '2rem' },

  buttonGroup: { display: 'flex', gap: '1rem', justifyContent: 'center' },

  goButton: {
    padding: '10px 20px', backgroundColor: '#00e5ff', color: '#000',
    border: 'none', fontSize: '1.2rem', fontWeight: 'bold', cursor: 'pointer'
  },

  cancelButton: {
    padding: '10px 20px', backgroundColor: 'transparent', color: '#ff0055',
    border: '2px solid #ff0055', fontSize: '1.2rem', fontWeight: 'bold', cursor: 'pointer'
  }
};