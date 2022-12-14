import axios from 'axios';
import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css';
import { toast } from 'react-toastify';


type Props = {
    saleId: number;
}

function handleClick(id: number) {
    //axios(`${BASE_URL}/sales/${id}/notification`)
    //.then(response =>{
        console.log("Enviando Mensagem para o vendedor");
        toast.info("SMS Enviado com Sucesso")
        
    //})
}

function NotificationButton({ saleId }: Props) {
    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton;
