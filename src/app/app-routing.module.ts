import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateformComponent } from './dashboard/form/templateform/templateform.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ValidatorformComponent } from './dashboard/form/validatorform/validatorform.component';
import { TypoghraphyComponent } from './dashboard/typography/typoghraphy/typoghraphy.component';
import { CardComponent } from './dashboard/UIelements/card/card.component';
import { GalaryComponent } from './dashboard/UIelements/galary/galary.component';
import { IconsComponent } from './dashboard/UIelements/icons/icons.component';
import { TableComponent } from './dashboard/UIelements/table/table.component';
import { CalenderComponent } from './dashboard/UIelements/calender/calender.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',component:HomeComponent},

  {path:'templateform', component:TemplateformComponent},
  {path:'validatorform',component:ValidatorformComponent},
  {path:'typography',component:TypoghraphyComponent},
  {path:'card',component:CardComponent},
  {path:'gallary',component:GalaryComponent},
  {path:'icons',component:IconsComponent},
  {path:'table',component:TableComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
