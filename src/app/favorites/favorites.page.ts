import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import { Driver } from '../model/driver.model';
import { Races } from '../model/races.model';
import { DriverService } from '../service/driver.service';
import { RacesService } from '../service/races.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  races: Races[] = [];
  drivers: Driver[] = [];

  constructor(
    private racesService: RacesService,
    private driversService: DriverService
  ) {}
  ngOnInit() {
    this.loadRaces();
    this.loadDrivers();
  }

  loadRaces() {
    this.racesService.getRacesFavorite().subscribe((data) => {
      this.races = data;
    });
  }

  loadDrivers() {
    this.driversService.getDriversFavorite().subscribe((data) => {
      this.drivers = data;
    });
  }
  async downloadFavorite() {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Liste de mes favoris', 10, 10);

    // Ajoutez les courses
    doc.setFontSize(14);
    doc.text('Courses:', 10, 20);
    this.races.forEach((race, index) => {
      doc.text(`${index + 1}. ${race.raceName}`, 10, 30 + index * 10);
    });

    // Ajoutez les pilotes
    doc.setFontSize(14);
    doc.text('Pilotes:', 10, 40 + this.races.length * 10); // Adjusted to avoid overlap
    this.drivers.forEach((driver, index) => {
      doc.text(
        `${index + 1}. ${driver.familyName}`,
        10,
        50 + this.races.length * 10 + index * 10 // Adjusted to avoid overlap
      );
    });

    doc.save('favorites.pdf'); // Télécharge le PDF
  }
}
