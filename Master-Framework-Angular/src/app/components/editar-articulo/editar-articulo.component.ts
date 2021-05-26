import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service'
import { Router, ActivatedRoute } from '@angular/router'
import swal from 'sweetalert';


@Component({
  selector: 'app-editar-articulo',
  templateUrl: './../crear-articulo/crear-articulo.component.html',
  styleUrls: ['./editar-articulo.component.css']
})
export class EditarArticuloComponent implements OnInit {
  public article: Article;
  public status: String;
  public titulo: String;
  public id:String;
  public edit:Boolean;

  public afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png, .jpeg, .gif",
    maxSize: "50",
    uploadAPI: {
      url: "http://localhost:3900/api/upload",
      method: "POST",
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    fileNameIndex: true,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Attach Files...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
  };


  constructor(
    private _articleservice: ArticleService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.titulo = 'Editar Articulo';
    this.edit=true;
  }

  ngOnInit(): void {
    this.getArticulo();
  }
  enviarFormulario() {
    this._articleservice.update(this.id,this.article).subscribe(
      response=>{
        if(response.status == 'success'){
          this.status = 'success';
          this.article=response.article;
          swal({
            title: "Editar Articulo",
            text: "Se ha editado el articulo Correctamente",
            icon: "success",
           });
          this._router.navigate(['/blog']);

        }else{
          this.status = 'error';
          swal({
            title: "Error",
            text: "Ups! Se ha producido un error! =(",
            icon: "error",
           });
          
        }
      },
      error=>{
        console.log("error de update");
        swal({
          title: "Error",
          text: "Ups! Se ha producido un error! =(",
          icon: "error",
         });
      }
      );

  }
  imageUpload(data) {
    let nombre = data.body["image"];
    this.article.image = nombre;

  }
  getArticulo() {
    this._route.params.subscribe(params => {
          let id = params['id'];
          this._articleservice.getArticle(id).subscribe(response => {
            if (response.article) {
              this.article = response.article;
              console.log(this.article);
              this.id=id;
            } else {
              this._router.navigate(['/blog']);
            }
          },
            error => {
              console.log(error);
            })

    });


  }
  

}