import React from "react";
import { Link } from "react-router-dom";

export function AppFooter() {
    return (
        <footer className="app-footer main-container">

            <section>
                <h2>myteam</h2>
                <ul>
                    <li><Link to='/'>home</Link></li>
                    <li><Link to='/about'>about</Link></li>
                </ul>
            </section>

            <section className="web-info">

                <span>987  Hillcrest Lane</span>
                <span>Irvine, CA</span>
                <span>California 92714</span>
                <span>Call Us : 949-833-7432</span>

            </section>

            <section className="right-side">
                <span>Copyright 2023. All Rights Reserved</span>
            </section>

        </footer>
    )
}