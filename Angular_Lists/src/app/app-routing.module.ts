import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { OrderComponent } from './order/order.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'products', component:ProductsComponent,},
  {path:'users', component:UsersComponent},
  {path:'orders',component:OrdersComponent},
  {path:'contact-us',component:ContactFormComponent},
  {path:'products/:id',component:ProductComponent},
  {path:'orders/:id',component:OrderComponent},
  {path:'users/:id',component:UserComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
