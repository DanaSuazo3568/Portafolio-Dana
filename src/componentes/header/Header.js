import React from 'react'
import "./Header.css";
import headervideo from "../../imagenes/headervideo.mp4";

const Header = () => {
  return( <div className='header-contenedor'>
    <video className='video' src={headervideo} autoPlay loop muted />
    <h1>Dana Valentina Suazo Rodríguez</h1>
    <p>Desarrollador front-end</p>
    </div>
  );
};

export default Header
