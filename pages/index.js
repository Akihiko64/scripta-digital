import Link from 'next/link';
import React, { Fragment } from "react";
import style from '../css/index.css';
import Head from 'next/head';
import Menu from '../components/Menu';


function Home(){
    return (
        <div className={style.wrapContent} >
            
            <Head>
                <title>Home - Scripta Digital</title>
            </Head>
            <Menu />
            <div className={style.section1WrapContainer}>
                <div className={style.container}>
                    <div className={style.titleContent}>
                        <h1>
                            Resultados reais<br/>para sua empresa
                        </h1>
                        <p>
                            Mude a realidade do seu negócio com uma presença online relevante.
                        </p>
                        <a>Fazer Orçamento</a>
                    </div>
                    <div className={style.ilustrationContainer}>
                        <img src="/assets/index/ilustracao.png" />
                    </div>
                </div>
            </div>
            <div className={style.section2WrapContainer}>
                <a><img src="/assets/index/mouse.svg" /></a>
                <h2>Nossa Metodologia</h2>
                <div className={style.cardsContent}>
                    <div className={style.card}>
                        <div className={style.cardImg}>
                            <img src="/assets/index/diagnostico.svg" />
                        </div>
                        <div className={style.cardInfo}>
                            <h3>1</h3>
                            <p>DIAGNÓSTICO</p>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.cardImg}>
                            <img src="/assets/index/planejamento.svg" />
                        </div>
                        <div className={style.cardInfo}>
                            <h3>2</h3>
                            <p>PLANEJAMENTO</p>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.cardImg}>
                            <img src="/assets/index/persona.svg" />
                        </div>
                        <div className={style.cardInfo}>
                            <h3>3</h3>
                            <p>PERSONA</p>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.cardImg}>
                            <img src="/assets/index/implementacao.svg" />
                        </div>
                        <div className={style.cardInfo}>
                            <h3>4</h3>
                            <p>IMPLEMENTAÇÃO</p>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.cardImg}>
                            <img src="/assets/index/execute.svg" />
                        </div>
                        <div className={style.cardInfo}>
                            <h3>5</h3>
                            <p>EXECUÇÃO</p>
                        </div>
                    </div>
                </div>
            </div>     
            

        </div>
    )
}

export default Home;