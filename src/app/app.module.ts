import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/servicio/services.component';
import { WorksComponent } from './pages/works/works.component';
import { ClientsComponent } from './pages/clientes/clients.component';
import { LoginComponent } from './pages/login/login.component';
import { PhotoswipeComponent } from './pages/photoswipe/photoswipe.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { TableComponent } from './pages/table/table.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ListarInfoService } from './services/listar-info.service';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { PrincipalComponent } from './pages/principal/principal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AngularFireAuth } from '@angular/fire/auth';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    WorksComponent,
    ClientsComponent,
    LoginComponent,
    PhotoswipeComponent,
    TableComponent,
    PrincipalComponent,
  ],
  imports: [
    MatTableModule,
    MatFormFieldModule,
    AppRoutingModule,
    MatPaginatorModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence()
  ],
  providers: [
    ListarInfoService,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }
