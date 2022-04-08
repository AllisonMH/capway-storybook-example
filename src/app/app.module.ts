import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UpdatedTitleComponent } from './updated-title/updated-title.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdatedTitleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
