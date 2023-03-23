import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {MatIconModule} from '@angular/material/icon'; 
import { AppComponent } from './app.component';
import { ErrorComponent } from './userEntry/error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import { AddgroceryComponent } from './addItem/addgrocery/addgrocery.component';
import { CartComponent } from './cart/cart.component'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { PlaceOrderComponent } from './place-order/place-order.component'; 
import {MatStepperModule} from '@angular/material/stepper'; 
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';
import { MytasksComponent } from './mytasks/mytasks.component';
import { AddfruitComponent } from './addItem/addfruit/addfruit.component';
import { AddObjComponent } from './addItem/add-obj/add-obj.component';
import { GroceryComponent } from './products/grocery/grocery.component';
import { FruitsComponent } from './products/fruits/fruits.component';
import { OtherobjComponent } from './products/otherobj/otherobj.component';
import { LoginComponent } from './userEntry/login/login.component';
import { SignupComponent } from './userEntry/signup/signup.component';
import { EditItemComponent } from './userEntry/edit-item/edit-item.component';
import { SingleItemComponent } from './single-item/single-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    AddgroceryComponent,
    GroceryComponent,
    CartComponent,
    PlaceOrderComponent,
    MytasksComponent,
    FruitsComponent,
    AddfruitComponent,
    OtherobjComponent,
    AddObjComponent,
    SignupComponent,
    EditItemComponent,
    SingleItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatFormFieldModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
    NgbModule,
  ],
  providers: [
    MatDatepickerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
