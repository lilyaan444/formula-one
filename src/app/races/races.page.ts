import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Races } from '../model/races.model';
import { RacesService } from '../service/races.service';

@Component({
  selector: 'app-races',
  templateUrl: './races.page.html',
  styleUrls: ['./races.page.scss'],
})
export class RacesPage implements OnInit {
  races: Races[] = [];
  filteredRaces: Races[] = [];
  searchTerm: string = '';
  favorites: Races[] = [];

  constructor(
    private racesService: RacesService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.loadRaces();
    this.loadFavorites();
  }

  loadRaces() {
    this.racesService.getRaces().subscribe((data) => {
      this.races = data;
      this.filteredRaces = data;
    });
  }

  filterRaces() {
    const term = this.searchTerm.toLowerCase();
    this.filteredRaces = this.races.filter((race) => {
      return (
        race.raceName.toLowerCase().includes(term) ||
        race.Circuit.Location.country.toLowerCase().includes(term) ||
        race.Circuit.Location.long.toString().includes(term)
      );
    });
  }

  loadFavorites() {
    this.racesService.getFavorites().subscribe((data) => {
      this.favorites = data;
    });
  }

  toggleFavorite(race: Races) {
    const updatedRace = { ...race, isFavorite: !race.isFavorite };
    this.racesService.updateRace(race.id, updatedRace);
  }

  isFavorite(race: Races) {
    return this.favorites.some((favorite) => favorite.id === race.id);
  }

  async showRaceOptions(race: Races) {
    const alert = await this.alertController.create({
      header: `${race.raceName}`,
      buttons: [
        {
          text: 'Modifier',
          handler: () => {
            this.editRace(race);
          },
        },
        {
          text: 'Supprimer',
          role: 'destructive',
          handler: () => {
            this.deleteRace(race.id);
          },
        },
        {
          text: 'Ajouter/Retirer des favoris',
          handler: () => {
            this.toggleFavorite(race);
          },
        },
        {
          text: 'Annuler',
          role: 'cancel',
        },
      ],
    });
    await alert.present();
  }

  async editRace(race: Races) {
    const alert = await this.alertController.create({
      header: 'Modifier la course',
      inputs: [
        {
          name: 'raceName',
          type: 'text',
          placeholder: 'Nom de la course',
          value: race.raceName,
        },
        {
          name: 'circuitName',
          type: 'text',
          placeholder: 'Nom du circuit',
          value: race.Circuit.circuitName,
        },
        {
          name: 'location',
          type: 'text',
          placeholder: 'Localisation',
          value: race.Circuit.Location.locality,
        },
        {
          name: 'country',
          type: 'text',
          placeholder: 'Pays',
          value: race.Circuit.Location.country,
        },
        {
          name: 'season',
          type: 'number',
          placeholder: 'Saison',
          value: parseInt(race.season),
        },
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
        },
        {
          text: 'Sauvegarder',
          handler: (data) => {
            const updatedRace = {
              ...race,
              Circuit: {
                ...race.Circuit,
                circuitName: data.circuitName,
                Location: {
                  ...race.Circuit.Location,
                  locality: data.location,
                  country: data.country,
                },
              },
              raceName: data.raceName,
              season: data.season.toString(),
            };
            this.racesService.updateRace(race.id, updatedRace);
          },
        },
      ],
    });

    await alert.present();
  }

  deleteRace(id: string) {
    this.racesService.deleteRace(id);
  }

  async addRace() {
    const alert = await this.alertController.create({
      header: 'Ajouter une course',
      inputs: [
        {
          name: 'raceName',
          type: 'text',
          placeholder: 'Nom de la course',
        },
        {
          name: 'circuitName',
          type: 'text',
          placeholder: 'Nom du circuit',
        },
        {
          name: 'location',
          type: 'text',
          placeholder: 'Localisation',
        },
        {
          name: 'country',
          type: 'text',
          placeholder: 'Pays',
        },
        {
          name: 'season',
          type: 'number',
          placeholder: 'Saison',
        },
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
        },
        {
          text: 'Ajouter',
          handler: (data) => {
            const newRace: Races = {
              ...data,
              id: Math.random().toString(36).substr(2, 9),
              url: '',
              circuitID: Math.random().toString(36).substr(2, 9),
              lat: '',
              long: '',
              locality: data.location,
              Circuit: {
                Location: {
                  country: data.country,
                  lat: '',
                  locality: data.location,
                  long: '',
                },
                circuitId: Math.random().toString(36).substr(2, 9),
                circuitName: data.circuitName,
                url: '',
              },
              season: data.season.toString(),
              isFavorite: false,
              date: '',
              round: '',
              time: '',
              __collections__: {},
            };
            this.racesService.addRaces(newRace);
          },
        },
      ],
    });

    await alert.present();
  }
}
