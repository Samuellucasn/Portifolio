import {} from '../interfaces/types'

import {FaReact, FaGitAlt, FaCss3Alt, FaNodeJs, FaHtml5, FaSass} from 'react-icons/fa'
import {DiJavascript1} from 'react-icons/di'
import {SiTypescript, SiMongodb} from 'react-icons/si'
import {GrMysql} from 'react-icons/gr'

export const useSkillProp : any = (id : number) => {
    const skillProps = [
        {color: '#d77242', icon: FaHtml5},
        {color: '#2284c6', icon: FaCss3Alt},
        {color: '#eed752', icon: DiJavascript1},
        {color: '#2162a8', icon: SiTypescript},
        {color: '#79b840', icon: FaNodeJs},
        {color: '#3cb3e6', icon: FaReact},
        {color: '#e286a6', icon: FaSass},
        {color: '#eaeaea', icon: GrMysql},
        {color: '#44965c', icon: SiMongodb},
        {color: '#af4141', icon: FaGitAlt}
    ]

    const skillAbout = [
        {name: 'HTML', desc: 'Linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML. HyTime é um padrão para a representação estruturada de hipermídia e conteúdo baseado em tempo.'},
        {name: 'CSS', desc: 'Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags <style>. Também é possível, adicionar estilos adicionando um link para um arquivo CSS que contém os estilos.'},
        {name: 'JavaScript', desc: 'Linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.'},
        {name: 'TypeScript', desc: 'TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.'},
        {name: 'NodeJs/Express', desc: 'Framework para Node.js que fornece recursos mínimos para construção de servidores web. Foi lançado como software livre e de código aberto sob a Licença MIT. É um dos mais populares frameworks para servidores em Node.js. '},
        {name: 'React', desc: 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.'},
        {name: 'Sass', desc: 'Linguagem de folhas de estilo concebida inicialmente por Hampton Catlin e desenvolvida por Natalie Weizenbaum. Depois de suas versões iniciais, Weizenbaum e Chris Eppstein continuaram a estender Sass com SassScript, uma simples linguagem de script usada em arquivos Sass'},
        {name: 'MySQL', desc: 'Sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation, com mais de 10 milhões de instalações pelo mundo'},
        {name: 'MongoDB', desc: 'Software de banco de dados orientado a documentos livre, de código aberto e multiplataforma, escrito na linguagem C++. Classificado como um programa de banco de dados NoSQL, o MongoDB usa documentos semelhantes a JSON com esquemas.'},
        {name: 'Git', desc: 'Sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.'}
    ]

    const teste = skillAbout[id]

    return {
        skillProps, teste
    }
}