import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ProjectComponent } from './project/project.component';
import { TeamComponent } from './team/team.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path:'', redirectTo: '/Home', pathMatch: 'full' },
  {path:'Home', component:HomeComponent},
  {path:'About', component:AboutComponent},
  {path:'Service', component:ServiceComponent},
  {path:'Project', component:ProjectComponent},
  {path:'Team', component:TeamComponent},
  {path:'Blog', component:BlogComponent},
  {path:'Contact', component:ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents= [
  HomeComponent,
  MenuComponent,
  AboutComponent,
  ServiceComponent,
  ProjectComponent,
  TeamComponent,
  BlogComponent,
  ContactComponent,
  FooterComponent,
  HeaderComponent,
]
