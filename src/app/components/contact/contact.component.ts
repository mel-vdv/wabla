import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LienService } from 'src/app/services/lien.service';
import { WsService } from 'src/app/services/ws.service';
import { LangageService } from 'src/app/services/langage.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  user: any = {
    nom: "",
    prenom: "",
    date: "",
    statut: "particulier",
    entreprise: '',
    mail: "",
    tel: 0,
    adresse: "",
    numero: 0,
    cp: 0,
    ville: "",
    demande: "",
    interets: [],
    recontact: "tel",
    horaires: [],
    delai: ''
  }
  cdc = false; robot = false; gdp = false; peb = false; soudage = false; concept = false; prototyp = false; suivi = false;
  electro = false; elmec = false; mecatro = false;

  matin = false; midi = false; aprem = false; soiree = false;

  message = '';
  langue:any;
  ////////////////////////////////////////////////////////////////////
  constructor(
    private wsService: WsService,
    private router: Router,
    private lien: LienService,
    private langage : LangageService
  ) { }
  /////////////////////////////////////////////////////////////////////
  ngOnInit(): void {
    this.langue = this.langage.langueChoisie;
  }
  ////////////////////////////////////////////////////////////////////////


  envoyer(form: NgForm) {
    let x = new Date();
    let jour = x.getDate();
    let mois = x.getMonth() + 1;
    let an = x.getFullYear();


    this.user.inscription = jour + '/' + mois + '/' + an;
    if (form.valid) {
      this.wsService.send('formulaire', this.user);
      this.wsService.listen('formulaireS').subscribe(() => {
        console.log('formulaire envoyé avec succès');
        this.lien.message = "Vous avez été inscrit avec succès";
        this.router.navigate(['/']);
        let envoi = {
          to: this.user.mail,
          subject:"confirmation d\'inscription",
          text:'Bonjour '+this.user.prenom+' '+this.user.nom+', merci d\'avoir pris contact avec Wabla, nous donnerons suite à votre requête dans les plus brefs délais. '
        }
        this.wsService.send('envoiMail', envoi);
        let envoi2={
          to: "mellyvdv@gmail.com",
          subject: "nouvelle inscription WABLA",
          text: "Bonjour Monsieur Mathieu, un nouveau membre Wabla a rempli le formulaire de contact. Les données sont accessibles sur ce lien : http://localhost:4200/admin . Munissez-vous de vos identifiants."
        }
        this.wsService.send('envoiMail',envoi2);
      });
    } else {
      this.message = "le formulaire est invalide";
      console.log('formulaire invalide');
    }
  }
  //----------------------------------------------------------------------

  mmatin(etat: boolean) {
    this.matin = etat;
    if (this.matin) {
      this.user.horaires.push("9h-12h");
    }
    else { this.user.horaires = this.user.horaires.filter((horaire: any) => horaire !== "9h-12h"); }
  }
  mmidi(etat: boolean) {
    this.midi = etat;
    if (this.midi) {
      this.user.horaires.push("12h-14h");
    }
    else { this.user.horaires = this.user.horaires.filter((horaire: any) => horaire !== "12h-14h"); }
  }
  aaprem(etat: boolean) {
    this.aprem = etat;
    if (this.aprem) {
      this.user.horaires.push("14h-18h");
    }
    else { this.user.horaires = this.user.horaires.filter((horaire: any) => horaire !== "14h-18h"); }
  }
  ssoir(etat: boolean) {
    this.soiree = etat;
    if (this.soiree) {
      this.user.horaires.push("18h-21h");
    }
    else { this.user.horaires = this.user.horaires.filter((horaire: any) => horaire !== "18h-21h"); }
  }
  //-------------------------------------------------------------------------------------------------
  ccdc(etat: boolean) {
    this.cdc = etat;
    if (this.cdc) {
      this.user.interets.push(" rédaction du cahier des charges");
    }
    else {
      this.user.interets.pull(" rédaction du cahier des charges");
    }
  }
  ggdp(etat: boolean) {
    this.gdp = etat;
    if (this.gdp) {
      this.user.interets.push(" gestion de projet");
    }
    else {
      this.user.interets.pull(" gestion de projet");
    }
  }
  rrobot(etat: boolean) {
    this.robot = etat;
    if (this.robot) {
      this.user.interets.push(" robotique");
    }
    else {
      this.user.interets.pull(" robotique");
    }
  }
  ppeb(etat: boolean) {
    this.peb = etat;
    if (this.peb) {
      this.user.interets.push(" PEB");
    }
    else {
      this.user.interets.pull(" PEB");
    }
  }
  ssoudage(etat: boolean) {
    this.soudage = etat;
    if (this.soudage) {
      this.user.interets.push(" soudage");
    }
    else {
      this.user.interets.pull(" soudage");
    }
  }
  cconcept(etat: boolean) {
    this.concept = etat;
    if (this.concept) {
      this.user.interets.push(" conception, prototypage");
    }
    else {
      this.user.interets.pull(" conception, prototypage");
    }
  }
  ssuivi(etat: boolean) {
    this.suivi = etat;
    if (this.suivi) {
      this.user.interets.push(" suivi technique");
    }
    else {
      this.user.interets.pull(" suivi technique");
    }
  }
  eelectro(etat: boolean) {
    this.electro = etat;
    if (this.cdc) {
      this.user.interets.push(" consultance en électronique");
    }
    else {
      this.user.interets.pull(" consultance en électronique");
    }
  }
  eelmec(etat: boolean) {
    this.elmec = etat;
    if (this.elmec) {
      this.user.interets.push(" consultance en électromécanique");
    }
    else {
      this.user.interets.pull(" consultance en électromécanique");
    }
  }
  mmecatro(etat: boolean) {
    this.mecatro = etat;
    if (this.mecatro) {
      this.user.interets.push(" consultance en mécatronique");
    }
    else {
      this.user.interets.pull(" consultance en mécatronique");
    }
  }



  //------------------------------------------------------------------------

}
