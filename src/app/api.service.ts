import { HttpClient } from '@angular/common/http';
import { Injectable ,inject} from '@angular/core';
import { Firestore, collection,getDocs } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  firestore = inject(Firestore);

  constructor(public http:HttpClient) { }

  public async getproducts() {
    const colRef= collection(this.firestore, 'products');
    const snap= await getDocs(colRef);
    return snap.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  }

}
