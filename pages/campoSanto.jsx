  import Layout from '../components/Layout';

  export default function CampoSanto() {
    return (
      <Layout>
        <div className="slider">
          <ul>
            <li>
              <img src="./img/camposanto1.png" alt="Campo Santo"/>
            </li>
            <li>
              <img src="./img/camposanto2.png" alt="Campo Santo"/>
            </li>
            <li>
              <img src="./img/camposanto3.png" alt="Campo Santo" />
            </li>
            <li>
              <img src="./img/camposanto4.png" alt="Campo Santo"/>
            </li>
          </ul>
        </div>
        <div className='info-proyect'>
          <h5>CAMPO SANTO</h5>
          <ul>
            <li>Cortometraje de ficción. 16mm</li>
            <li>Guión y dirección</li>
            <li>Córdoba, Argentina 2011-2012</li>
          </ul>
          <p>Luego de experimentar un encuentro cercano con una virgen coplera, Clementina (50) decide emprender un viaje en
            moto en busca de un lugar llamado Campo Santo, el camino le traerá un encuentro inesperado con el pasado.</p>
        </div>      
      </Layout>
    )
  }


