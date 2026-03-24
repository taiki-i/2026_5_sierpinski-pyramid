import { Link } from 'react-router-dom'
import { fractals } from '../fractals';
import style from './PageLayout.module.css'

export default function SelectionPage() {
  return (
    <div className={style.container}>
        <div className={style.glassCard}>
            <h1 className={style.title}>図形の選択</h1>
            
            <div style={{
                display: 'flex',
                gap: 'clamp(1rem, 2vw, 2rem)',
                justifyContent: 'center',
                marginTop: '30px',
                flexWrap: 'wrap'
            }}>
                {fractals.map((f) => (
                    <Link
                        key={f.path}
                        to={`/${f.path}`}
                        className={style.cyberButton}
                    >
                        {f.name}
                    </Link>
                ))}
            </div>
        </div>
    </div>
  );
}
