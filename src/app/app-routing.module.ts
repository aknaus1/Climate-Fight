import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatsComponent } from './stats/stats.component';
import { ResourcesComponent } from './resources/resources.component';
import { SourcesComponent } from './sources/sources.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'stat', component: StatsComponent },
  { path: 'rsc', component: ResourcesComponent },
  { path: 'source', component: SourcesComponent },
  {path: 'main', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
