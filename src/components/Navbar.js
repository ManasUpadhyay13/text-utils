import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
    const [toggle, settoggle] = useState("Enable")
    const settle = () => {
        if (props.mode != 'light') {
            settoggle('Enable')
        }
        else {
            settoggle('Disable')
        }
    }
    const [value, setValue] = useState('')
    const entry = (e) => {
        setValue(e.target.value)
    }

    const clickFunc = () => {
        alert(value)
    }
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `} >
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>

                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} onChange={settle} type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" HTMLfor="flexSwitchCheckDefault">{toggle} Dark Mode</label>
                    </div>

                </div>
            </div>
            
        </nav>
    )
}


Navbar.propTypes = { title: PropTypes.string }


Navbar.defaultPorps = {
    title: "Enter your title here"
}