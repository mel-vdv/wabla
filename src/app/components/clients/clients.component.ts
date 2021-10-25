import { Component, OnInit } from '@angular/core';
import { LangageService } from 'src/app/services/langage.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  constructor(
    private langage : LangageService
  ) { }
langue:any;
  ngOnInit(): void {
    this.langue = this.langage.langueChoisie;
  }
michel=false;
  michelSelect(etat:boolean){
    this.michel = etat;
  }

}
