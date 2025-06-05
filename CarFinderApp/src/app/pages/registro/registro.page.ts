import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class RegistroPage {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController
  ) {}

  async presentToast(message: string, color: string = 'success') {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
    });
    await toast.present();
  }

  async register() {
    if (!this.email || !this.password) {
      this.presentToast('Completa todos los campos', 'danger');
      return;
    }

    try {
      await this.authService.register(this.email, this.password);
      this.presentToast('Registro exitoso');
      this.router.navigate(['/login']);
    } catch (error: any) {
      let message = 'Error desconocido';
      if (error.code === 'auth/email-already-in-use') {
        message = 'El correo ya está registrado';
      }
      this.presentToast('Error: ' + message, 'danger');
    }
  }
}
