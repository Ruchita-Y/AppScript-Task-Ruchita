import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ShopComponent } from './components/shop/shop.component';
import { SkillsComponent } from './components/skills/skills.component';
import { StoriesComponent } from './components/stories/stories.component';

const routes: Routes = [

  { path: '', redirectTo: '/shop', pathMatch: 'full'},
  { path: 'shop', component: ShopComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'stories', component: StoriesComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'about', component: AboutComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
