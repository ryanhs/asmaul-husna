import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Nl2BrPipeModule } from 'nl2br-pipe';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { UseLayoutService } from '@services/use-layout.service';

import { CardComponent } from '@components/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    // ng
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // pipe
    Nl2BrPipeModule,

    // material
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [
    Title,
    UseLayoutService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
