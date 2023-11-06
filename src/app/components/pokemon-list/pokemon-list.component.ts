import { Component } from '@angular/core';
import { Pokemon } from 'src/app/models/Pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { NewsService } from 'src/app/services/news.service';
import { News } from 'src/app/models/News';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {

  public pokemons: Pokemon[] = [];
  public news?: News;

  constructor(private pokemonService: PokemonService, private newsService: NewsService) { }

  ngOnInit(): void {
    //this.getList();
    this.getNews();
  }

  getList() {
    this.pokemonService.getPokemonList().then((response) => {
      if (response) {
        this.pokemons = response
      }

    }).catch((err) => {
      console.log(err);
    })
  }

  getNews(pokemon: string = 'Pikachu', date: Date = new Date('2023-10-06')) {
    this.newsService.getNews(pokemon, date).then((res) => {
      this.news = res;
    })
  }

}
