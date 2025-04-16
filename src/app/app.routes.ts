import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ScenarioInputComponent } from './pages/scenario-input/scenario-input.component';
import { RunningComponent } from './pages/running/running.component';
import { ResultsComponent } from './pages/results/results.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'scenario-input', component: ScenarioInputComponent },
  { path: 'running', component: RunningComponent},
  { path: 'results', component: ResultsComponent},
  { path: '**', redirectTo: '' }
];