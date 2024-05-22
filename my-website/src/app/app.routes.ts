// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { provideRouter, withRouterConfig } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'portfolio', component: PortfolioComponent },
];

export const appRoutingProviders = [
  provideRouter(routes, withRouterConfig({})),
];
