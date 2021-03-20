import Link from 'next/link';
import style from '../css/menu.css';

function Menu(){
    return (
        <div className={style.content}>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/sobre">
                <a>Sobre</a>
            </Link>
        </div>
    )
}

export default Menu;