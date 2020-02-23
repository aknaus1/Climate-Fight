import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatsComponent } from './stats/stats.component';
import { ResourcesComponent } from './resources/resources.component';
import { SourcesComponent } from './sources/sources.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    StatsComponent,
    ResourcesComponent,
    SourcesComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
