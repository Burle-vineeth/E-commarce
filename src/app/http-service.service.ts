import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { LocalStorageToken } from './local';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient,@Inject(LocalStorageToken) private storage: Storage) { }

  id = this.storage.getItem('userId');

  adminAddItem(url: any,itemData: any) {
    return this.http.post('http://localhost:3000/' + url,itemData);
  }

  getUserLogin() {
    return this.http.get('http://localhost:3000/Logins/'+this.id);
  }

  thingsList(item: any) {
    return this.http.get('http://localhost:3000/'+ item);
  }

}
