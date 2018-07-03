import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import 'hammerjs';
import { AppComponent } from './app.component';
import { ExampleLinkComponent } from './example-link/example-link.component';
import { ExamplesComponent } from './examples/examples.component';
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
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [ExampleService],
  bootstrap: [AppComponent]
})
export class AppModule {}
