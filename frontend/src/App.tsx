import Header from "./componentes/Header";
import CartaoVendas from "./componentes/CartaoVendas";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>    
      <Header />
      <main>
        <section id="vendas">
          <div className="crmeta-container">
            <CartaoVendas />
            <ToastContainer/>

          </div>
        </section>
      </main>
    </>
  )
}

export default App;
