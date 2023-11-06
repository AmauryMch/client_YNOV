import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs';
import { Pokemon } from '../models/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiRoute = environment.baseUrl + '/api/pokemons/';

  constructor(private http: HttpClient) { }

  getPokemonList(): Promise<Pokemon[]> {
    return new Promise((resolve, reject) => {
      this.http.get<Pokemon[]>(this.apiRoute).pipe(
        catchError((err) => {
          reject(err)
          throw err;
        })
      ).subscribe((response) => {
        console.log(response);
        resolve(response);
      })
    })
  }
}
