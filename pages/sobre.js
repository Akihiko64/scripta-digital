import Link from 'next/link';
import React, { Fragment } from "react";
import style from '../css/index.css';
import Menu from '../components/Menu';

function Sobre(){
    return (
        <Fragment>
            <Menu/>
            <div className={style.title}>
                <h1>Sobre - Scripta Digital</h1>
                <p>A solução para seu negócio digital</p>
            </div>
            <Link href="/">
                <a>Home</a>
            </Link>
        </Fragment>
    )
}

export default Sobre;