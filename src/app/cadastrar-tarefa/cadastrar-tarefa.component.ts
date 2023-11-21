import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface Categoria {
  "nome": "string",
  "categoriaId": number
}

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})

export class CadastrarTarefaComponent implements OnInit {
  status: any;
  titulo: any;
  descricao: any;
  categorias: Categoria[] = [
  ]

  categoriaId: number = 0;


  novaTarefa() {
    // TODO: Cadastrar Tarefa.
  }

  constructor(
    // Nao esquece do Private
    private httpClient: HttpClient
  ) {
  }

  ngOnInit(){
    this.httpClient
      .get<Categoria[]>("https://localhost:7015/api/categoria/listar")
      .subscribe({
        //A requição funcionou
        next: (categorias) => {
          console.table(categorias);
          this.categorias = categorias;
        },
        //A requição não funcionou
        error: (erro) => {
          console.log(erro);
        },
      });
  }

}
