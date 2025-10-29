import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { Products } from './page/products/products';
import { Contact } from './page/contact/contact';
import { Marcas } from './page/marcas/marcas';
import { About } from './page/about/about';
import { Ropa } from './page/ropa/ropa';
import { Implementos } from './page/implementos/implementos';
import { Gimnasio } from './page/gimnasio/gimnasio';

export const routes: Routes = [

{path:'',component:Home},
{path:'nosotros',component:About},
{path:'marcas',component:Marcas},
{path:'productos',component:Products},
{path:'ropa',component:Ropa},
{path:'implementos',component:Implementos},
{path:'gimnasio',component:Gimnasio},
{path:'contact',component:Contact},
{path:'**',redirectTo:''}

];
