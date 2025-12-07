import { useState } from "react";
import './Formulario.css'

export function Formulario() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const dadosParaEnviar = {
            nome: nome,
            email: email
        };

        try {
            const resposta = await fetch('http://localhost:8080/cliente', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dadosParaEnviar)
            });

            if (resposta.ok) {
                alert("Formulário enviado com sucesso!");
                setNome("");
                setEmail("");
            } else {
                alert("Erro ao enviar o formulário.");
            }
        } catch (error) {
            alert("Erro ao enviar o formulário.");
        }
    }




    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Nome:</label>
                <input 
                    type="text" 
                    name="nome" 
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Digite seu nome" 
                />
            </div>
            <div>
                <label htmlFor="">Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite seu email" 
                />
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
}