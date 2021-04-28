import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';


const routes: Routes = [
    { path: 'peliculas', component: PeliculasComponent},
    { path: '**', component: PageNotFoundComponent},
   


]; 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }