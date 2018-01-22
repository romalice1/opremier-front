import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import App routes
import { BranchesComponent }      from './components/branches/branches.component';
import { LoginComponent }      from './components/login/login.component';
import { StockComponent }      from './components/stock/stock.component';
import { SalesComponent }      from './components/sales/sales.component';
import { WetstockComponent }      from './components/wetstock/wetstock.component';
import { ProductsComponent }      from './components/products/products.component';
// END Import App routes

// Define app routes
const routes: Routes = [
	/*{ path: '',   redirectTo: '/login', pathMatch: 'full' },*/
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
