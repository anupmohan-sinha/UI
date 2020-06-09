import { IndiaResolverService } from './india-resolver.service';
import { Routes } from '@angular/router';
import { IndiaHomeComponent } from './india-home/india-home.component';
import { StateResolverService } from './state-resolver.service';

export const routes: Routes = [{
  path: '',
  component: IndiaHomeComponent, resolve: {
    indiaData: IndiaResolverService,
    stateData: StateResolverService
  }
}];
