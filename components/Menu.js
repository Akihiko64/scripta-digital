import Link from 'next/link';
import style from '../css/menu.css';



function Menu(){
    return (
        <div className={style.wrapContent}>
            <div className={style.siteLogo}>
                <img src="/assets/index/logo.png" />
            </div>
            <div className={style.navContent}>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/">
                    <a>Sobre</a>
                </Link>
                <Link href="/">
                    <a>Serviços</a>
                </Link>
                <Link href="/">
                    <a>Fale Conosco</a>
                </Link>
            </div>
        </div>
    )
}

export default Menu;