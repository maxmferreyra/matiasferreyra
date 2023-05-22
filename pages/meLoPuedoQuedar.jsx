import Layout from "../components/Layout"

export default function MeLoPuedoQuedar() {
  return (
    <Layout>
      <div className="slider">
          <ul >
          <li>
            <img src="./img/melopuedoquedar1.jpg" alt="" />
          </li>
          <li>
            <img src="./img/melopuedoquedar2.jpg" alt="" />
          </li>
          <li>
            <img src="./img/melopuedoquedar3.jpg" alt=""/>
          </li>
          <li>
            <img src="./img/melopuedoquedar4.jpeg" alt=""/>
          </li>   
        </ul>
      </div>
      <div className='info-proyect'>
        <h5>¿Me lo Puedo Quedar? / Can I keep him?</h5>
        <ul>
          <li>Serie Transmedia</li>
          <li>13 x 3 min. + 13 x 1 min</li>
          <li>Guionista</li>
        </ul>
        <p> Una perra llamada Shakira, un actor solitario, un perro que ve fantasmas, un periodista de apellido “gato”, una gata que lee clásicos...Estas son historias de animales y humanos, y de cómo conocerse cambió sus vidas. La narración se construye desde ambas perspectivas -humano y animal- mezclando documental, fantasía, humor y drama.</p>
            <a target="blank" href="https://vimeo.com/824869599">Link a Vimeo</a>
      </div>     
    </Layout>
  )
}