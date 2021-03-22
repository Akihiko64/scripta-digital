import Link from 'next/link';
import style from '../css/menu.css';
import React, {useEffect} from 'react';


function Menu(){
    const [scrolled, setScrolled] = React.useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if(offset > 200){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    let dynamicStyle = `${style.wrapContent}`;
    if(scrolled){
        dynamicStyle = `${style.wrapContent} ${style.scrolled}`;
    }

    return (
        <header className={dynamicStyle}>
            <div className={style.siteLogo}>
                <img src="/assets/index/logo.png" />
            </div>
            <nav className={style.navContent}>
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
            </nav>
        </header>
    )
};

export default Menu;