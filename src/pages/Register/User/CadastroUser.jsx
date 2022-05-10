import "./CadastroUser.scss";

import request from "../../../services/request";
import { useState } from "react";

export const CadastroUser = () => {

    const [nome, setNome] = useState("");
    const [dtnascimento, setDtNasccimento] = useState("");
    const [email, setEmail] = useState("");
    const [profissao, setProfissao] = useState("");

    function resetFields() {
        setNome("");
        setDtNasccimento("");
        setEmail("");
        setProfissao("");
    }

    function submitForm (event) {
        event.preventDefault();

        request.post(
            "/clientes/v1.00/gerenciaCliente",
            {
                "nome": nome,
                "dt_nascimento": dtnascimento,
                "email": email,
                "profissao": profissao
            }
        )
        .then((response) => {
            alert("Cadastro realizado com sucesso!")
            resetFields();
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

                <button type="submit">Cadastrar</button>
            </form>
        </>
    );
}