import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scenario-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './scenario-input.component.html',
  styleUrls: ['./scenario-input.component.scss']
})
export class ScenarioInputComponent {
  componentOrder: string = '';
  scenarioName: string = '';
  submitted = false;

  validComponents = ['L', 'E', 'C', 'S', 'B', 'R', 'T'];
  selectedComponents: string[] = [];

  // Inputs for components
  LFile?: File;
  EFuncName = '';
  EFuncCode = '';
  CChoice = '';
  CPortfolio = '';
  CProduct = '';
  TFile?: File;

  constructor(private router: Router) {}

  onOrderSubmit() {
    this.submitted = true;
  }
  
  addComponent(comp: string) {
    this.selectedComponents.push(comp);
  }
  
  removeComponent(index: number) {
    this.selectedComponents.splice(index, 1);
  }
  

  onFileChange(event: any, target: 'L' | 'T') {
    const file = event.target.files[0];
    if (target === 'L') this.LFile = file;
    else this.TFile = file;
  }

  runScenario() {
    if (!this.scenarioName || this.selectedComponents.length === 0) return;
    
    const scenario = {
      name: this.scenarioName,
      date: new Date().toLocaleString(),
      components: [...this.selectedComponents]
    };

    const existing = localStorage.getItem('scenarios');
    const scenarios = existing ? JSON.parse(existing) : [];

    scenarios.push(scenario);
    localStorage.setItem('scenarios', JSON.stringify(scenarios));

    this.router.navigate(['/running'], {
      queryParams: {
        name: this.scenarioName,
        components: this.selectedComponents.join('>')
      }
    });
  }
}
