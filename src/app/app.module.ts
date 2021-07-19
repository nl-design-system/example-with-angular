import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UtrechtWebComponentsModule } from '@utrecht/web-component-library-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UtrechtWebComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
