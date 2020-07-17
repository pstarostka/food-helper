import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiSharedModule } from './../../../../libs/ui/shared/src/lib/ui-shared.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, UiSharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
