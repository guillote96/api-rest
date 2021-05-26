import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { ArticleComponent } from './components/article/article.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { CrearArticuloComponent } from './components/crear-articulo/crear-articulo.component';
import { EditarArticuloComponent } from './components/editar-articulo/editar-articulo.component';


const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'peliculas', component: PeliculasComponent},
    { path: 'home', component: HomeComponent},
    { path: 'blog', component: BlogComponent},
    { path: 'formulario', component: FormularioComponent},
    { path: 'prueba/:nombre', component: PruebaComponent},
    { path: 'article/:id', component: ArticleComponent},
    { path: 'buscar/:buscar', component: BuscarComponent},
    { path: 'creararticulo', component: CrearArticuloComponent},
    { path: 'editararticulo/:id', component: EditarArticuloComponent},
    { path: '**', component: PageNotFoundComponent},
   


]; 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }