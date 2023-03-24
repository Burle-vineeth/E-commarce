import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './userEntry/error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './home/home.component';
import { AddgroceryComponent } from './addItem/addgrocery/addgrocery.component';
import { CartComponent } from './cart/cart.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
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
import { MaterialModule } from './material.module';

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
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
    MaterialModule,
    NgbModule,
  ],
  providers: [
    MatDatepickerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
