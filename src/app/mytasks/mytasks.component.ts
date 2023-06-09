import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';
import { LocalStorageToken } from '../local';

@Component({
  selector: 'app-mytasks',
  templateUrl: './mytasks.component.html',
  styleUrls: ['./mytasks.component.css']
})
export class MytasksComponent {
  empty = true;

  constructor(private http:HttpClient,@Inject(LocalStorageToken) private storage: Storage,private router: Router,private httpService: HttpServiceService) {}
  id = this.storage.getItem('userId');

  orderedList : any;
  itemList : any;
  fruitList : any;
  otherList : any;

  grocount : number = 0;
  frucount : number = 0;
  othercount : number = 0;

  ngOnInit(): void {
    if(this.id) {
      this.httpService.getUserLogin().subscribe( (data) => {
        this.orderedList = data;

        this.fruitList = this.orderedList.myfruits;
        this.frucount = this.fruitList.length;

        this.itemList = this.orderedList.myorders;
        this.grocount = this.itemList.length;

        this.otherList = this.orderedList.myothers;
        this.othercount = this.otherList.length;
        if(this.frucount || this.grocount || this.othercount) {
          this.empty = false;
        } else {
          this.empty = true;
        }
      }, 
      (err) => {
        console.log(err);
      }
      )
    }
  }

  navigateTab(data:any) {
    this.router.navigateByUrl(data);
  }


}
