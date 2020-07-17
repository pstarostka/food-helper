import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiSharedModule } from '@food-helper/ui/shared';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, UiSharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
