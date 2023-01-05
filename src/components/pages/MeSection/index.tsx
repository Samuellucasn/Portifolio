import './style.scss'

import Button from '../../Button'

const Me: React.FC<any> = () => {
    return (
        <main className='about-main'>
            <img src="/src/assets/red-moon.png" alt='red-moon' />

            <div className="about-me">
                <div className="perfil-img" />
                <h1>Samuel Lucas</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat iusto reiciendis, eaque natus, unde recusandae odio animi, sequi saepe quam consectetur ullam perferendis pariatur. Adipisci provident dolores magnam? Alias, eos?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe qui, quibusdam fugit ex quia corporis modi quas quis ullam, vitae quidem hic! Adipisci dolorem commodi aperiam et unde distinctio voluptate?
                Numquam nostrum illum ipsa laboriosam recusandae porro quisquam! Placeat reiciendis laborum repellendus accusamus vitae ratione incidunt odio omnis maxime, velit amet nam fugiat facere vero ex inventore perferendis ipsum error?</p>
            </div>

            <div className="wrapper">
                <div className="contacts">
                    <ul>
                        <li>GitHub</li>
                        <li>Linkedin</li>
                        <li>E-mail</li>
                    </ul>
                </div>

                <div className="stacks">
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                </div>
            </div>

        </main>
    )
}

export default Me