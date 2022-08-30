import Head from "next/head";
import Link from "next/link";


const name = "Matias Ferreyra";
const secondTitle = "Guionista / Script Doctor";

export default function Layout({children, title, description, home}) {
   
  return (
    <div>
      <Head>
          <title>{title}</title>
          <meta 
              name='description'
              content={description}
          />
      </Head>
      <header>
          <>
            <div className="names">
              <h1>{name}</h1>
              <h2>{secondTitle}</h2>
            </div>
            
            <div className="contact-icons">
              <ul>
                <li>
                  <a href="https://api.whatsapp.com/send?phone=543513518295" target="blank">
                    <img src="./img/telefono-inteligente.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="mailto:matiasgrosello@gmail.com" target="blank">
                    <img src="./img/mail.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/matias-ferreyra-905316141/"target="blank">
                    <img src="./img/linkedin.png" alt="" id="img-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </>
      </header>
      <main>
       <section className="mainSection">
        <h5>Proyectos personales</h5>
          <div className="personalProyects">
            <Link href="/campoSanto">
            <a>Campo Santo</a>
            </Link>
            <Link href="/nosInventamos">
            <a>Nos inventamos una fuerza</a>
            </Link>
            <Link href="/nosotrxs">
            <a>Nos(otrxs)</a>
            </Link>
            <Link href="/casaDosPerros">
            <a>Una casa con dos perros</a>
            </Link>
          </div>
        <h5>En colaboración</h5>
          <div className="colaborationProyects">
            <Link href="/anton">
            <a>Anton</a>
            </Link>
            <Link href="/antoMundoRaro">
            <a>Anton y el mundo raro</a>
            </Link>
            <Link href="/cruzRoja">
            <a>Cruz Roja</a>
            </Link>
            <Link href="/defendernos">
            <a>Defendernos</a>
            </Link>
            <Link href="/lunaGranDanes">
            <a>Luna y el Gran Danes</a>
            </Link> 
            <Link href="/meLoPuedoQuedar">
            <a>Me lo puedo quedar</a>
            </Link> 
            <Link href="/pasosParaVolar">
            <a>Pasos para Volar</a>
            </Link> 
            <Link href="/renataNaza">
            <a>Renata, Nazareno y el mundo mágico</a>
            </Link> 
            <Link href="/rutas">
            <a>Rutas</a>
            </Link>  
          </div>
          
        
      </section>
      <section className="mainChildren">
          {children}
      </section> 
      </main>
      <nav>
        <Link href="/about">
          <a>Acerca de mí</a>
        </Link>
      </nav>
        {!home && (
      <div className="container-backHome">
        <Link href="/">
          <a className="backHome">← Volver al inicio</a>
        </Link>
      </div>
      )}
    </div>
  )
}

Layout.defaultProps = {
    title: "Matias Ferreyra",
    description: "Descripcion de mi sitio web"
}
