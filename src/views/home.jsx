import React from "react";
import { AppFooter } from "../cmps/app-footer";
import { AppHeader } from "../cmps/app-header";
import { BuildManage } from "../cmps/home/build-manage";
import { HeroText } from "../cmps/home/hero-text";

import shapes from '../assets/img/home-shapes-bottom.svg'
import leftShapes from '../assets/img/home-shapes-left.svg'

export function Home() {
    return (
        <div>
            <section className="home main-container">
                <AppHeader />
                <HeroText />
                <div className="img-container"><img src={shapes} alt="img" className="bottom-img" /></div>
                <div className="img-container-left"><img src={leftShapes} alt="img" className="left-img" /></div>

            </section>

            <BuildManage />

            <AppFooter />
        </div>
    )
}