import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListarPacientesService {

  constructor(private http: HttpClient ) { }

  urlBack: string = "http://127.0.0.1:5000"

  listarPacientes = () => {
    return this.http.get(this.urlBack + "/get_paciente", {});
  }
}
