import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'food-helper-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  theme$ = of('default');
  public title = 'Food Helper';
}
