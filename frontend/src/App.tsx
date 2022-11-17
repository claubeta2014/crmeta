import Header from "./componentes/Header"
import CartaoVendas from "./componentes/CartaoVendas"

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="vendas">
          <div className="crmeta-container">
            <CartaoVendas />

          </div>
        </section>
      </main>
    </>
  )
}

export default App
