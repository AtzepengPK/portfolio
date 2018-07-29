import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
// ANGULAR MATERIAL
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// FLEXLAYOUT
import { FlexLayoutModule } from '@angular/flex-layout';
// FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
// COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ScrollfixedDirective } from './scrollfixed/scrollfixed.directive';
import { ScrollableComponent } from './scrollable/scrollable.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
// SERVICES
import { DataService } from './data.service';
import { ScrollableService } from './scrollable/scrollable.service';
import { LateralToolbarComponent } from './lateral-toolbar/lateral-toolbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { SkillPieComponent } from './skill-pie/skill-pie.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScrollfixedDirective,
    ScrollableComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    LateralToolbarComponent,
    ProjectsComponent,
    AboutComponent,
    SkillPieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [DataService,ScrollableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
