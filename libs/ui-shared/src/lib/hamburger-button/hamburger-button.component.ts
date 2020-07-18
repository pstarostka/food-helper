import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'food-helper-hamburger-button',
  templateUrl: './hamburger-button.component.html',
  styleUrls: ['./hamburger-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HamburgerButtonComponent implements OnInit {
  public isActive = false;
  @Output() public toggleMenu = new EventEmitter<boolean>();

  constructor() {}

  public ngOnInit(): void {}

  public toggleMenuOpen(): void {
    this.isActive = !this.isActive;
    this.toggleMenu.emit(this.isActive);
  }
}
