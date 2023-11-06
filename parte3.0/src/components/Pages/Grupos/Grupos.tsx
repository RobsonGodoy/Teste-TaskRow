import React, { useState } from 'react';
import './Grupos.css'
import GruposTree from './RenderGrupos/index';
import gruposData from './grupos.json';

export const Grupos: React.FC = () => {
  const [grupoSelecionado, setGrupoSelecionado] = useState<string | number | null>(null);
  const [query, setQuery] = useState<string>('');
  const [resultados, setResultados] = useState<string[]>([]);


  const handleGrupoClick = (grupoId: number) => {
    setGrupoSelecionado(grupoId);
  };

  const handlePesquisa = () => {
    if (!query) {
      setResultados([]);
      return;
    }

    const gruposEncontrados: string[] = [];

    const buscaRecursiva = (grupo: any) => {
      if (grupo.usuarios) {
        for (const usuario of grupo.usuarios) {
          if (usuario.nome && usuario.nome.toLowerCase().includes(query.toLowerCase())) {
            gruposEncontrados.push(grupo.nome || '');
            break;
          }
        }
      }

      if (grupo.subGrupos) {
        for (const subGrupo of grupo.subGrupos) {
          buscaRecursiva(subGrupo);
        }
      }
    };

    gruposData.grupos.forEach((grupo) => buscaRecursiva(grupo));
    setResultados(gruposEncontrados);
  };

  return (
    <div className="BodyGrupos">
      <div className="InfoGrupos">
        <h2>Estrutura de Grupos</h2>
        <div className='Pesquisa'>
          <input
            id='inputpesquisa'
            type="text"
            placeholder="Pesquisar usuário"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handlePesquisa}>Pesquisar</button>
        </div>
        <GruposTree grupos={gruposData.grupos} onGrupoClick={handleGrupoClick} />
      </div>

      <div className="ConteudoGrupoSelecionado">
        {grupoSelecionado && <p>Grupo selecionado: {grupoSelecionado}</p>}
        <div className="ResultadosPesquisa">
        {resultados && (
          <div>
            <h3>Grupos que contêm usuários com o nome "{query}":</h3>
            <ul>
              {resultados.map((resultado) => (
                <li key={resultado}>{resultado}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      </div>
      
    </div>
  );
};
