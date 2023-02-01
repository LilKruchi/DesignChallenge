import React from "react"
import { Link } from "react-router-dom"

export function AppHeader() {
    return (
        <header className="app-header">
            <h2>myteam</h2>

            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/about">about</Link></li>
            </ul>

            <button>contact us</button>
        </header>
    )
}