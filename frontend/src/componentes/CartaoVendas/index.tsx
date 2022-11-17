import BtNotificacao from "../BtNotificacao"
import "./styles.css"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

function CartaoVendas() {
    return (
        <div className="crmeta-card">
            <h2 className="crmeta-sales-title">Vendas</h2>
            <div>
                <div className="crmeta-form-control-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
                        className="crmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="crmeta-form-control-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
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
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">08/07/2022</td>
                            <td>Claudia</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="crmeta-red-btn-container">
                                    <BtNotificacao />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">08/07/2022</td>
                            <td>Roberta</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="crmeta-red-btn-container">
                                    <BtNotificacao />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">08/07/2022</td>
                            <td>Paixao</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="crmeta-red-btn-container">
                                    <BtNotificacao />
                                </div>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>

        </div>

    )
}

export default CartaoVendas