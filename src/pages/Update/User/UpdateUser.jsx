import "./UpdateUser.scss";

import request from "../../../services/request";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const UpdateUser = () => {

    const { id } = useParams();

    const [nome, setNome] = useState();
    const [dtnascimento, setDtNasccimento] = useState();
    const [email, setEmail] = useState();
    const [profissao, setProfissao] = useState();

    useEffect(() => {
        request.get(`/clientes/v1.00/gerenciaCliente/${id}`)
        .then((response) => {
            let cliente = response.data.return.cliente;
            
            setNome(cliente.nome);
            setDtNasccimento(cliente.dt_nascimento);
            cliente.email == "NULL" ? setEmail("") : setEmail(cliente.email);
            cliente.profissao == "NULL" ? setProfissao("") : setProfissao(cliente.profissao);
        })
        .catch((error) => {
    
        })
    }, [id])

    function submitForm (event) {
        event.preventDefault();

        request.patch(
            "/clientes/v1.00/gerenciaCliente",
            {
                "id": id,
                "nome": nome,
                "dt_nascimento": dtnascimento,
                "email": email,
                "profissao": profissao
            }
        )
        .then((response) => {
            alert("Cliente atualizado com sucesso!")
        })
        .catch((error) => {
            alert("Error: " + error)
        })
    }   
        
    return (
        <>
            <form onSubmit={submitForm}>
                <h1>Formulário para cadastro de Clientes</h1>

                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" id="nome" name="nome" required value={nome} onChange={(e) => setNome(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="dt_nascimento">Data de Nascimento</label>
                    <input type="date" id="dt_nascimento" name="dt_nascimento" required value={dtnascimento} onChange={(e) => setDtNasccimento(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="profissao">Profissão</label>
                    <input type="text" id="profissao" name="profissao" value={profissao} onChange={(e) => setProfissao(e.target.value)} />
                </div>

                <button type="submit">Atualizar</button>
            </form>
        </>
    );
}