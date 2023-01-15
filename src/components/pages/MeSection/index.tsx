import './style.scss'

import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {AiOutlineHtml5} from 'react-icons/ai'
import {FaHtml5, FaReact, FaGitAlt, FaCss3Alt} from 'react-icons/fa'
import {DiJavascript1} from 'react-icons/di'
import {IoLogoJavascript, IoLogoNodejs} from 'react-icons/io'
import {SiTypescript, SiMysql, SiPostman, SiMongodb} from 'react-icons/si'
import {TbBrandCss3} from 'react-icons/tb'

import Stamp from '../../Stamp'

const Me: React.FC<any> = () => {
    return (
        <main className='about-main'>

            <section className="about-me">
                <div className="perfil-img" />
                <h1>Samuel Lucas</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat iusto reiciendis, eaque natus, unde recusandae odio animi, sequi saepe quam consectetur ullam perferendis pariatur. Adipisci provident dolores magnam? Alias, eos?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe qui, quibusdam fugit ex quia corporis modi quas quis ullam, vitae quidem hic!</p>

                <div className="contacts">
                    <ul>
                        <li><Stamp style={{backgroundColor: '#4a8df2'}}><BsLinkedin /></Stamp>GitHub</li>
                        <li><Stamp style={{backgroundColor: '#ffff'}}><BsGithub /></Stamp>Linkedin</li>
                        <li><Stamp style={{backgroundColor: '#d15d5d'}}><MdEmail /></Stamp>E-mail</li>
                    </ul>
                </div>
            </section>

            <section className="stacks-wrapper">
                <div className="profissao">
                    <h1>Desenvolvedor web Front end</h1>
                </div>

                <h1>Stacks</h1>

                <div className="stacks">
                    <ul>
                        <li><Stamp style={{backgroundColor: '#fea256'}} ><AiOutlineHtml5 /></Stamp></li>
                        <li><Stamp style={{backgroundColor: '#324382'}} ><FaCss3Alt /></Stamp></li>
                        <li><Stamp style={{backgroundColor: '#f4dd59'}} ><DiJavascript1 /></Stamp></li>
                        <li><Stamp style={{backgroundColor: '#333ed9'}} ><SiTypescript /></Stamp></li>
                        <li><Stamp style={{backgroundColor: '#65d15d'}} ><IoLogoNodejs /></Stamp></li>
                        <li><Stamp style={{backgroundColor: '#5daed1'}} ><FaReact /></Stamp></li>
                        <li><Stamp style={{backgroundColor: '#e7cd85'}} ><SiMysql /></Stamp></li>
                        <li><Stamp style={{backgroundColor: '#44965c'}} ><SiMongodb /></Stamp></li>
                        <li><Stamp style={{backgroundColor: '#af7141'}} ><SiPostman /></Stamp></li>
                        <li><Stamp style={{backgroundColor: '#af4141'}} ><FaGitAlt /></Stamp></li>
                    </ul>
                </div>

                <h2>Javascript</h2>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore magnam fuga aliquid porro magni amet? Sed accusamus culpa, consequuntur molestias natus, impedit, quam ut animi aspernatur alias a adipisci iusto?
                Labore laudantium facere unde facilis! Saepe assumenda doloremque vel temporibus quibusdam, nemo perspiciatis iusto quis pariatur ea ex facilis, accusantium molestias eaque itaque, laudantium maiores quod iste? Est, non numquam!</p>
            </section>

        </main>
    )
}

export default Me