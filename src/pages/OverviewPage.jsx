import { Link } from 'react-router-dom'
import style from './Pagelayout.module.css'

export default function OverviewPage() {
  return (
    <div className={style.container}>
        <div className={style.glassCard}>
            <h1 className={style.title}>
                フラクタルとは？
            </h1>

            <p className={style.description}>
                説明文<br />
                説明文
            </p> 
              
            <Link to="/selection" className={style.cyberButton}>
                Select
            </Link>
        </div>
    </div>
  );
}
