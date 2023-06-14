import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { IsNomeDeUsuarioUnicoConstraint } from './is-nome-de-usuario-unico.validator';
@Module({
  imports: [],
  controllers: [UsuarioController],
  providers: [UsuarioService, IsNomeDeUsuarioUnicoConstraint],
})
export class UsuarioModule {}
