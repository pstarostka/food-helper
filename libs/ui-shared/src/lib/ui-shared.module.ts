import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HamburgerButtonComponent } from './hamburger-button/hamburger-button.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';

const matModules = [MatSidenavModule, MatButtonModule, MatToolbarModule, MatIconModule];

@NgModule({
  imports: [CommonModule, ...matModules],
  declarations: [HeaderComponent, HamburgerButtonComponent, SideNavComponent],
  exports: [...matModules, HeaderComponent, HamburgerButtonComponent, SideNavComponent]
})
export class UiSharedModule {}
