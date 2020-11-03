
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { RequestComponentComponent } from './request-component/request-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';

const routes: Routes = [

 { path: 'about', component:AboutComponentComponent },
 { path: 'flightrequest', component:RequestComponentComponent },
 { path: '', component:HomeComponentComponent },


];

@NgModule({
  declarations: [
    AppComponent,
    RequestComponentComponent,
    AboutComponentComponent,
    NavbarComponentComponent,
    HomeComponentComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes,{ useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
