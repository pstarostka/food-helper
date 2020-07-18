import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from './header/header.component';

const matModules = [MatSidenavModule, MatButtonModule];

@NgModule({
  imports: [CommonModule, ...matModules],
  declarations: [HeaderComponent],
  exports: [...matModules, HeaderComponent]
})
export class UiSharedModule {}
