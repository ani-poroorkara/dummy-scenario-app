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
  years: number[] = [];
  selectedMonth: number | null = null;
  selectedYear: number | null = null;
  submitted = false;

  validComponents = ['L', 'E', 'C', 'S', 'B', 'R', 'T'];
  months = [
    { value: 1, name: 'January' },
    { value: 2, name: 'February' },
    { value: 3, name: 'March' },
    { value: 4, name: 'April' },
    { value: 5, name: 'May' },
    { value: 6, name: 'June' },
    { value: 7, name: 'July' },
    { value: 8, name: 'August' },
    { value: 9, name: 'September' },
    { value: 10, name: 'October' },
    { value: 11, name: 'November' },
    { value: 12, name: 'December' },
  ];
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

  ngOnInit() {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    for (let i = currentYear; i >= currentYear - 10; i--) {
      this.years.push(i);
    }

    this.selectedMonth = currentMonth;
    this.selectedYear = currentYear;
  }
  
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
    
    if (this.selectedMonth === null || this.selectedYear === null) {
      alert('Please select both month and year!');
      return;
    }

    const formattedMonthYear = `${this.selectedYear}-${String(this.selectedMonth + 1).padStart(2, '0')}`;

    const scenario = {
      name: this.scenarioName,
      date: new Date().toLocaleString(),
      components: [...this.selectedComponents]
    };

    console.log('Scenario:', scenario);
    console.log('Componenets:', scenario.components);

    const existing = localStorage.getItem('scenarios');
    const scenarios = existing ? JSON.parse(existing) : [];

    scenarios.push(scenario);
    localStorage.setItem('scenarios', JSON.stringify(scenarios));

    this.router.navigate(['/running'], {
      queryParams: {
        name: this.scenarioName,
        components: this.selectedComponents.join('>'),
        monthYear: formattedMonthYear
      }
    });
  }
}
