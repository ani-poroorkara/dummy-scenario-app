import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  pastScenarios = [
    { id: 1, name: 'Scenario 1', date: '2025-04-10' },
    { id: 2, name: 'Scenario 2', date: '2025-04-12' },
    { id: 3, name: 'Scenario 3', date: '2025-04-13' }
  ];

  goToNewScenario() {
    // Navigate to scenario-input page (we’ll build it next)
    window.location.href = 'scenario-input';
  }
}
