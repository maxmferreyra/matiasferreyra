import Layout from "../components/Layout"

export default function RenataNaza() {
  return (
    <Layout>
      <div className="slider">
          <ul>
          <li>
            <img src="./img/renataNaza1.png" alt="" />
          </li>
          <li>
            <img src="./img/renataNaza2.png" alt="" />
          </li>
          <li>
            <img src="./img/renataNaza3.png" alt=""/>
          </li>
          <li>
            <img src="./img/renataNaza4.png" alt=""/>
          </li>     
        </ul>
       
      </div>
      <div className='info-proyect'>
        <h5>RENATA, NAZARENO Y EL MUNDO DE LOS SENTIMIENTOS</h5>
        <ul>
          <li>Serie de TV / 13x 3 min. Stop Motion Cut-Out. Niñes de 5 a 7</li>
          <li>Producido por: Pakapaka, Centro Experimental de Animación y Secretaría de Extensión Universitaria de la U. N. C. y
              Multimedio S.R.T. con el apoyo del proyecto “Filosofar con Niñxs”2</li>
          <li>Guión: Matías Ferreyra & María Rosario Carlino <br />
              Asesor de contenido: Sergio Andrade <br />
              Dirección: María Rosario Carlino <br />
              Producción: Pablo Spollansky</li>
        </ul>
        <p>Renata y Nazareno son dos mejores amigos, que juegan y hablan sobre sus sentimientos y experiencias. Extraños y
          divertidos seres cobran vida a partir de sus conversaciones y salen de ellos para vivir sus propias aventuras.</p>
      <a target="blank" href="https://vimeo.com/184771785?embedded=true&source=vimeo_logo&owner=55891624">Link a Vimeo</a>
      </div> 
          
    </Layout>
  )
}