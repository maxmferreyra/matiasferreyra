import Layout from "../components/Layout"

export default function CruzRoja() {
  return (
    <Layout>
      <div className="slider">
          <ul >
          <li>
            <img src="./img/cruzroja1.png"/>
          </li>
          <li>
            <img src="./img/cruzroja2.png"/>
          </li>
          <li>
            <img src="./img/cruzroja3.png" alt="" />
          </li>
          <li>
            <img src="./img/cruzroja4.png" alt="" />
          </li>
        </ul>

      </div>
      <div className='info-proyect'>
        <h5>CRUZ ROJA</h5>
        <ul>
          <li>Campaña Restablecimiento del Contacto entre Familiares R.C.F</li>
          <li>Guionista</li>
          <li>Cliente Comité Internacional de la Cruz Roja (CICR) <br />
              Responsable Programa R.C.F. Lucía Benuzzi <br />
              Contenido Digital - RCC Buenos Aires María Emilia Cicoria - Gabriela Sala Rigler</li>
        </ul>
        <p>Dirección General y Producción Ejecutiva Fernanda Torrera
            Producción General y Asistencia de Dirección: Ana Laura Aparicio <br />
            Dirección de Animación: Luciana Digiglio <br />
            Dirección Storyboard: Luch Panelo <br />
            Dirección de Arte: Serge Rodas <br />
            Adaptación de Guión: Matias Ferreyra <br />
            Coordinación de Producción: Paola Bellato <br />
            Storyboard: Jose Mera <br />
            Asistencia de Arte: Facundo Bentos <br />
            Animación: Agustina Ceballos Ghibaudi - Elena Aracena - Luca Tavecchio - Ramiro Montero - Santiago Zamora <br />
            Directora de Sonido: Julia Castro <br />
            Composición Cez Comerci</p>
            <a target="blank" href="https://www.youtube.com/watch?v=RnF0kQ_adEk">Link a Youtube</a>
      </div>      
    </Layout>
  )
}