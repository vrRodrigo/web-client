import "./Home.scss";

import request from "./../services/request";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {

  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    request.get("/clientes/v1.00/gerenciaCliente")
    .then((response) => {
      setClientes(response.data.return.clientes)
    })
    .catch((error) => {

    })
  }, [])


  function deleteCliente(id) {
    if(window.confirm(`Tem certeza que deseja excluir o cliente: #${id}?`)) {
      request.delete(`/clientes/v1.00/gerenciaCliente/${id}`)
      .then((response) => {
        const newClientList = clientes.filter((item) => item.id !== id);
        setClientes(newClientList);
        alert(`Cliente id: ${id} deletado com sucesso!`)
      })
      .catch((error) => {
  
      })
    }
  }

  return (
    <div className="page">
      <div className="title">
        <h1>Bem vindo</h1>
      </div>
      <div className="content">
        <table>
          <caption>Clientes Cadastrados</caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Data de Nascimento</th>
              <th scope="col">E-mail</th>
              <th scope="col">Profissão</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody id="tclients">
            {
              clientes.map(cliente => {
                let updateLink = `/update-user/${cliente.id}`;
                return (
                  <tr key={cliente.id}>
                    <td>{cliente.id}</td>
                    <td>{cliente.nome}</td>
                    <td>{cliente.dt_nascimento}</td>
                    <td>{cliente.email}</td>
                    <td>{cliente.profissao}</td>
                    <td style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
                      <Link to={updateLink}><button>Atualizar</button></Link>
                      <button onClick={() => deleteCliente(cliente.id)}>Deletar</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
