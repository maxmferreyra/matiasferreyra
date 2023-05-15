import Layout from '../components/Layout';

export default function anton() {
  return (
    <Layout>
      <div className="slider">
          <ul >
          <li>
            <img src="./img/anton.jpg"/>
          </li>
          <li>
            <img src="./img/anton2.png"/>
          </li>
          <li>
            <img src="./img/anton3.png" alt="" />
          </li>
          <li>
            <img src="./img/anton4.jpg" alt="" />
          </li>
        </ul>
      </div>
      <div className="info-proyect">
        <h5>ANTON</h5>
        <ul>
          <li>Serie de animación. 4 x 11</li>
          <li>Guión</li>
          <li>Córdoba, Argentina. 2013 - 2015</li>
        </ul>
        <p>Fantasma, el perro Antón (9), se come la torta de cumpleaños de su hermana, a pocos minutos de que lleguen los invitados. Antón debe ir hasta el almacén de la Mujer Gigante a comprar el azúcar que necesita su mamá para hacer una torta nueva. Esta simple tarea se transforma en una inesperada aventura con personajes raros que lo llevan hasta el Gran Árbol de las Orejas, lugar donde finalmente encuentra el azúcar que necesita.</p>
          <a target="blank" href="https://vimeo.com/67346451?embedded=true&source=vimeo_logo&owner=2168093">Link a Vimeo</a>
      </div>      
    </Layout>
  )
}