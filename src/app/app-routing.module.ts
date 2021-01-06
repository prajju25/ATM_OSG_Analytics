import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmountComponent } from './amount/amount.component';
import { HomeComponent } from './home/home.component';
import { OutputComponent } from './output/output.component';

const routes: Routes = [{
  path: 'auth',
  component: HomeComponent
},{
  path: 'amount',
  component: AmountComponent
},{
  path: 'output',
  component: OutputComponent
},{
  path: '**',
  redirectTo: '/auth'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
