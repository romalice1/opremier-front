import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import App routes
import { BranchesComponent }      from './branches/branches.component';
import { LoginComponent }      from './login/login.component';
import { StockComponent }      from './stock/stock.component';
import { SalesComponent }      from './sales/sales.component';
import { WetstockComponent }      from './wetstock/wetstock.component';
import { ProductsComponent }      from './products/products.component';
// END Import App routes

// Define app routes
const routes: Routes = [
  { path: 'branches', component: BranchesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'stock', component: StockComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'wetstock', component: WetstockComponent },
  { path: 'products', component: ProductsComponent },
];
// END Define app routes

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
