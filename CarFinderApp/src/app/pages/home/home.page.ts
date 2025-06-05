import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,  // Asegúrate de que la página sea standalone si es necesario
  imports: [IonicModule],  // Asegúrate de que IonicModule esté importado
})
export class HomePage {
  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToRegistro() {
    this.router.navigate(['/registro']);
  }
}
