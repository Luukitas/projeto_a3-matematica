import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListarPacientesService {

  constructor(private http: HttpClient ) { }

  urlBack: string = "http://127.0.0.1:5000"

  listarPacientes = () => {
    return this.http.get(this.urlBack + "/Inner_Join", {});
  }

  listarLeftJoin = () => {
    return this.http.get(this.urlBack + "/Left_Join", {});
  }
  
  listarLeftJoinNull = () => {
    return this.http.get(this.urlBack + "/LeftJoin_Null", {});
  }

  listarRightJoin = () => {
    return this.http.get(this.urlBack + "/Right_Join", {});
  }
  
  listarRightJoinNull = () => {
    return this.http.get(this.urlBack + "/Right_Join_Null", {});
  }
  
  listarFullOuter = () => {
    return this.http.get(this.urlBack + "/Full_Outer", {});
  }
  
  listarFullOuterNull = () => {
    return this.http.get(this.urlBack + "/Full_Outer_2", {});
  }

  listarPacietesPorNome = (entrada: {name: string}): Observable<any> => {
    return this.http.post<any>(this.urlBack + "/get_paciente_nome", entrada)
  }
}
