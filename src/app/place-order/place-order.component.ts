import { HttpClient } from '@angular/common/http';
import { Component, Inject, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { flatMap } from 'rxjs';
import { HttpServiceService } from '../http-service.service';
import { LocalStorageToken } from '../local';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent {

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient, @Inject(LocalStorageToken) private storage: Storage,private httpService: HttpServiceService) { }

  firstFormGroup = this.fb.group({
    name: [null, [Validators.required]],
    mobNum: [null, [Validators.required, Validators.minLength(10)]],
    expDate: [null],
  });

  secondFormGroup = this.fb.group({
    city: [null, [Validators.required]],
    dist: [null, [Validators.required]],
    state: [null, [Validators.required]],
    pincode: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
  });

  isEditable = true;

  totalAmount : number = 0;

  @ViewChild('stepper') stepper: any;

  placed = false;

  id = this.storage.getItem('userId');

  userDetails: any;

  cartList : any;
  renderData : any;

  ngOnInit() {
    this.cartList = [];
    this.httpService.getUserLogin().subscribe( (data) => {
      this.renderData = data;

      for(let x = 0; x < this.renderData.items.length;x++) {
        this.cartList.push(this.renderData.items[x]);
      }

      for(let x = 0; x < this.renderData.fruit.length;x++) {
        this.cartList.push(this.renderData.fruit[x]);
      }

      for(let x = 0; x < this.renderData.others.length;x++) {
        this.cartList.push(this.renderData.others[x]);
      }

    }, 
    (err) => {
      console.log(err);
    }
    )
  }

  formSubmit() {
    this.placed = true;

    this.httpService.getUserLogin().subscribe((data) => {
      this.userDetails = data;
      for (let i = 0; i < this.userDetails.items.length; i++) {
        this.userDetails.myorders.push(this.userDetails.items[i]);
        this.totalAmount += Number(this.userDetails.items[i].cost);
      }

      for(let i = 0; i < this.userDetails.fruit.length;i++) {
        this.userDetails.myfruits.push(this.userDetails.fruit[i]);
        this.totalAmount += Number(this.userDetails.fruit[i].cost);
      }

      for(let i = 0; i < this.userDetails.others.length;i++) {
        this.userDetails.myothers.push(this.userDetails.others[i]);
        this.totalAmount += Number(this.userDetails.others[i].cost);
      }

      this.userDetails.items = [];
      this.userDetails.fruit = [];
      this.userDetails.others = [];

      this.updateUserDetails(this.userDetails);
    },
    (err) => {
      console.log(err);
    })
    setTimeout(() => {
      this.router.navigateByUrl('/mytasks');
      this.placed = false;
      this.stepper.reset();
    }, 3000);
  }

  updateUserDetails(data: any) {
    this.http.put('http://localhost:3000/Logins/' + this.id, data).subscribe((data) => {
      console.log(data);
    },
    (err) => {
      console.log(err);
      
    })
  }

}
