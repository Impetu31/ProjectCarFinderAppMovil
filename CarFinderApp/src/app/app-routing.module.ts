import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login/login.page';
import { RegistroPage } from './pages/registro/registro.page';
import { tabsRoutes } from './pages/tabs/tabs.routes';  // Ruta de tabs

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirige al home por defecto
  { path: 'home', component: HomePage },
  { path: 'login', component: LoginPage },
  { path: 'registro', component: RegistroPage },
  ...tabsRoutes, // Incluir las rutas de los tabs
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
