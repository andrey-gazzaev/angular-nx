import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonSharedModule } from '@common';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonSharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
