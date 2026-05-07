import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Home extends Component {
  render() {
    return (

    <div style={{marginTop:'50px'}}>
        <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to={"/profesores"} className="nav-link" >Profesores</Link>
        </li>
        <li className="nav-item">
          <Link to={"/cursos"} className="nav-link" >Cursos</Link>
        </li>
        <li className="nav-item">
          <Link to={"/precios"} className="nav-link" >Precios</Link>
        </li>
      </ul>
    </div>
    )
  }
}
