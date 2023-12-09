import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlineTestComponent } from './components/online-test/online-test.component';
import { OnlineTestResultComponent } from './components/online-test-result/online-test-result.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'onlinetest', component: OnlineTestComponent },  
  { path: 'onlinetestresult', component: OnlineTestResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
