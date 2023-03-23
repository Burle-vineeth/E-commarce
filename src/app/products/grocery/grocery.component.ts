import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { flatMap } from 'rxjs';
import { LocalStorageToken } from 'src/app/local';
import { EditserviceService } from 'src/app/userEntry/editservice.service';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent {

  items : any;

  touched: any = false;

  admin = false;

  nolog = false;
  
  constructor(private http: HttpClient,@Inject(LocalStorageToken) private sotrage: Storage,private _snackBar: MatSnackBar,private router: Router,private editservice: EditserviceService) {}

  ngOnInit() {
    if(this.sotrage.getItem('userName') == "vin") {
      this.admin = true;
    }
    this.http.get('http://localhost:3000/grocery').subscribe( (data) => {
      this.items = data;
    })
  }

  user : any;
  id : any;
  addCart(item:any) {
    this.id = this.sotrage.getItem('userId');
    if(this.id) {
      this.nolog = false;
      this.http.get('http://localhost:3000/Logins/' + this.id).subscribe( (data) => {
        this.user = data;
  
        let found = true;
        for(let x = 0;x < this.user.items.length;x++) {
          if(this.user.items[x].image == item.image) {
            found = false;
            this.user.items[x].quantity = Number(this.user.items[x].quantity) + 1;
          }
        }
        if(found) {
          this.user.items.push(item);
        }
        this.sendCartData(data);
  
      })
      return true;
    } else {
      this.nolog = true;
      setTimeout( () => {
        this.nolog = false;
      },3000);
    }
    return false;
  }

  logIn() {
    this.sotrage.setItem('loginURL','grocery')
    this.router.navigateByUrl('login');
    this.nolog = false;
  }

  sendCartData(data : any) {
    this.http.put("http://localhost:3000/Logins/"+this.id,data).subscribe( (param) => {
      // console.log(param);
      this.openSnackBar();
    })
  }

  openSnackBar() {
    this._snackBar.open("Item is added to the cart","close");
    setTimeout(() => {
      this._snackBar.dismiss();
    },2500)
  }

  buynow(item:any) {
    let result = this.addCart(item);
    if(result) {
      setTimeout( () => {
        this.router.navigateByUrl('/cart');
      },2000)
    }
  }

  modalImage: any = {};

  singleItem(item:any) {
    this.editservice.singleElement(item);
    this.router.navigateByUrl('single_item');
    this.modalImage = item;
    this.touched = true;
  }

  untouch() {
    this.touched = false;
  }

  popaddCart(item:any) {
    this.addCart(item);
    this.untouch();
  }

  popbuynow(item:any) {
    this.buynow(item);
    this.untouch();
  }

  editItem(item:any,index:any) {
    this.editservice.editItem(item,index,'grocery')
  }
  
}
