import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { UtrechtWebComponentsModule } from '@utrecht/web-component-library-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule, UtrechtWebComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
