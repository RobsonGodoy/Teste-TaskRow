import React, { useState } from 'react';
import { validaNumeroXpto } from './XPTO';
import './Cadastro.css';

export function CadastroForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [numeroXPTO, setNumeroXPTO] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (nome.length < 3) {
      setMensagem('O campo "Nome" deve ter pelo menos 3 caracteres.');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setMensagem('Digite um email válido.');
      return;
    }

    const numero = parseInt(numeroXPTO.replace('-', ''));
    if (isNaN(numero) || !validaNumeroXpto(numero)) {
      setMensagem('Digite um número XPTO válido no formato 9999-9.');
      return;
    }

    setMensagem('Cadastro realizado com sucesso!');
  };

  return (
    <div className='BodyCadastro'>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <div className='formulario'>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            placeholder='ao menos 3 caracteres'
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className='formulario'>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            placeholder='e-mail'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='formulario'>
          <label>Número XPTO:</label>
          <input
            type="text"
            value={numeroXPTO}
            onChange={(e) => setNumeroXPTO(e.target.value)}
            placeholder="9999-9"
          />
        </div>
        <button id='buttonsubmit' type="submit">Cadastrar</button>
      </form>
      {mensagem && <div>{mensagem}</div>}
    </div>
  );
}
