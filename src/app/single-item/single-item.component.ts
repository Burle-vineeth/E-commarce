import { Component } from '@angular/core';
import { EditserviceService } from '../userEntry/editservice.service';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.css']
})
export class SingleItemComponent {
  constructor(private editservice: EditserviceService) {}
  modalImage : any;
  ngOnInit() {
    this.modalImage = this.editservice.singleElementItem;
  }
}
