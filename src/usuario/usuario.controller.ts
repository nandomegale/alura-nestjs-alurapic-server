import { Body, Controller, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller('users')
export class UsuarioController {

  constructor(
    private usuarioService: UsuarioService
  ){

  }

  @Post()
  public criar(@Body() usuario) {
   const usuarioCriado = this.usuarioService.criar(usuario);
    return usuarioCriado;
  }
}
