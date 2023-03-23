import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddObjComponent } from './addItem/add-obj/add-obj.component';
import { AddfruitComponent } from './addItem/addfruit/addfruit.component';
import { AddgroceryComponent } from './addItem/addgrocery/addgrocery.component';
import { CartComponent } from './cart/cart.component';
import { ErrorComponent } from './userEntry/error/error.component';
import { HomeComponent } from './home/home.component';
import { MytasksComponent } from './mytasks/mytasks.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { FruitsComponent } from './products/fruits/fruits.component';
import { GroceryComponent } from './products/grocery/grocery.component';
import { OtherobjComponent } from './products/otherobj/otherobj.component';
import { SignupComponent } from './userEntry/signup/signup.component';
import { LoginComponent } from './userEntry/login/login.component';
import { EditItemComponent } from './userEntry/edit-item/edit-item.component';
import { SingleItemComponent } from './single-item/single-item.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'grocery',component:GroceryComponent},
  {path:'grocery/add_groc',component:AddgroceryComponent},
  {path:'cart',component:CartComponent},
  {path:'order_place',component:PlaceOrderComponent},
  {path:'mytasks',component:MytasksComponent},
  {path:'fruits',component:FruitsComponent},
  {path:'fruits/add_fru',component:AddfruitComponent},
  {path:'others',component:OtherobjComponent},
  {path:'others/add_obj',component:AddObjComponent},
  {path:'edit',component:EditItemComponent},
  {path:'single_item',component:SingleItemComponent},
  {path:'**',component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
