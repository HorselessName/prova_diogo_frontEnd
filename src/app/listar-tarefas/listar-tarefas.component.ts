import {Component, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";

export interface Tarefa {
  // TODO: Mapear com a Model da API.
}

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.css']
})
export class ListarTarefasComponent implements OnInit {

  title = 'prova-diogo';

  listaTarefas: any[] = [];
  colunasTabela: string[] = [
    "status",
    "titulo",
    "descricao",
    "tipo"
  ];

  constructor(
    // Precisa usar o PRIVATE senão ele não acha... :| :|
    private httpClient: HttpClient
  ) {
    // Construtor pra trazer a lista de tarefas
  }

  ngOnInit(){

    console.log("NG On Init??? Do Componente. #### Chegou aqui? << ")

    this.httpClient.get<any[]>("https://localhost:7015/api/tarefa/listar").subscribe({
      next: (tarefasResponse) =>{
        this.listaTarefas = tarefasResponse;
      },
      error: (erro) => {
        console.log(erro);
      }
    });

  }

}
