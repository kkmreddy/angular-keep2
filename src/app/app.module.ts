import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './services/authentication.service';
import { RouterModule,Routes} from '@angular/router'
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotesService } from './services/notes.service';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterService} from './services/router.service';
import { CanActivateRouteGuard } from './can-activate-route.guard';



const routes:Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[CanActivateRouteGuard]
  }

]

@NgModule({
  declarations: [ AppComponent,HeaderComponent,LoginComponent,DashboardComponent],
  imports: [
    BrowserModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    BrowserAnimationsModule

    
   ],
  providers: [AuthenticationService,NotesService,RouterService,CanActivateRouteGuard ],
  bootstrap: [AppComponent ]
})

export class AppModule { }
