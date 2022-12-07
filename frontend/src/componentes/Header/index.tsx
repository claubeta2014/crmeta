import face from '../../assets/img/logo.svg';
import "./styles.css";

function Header() {
    return (
        <header>
            <div className="crmeta-logo-container">
                <img src={face} alt="CRMeta" />
                <h1>Roberta-Metas</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.instagram.com/robertabeta02/"> @robertabeta02</a>
                </p>
            </div>
        </header>
    )
}

export default Header;