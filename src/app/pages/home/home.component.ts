import { Component, OnInit } from "@angular/core";
import { IPokemon, PokeapiService } from "src/app/services/pokeapi.service";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  private next: string;
  pokemons: Array<IPokemon>;

  constructor(private pokeapiService: PokeapiService) {
    this.pokemons = [];
    this.next = "";
  }

  ngOnInit() {
    this.pokeapiService
      .getPokemonsList()
      .subscribe((res) => this.updatePokemons(res));
  }

  loadPokemons() {
    this.pokeapiService
      .loadPokemons(this.next)
      .subscribe((res) => this.updatePokemons(res));
  }

  private updatePokemons(res: { next: string; results: { url: string }[] }) {
    this.next = res.next;
    res.results.forEach((resObj) =>
      this.pokeapiService
        .getPokemonsInfo(resObj.url)
        .subscribe((pokemon) => this.pokemons.push(pokemon))
    );
  }
}
