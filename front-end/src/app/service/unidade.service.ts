import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Unidade } from '../model/unidade';
import { ICrudService } from './i-crud-service';

@Injectable({
  providedIn: 'root'
})
export class UnidadeService implements ICrudService<Unidade> {

  constructor(private http: HttpClient) { }

  apiUrl: string = environment.API_URL + '/config/unidade/';

  get(termoBusca?: string): Observable<Unidade[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<Unidade[]>(url);
  }

  getById(id: number): Observable<Unidade> {
    return this.http.get<Unidade>(this.apiUrl+id);
  }

  insert(objeto: Unidade): Observable<Unidade> {
    return this.http.post<Unidade>(this.apiUrl, objeto);
  }

  update(objeto: Unidade): Observable<Unidade> {
    return this.http.put<Unidade>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.apiUrl+id);
  }

}
