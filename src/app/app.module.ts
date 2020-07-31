import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { NgImageSliderModule } from 'ng-image-slider';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './dashboard/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './Navigation/sidenav/sidenav.component';
import { TemplateformComponent } from './dashboard/form/templateform/templateform.component';
import { IconsComponent } from './dashboard/UIelements/icons/icons.component';
import { CalenderComponent } from './dashboard/UIelements/calender/calender.component';
import { GalaryComponent } from './dashboard/UIelements/galary/galary.component';
import { CardComponent } from './dashboard/UIelements/card/card.component';
import { TableComponent } from './dashboard/UIelements/table/table.component';
import { TypoghraphyComponent } from './dashboard/typography/typoghraphy/typoghraphy.component';
import { ValidatorformComponent } from './dashboard/form/validatorform/validatorform.component';
import { ToolbarComponent } from './Navigation/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    TemplateformComponent,
    IconsComponent,
    CalenderComponent,
    GalaryComponent,
    CardComponent,
    TableComponent,
    TypoghraphyComponent,
    ValidatorformComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    FlexLayoutModule,
    NgImageSliderModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
