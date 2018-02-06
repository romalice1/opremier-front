import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './services/authguard.guard';

// Import App routes
import { BranchesComponent }      from './components/branches/branches.component';
import { LoginComponent }      from './components/login/login.component';
import { StockComponent }      from './components/stock/stock.component';
import { SalesComponent }      from './components/sales/sales.component';
import { WetstockComponent }      from './components/wetstock/wetstock.component';
import { ProductsComponent }      from './components/products/products.component';
import { UserAccountsComponent } from './components/user-accounts/user-accounts.component';
import { PosTerminalComponent } from './components/pos-terminal/pos-terminal.component';
import { TanksComponent } from './components/tanks/tanks.component';
import { PumpsComponent } from './components/pumps/pumps.component';
import { NozzlesComponent } from './components/nozzles/nozzles.component';
import { OrdersComponent } from './components/orders/orders.component';
import { VoucherDashComponent } from './components/voucher-dash/voucher-dash.component';
import { VoucherAllComponent } from './components/voucher-all/voucher-all.component';
import { VoucherCustComponent } from './components/voucher-cust/voucher-cust.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { HistoryComponent } from './components/history/history.component'; 
import { ReportsComponent } from './components/reports/reports.component';
// END Import App routes

// Define app routes
const routes: Routes = [
	{ path: '', component: LoginComponent },
  { path: 'branches', canActivate: [AuthguardGuard], component: BranchesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'stock', canActivate: [AuthguardGuard], component: StockComponent },
  { path: 'sales', canActivate: [AuthguardGuard], component: SalesComponent },
  { path: 'wetstock', canActivate: [AuthguardGuard], component: WetstockComponent },
  { path: 'products', canActivate: [AuthguardGuard], component: ProductsComponent },
  { path: 'user-accounts', canActivate: [AuthguardGuard], component: UserAccountsComponent },
  { path: 'pos-terminal', canActivate: [AuthguardGuard], component: PosTerminalComponent },
  { path: 'tanks', canActivate: [AuthguardGuard], component: TanksComponent },
  { path: 'pumps', canActivate: [AuthguardGuard], component: PumpsComponent },
  { path: 'nozzles', canActivate: [AuthguardGuard], component: NozzlesComponent },
  { path: 'orders', canActivate: [AuthguardGuard], component: OrdersComponent },
  { path: 'vouchers-dash', canActivate: [AuthguardGuard], component: VoucherDashComponent },
  { path: 'vouchers-all', canActivate: [AuthguardGuard], component: VoucherAllComponent },
  { path: 'vouchers-cust', canActivate: [AuthguardGuard], component: VoucherCustComponent },
  { path: 'notifications', canActivate: [AuthguardGuard], component: NotificationsComponent },
  { path: 'history', canActivate: [AuthguardGuard], component: HistoryComponent },
  { path: 'reports', canActivate: [AuthguardGuard], component: ReportsComponent },
];
// END Define app routes

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
