import Layout from "../components/Layout"

export default function Defendernos() {
  return (
    <Layout>
      <div className="slider">
          <ul >
          <li id="slide1">
            <img src="./img/defendernos1.png" alt=""/>
          </li>
          <li id="slide2">
            <img src="./img/defendernos2.png" alt=""/>
          </li>
          <li id="slide3">
            <img src="./img/defendernos3.png" alt="" />
          </li>
          <li id="slide4">
            <img src="./img/defendernos4.png" alt="" />
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
        <h5>DEFENDERNOS</h5>
        <ul>
          <li>Largometraje de no ficción. En desarrollo</li>
          <li>Directora: Celeste Onaindia</li>
          <li>Guionista: Matias Ferreyra</li>
          <li>Córdoba, Argentina. 2020-2021</li>
        </ul>
        <p>Una boxeadora profesional, una fotógrafa activista lesbiana de barrio y una trabajadora sexual militante nos invitan a
          sumergirnos en un universo de estrategias de defensa y resistencia. La mezcla de sus historias de vida van desplegando
          prácticas de libertad en un mundo que les limita y obliga a ser de una manera determinada. Sus historias se trenzan en
          un relato colectivo con las experiencias de otrxs que intervienen la película como eco de las voces de nuestras
          protagonistas.</p>
      </div>      
    </Layout>
  )
}