import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  games:any[];

  constructor() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': environment.KEY,
        'X-RapidAPI-Host': environment.HOST
      }
    };
    
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity', options)
      .then(response => response.json())
      .then(response => {
        this.games = [];
        for (let index = 0; index < 10; index++) {
          this.games.push(response[index]);
          
        }
      })
      .catch(err => console.error(err));
  }

}
