import { Component, OnInit } from '@angular/core';
import { ListarPacientesService } from './listar-pacientes.service';

@Component({
  selector: 'app-listar-pacientes',
  templateUrl: './listar-pacientes.component.html',
  styleUrls: ['./listar-pacientes.component.css']
})
export class ListarPacientesComponent implements OnInit {
  icone: any = document.getElementById("icone")?.style;
  listaPacientes: any = []
  
  constructor(private service: ListarPacientesService){}

  ngOnInit(): void {
    this.listarPacientes();
  }

  abrirFecharIcone(){
    this.icone.rotate= "180deg"
  }

  listarPacientes = () => {
    this.service.listarPacientes().subscribe({
      next: (response) => {
        this.listaPacientes = response;
      }, 
      error: (error) => {
        console.log(error);
        
      }
    })
  }
}
