import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BemutatkozasComponent } from './Part/bemutatkozas/bemutatkozas.component';
import { EtelekComponent } from './Part/etelek/etelek.component';
import { ItalokComponent } from './Part/italok/italok.component';
import { NavComponent } from './Part/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BemutatkozasComponent,
    EtelekComponent,
    ItalokComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
