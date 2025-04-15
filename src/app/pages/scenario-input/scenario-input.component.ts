import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-scenario-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './scenario-input.component.html',
  styleUrls: ['./scenario-input.component.scss']
})
export class ScenarioInputComponent {
  componentOrder: string = '';
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
    alert('Running... (fake run for now)');
    // TODO: Route to output/report page
  }
}
