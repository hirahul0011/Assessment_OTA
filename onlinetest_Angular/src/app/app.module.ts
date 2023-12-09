import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnlineTestComponent } from './components/online-test/online-test.component';
import { OnlineTestResultComponent } from './components/online-test-result/online-test-result.component';

@NgModule({
  declarations: [
    AppComponent,
    OnlineTestComponent,
    OnlineTestResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }