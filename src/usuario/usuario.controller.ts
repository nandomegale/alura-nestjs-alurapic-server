import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.entity';

@Controller('users')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Get(':nomeDeUsuario')
  public buscaPorNomeDeUsuario(@Param('nomeDeUsuario') nomeDeUsuario: string){
    const usuarioEncontrado = this.usuarioService.buscarPorNomeDeUsuario(nomeDeUsuario);
    return usuarioEncontrado;
  }

  @Post()
  public criar(@Body() usuario: Usuario): Usuario {
    const usuarioCriado = this.usuarioService.criar(usuario);
    return usuarioCriado;
  }
}
