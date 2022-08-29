import Layout from "../components/Layout"

export default function Rutas() {
  return (
    <Layout>
      <div className="slider">
          <ul >
          <li id="slide1">
            <img src="./img/rutas1.png" alt="" />
          </li>
          <li id="slide2">
            <img src="./img/rutas2.png" alt="" />
          </li>
          <li id="slide3">
            <img src="./img/rutas3.png" alt=""/>
          </li>
          <li id="slide4">
            <img src="./img/rutas4.png" alt=""/>
          </li>     
        </ul>
        <ul className="menu">
          <li>
            <a href="#slide1"></a>
          </li>
          <li>
            <a href="#slide2"></a>
          </li>
          <li>
            <a href="#slide3"></a>
          </li>
          <li>
            <a href="#slide4"></a>
          </li>
        </ul>
      </div>
      <div className='info-proyect'>
        <h5>RUTAS</h5>
        <ul>
          <li>5:30 min / Dibujo digital</li>
          <li>Producido por: Osa estudio. BID Banco interamericano de desarrollo.</li>
          <li>Guion: Matías Ferreyra</li>
          <li>Dirección: Alejandro Imondi</li>
          <li> Producción: Maria Rosario Carlino</li>
        </ul>
        <p>Rutas cuenta la historia de Paulina, una joven con discapacidad intelectual tratando de ingresar a la universidad
          pública de su ciudad. El proceso resulta ser bastante frustrante cuando diferentes entidades piden a Paulina una y
          otra vez que responda las mismas preguntas, y la obligan a movilizarse por toda la ciudad. La historia de Paulina
          nos muestra la necesidad de articulación de servicios para personas con discapacidad y nos muestra algunas
          herramientas para lograrlo.</p>
       
      <a href="https://www.youtube.com/watch?v=Kagsd7KttkM">Link a Vimeo</a>
      </div>    
    </Layout>
  )
}