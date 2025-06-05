import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true, // Asegúrate de que la página sea standalone si es necesario
  imports: [IonicModule, FormsModule], // Asegúrate de que FormsModule esté importado
})
export class RegistroPage {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async register() {
    try {
      await this.authService.register(this.email, this.password);
      this.router.navigate(['/tabs/tab1']);
    } catch (error) {
      console.error('Error al registrarse:', error);
    }
  }
}
