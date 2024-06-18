import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NoticiasComponent } from './noticias/noticias.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'noticias', component: NoticiasComponent }
];
