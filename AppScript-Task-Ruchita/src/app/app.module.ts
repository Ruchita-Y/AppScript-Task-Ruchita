import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './components/shop/shop.component';
import { SkillsComponent } from './components/skills/skills.component';
import { StoriesComponent } from './components/stories/stories.component';
import { AboutComponent } from './components/about/about.component';
import { ContactusComponent } from './components/contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    SkillsComponent,
    StoriesComponent,
    AboutComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
