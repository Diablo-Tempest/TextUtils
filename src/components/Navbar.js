import React, {useState} from "react";
import PropTypes from 'prop-types';
import '../styles/Navbar.css';
// import {Link} from 'react-router-dom';
export default function Navbar(props) {
  const [txt, setTxt] = useState("Light Mode")
  const [stl, setStl] = useState({
    color: 'black'
  })
  const handleOnChange = ()=>{
    if (props.mode==='light') {
      setTxt("Dark Mode")
      setStl({
        color: 'white'
      })
    }
    else{
      setTxt("Light Mode")
      setStl({
        color: 'black'
      })
    }
  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/"> */}
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        
        <div className="form-check form-switch">
          <input className="form-check-input" onClick={props.toggleMode} onChange={handleOnChange} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        </div>
        <label className="form-check-label mx-2" style={stl} htmlFor="flexSwitchCheckDefault">{txt}</label>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li> */}
          </ul>
          <form className="d-flex" role="search">
            <input
              id = 'searchBar'
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{backgroundColor: props.mode==='light'?'white':'#212529', color: props.mode==='light'?'black':'white'}}
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {title: PropTypes.string.isRequired,
                    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: "Set Title Here",
    aboutText: "About text here"
}