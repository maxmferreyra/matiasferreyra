import Layout from "../components/Layout"

export default function PasosParaVolar() {
  return (
    <Layout>
     <div className="slider">
          <ul >
          <li id="slide1">
            <img src="./img/pasosParaVolar1.png" alt="" />
          </li>
          <li id="slide2">
            <img src="./img/pasosParaVolar2.png" alt="" />
          </li>
          <li id="slide3">
            <img src="./img/pasosParaVolar3.jpeg" alt=""/>
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
        </ul>
      </div>
      <div className='info-proyect'>
        <h5>PASOS PARA VOLAR</h5>
        <ul>
          <li>8 min. / Stop Motion / Niños y Familia</li>
          <li>En pre-producción / 2022</li>
          <li>Escrito por: Nicolás Conte y Rosario Carlino <br />
              Dirigido por: Nicolás Conte <br />
              Producido por Osa Estudio (Argentina) y Vivement Lundi! (Francia)</li>
        </ul>
        <p>Encerrado en una habitación con ventiluz, Pájaro enseña a Pajarito a volar, aunque él no tiene
          alas. La aparición de un misterioso maletín arruinará sus planes y revelará a Pajarito una
          inesperada posibilidad de escape.</p>
      </div>     
    </Layout>
  )
}