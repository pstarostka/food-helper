import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'food-helper-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Output() public menuOpen = new EventEmitter<void>();
  @Input() public appTitle?: string;

  constructor() {}

  public ngOnInit(): void {}
}
