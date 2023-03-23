import { EventEmitter, Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageToken } from './local';

@Injectable({
  providedIn: 'root'
})
export class LogserviceService {

  constructor(@Inject(LocalStorageToken) private storage: Storage) { }

  dataEmit = new BehaviorSubject("profile");


  getLogin(param: any) {
    this.dataEmit.next(param);
    this.storage.setItem("userName",param);
  }

  getUserDetails(user:any) {
    console.log(user);
    this.storage.setItem('userId',user.id);
    console.log(this.storage.getItem('userId'));
  }

}
