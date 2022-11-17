import icone from '../../assets/img/iconNotificacao.svg';
import './styles.css';


function BtNotificacao() {
    return (
        <div className="crmeta-red-btn">
            <img src={icone} alt="Notificar"/>
        </div>
    )
}

export default BtNotificacao;