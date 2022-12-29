import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profissional } from '../model/profissional';
import { ICrudService } from './i-crud-service';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService implements ICrudService<Profissional> {

  constructor(
    private http: HttpClient
  ) { }

  apiUrl: string = environment.API_URL + '/profissional/';

  get(termoBusca?: string | undefined): Observable<Profissional[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<Profissional[]>(url);
  }

  getById(id: number): Observable<Profissional> {
    let url = this.apiUrl + id;
    return this.http.get<Profissional>(url);
  }

  insert(objeto: Profissional): Observable<Profissional> {
    return this.http.post<Profissional>(this.apiUrl, objeto);
  }

  update(objeto: Profissional): Observable<Profissional> {
    return this.http.put<Profissional>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }

}
