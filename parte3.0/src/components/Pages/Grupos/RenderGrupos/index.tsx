import React from 'react';

interface Grupo {
  idGrupo: number;
  nome: string;
  subGrupos?: Grupo[];
}

interface GruposTreeProps {
  grupos: Grupo[];
  onGrupoClick: (idGrupo: number) => void;
}

const GruposTree: React.FC<GruposTreeProps> = ({ grupos, onGrupoClick }) => {
  return (
    <ul>
      {grupos.map((grupo) => (
        <li key={grupo.idGrupo} onClick={() => onGrupoClick(grupo.idGrupo)}>
          {grupo.nome}
          {grupo.subGrupos && grupo.subGrupos.length > 0 && (
            <GruposTree grupos={grupo.subGrupos} onGrupoClick={onGrupoClick} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default GruposTree;
