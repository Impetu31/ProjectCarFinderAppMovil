import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component'; // Asegúrate de que esté bien importado

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    RouterModule.forRoot([]),
  ],
  bootstrap: [],
})
export class AppModule {}
