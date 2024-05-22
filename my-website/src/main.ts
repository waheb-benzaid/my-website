import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { appRoutingProviders } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [appRoutingProviders],
}).catch;
