import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-running',
  standalone: true,
  templateUrl: './running.component.html',
  styleUrls: ['./running.component.scss'],
})

export class RunningComponent implements OnInit {

  scenarioName: string = 'Custom Scenario';
  selectedComponents: string[] = [];
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['name'] !== undefined) {
        this.scenarioName = params['name'];
        this.selectedComponents = params['components'];
      }
  
      // Always set the timeout, regardless of the value
      setTimeout(() => {
        this.router.navigate(['/results'], {
          queryParams: {
            name: this.scenarioName,
            components: this.selectedComponents,
          }
        });
      }, 3000);
    });
  }

}




