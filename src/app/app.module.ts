import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { StockComponent } from './stock/stock.component';
import { SalesComponent } from './sales/sales.component';
import { WetstockComponent } from './wetstock/wetstock.component';
import { BranchesComponent } from './branches/branches.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProductsComponent } from './products/products.component';
import { PosTerminalComponent } from './pos-terminal/pos-terminal.component';
import { TanksComponent } from './tanks/tanks.component';
import { PumpsComponent } from './pumps/pumps.component';
import { NozzlesComponent } from './nozzles/nozzles.component';
import { OrdersComponent } from './orders/orders.component';
import { VoucherDashComponent } from './voucher-dash/voucher-dash.component';
import { VoucherAllComponent } from './voucher-all/voucher-all.component';
import { VoucherCustComponent } from './voucher-cust/voucher-cust.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { HistoryComponent } from './history/history.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    StockComponent,
    SalesComponent,
    WetstockComponent,
    BranchesComponent,
    ProductsComponent,
    PosTerminalComponent,
    TanksComponent,
    PumpsComponent,
    NozzlesComponent,
    OrdersComponent,
    VoucherDashComponent,
    VoucherAllComponent,
    VoucherCustComponent,
    NotificationsComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }