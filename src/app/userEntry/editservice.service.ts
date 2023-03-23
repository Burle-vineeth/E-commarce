import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageToken } from '../local';

@Injectable({
  providedIn: 'root'
})
export class EditserviceService {

  constructor(private router: Router,@Inject(LocalStorageToken) private storage: Storage) { }

  editableItem: any;
  itemIndex:any;

  editItem(item:any,index:any,url:any) {
    this.editableItem = item;
    this.itemIndex = index;
    this.storage.setItem('editUrl',url);
    this.router.navigateByUrl('edit');
  }

  singleElementItem : any;

  singleElement(item:any) {
    this.singleElementItem = item;
  }

}
