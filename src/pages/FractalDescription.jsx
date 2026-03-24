import { useState } from 'react';
import styles from './FractalDescription.module.css';

export default function FractalDescription({ title, description }) {
    const [isMinimized, setIsMinimized] = useState(false);
    
    const toggleMinimize = () => {
        setIsMinimized(!isMinimized);
    };

    return (
        <div className={styles.infoWindow}>
            {/* ヘッダー部分（常に表示され、タイトルとボタンを配置） */}
            <div className={styles.header}>
                <span className={styles.title}>{title}</span>
                <button 
                    className={styles.minimizeButton} 
                    onClick={toggleMinimize}
                    title={isMinimized ? "元に戻す" : "最小化"}
                >
                    {isMinimized ? '＋' : '－'}
                </button>
            </div>

            {/* コンテンツ部分（isMinimized が false の時だけ表示される） */}
            {!isMinimized && (
                <div className={styles.content}>
                    <p className={styles.text}>{description}</p>
                </div>
            )}
        </div>
    );
}