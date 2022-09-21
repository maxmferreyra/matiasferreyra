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
        <p>Antón, un niño de 6 años, comienza un fantástico viaje a partir de un inesperado accidente doméstico: Fantasma, su
          perro, se come la torta de cumpleaños de su hermana, a pocos minutos de que lleguen los invitados.
          Antón deberá ir hasta el almacén de la Mujer Gigante a comprar el azúcar que necesita su mamá para hacer una
          nueva torta. Esta simple tarea se transformará sorpresivamente en una gran aventura que lo llevará hasta el Gran
          Árbol de las Orejas, lugar donde encontrará finalmente el azúcar para hacer la torta de cumpleaños.</p>
          <a target="blank" href="https://vimeo.com/67346451?embedded=true&source=vimeo_logo&owner=2168093">Link a Vimeo</a>
      </div>      
    </Layout>
  )
}