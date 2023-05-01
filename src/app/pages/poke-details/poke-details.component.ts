import { Component, OnInit } from "@angular/core";
import { IPokemon } from "src/app/services/pokeapi.service";

@Component({
  selector: "poke-details",
  templateUrl: "./poke-details.component.html",
  styleUrls: ["./poke-details.component.css"],
})
export class PokeDetailsComponent implements OnInit {
  pokemon: IPokemon | undefined;

  ngOnInit() {
    this.pokemon = window.history.state;
    if (this.pokemon) {
      this.pokemon.height /= 10;
      this.pokemon.weight /= 10;
    }
  }
}
