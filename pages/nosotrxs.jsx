import Layout from '../components/Layout';

  export default function Nosotrxs() {
    return (
      <Layout>
        <div className="slider">
          <ul >
            <li>
              <img src="./img/nosotrxs1.jpg" alt="Nosotrxs"/>
            </li>
            <li>
              <img src="./img/nosotrxs2.png" alt="Nosotrxs"/>
            </li>
            <li>
              <img src="./img/nosotrxs3.jpg" alt="Nosotrxs"/>
            </li>
            <li>
              <img src="./img/nosotrxs4.jpg" alt="Nosotrxs"/>
            </li>
          </ul>
  
        </div>
        <div className='info-proyect'>
          <h5>NOS(OTRXS)</h5>
          <ul>
            <li>Cortometraje documental</li>
            <li>Dirección y guión</li>
            <li>Córdoba, Argentina. 2016-2017</li>
          </ul>
          <p>Un set en blanco. Una mujer sostiene una pregunta y un personaje encapuchado se resiste a responderla. La pregunta
            se vuelve otras. Una familia posa alrededor del padre para un retrato. Venus se busca en el espejo. Y una voz
            omnipresente exige respuestas, la respuesta es un grito.</p>
            <a target="blank" href="https://vimeo.com/207960859?embedded=true&source=vimeo_logo&owner=61150080">Link a Vimeo</a>
        </div>      
      </Layout>
    )
  }