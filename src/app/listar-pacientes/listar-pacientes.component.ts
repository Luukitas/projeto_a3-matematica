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
  listaComorbidades: any = []
  campoPesquisaPaciente: string = "";
  metodoSelecionado = {};

  listaMetodo = [
    {nome: 'Todos os pacientes'},
    {nome: 'Pacientes com comorbidades'},
    {nome: 'Pacientes sem comorbidade'},
    {nome: 'Todas as comorbidades'},
    {nome: 'Comorbidades sem paciente'},
    {nome: 'Todos os pacientes e comorbidades'},
    {nome: 'Comorbidade sem paciente e paciente sem comorbidade'}  
  ]
  
  constructor(private service: ListarPacientesService){}

  ngOnInit(): void {
    this.listarPacientes();
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

  listarLeftJoin = () => {
    this.service.listarLeftJoin().subscribe({
      next: (response) => {
        this.listaPacientes = response;
      }, 
      error: (error) => {
        console.log(error);
        
      }
    })
  }
  
  listarLeftJoinNull = () => {
    this.service.listarLeftJoinNull().subscribe({
      next: (response) => {
        this.listaPacientes = response;
      }, 
      error: (error) => {
        console.log(error);
        
      }
    })
  }
  
  listarRightJoin = () => {
    this.service.listarRightJoin().subscribe({
      next: (response) => {
        this.listaPacientes = response;
      }, 
      error: (error) => {
        console.log(error);
        
      }
    })
  }
  
  listarRightJoinNull = () => {
    this.service.listarRightJoinNull().subscribe({
      next: (response) => {
        this.listaPacientes = response;
      }, 
      error: (error) => {
        console.log(error);
        
      }
    })
  }
  
  listarFullOuter = () => {
    this.service.listarFullOuter().subscribe({
      next: (response) => {
        this.listaPacientes = response;
      }, 
      error: (error) => {
        console.log(error);
        
      }
    })
  }
  
  listarFullOuterNull = () => {
    this.service.listarFullOuterNull().subscribe({
      next: (response) => {
        this.listaPacientes = response;
      }, 
      error: (error) => {
        console.log(error);
        
      }
    })
  }

  listarMetodos = () => {
    if (this.metodoSelecionado === 'Pacientes com comorbidades') {
      this.listarPacientes();
    }else if (this.metodoSelecionado === "Todos os pacientes") {
      this.listarLeftJoin();
    }else if(this.metodoSelecionado === "Pacientes sem comorbidade") {
      this.listarLeftJoinNull();
    }else if(this.metodoSelecionado === 'Todas as comorbidades'){
      this.listarRightJoin();
    }else if(this.metodoSelecionado === 'Comorbidades sem paciente'){
      this.listarRightJoinNull();
    }else if(this.metodoSelecionado === 'Todos os pacientes e comorbidades'){
      this.listarFullOuter();
    }else if(this.metodoSelecionado === 'Comorbidade sem paciente e paciente sem comorbidade'){
      this.listarFullOuterNull();
    }
  }
}
