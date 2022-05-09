import React from 'react'
import PropTypes from 'prop-types'
export const Navbar = (props) => {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.color} bg-${props.color}`}>
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.about}</a>
                        </li>
                    </ul>
                    <div className="custom-control custom-switch">
                        <input type="checkbox" className="custom-control-input" id="customSwitches" onClick={props.changeC}/>
                        <label className={`custom-control-label  text-${props.color==="dark"?"light":"dark"}`} htmlFor="customSwitches">{props.color==='light'?"Dark Mode":"Light Mode"} </label>
                    </div>


                    {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title: "Set the Title",
    about: "About"
}