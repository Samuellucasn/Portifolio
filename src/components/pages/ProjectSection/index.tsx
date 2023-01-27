import './style.scss'

import ProjectCard from '../../ProjectCard'

const Projects: React.FC<any> = () => {
    return (
        <section className='projects'>
            <ProjectCard thumbnail='thumbnail-one' code='https://github.com/Samuellucasn/book-search' web='https://book-search-a2bc3f.netlify.app/' />
            <ProjectCard thumbnail='thumbnail-two' code='https://github.com/Samuellucasn/Cafeteria-SC' web='https://samuellucasn.github.io/Cafeteria-SC/'/>
            <ProjectCard thumbnail='thumbnail-three' code='https://github.com/Samuellucasn/Calendar' web='http://calendar-233.netlify.app/'/>
            <ProjectCard thumbnail='thumbnail-four' code='https://github.com/Samuellucasn/PlayerDeMusicas' web='https://samuellucasn.github.io/PlayerDeMusicas/'/>

            <a href="https://github.com/Samuellucasn?tab=repositories" target={'_blank'} rel={'external'} ><button className="others" > Veja outros Projetos </button></a>
        </section>
    )
}

export default Projects