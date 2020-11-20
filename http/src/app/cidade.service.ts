import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  // tslint:disable-next-line: deprecation
  constructor(private http: Http) { }

  consultar(): Promise<any> {
    return this.http.get('http://localhost:3000/cidades')
        .toPromise()
        .then(response =>  response.json() );
  }

}
