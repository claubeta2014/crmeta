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

    const [venda, setVendas] = useState<Venda[]>([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/vendas`)
        .then(response => {
            setVendas(response.data.content);
        });
    }, []);
    return (
        <div className="crmeta-card">
            <h2 className="crmeta-sales-title">Vendas</h2>
            <div>
                <div className="crmeta-form-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="crmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
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
                            venda.map(venda => {
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
                                                <BtNotificacao />
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