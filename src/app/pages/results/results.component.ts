import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent {
  scenarioSummary = {
    name: 'My Custom Scenario',
    components: ['C', 'S', 'B', 'R', 'T'],
    date: new Date().toLocaleString(),
  };

  reports = [
    { name: 'Input Validation Report', file: 'input-validation.pdf' },
    { name: 'Processing Summary', file: 'processing-summary.csv' },
    { name: 'Final Output', file: 'output-report.xlsx' },
  ];

  download(file: string) {
    alert(`Pretending to download: ${file}`);
  }
}