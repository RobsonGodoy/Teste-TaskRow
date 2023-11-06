import React from 'react';

type Grupo = {
  idGrupo: number;
  nome: string;
  usuarios: { idUsuario: number; nome: string }[];
};

type DetalhesGrupoProps = {
  grupo: Grupo | null;
};

const DetalhesGrupo: React.FC<DetalhesGrupoProps> = ({ grupo }) => {
  if (!grupo) {
    return <div>Selecione um grupo para ver os detalhes.</div>;
  }

  return (
    <div>
      <h3>Detalhes do Grupo</h3>
      <p>Nome do Grupo: {grupo.nome}</p>
      <h4>Usuários:</h4>
      <ul>
        {grupo.usuarios ? (
          grupo.usuarios.map((usuario) => (
            <li key={usuario.idUsuario}>{usuario.nome}</li>
          ))
        ) : (
          <li>Nenhum usuário encontrado.</li>
        )}
      </ul>
    </div>
  );
};

export default DetalhesGrupo;
