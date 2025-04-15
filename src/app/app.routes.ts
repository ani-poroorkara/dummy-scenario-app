import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ScenarioInputComponent } from './pages/scenario-input/scenario-input.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'scenario-input', component: ScenarioInputComponent },
  { path: '**', redirectTo: '' }
];