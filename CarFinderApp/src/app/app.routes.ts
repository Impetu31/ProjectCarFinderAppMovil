import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login/login.page';
import { RegistroPage } from './pages/registro/registro.page';
import { TabsPage } from './pages/tabs/tabs.page';
import { tabsRoutes } from './pages/tabs/tabs.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'login', component: LoginPage },
  { path: 'registro', component: RegistroPage },
  { path: 'tabs', component: TabsPage, children: tabsRoutes },
];

export const appRouterProviders = [provideRouter(routes)];
