import Link from 'next/link';
import React, { Fragment } from "react";
import style from '../css/index.css';

function Home(){
    return (
        <Fragment>
            <div className={style.title}>
                <h1>Home - Scripta Digital</h1>
                <p>A solução para seu negócio digital</p>
            </div>
            <Link href="/sobre">
                <a>Sobre</a>
            </Link>
        </Fragment>
    )
}

export default Home;