import BtNotificacao from "../BtNotificacao";
import "./styles.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utilitarios/request";
import { Venda } from "../../models/venda";

function CartaoVendas() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const [vendas, setVendas] = useState<Venda[]>([]);

    useEffect(() => {

        const dataMin = minDate.toISOString().slice(0, 10);
        const dataMax = maxDate.toISOString().slice(0, 10);

        axios.get(`${BASE_URL}/vendas?minDate=${dataMin}&maxDate=${dataMax}`)
            .then(response => {
                setVendas(response.data.content);
            });
    }, [minDate, maxDate]);
    return (
        <div className="crmeta-card">
            <h2 className="crmeta-sales-title" >Tabela de Vendas</h2>
            <h4 className="crmeta-sales-subtitle">Data Inicial</h4>
            <div>
                <div className="crmeta-form-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="crmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <h4 className="crmeta-sales-subtitle">Data Final</h4>
                <div className="crmeta-form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="crmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>
            <div>
                <table className="crmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            vendas.map(venda => {
                                return (
                                    <tr key={venda.id}>
                                        <td className="show992">{venda.id}</td>
                                        <td className="show576">{new Date(venda.date).toLocaleDateString()}</td>
                                        <td>{venda.sellerName}</td>
                                        <td className="show992">{venda.visited}</td>
                                        <td className="show992">{venda.deals}</td>
                                        <td>R$ {venda.amount.toFixed(2)}</td>
                                        <td>
                                            <div className="crmeta-red-btn-container">
                                                <BtNotificacao idVenda={venda.id} />
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }


                    </tbody>

                </table>
            </div>

        </div>

    )
}

export default CartaoVendas;