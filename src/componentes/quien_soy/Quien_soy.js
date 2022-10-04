import React from 'react'
import "./Quien_soy.css";
import dana_portafolio from "../../imagenes/dana_portafolio.jpg";

const Quien_soy = () => {
    return (
        <div className='quiensoy-contenedor'>
            <div className='quiensoy-desc'>
                <h3>¿Quién Soy?</h3>
                <p>Mi gusto por la tecnología inicio desde pequeña, siempre he sido una persona bastante curiosa con pasión al aprender, con ganas de crear y que mis usuarios disfruten de mis creaciones. Me gusta trabajar en equipo, me reconozco como líder. Tengo conocimiento en el área de frondend con lenguajes como JavaScript(Jquery,React), lenguaje de marcado HTML e implementación CSS y Bootstrap.
                </p>

            </div>
             <img className="dana_portafolio" src={dana_portafolio} />

        </div>
    )
}

export default Quien_soy
