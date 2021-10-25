import { assertNotNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { WsService } from 'src/app/services/ws.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  message ="";
clients=[{
  inscription:"",
  prenom:"",
  nom:"",
  date:'',
  statut:"",
  entreprise:'',
  tva:0,
  mail:"",
  tel:0,
  adresse:"",
  libelle:"",
  numero:0,
  cp:0,
  ville:"",
  demande:"",
  delai:"",
  recontact:"",
  horaires:[],
  interets: [],
  _id:""
}
];
admin={
  identifiant:"",
  mdp:""
}

//-------------------------------------------------
  constructor(
    private wsService : WsService
  ) { }
//-------------------------------------------------
  ngOnInit(): void {
    this.wsService.send("infoClients",'');
    this.wsService.listen('infoClientsS').subscribe((liste:any)=>{
      this.clients= liste;
    
    });
  }
  //----------------------
  visible=false;
  adminAcces = false;
  verifAdmin(){
    this.wsService.send("verifAdmin",this.admin);
    this.wsService.listen('verifAdminS').subscribe((reponse:any)=>{
      if(reponse)
{
  this.adminAcces = true;
} 
else{
  this.message= "désolé, identifiant et/ou mdp invalides.";
  this.visible=true;
}     
    });
  }
  //-------------------------
  alerteSure= false;
  notif=false;
  qui:any;
  quiPrenom:any;
  quiNom:any;

  supprProfil1(prenom:any, nom:any){
  this.alerteSure = true;
  this.qui = prenom+' '+nom;
  this.quiPrenom = prenom;
  this.quiNom = nom;
  }
  supprProfil2(){
let delet = {
  nom: this.quiNom,
  prenom: this.quiPrenom
}
 this.wsService.send('supprProfil',delet);
 this.wsService.listen('supprProfilS').subscribe(()=>{
   console.log('profil supprimé avec succès');
   this.alerteSure =  false;
   this.notif = true;
   this.wsService.send('infoClients','');
 })
  }
  annul(){
    this.alerteSure=false;
  }

}
