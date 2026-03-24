import { Link } from 'react-router-dom'
import style from "./PageLayout.module.css";

export default function StartPage() {
  return (
    <div className={style.container}>
        <div className={style.glassCard}>
            <h1 className={style.title}>
               fractal 3D viewer
            </h1>
        
            <Link to="/overview" className={style.cyberButton}>
                Start
            </Link>
        </div>
    </div>
  );
}
