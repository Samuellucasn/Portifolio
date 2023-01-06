import './style.scss'

import Stamp from '../../Stamp'

const Me: React.FC<any> = () => {
    return (
        <main className='about-main'>

            <div className="about-me">
                <div className="perfil-img" />
                <h1>Samuel Lucas</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat iusto reiciendis, eaque natus, unde recusandae odio animi, sequi saepe quam consectetur ullam perferendis pariatur. Adipisci provident dolores magnam? Alias, eos?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe qui, quibusdam fugit ex quia corporis modi quas quis ullam, vitae quidem hic!</p>

                <div className="contacts">
                    <ul>
                        <li>GitHub</li>
                        <li>Linkedin</li>
                        <li>E-mail</li>
                    </ul>
                </div>
            </div>

            <div className="stacks-wrapper">

                <h1>STACKS</h1>

                <div className="stacks">
                    <Stamp className={''} ></Stamp>
                    <Stamp className={''} ></Stamp>
                    <Stamp className={''} ></Stamp>
                    <Stamp className={''} ></Stamp>
                    <Stamp className={''} ></Stamp>
                    <Stamp className={''} ></Stamp>
                </div>

                <h2>Javascript</h2>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore magnam fuga aliquid porro magni amet? Sed accusamus culpa, consequuntur molestias natus, impedit, quam ut animi aspernatur alias a adipisci iusto?
                Labore laudantium facere unde facilis! Saepe assumenda doloremque vel temporibus quibusdam, nemo perspiciatis iusto quis pariatur ea ex facilis, accusantium molestias eaque itaque, laudantium maiores quod iste? Est, non numquam!</p>
            </div>

        </main>
    )
}

export default Me