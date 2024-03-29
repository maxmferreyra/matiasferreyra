import Layout from '../components/Layout';

  export default function NosInventamos() {
    return (
      <Layout>
        <div className="slider">
          <ul >
            <li>
              <img src="./img/nosinventamosunafuera1.png" alt="Nos inventamos una fuerza"/>
            </li>
            <li>
              <img src="./img/nosinventamosunafuera2.png" alt="Nos inventamos una fuerza"/>
            </li>
            <li>
              <img src="./img/nosinventamosunafuera3.jpg" alt=""/>
            </li>
            <li>
              <img src="./img/nosinventamosunafuera4.JPG" alt=""/>
            </li>
          </ul>
        </div>
        <div className='info-proyect'>
          <h5>NOS INVENTAMOS UNA FUERZA</h5>
          <ul>
            <li>Ensayo documental. En desarrollo</li>
            <li>Guión y dirección: Matías Ferreyra</li>
            <li>Córdoba, Argentina. 2020 - 2021</li>
          </ul>
          <p>Matías, Emiliano, Nicolás, Alberto y yo, nos conocimos en la escuela de ballet de un teatro. Nos hicimos amigos y construimos, en poco tiempo, una familia, quizás esa con la que los cinco alguna vez soñamos. Este retrato íntimo y enérgico es una forma de pensarlos a la distancia, poner sus cuerpos en movimiento y rendirle homenaje al valor de la amistad.</p>
            <a target="blank" href="https://vimeo.com/479100375?embedded=true&source=vimeo_logo&owner=20334939">Link a Vimeo</a>
        </div>      
      </Layout>
    )
  }