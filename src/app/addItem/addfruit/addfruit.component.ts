import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addfruit',
  templateUrl: './addfruit.component.html',
  styleUrls: ['./addfruit.component.css']
})
export class AddfruitComponent {
  constructor(private fb: FormBuilder,private http: HttpClient,private router: Router,private _snackBar: MatSnackBar) {}

  groceryItem = this.fb.group({
    item : ['',Validators.required],
    cost : ['',Validators.required],
    image : ['',Validators.required],
    quantity:[1],
  })

  addItem() {
    if(this.groceryItem.valid) {
      this.http.post('http://localhost:3000/fruits',this.groceryItem.value).subscribe( (data) => {
        console.log(data);
      })
      this.openSnackBar();
    }
    this.clearItem();
  }

  openSnackBar() {
    this._snackBar.open("Item is added to the Fruits List","close");
    setTimeout(() => {
      this._snackBar.dismiss();
    },2500)
  }

  clearItem() {
    this.groceryItem.reset();
  }

  cancel() {
    this.router.navigateByUrl('fruits');
  }

}
