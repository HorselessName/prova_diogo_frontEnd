import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListarTarefasComponent} from "./listar-tarefas/listar-tarefas.component";
import {CadastrarTarefaComponent} from "./cadastrar-tarefa/cadastrar-tarefa.component";

const routes: Routes = [
  {
    path: "",
    component: ListarTarefasComponent,
  },
  {
    path: "pages/tarefa/listar",
    component: ListarTarefasComponent,
  },
  {
    path: "pages/tarefa/cadastrar",
    component: CadastrarTarefaComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
