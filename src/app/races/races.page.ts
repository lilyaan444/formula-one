import { Component, OnInit } from '@angular/core';
import { RacesService } from '../service/races.service';

@Component({
  selector: 'app-races',
  templateUrl: './races.page.html',
  styleUrls: ['./races.page.scss'],
})
export class RacesPage implements OnInit {
  races: any[] = [];

  constructor(private raceService: RacesService) {}

  ngOnInit() {
    this.raceService.getRaces().subscribe((data) => {
      this.races = data;
    });
  }

  addToFavorites(race: any) {
    // Logique pour ajouter aux favoris
    console.log('Ajouté aux favoris:', race);
  }
}
