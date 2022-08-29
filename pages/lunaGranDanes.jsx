import Layout from "../components/Layout"

export default function LunaGranDanes() {
  return (
    <Layout>
      <div className="slider">
          <ul>
          <li>
            <img src="./img/grandanes1.png" alt="" />
          </li>
          <li>
            <img src="./img/grandanes2.png" alt="" />
          </li>
          <li >
            <img src="./img/grandanes3.png" alt=""/>
          </li>
          <li>
            <img src="./img/grandanes4.png" alt=""/>
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
        <h5>LUNA Y EL GRAN DANÉS</h5>
        <ul>
          <li>Capitulo piloto</li>
          <li>Serie de animación. Cut out digital.</li>
          <li>Producido por: El perro en la luna y Osa, estudio.</li>
        </ul>
        <p>Una niña y un perro. Luna es audaz, aventurera. El Gran Danés en cambio es perezoso y malhumorado. Prefiere
          quedarse en casa. Su tamaño impone respeto, su personalidad no tanto.
          Ella siempre tiene que arrastrarlo para salir. ¿Salir a dónde? ¡Afuera obvio! ¿Pero afuera dónde? Al mundo zombie. Si,
          los zombies dominan la Tierra. Pero no hacen cosas muy diferentes a los humanos.
          Después de su revolución, volvieron a trabajar en oficinas, tener citas incómodas en bares, etc. Pero también es la
          historia de un zombies de nuevo en humanos. Pero necesita ayuda: una misión perfecta para Luna y el Gran Danés.</p>
      
      <a href="https://vimeo.com/343717259">Link a Vimeo</a>
      </div>     
    </Layout>
  )
}