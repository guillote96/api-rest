import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-crear-articulo',
  templateUrl: './crear-articulo.component.html',
  styleUrls: ['./crear-articulo.component.css']
})
export class CrearArticuloComponent implements OnInit {
  public article:Article;
  public status: String
  
  public afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png, .jpeg, .gif",
    maxSize: "50",
    uploadAPI:  {
      url:"http://localhost:3900/api/upload",
      method:"POST",
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
    private _articleservice:ArticleService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { 
    this.article= new Article('','','',null,null);
  }

  ngOnInit(): void {
  }
  enviarFormulario(){
    this._articleservice.save(this.article).subscribe(
      response=>{
        if(response.status == 'success'){
          this.status = 'success';
          this.article=response.article;
          this._router.navigate(['/blog']);

        }else{
          this.status = 'error';
          
        }
      },
      error=>{
        console.log("error de save");
      }
      );

  }
  imageUpload(data){
    let nombre = data.body["image"];
    this.article.image=nombre;

  }

}
