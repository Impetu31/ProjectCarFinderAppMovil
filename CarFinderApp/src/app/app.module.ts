import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    RouterModule.forRoot([]),
  ],
  providers: [appRouterProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
