import Link from 'next/link';
import React, { Fragment } from "react";

function Sobre(){
    return (
        <Fragment>
            <h1>Sobre - Scripta Digital</h1>
            <p>A solução para seu negócio digital</p>
            <Link href="/">
                <a>Home</a>
            </Link>
        </Fragment>
    )
}

export default Sobre;