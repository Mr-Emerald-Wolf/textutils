import React from 'react'
import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom';


export default function Navbar(props) {
    return (

        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                       
                        
                        <li className="nav-item">
                            <a className="nav-link disabled" href="/">Created on October 2021</a>
                        </li>

                    </ul>
                    <div class="form-check form-switch m-1">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.changeTheme} />
                        <label className={`form-check-label text-${props.textTheme} htmlFor="flexSwitchCheckDefault`}>Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>

    )
}
Navbar.propTypes = { title: PropTypes.string.isRequired, } //Proptypes help debug errors involving wrong type of object sent
//It will show error if for example an integer is sent in title
Navbar.defaultProps = {
    title: 'Send Title Here',
};