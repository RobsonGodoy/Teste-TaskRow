import * as fs from 'fs';
import { promisify } from 'util';

const carregaArquivo = async (arquivo: string): Promise<string> => {
  const readFile = promisify(fs.readFile);
  try {
    const data = await readFile(arquivo, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    throw new Error(`Erro ao carregar o arquivo: ${error.message}`);
  }
};

class Grupos {
  grupos: any;

  constructor() {
    this.grupos = null;
  }

  async carrega(): Promise<void> {
    const arquivo = './grupos.json';
    try {
      this.grupos = await carregaArquivo(arquivo);
    } catch (error) {
      throw new Error(`Erro ao carregar o arquivo JSON: ${error.message}`);
    }
  }

  busca(nomeUsuario: string, callback: (resultados: string[]) => void): void {
    if (!this.grupos || !Array.isArray(this.grupos.grupos)) {
      throw new Error('O arquivo JSON não foi carregado ou está em um formato inválido.');
    }

    const resultados: string[] = [];

    const buscaRecursiva = (grupo: any) => {
      if (grupo.usuarios) {
        for (const usuario of grupo.usuarios) {
          if (usuario.nome && usuario.nome.toLowerCase().includes(nomeUsuario.toLowerCase())) {
            resultados.push(grupo.nome || '');
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

    for (const grupo of this.grupos.grupos) {
      buscaRecursiva(grupo);
    }

    callback(resultados);
  }
}

const grupos = new Grupos();
grupos.carrega()
  .then(() => {
    grupos.busca('José', (resultados) => {
      console.log('Grupos que contêm usuários com nome "José":');
      console.log(resultados);
    });
  })
  .catch((error) => {
    console.error(error.message);
  });
