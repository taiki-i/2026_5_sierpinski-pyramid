import { Link } from 'react-router-dom'
import style from './PageLayout.module.css'

export default function EndPage() {
  return (
    <div className={style.container}>
        <div className={style.glassCard}>
            <h1 className={style.title}>ご利用ありがとうございました！</h1>
            <Link to="/" className={style.cyberButton}>
                Back to start page.
            </Link>
        </div>
    </div>
  );
}
