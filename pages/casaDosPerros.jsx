import Layout from '../components/Layout';

  export default function CasaDosPerros() {
    return (
      <Layout>
        <div className="slider">
          <ul>
            <li>
              <img src="./img/unacasacondosperros1.jpg" alt="unacasacondosperros"/>
            </li>
            <li>
              <img src="./img/unacasacondosperros2.jpg" alt="unacasacondosperros"/>
            </li>
            <li>
              <img src="./img/unacasacondosperros3.jpg" alt="unacasacondosperros"/>
            </li>
            <li>
              <img src="./img/unaCasaConDosPerros4.jpg" alt="unacasacondosperros"/>
            </li>
           
          </ul>
        </div>
        <div className='info-proyect'>
          <h5>UNA CASA CON DOS PERROS</h5>
          <ul>
            <li>Opera prima. Largometraje de ficción. Estreno 2023.</li>
            <li>Guion y dirección.</li>
            <li>Córdoba, Argentina. 2017 - 2023</li>
          </ul>
          <p>Atrapado en medio de una extraña guerra por la ocupación de la casa familiar, Manuel de 9 años, siente que su familia no es un lugar seguro para él. Pronto encuentra en la complicidad con su abuela esquizofrénica, un modo de resistir.</p>
        </div>      
      </Layout>
    )
  }