import './style.scss'

const Me: React.FC<any> = () => {
    return (
        <main className='about-main'>
            <img src="/src/assets/red-moon.png" alt='red-moon' />

            <div className="about-me">
                <div className="perfil-img" />
                
            </div>

            <div className="contacts">
                <ul>
                    <li>GitHub</li>
                    <li>Linkedin</li>
                    <li>E-mail</li>
                </ul>
            </div>

            <div className="stacks">

            </div>

        </main>
    )
}

export default Me