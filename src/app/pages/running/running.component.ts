import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-running',
  standalone: true,
  templateUrl: './running.component.html',
  styleUrls: ['./running.component.scss'],
})
export class RunningComponent {
  constructor(private router: Router) {
    setTimeout(() => {
      this.router.navigate(['/results']);
    }, 3000); // simulate 3 seconds of "running"
  }
}