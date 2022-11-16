import logo from '../../assets/img/logo.svg';
import './styles.css';


function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://github.com/MathewsBorges" className='animating-link'> <strong>Matheus N. Borges</strong></a>
                </p>
            </div>
        </header>

    )
}


export default Header;