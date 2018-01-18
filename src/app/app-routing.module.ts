import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BranchesComponent }      from './branches/branches.component';

const routes: Routes = [
  { path: 'branches', component: BranchesComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
