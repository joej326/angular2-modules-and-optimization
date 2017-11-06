import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'app/core/header/header.component';
import { HomeComponent } from 'app/core/home/home.component';
import { SharedModule } from 'app/shared/shared.module';
import { AppRoutingModule } from 'app/app-routing.module';



// the core module contains components that are part of the main app


@NgModule({
  imports: [
    CommonModule,
    SharedModule, //we import SharedModule to get access to the dropdown directive
    AppRoutingModule // need AppRoutingModule b/c our header has router links that we click on
  ],
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent //needs to be exported when using <app-header></app-header>
  
  ]
})
export class CoreModule { }
