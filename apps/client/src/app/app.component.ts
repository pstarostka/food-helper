import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'food-helper-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public theme$ = of('default-theme');
  public title = 'Food Helper';
  public menuOpen = false;
}
