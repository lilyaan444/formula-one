import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage {
  constructor(private alertController: AlertController) {}

  async contact() {
    const alert = await this.alertController.create({
      header: 'Contact',
      message:
        "Vous pouvez me contacter à l'adresse email suivante : mullerlilyan@proton.me",
      buttons: ['OK'],
    });
    await alert.present();
  }
}
