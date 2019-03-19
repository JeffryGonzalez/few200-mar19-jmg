import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommunicationsModule } from './features/communications/communications.module';
import { ReduxDemoComponent } from './components/redux-demo/redux-demo.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    DashboardComponent,
    FooterComponent,
    ReduxDemoComponent
  ],
  imports: [
    BrowserModule,
    CommunicationsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument() // <-- "can" be removed for production.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
