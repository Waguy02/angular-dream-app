import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import{MatToolbarModule} from '@angular/material/toolbar';
import { baseURL } from './shared/baseurl';
import {FlexLayoutModule} from '@angular/flex-layout'
import { AppComponent } from './app.component';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DishService } from './services/dish.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import {PromotionService} from './services/promotion.service';
import {LeaderService} from './services/leader.service';
import { LoginComponent } from './login/login.component'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms'; 
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent  
  
    
  ],
  imports: [
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatFormFieldModule, 
    MatInputModule,
    MatCheckboxModule,
    FormsModule ,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
  FlexLayoutModule,
  MatGridListModule,
  MatCardModule,
  AppRoutingModule,
  MatDialogModule,
  ReactiveFormsModule, 
  MatButtonModule,
  MatProgressSpinnerModule,
  HttpClientModule,
  ],

  entryComponents: [
    LoginComponent
],
  providers: [DishService,PromotionService,LeaderService,{provide: 'baseURL', useValue: baseURL},], 
  bootstrap: [AppComponent],
  
})
export class AppModule { }
