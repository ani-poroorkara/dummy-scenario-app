import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  scenarios: any[] = [];
  searchTerm: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const storedScenarios = localStorage.getItem('scenarios');
    if (storedScenarios) {
      this.scenarios = JSON.parse(storedScenarios);
    }
  }

  filteredScenarios() {
    if (!this.searchTerm.trim()) return this.scenarios;
  
    return this.scenarios.filter(scenario =>
      scenario.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  createNewScenario() {
    this.router.navigate(['/scenario-input']);
  }

  runRetailBaseScenario() {

    const scenario = {
      name: 'Retail Base Scenario',
      date: new Date().toLocaleString(),
      components: ['L', 'E', 'C', 'S', 'B', 'R', 'T']
    };

    const existing = localStorage.getItem('scenarios');
    const scenarios = existing ? JSON.parse(existing) : [];

    scenarios.push(scenario);
    localStorage.setItem('scenarios', JSON.stringify(scenarios));

    this.router.navigate(['/running'], {
      queryParams: {
        name: 'Retail Base Scenario',
        components: ['L', 'E', 'C', 'S', 'B', 'R', 'T']
      }
    });
  }

  runWholesaleBaseScenario() {
    
    const scenario = {
      name: "Wholesale Base Scenario",
      date: new Date().toLocaleString(),
      components: ['L', 'E', 'C', 'S', 'B', 'R', 'T']
    };

    const existing = localStorage.getItem('scenarios');
    const scenarios = existing ? JSON.parse(existing) : [];

    scenarios.push(scenario);
    localStorage.setItem('scenarios', JSON.stringify(scenarios));

    this.router.navigate(['/running'], {
      queryParams: {
        name: 'Wholesale Base Scenario',
        components: 'L>E>C>S>B>R>T'
      }
    });
  }

  runScenario(scenario: any) {
    this.router.navigate(['/running'], {
      queryParams: {
        name: scenario.name,
        components: scenario.components.join('>')
      }
    });
  }

  deleteScenario(index: number) {
    this.scenarios.splice(index, 1);
    localStorage.setItem('scenarios', JSON.stringify(this.scenarios));
  }
}