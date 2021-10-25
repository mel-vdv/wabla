import { Component, OnInit } from '@angular/core';
import { LangageService } from 'src/app/services/langage.service';
import { LienService } from 'src/app/services/lien.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
message:any;
langue:any;


/////////////////////////////////////////////////
  constructor(
    private lien : LienService,
    private langage : LangageService
  ) { }
  ///////////////////////
  ngOnInit(): void {
this.message = this.lien.message;
  }

  /////// VISIBILITE DES DIV /////////////////////
drapeauVis = false;
logoVis = true;
rubriqueVis =  false;
clicLogo(){
  this.drapeauVis = true;
}
clicDrapeau(langue:any){
  this.langage.langueChoisie = langue;
  this.langue = langue;
  this.logoVis = false;
  this.rubriqueVis=true;
}

}
