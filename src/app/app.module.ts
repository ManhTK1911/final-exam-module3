import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AwesomeComponent } from './awesome/awesome.component';
import { AwesomeListComponent } from './awesome-list/awesome-list.component';
import { AwesomeAddComponent } from './awesome-add/awesome-add.component';
import { AwesomeEditComponent } from './awesome-edit/awesome-edit.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AwesomeComponent,
    AwesomeListComponent,
    AwesomeAddComponent,
    AwesomeEditComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
