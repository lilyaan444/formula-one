import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Driver } from '../model/driver.model';

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  constructor(private firestore: AngularFirestore) {}

  getDrivers(): Observable<Driver[]> {
    return this.firestore
      .collection<Driver>('drivers')
      .valueChanges({ idField: 'id' });
  }

  addDriver(driver: Driver) {
    return this.firestore.collection('drivers').add(driver);
  }

  updateDriver(id: string, driver: Driver) {
    return this.firestore.collection('drivers').doc(id).update(driver);
  }

  deleteDriver(id: string) {
    return this.firestore.collection('drivers').doc(id).delete();
  }
}
