import { useLocation } from "react-router-dom";
import style from './Background.module.css'

export default function Background() {
  
    const location = useLocation();
    const path = location.pathname;

    let step = 0;
    if (path === '/' || path === '/start') step = 0;
    else if (path === '/overview') step = 1;
    else if (path === '/selection') step = 2;
    else if (path.endsWith('/generate')) step = 4;
    else if (path === '/end') step = 5;
    else step = 3;

    const positions = {
        0: { pink: { top: '-10%', left: '-10%', scale: 1}, blue:{ bottom: '-20%', right: '-10%', scale: 1.2} },
        1: { pink: { top: '10%', left: '50%', scale:1.5 }, blue: { bottom: '20%', right: '40%', scale: 0.8 } },
        2: { pink: { top: '60%', left: '-10%', scale: 1.2 }, blue: { bottom: '40%', right: '-20%', scale: 1.5 } },
        3: { pink: { top: '20%', left: '5%', scale: 1.1 }, blue: { bottom: '10%', right: '10%', scale: 1.3 } },
        4: { pink: { top: '-30%', left: '10%', scale: 2 }, blue: { bottom: '-30%', right: '10%', scale: 2 } },
        5: { pink: { top: '20%', left: '20%', scale: 1 }, blue: { bottom: '20%', right: '20%', scale: 1 } }
    };

    const pos = positions[step] || positions[0];

    return (
    <div className={style.background}>
        <div
            className={`${style.drop} ${style.dropPink}`}
            style={{ top: pos.pink.top, left: pos.pink.left, transform: `scale(${pos.pink.scale})` }}
        />

        <div
            className={`${style.drop} ${style.dropBlue}`}
            style={{ bottom: pos.blue.bottom, right: pos.blue.right, transform: `scale(${pos.blue.scale})` }}
        />   

        <div
            className={`${style.drop} ${style.dropYellow}`}
            style={{ top: pos.pink.top, left: `calc(${pos.pink.left} + 20%)` }}
        /> 

    </div>
  );
}
