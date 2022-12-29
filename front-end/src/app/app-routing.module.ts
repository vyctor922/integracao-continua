import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaFormComponent } from './components/agenda-form/agenda-form.component';
import { AgendaListComponent } from './components/agenda-list/agenda-list.component';
import { AtendimentoListComponent } from './components/atendimento-list/atendimento-list.component';
import { ConvenioFormComponent } from './components/convenio-form/convenio-form.component';
import { ConvenioListComponent } from './components/convenio-list/convenio-list.component';
import { EspecialidadeFormComponent } from './components/especialidade-form/especialidade-form.component';
import { EspecialidadeListComponent } from './components/especialidade-list/especialidade-list.component';
import { LoginComponent } from './components/login/login.component';
import { PacienteFormComponent } from './components/paciente-form/paciente-form.component';
import { PacienteListComponent } from './components/paciente-list/paciente-list.component';
import { ProfissionalFormComponent } from './components/profissional-form/profissional-form.component';
import { ProfissionalListComponent } from './components/profissional-list/profissional-list.component';
import { UnidadeFormComponent } from './components/unidade-form/unidade-form.component';
import { UnidadeListComponent } from './components/unidade-list/unidade-list.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';
import { AutenticacaoGuard } from './service/autenticacao.guard';

const routes: Routes = [
  { path: '', canActivate: [AutenticacaoGuard], children: [
    { path: 'agenda', component: AgendaListComponent },
    { path: 'agenda/form', component: AgendaFormComponent },
    { path: 'atendimento', component: AtendimentoListComponent},    
    { path: 'pacientes', component: PacienteListComponent, },
    { path: 'pacientes/form', component: PacienteFormComponent },
    { path: 'profissionais', component: ProfissionalListComponent },
    { path: 'profissionais/form', component: ProfissionalFormComponent },
    { path: 'convenios', component: ConvenioListComponent},
    { path: 'convenios/form', component: ConvenioFormComponent},
    { path: 'config', canActivate: [AutenticacaoGuard], data: {papel: 'ROLE_ADMIN'}, children: [
      { path: 'unidades', component: UnidadeListComponent },
      { path: 'unidades/form', component: UnidadeFormComponent },
      { path: 'especialidades', component: EspecialidadeListComponent },
      { path: 'especialidades/form', component: EspecialidadeFormComponent },
      { path: 'usuarios', component: UsuarioListComponent },
      { path: 'usuarios/form', component: UsuarioFormComponent }
    ] }
  ]},
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
