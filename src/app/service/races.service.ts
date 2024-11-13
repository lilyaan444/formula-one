import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RacesService {
  constructor(private firestore: AngularFirestore) {}

  getRaces(): Observable<any[]> {
    return this.firestore.collection('races').valueChanges();
  }
}
