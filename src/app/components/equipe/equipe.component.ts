import { Component, OnInit } from '@angular/core';
import { LangageService } from 'src/app/services/langage.service';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent implements OnInit {

  constructor(
    private langage : LangageService
  ) { }
langue: any;
  ngOnInit(): void {
    this.langue= this.langage.langueChoisie;
  }
  //------------------
ampouleMat= "./../../../assets/consultant-bleu.png";
ampouleMar= "./../../../assets/consultant-bleu.png";
onMat(){
  this.ampouleMat=  "./../../../assets/consultant-bleuOn.png";
}
onMar(){
  this.ampouleMar=  "./../../../assets/consultant-bleuOn.png";
}
offMat(){
  this.ampouleMat=  "./../../../assets/consultant-bleu.png";
}
offMar(){
  this.ampouleMar=  "./../../../assets/consultant-bleu.png";
}

mat=false;
mar=false;
matVis(){
  this.mat= true;
}
marVis(){
  this.mar=true;
} 
retour(){
  this.mar=false;
  this.mat=false;
  this.ampouleMat= "./../../../assets/consultant-bleu.png";
  this.ampouleMar= "./../../../assets/consultant-bleu.png";
}
//--------------------
classeLogos= "unshow";
show(){
  if(this.classeLogos=== "show"){
    this.classeLogos= "unshow";
  }
  else{
     this.classeLogos= "show";
  }
}
//---------------
srcLn="./../../../assets/linkedin.png";
srcTwit="./../../../assets/twitter.png";
srcGit="./../../../assets/github.png";
srcFb= "./../../../assets/fb.png" ;
srcMail= "./../../../assets/mail.png";

lnOr(){
  this.srcLn = "./../../../assets/linkedin-or.png";
}
lnBl(){
  this.srcLn = "./../../../assets/linkedin.png";
}
twitOr(){
  this.srcTwit="./../../../assets/twitter-or.png";
}
twitBl(){
  this.srcTwit="./../../../assets/twitter.png";
}
gitOr(){
  this.srcGit="./../../../assets/github-or.png";
}
gitBl(){
  this.srcGit="./../../../assets/github.png";
}
fbOr(){
  this.srcFb="./../../../assets/fb-or.png";
}
fbBl(){
  this.srcFb="./../../../assets/fb.png";
}
mailOr(){
  this.srcMail="./../../../assets/mail-or.png";
}
mailBl(){
  this.srcMail="./../../../assets/mail.png";
}

}
