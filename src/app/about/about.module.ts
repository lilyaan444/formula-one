import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutPageRoutingModule } from './about-routing.module';

import { AboutPage } from './about.page';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Ajout du schéma pour Web Components

  imports: [CommonModule, FormsModule, IonicModule, AboutPageRoutingModule],
  declarations: [AboutPage],
})
export class AboutPageModule {}
