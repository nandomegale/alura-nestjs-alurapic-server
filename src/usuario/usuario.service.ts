import { Injectable } from '@nestjs/common';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {
  private usuarios: Usuario[] = [];

  public buscarPorNomeDeUsuario(nomeDeUsuario: string): Usuario {
    const usuarioEncontrado = this.usuarios.find(
      (usuario) => usuario.nomeDeUsuario === nomeDeUsuario,
    );
    return usuarioEncontrado;
  }

  public criar(usuario: Usuario): Usuario {
    this.usuarios.push(usuario);
    return usuario;
  }
}
