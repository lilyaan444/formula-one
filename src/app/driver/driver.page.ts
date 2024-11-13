import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Driver } from '../model/driver.model';
import { DriverService } from '../service/driver.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.page.html',
  styleUrls: ['./driver.page.scss'],
})
export class DriverPage implements OnInit {
  drivers: Driver[] = [];

  constructor(
    private driverService: DriverService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.loadDrivers();
  }

  loadDrivers() {
    this.driverService.getDrivers().subscribe((data) => {
      this.drivers = data;
    });
  }

  addToFavorites(driver: any) {
    console.log('ajouter');
  }

  async showDriverOptions(driver: any) {
    const alert = await this.alertController.create({
      header: `${driver.givenName} ${driver.familyName}`,
      buttons: [
        {
          text: 'Modifier',
          handler: () => {
            this.editDriver(driver);
          },
        },
        {
          text: 'Supprimer',
          role: 'destructive',
          handler: () => {
            this.deleteDriver(driver.id);
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

  async editDriver(driver: Driver) {
    const alert = await this.alertController.create({
      header: 'Modifier le pilote',
      inputs: [
        {
          name: 'givenName',
          type: 'text',
          placeholder: 'Prénom',
          value: driver.givenName,
        },
        {
          name: 'familyName',
          type: 'text',
          placeholder: 'Nom',
          value: driver.familyName,
        },
        {
          name: 'nationality',
          type: 'text',
          placeholder: 'Nationalité',
          value: driver.nationality,
        },
        {
          name: 'dateOfBirth',
          type: 'date',
          value: driver.dateOfBirth,
        },
        {
          name: 'code',
          type: 'text',
          placeholder: 'Code',
          value: driver.code,
        },
        {
          name: 'permanentNumber',
          type: 'text',
          placeholder: 'Numéro permanent',
          value: driver.permanentNumber,
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
            const updatedDriver = { ...driver, ...data };
            this.driverService.updateDriver(driver.id, updatedDriver);
          },
        },
      ],
    });

    await alert.present();
  }

  deleteDriver(id: string) {
    this.driverService.deleteDriver(id);
  }

  async addDriver() {
    const alert = await this.alertController.create({
      header: 'Ajouter un pilote',
      inputs: [
        {
          name: 'givenName',
          type: 'text',
          placeholder: 'Prénom',
        },
        {
          name: 'familyName',
          type: 'text',
          placeholder: 'Nom',
        },
        {
          name: 'nationality',
          type: 'text',
          placeholder: 'Nationalité',
        },
        {
          name: 'dateOfBirth',
          type: 'date',
        },
        {
          name: 'code',
          type: 'text',
          placeholder: 'Code',
        },
        {
          name: 'permanentNumber',
          type: 'text',
          placeholder: 'Numéro permanent',
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
            const newDriver: Driver = {
              ...data,
              driverId: Math.random().toString(36).substr(2, 9),
              url: '',
            };
            this.driverService.addDriver(newDriver);
          },
        },
      ],
    });

    await alert.present();
  }
}
