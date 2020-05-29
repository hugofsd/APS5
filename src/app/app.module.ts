import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
import {ChartModule} from 'primeng/chart';

import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {MegaMenuItem} from 'primeng/api';  //required when using MegaMenu
import {ToolbarModule} from 'primeng/toolbar';
import {AccordionModule} from 'primeng/accordion';
import {CarouselModule} from 'primeng/carousel';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {DialogModule} from 'primeng/dialog';
import {GMapModule} from 'primeng/gmap';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';






@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CardModule,
    ChartModule,
    MenuModule,
    ToolbarModule,
    AccordionModule,
    CarouselModule,
    DialogModule,
    GMapModule,
    BreadcrumbModule,
    ButtonModule,
    MenubarModule,
  




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
