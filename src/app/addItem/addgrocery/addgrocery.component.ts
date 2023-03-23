import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addgrocery',
  templateUrl: './addgrocery.component.html',
  styleUrls: ['./addgrocery.component.css']
})
export class AddgroceryComponent {
  constructor(private fb: FormBuilder,private http: HttpClient,private router: Router,private _snackBar: MatSnackBar) {}

  groceryItem = this.fb.group({
    item : ['',Validators.required],
    cost : ['',Validators.required],
    image : ['',Validators.required],
    quantity:[1],
  })

  addItem() {
    if(this.groceryItem.valid) {
      this.http.post('http://localhost:3000/grocery',this.groceryItem.value).subscribe( (data) => {
        console.log(data);
      })
      this.openSnackBar();
    }
    this.clearItem();
  }

  openSnackBar() {
    this._snackBar.open("Item is added to the Grocery List","close");
    setTimeout(() => {
      this._snackBar.dismiss();
    },2500)
  }


  clearItem() {
    this.groceryItem.reset();
  }

  cancel() {
    this.router.navigateByUrl('grocery');
  }

}
