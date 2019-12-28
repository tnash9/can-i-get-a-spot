import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './components/example/example.component';
import { HttpClientModule } from '@angular/common/http';
import { ExampleService } from './services/example/example.service';
import { HomeComponent } from './components/home/home/home.component';
import { LoginComponent } from './components/login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ExampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
