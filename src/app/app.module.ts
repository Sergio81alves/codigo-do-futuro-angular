import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentHeaderComponent } from './component-header/component-header.component';
import { MainComponent } from './main/main.component';
import { ComponentSidebarComponent } from './component-sidebar/component-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentHeaderComponent,
    MainComponent,
    ComponentSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
