import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonSharedModule } from '@common';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonSharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
