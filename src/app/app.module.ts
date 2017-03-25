import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { AppComponent } from './app.component';
import { ExamplesComponent } from './examples/examples.component';
import { ExampleLinkComponent } from './example-link/example-link.component';
import { NavComponent } from './nav/nav.component';
import { ExampleService } from './services/example.service';

@NgModule({
  declarations: [
    AppComponent,
    ExamplesComponent,
    ExampleLinkComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [ExampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
