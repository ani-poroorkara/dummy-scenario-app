import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent {

  scenarioName: string = 'Custom Scenario';
  selectedComponents: string[] = [];
  monthYear: string = '';
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['name'] !== undefined) {
        this.scenarioName = params['name'];
        this.selectedComponents = params['components'].split('>');
        this.monthYear = params['monthYear'];
      }
    });
  }

  scenarioSummary = {
    date: new Date().toLocaleString(),
  };

  reports = [
    { name: 'Reconciliation Report', file: 'input-validation.pdf' },
    { name: 'Processing Summary', file: 'processing-summary.csv' },
    { name: 'Final Log', file: 'output-report.xlsx' },
  ];

  download(file: string) {
    alert(`Pretending to download: ${file}`);
  }
}