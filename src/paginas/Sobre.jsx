import estilos from './Sobre.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export function Sobre(){
    return(
        <div className={estilos.conteiner}>
            <img className={estilos.img} src='https://avatars.githubusercontent.com/u/134559720?s=400&u=5c85090b094bd6f62753aa9eb2cf3272021f16de&v=4' />
            
            <h3>Sarah Rodrigues da Cruz</h3>
            <p>Desenvolvedora Backend</p>
            <p>Tenho 19 anos e moro em Campinas - SP</p>
            <p>Atualmente sou Aprendiz de Digital Solutions na Empresa Bosch Campinas</p>
            

            <div className={estilos.links}>
            <a href="" target="_blank" style={{backgroundColor: '#0e76a8', color: '#fff'}}>
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
            <a href="https://github.com/sarahcruzz" target="_blank" style={{backgroundColor: '#24292e', color: '#fff'}}>
                <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
            </div>
        </div>
    )
}