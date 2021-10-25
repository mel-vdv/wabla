import { Component, OnInit } from '@angular/core';
import { LangageService } from 'src/app/services/langage.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {

  constructor(
    private langage : LangageService
  ) { }
langue:any;
  ngOnInit(): void {
this.langue = this.langage.langueChoisie;
  }


}
