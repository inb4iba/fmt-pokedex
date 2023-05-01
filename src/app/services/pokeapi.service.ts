import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export interface IPokemon {
  name: string;
  sprites: {
    other: {
      ["official-artwork"]: {
        front_default: string;
      };
    };
  };
  weight: number;
  height: number;
  abilities: [
    {
      ability: {
        name: string;
      };
    }
  ];
}

@Injectable({
  providedIn: "root",
})
export class PokeapiService {
  private baseURL = "https://pokeapi.co/api/v2";

  constructor(private http: HttpClient) {}

  getPokemonsList() {
    return this.http.get<{ next: string; results: Array<{ url: string }> }>(
      `${this.baseURL}/pokemon`
    );
  }

  getPokemonsInfo(url: string) {
    return this.http.get<IPokemon>(url);
  }

  loadPokemons(url: string) {
    return this.http.get<{ next: string; results: Array<{ url: string }> }>(
      url
    );
  }
}
