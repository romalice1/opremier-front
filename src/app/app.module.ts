import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartModule } from 'angular-highcharts';

import { Http, HttpModule } from '@angular/http';
import { AuthService } from './services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyHttpInterceptor } from './services/MyHttp-interceptor';

import { AppComponent } from './app.component';
import { StockComponent } from './components/stock/stock.component';
import { SalesComponent } from './components/sales/sales.component';
import { WetstockComponent } from './components/wetstock/wetstock.component';
import { BranchesComponent } from './components/branches/branches.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProductsComponent } from './components/products/products.component';
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
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
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
    HistoryComponent,
    LoginComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    AuthService, 
    CookieService,
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: MyHttpInterceptor, 
      multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }