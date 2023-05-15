import Layout from "../components/Layout";

export default function antonYelMundoRaro() {
  return (
    <Layout>
      <div className="slider">
          <ul >
          <li>
            <img src="./img/antonRaro1.jpg"/>
          </li>
          <li>
            <img src="./img/antonRaro2.jpg"/>
          </li>
          <li>
            <img src="./img/antonRaro3.jpg" alt="" />
          </li>
          <li>
            <img src="./img/antonRaro4.jpg" alt="" />
          </li>
        </ul>

      </div>
      <div className='info-proyect'>
        <h5>ANTON Y EL MUNDO RARO</h5>
        <ul>
          <li>Serie de animación. Stop Motion. 8 x 7 HD</li>
          <li>Guión</li>
          <li>Producido por OSA, estudio de animación</li>
        </ul>
        <p>Anton es un niño azul y curioso que vive con la Mujer gigante, su tía abuela, en un almacén de barrio. Un día  la mujer Gigante le muestra el pasaje hacia un mundo raro que está muy cerca pero no puede verse a simple vista. Allí conoce a Selva, una niña gris, que sabe flotar y tiene una enciclopedia como objeto favorito. <br />
        En cada capítulo un problema cotidiano, o una pregunta que Anton se hace, se convierte en una increíble aventura en el Mundo Raro. Allí se encontrarán con misteriosos animales que hablan, rescatarán monstruos en riesgo, y se enfrentarán a dudosos enemigos.
        </p>
      </div>      
    </Layout>
  )
}