import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';
import { LocalStorageToken } from '../local';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  empty = true;

  itemList : any;

  firstList : any = [];
  secondList : any = [];
  thirdList : any = []; 

  firstListLen :any;
  secondListLen: any;
  thirdListLen: any;

  spin = false;
  constructor(@Inject(LocalStorageToken) private storage: Storage,private http: HttpClient,private _snackBar: MatSnackBar,private router: Router,private httpService: HttpServiceService) {}

  id = this.storage.getItem('userId');
  user = this.storage.getItem('userName');

  admin = false;
  ngOnInit() {
    if(this.id) {
      if(this.user) {
        this.admin = true;
      }
      this.httpService.getUserLogin().subscribe( (data) => {
        this.itemList = data;
  
        this.firstList = this.itemList.items;
        this.secondList = this.itemList.fruit;
        this.thirdList = this.itemList.others;
  
        this.firstListLen = this.firstList.length;
        this.secondListLen = this.secondList.length;
        this.thirdListLen = this.thirdList.length;

        if(this.firstListLen || this.secondListLen || this.thirdListLen) {
          this.empty = false;
        } else {
          this.empty = true;
        }
  
      },
      (err) => {
        console.log(err);
      }
      );
    }
  }

  removingData : any;

  removeCart(item:any,index:any,listNum:any) {
    this.spin = true;
    
    setTimeout(() => {
      console.log(index,this.firstListLen,this.secondListLen,this.thirdListLen,'1st');
      this.httpService.getUserLogin().subscribe( (data) => {
        this.removingData = data;
        
        if(listNum == 1) { 
          console.log('item');
          this.removingData.items.splice(index,1);
          this.upDateCart(this.removingData);
        } else if(listNum == 2) {
          console.log('fruit');
          this.removingData.fruit.splice(index,1);
          this.upDateCart(this.removingData);
        } else if(listNum == 3){
          console.log('other');
          this.removingData.others.splice(index,1);
          this.upDateCart(this.removingData);
        }
        console.log(index,this.firstListLen,this.secondListLen,this.thirdListLen,'2nd');
      })
    },1000)
  }

  upDateCart(data:any) {
    this.spin = false;
    
    this.firstList = data.items;
    this.secondList = data.fruit;
    this.thirdList = data.others;

    this.firstListLen = this.firstList.length;
    this.secondListLen = this.secondList.length;
    this.thirdListLen = this.secondList.length;

    if(this.firstListLen || this.secondListLen || this.thirdListLen) {
      this.empty = false;
    } else {
      this.empty = true;
    }

    this.http.put('http://localhost:3000/Logins/'+this.id,data).subscribe( (val) => {
      this.openSnackBar();
    })
    
  }

  openSnackBar() {
    this._snackBar.open("Item is removed from the cart","close");
    setTimeout( () => {
      this._snackBar.dismiss();
    },2000)
  }

  orderPlace() {
    this.router.navigateByUrl('order_place');
  }

  navigateTab(data:any) {
    this.router.navigateByUrl(data);
  }

}
