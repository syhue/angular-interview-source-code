import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './login/login.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
