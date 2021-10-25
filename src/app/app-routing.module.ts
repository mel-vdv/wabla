import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AdminComponent } from './components/admin/admin.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ContactComponent } from './components/contact/contact.component';
import { EquipeComponent } from './components/equipe/equipe.component';
import { ProduitsComponent } from './components/produits/produits.component';

const routes: Routes = [
  {path: '',
  component: AccueilComponent
},
  {path: 'equipe',
  component: EquipeComponent
},
{path: 'produits',
component: ProduitsComponent
},
{path: 'clients',
component: ClientsComponent
},
{path: 'contact',
component: ContactComponent
},
{path: 'admin',
component: AdminComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(
    private router: Router
  ){

  }
}
