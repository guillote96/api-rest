import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { AppComponent } from './app.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SiderbarComponent } from './components/siderbar/siderbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ArticleComponent } from './components/article/article.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { CrearArticuloComponent } from './components/crear-articulo/crear-articulo.component';
import { EditarArticuloComponent } from './components/editar-articulo/editar-articulo.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    PeliculasComponent,
    HeaderComponent,
    SliderComponent,
    SiderbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    HomeComponent,
    BlogComponent,
    FormularioComponent,
    PeliculaComponent,
    ArticleComponent,
    ArticlesComponent,
    BuscarComponent,
    CrearArticuloComponent,
    EditarArticuloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFileUploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
