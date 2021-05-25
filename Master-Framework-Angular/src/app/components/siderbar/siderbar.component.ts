import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.css']
})
export class SiderbarComponent implements OnInit {
  public searchString:String;

  constructor(
     private _router:Router,
     private _route:ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  

  goSearch(){
   this._router.navigate(['/buscar',this.searchString]);

  }
}
