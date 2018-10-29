import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
// import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { BsLeftpanelComponent } from './bs-leftpanel/bs-leftpanel.component';
import { BsMainComponent } from './bs-main/bs-main.component';
import { BsRightPanelComponent } from './bs-right-panel/bs-right-panel.component';
import { VisaService } from './services/visa.service';



@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    BsLeftpanelComponent,
    BsMainComponent,
    BsRightPanelComponent
  ],
  imports: [
    BrowserModule,
    RoundProgressModule,
    // AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([{ path: '', component: BsMainComponent }])
  ],
  providers: [VisaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
