import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { Products } from './page/products/products';
import { Contact } from './page/contact/contact';
import { Marcas } from './page/marcas/marcas';
import { About } from './page/about/about';

import { ropa } from './page/ropa/ropa';

export const routes: Routes = [

{path:'',component:Home},
{path:'nosotros',component:About},
{path:'marcas',component:Marcas},
{path:'productos',component:Products},
{path:'ropa',component:ropa},
{path:'contact',component:Contact},
{path:'**',redirectTo:''}

];
