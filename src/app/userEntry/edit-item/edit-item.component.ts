import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LocalStorageToken } from 'src/app/local';
import { EditserviceService } from '../editservice.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent {
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private _snackBar: MatSnackBar, private editservice: EditserviceService,@Inject(LocalStorageToken) private storage: Storage) { }

  groceryItem = this.fb.group({
    item: ['', Validators.required],
    cost: ['', Validators.required],
    image: ['', Validators.required],
    quantity: [1],
  })

  itemRenderData: any;
  itemRenderIndex: any;
  editUrl : any;

  ngOnInit() {
    this.itemRenderIndex = Number(this.editservice.itemIndex) + 1;

    this.itemRenderData = this.editservice.editableItem;
    this.groceryItem.controls.item.setValue(this.itemRenderData.item);
    this.groceryItem.controls.cost.setValue(this.itemRenderData.cost);
    this.groceryItem.controls.image.setValue(this.itemRenderData.image);
    console.log(this.groceryItem.value);

    this.editUrl = this.storage.getItem('editUrl');
    
  }

  itemArray: any;

  updateItem() {
    if (this.groceryItem.valid) {
      console.log(this.groceryItem.value);

      this.http.put('http://localhost:3000/' + this.editUrl + '/' + this.itemRenderIndex, this.groceryItem.value).subscribe((data) => {
          console.log(data);
        })

      this.openSnackBar();
    }
    this.clearItem();
  }

  openSnackBar() {
    this._snackBar.open("Item is updated successfully", "close");
    setTimeout(() => {
      this._snackBar.dismiss();
    }, 2500)
  }

  clearItem() {
    this.groceryItem.reset();
  }

  cancel() {
    this.router.navigateByUrl('fruits');
  }
}
