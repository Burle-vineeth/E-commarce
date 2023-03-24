import { Routes } from "@angular/router";
import { AddObjComponent } from "./addItem/add-obj/add-obj.component";
import { AddfruitComponent } from "./addItem/addfruit/addfruit.component";
import { AddgroceryComponent } from "./addItem/addgrocery/addgrocery.component";
import { AdminGuard } from "./admin.guard";
import { CartComponent } from "./cart/cart.component";
import { HomeComponent } from "./home/home.component";
import { MytasksComponent } from "./mytasks/mytasks.component";
import { PlaceOrderComponent } from "./place-order/place-order.component";
import { FruitsComponent } from "./products/fruits/fruits.component";
import { GroceryComponent } from "./products/grocery/grocery.component";
import { OtherobjComponent } from "./products/otherobj/otherobj.component";
import { SingleItemComponent } from "./single-item/single-item.component";
import { UserLoginGuard } from "./user-login.guard";
import { EditItemComponent } from "./userEntry/edit-item/edit-item.component";
import { ErrorComponent } from "./userEntry/error/error.component";
import { LoginComponent } from "./userEntry/login/login.component";
import { SignupComponent } from "./userEntry/signup/signup.component";

export const routes : Routes = [
    { path: '',component: HomeComponent},
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'grocery', component: GroceryComponent },
    { path: 'grocery/add_groc', component: AddgroceryComponent , canActivate:[AdminGuard]},
    { path: 'cart', component: CartComponent },
    { path: 'order_place', component: PlaceOrderComponent , canActivate: [UserLoginGuard]},
    { path: 'mytasks', component: MytasksComponent },
    { path: 'fruits', component: FruitsComponent },
    { path: 'fruits/add_fru', component: AddfruitComponent , canActivate:[AdminGuard]},
    { path: 'others', component: OtherobjComponent },
    { path: 'others/add_obj', component: AddObjComponent , canActivate: [AdminGuard]},
    { path: 'edit', component: EditItemComponent ,canActivate: [AdminGuard]},
    { path: 'single_item', component: SingleItemComponent },
    { path: '**', component: ErrorComponent },
]