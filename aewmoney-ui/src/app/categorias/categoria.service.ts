import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  CategoriasUrl = 'http://localhost:8080/categorias';
  constructor(private http: Http) { }

  listarTodas(): Promise<any> {

    const headers = new Headers();

    headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    return this.http.get(this.CategoriasUrl, {headers})
       .toPromise()
       .then(dados => dados.json());
  }
}
