import './style.scss'

import Project from '../../Project'

const Projects: React.FC<any> = () => {
    return (
        <section className='projects'>
            <Project thumbnail='thumbnail-one' />
            <Project thumbnail='thumbnail-two' />
            <Project thumbnail='thumbnail-three' />
            <Project thumbnail='thumbnail-four' />
        </section>
    )
}

export default Projects