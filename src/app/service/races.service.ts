import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Races } from '../model/races.model';

@Injectable({
  providedIn: 'root',
})
export class RacesService {
  constructor(private firestore: AngularFirestore) {}

  getRaces(): Observable<Races[]> {
    return this.firestore
      .collection<Races>('races')
      .valueChanges({ idField: 'id' });
  }

  getRacesFavorite(): Observable<Races[]> {
    return this.firestore
      .collection<Races>('races', (ref) => ref.where('isFavorite', '==', true))
      .valueChanges({ idField: 'id' });
  }

  addRaces(races: Races) {
    return this.firestore.collection('races').add(races);
  }

  updateRace(id: string, races: Races) {
    return this.firestore.collection('races').doc(id).update(races);
  }

  deleteRace(id: string) {
    return this.firestore.collection('races').doc(id).delete();
  }

  addToFavorites(races: Races) {
    return this.firestore.collection('favorites').doc(races.id).set(races);
  }

  removeFromFavorites(id: string) {
    return this.firestore.collection('favorites').doc(id).delete();
  }

  getFavorites(): Observable<Races[]> {
    return this.firestore
      .collection<Races>('favorites')
      .valueChanges({ idField: 'id' });
  }
}
