import axios from 'axios';
import icone from '../../assets/img/iconNotificacao.svg';
import { BASE_URL } from '../../utilitarios/request';
import './styles.css';

type Props = {
    idVenda: number;
}

function handleClick(identVenda: number){
    axios(`${BASE_URL}/vendas/${identVenda}/notificacao`)
    .then(response => {
        console.log("Êxito")
    })
}

function BtNotificacao({idVenda} : Props) {
    return (
        <div className="crmeta-red-btn" onClick={() => handleClick(idVenda)}>
            <img src={icone} alt="Notificar"/>
        </div>
    )
}

export default BtNotificacao;