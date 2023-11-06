import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './components/Layout';
import { Grupos } from "./components/Pages/Grupos/Grupos";
import { CadastroForm } from "./components/Pages/Cadastro/Cadastro";
import { Home } from "./components/Pages/Home/Home";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Layout>
              <Home />
            </Layout>            
          }/>
          <Route path="/grupos" element= {
            <Layout>
              <Grupos />
            </Layout>
          } />
          <Route path="/cadastro" element= {
            <Layout>
              <CadastroForm />
            </Layout>
          } />
            
            </Routes>
          </BrowserRouter>        
    </>
  )
}

export default App
