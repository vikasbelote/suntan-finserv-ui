// Core Module
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, Title }    from '@angular/platform-browser';
import { AppRoutingModule }        from './app-routing.module';
import { NgbModule }   from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule }    from '@angular/core';
import { HttpModule } from '@angular/http';
import * as global from './globals';

// Main Component
import { AppComponent }          from './app.component';
import { HeaderComponent }       from './header/header.component';
import { SidebarComponent }      from './sidebar/sidebar.component';
import { SidebarRightComponent } from './sidebar-right/sidebar-right.component';
import { TopMenuComponent }      from './top-menu/top-menu.component';
import { FooterComponent }       from './footer/footer.component';

// Component Module
import { NvD3Module }           from 'ng2-nvd3';
import { AgmCoreModule }        from '@agm/core';
import { NgSlimScrollModule }   from 'ngx-slimscroll';
import { CalendarModule }       from 'angular-calendar';
import { FullCalendarModule }   from 'ng-fullcalendar';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { NgxChartsModule }      from '@swimlane/ngx-charts';
import { TrendModule }          from 'ngx-trend';
import { HighlightJsModule }    from 'ngx-highlight-js'
import { CountdownModule }      from 'ngx-countdown';
import { ChartsModule }         from 'ng4-charts/ng4-charts';
import { TagsInputModule }      from 'ngx-tags-input/dist';


// Pages
import { DashboardV1Page }          from './pages/dashboard/v1/dashboard-v1';
import { InvestorProfile } from './pages/profile/investor-profile';
import { LoginV3Page }              from './pages/login/login-v3/login-v3';
import { RegisterV3Page }           from './pages/register/register-v3/register-v3';

// service
import { RegisterService } from './pages/register/register-service';
import { LoginService } from './pages/login/login-v3/login-service';
import { SessionStoreService } from './app-session-store';
import { InvestorProfileService } from './pages/profile/investor-profile-service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    SidebarRightComponent,
    TopMenuComponent,
    FooterComponent,

    DashboardV1Page,
    InvestorProfile,
    LoginV3Page,
    RegisterV3Page
  ],
  imports: [
    AppRoutingModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyC5gJ5x8Yw7qP_DqvNq3IdZi2WUSiDjskk' }),
    BrowserAnimationsModule,
    BrowserModule,
    CalendarModule.forRoot(),
    CountdownModule,
    ChartsModule,
    FullCalendarModule,
    FormsModule,
    HttpModule,
    HighlightJsModule,
    NgbModule.forRoot(),
    NgxChartsModule,
    NgSlimScrollModule,
    NvD3Module,
    ReactiveFormsModule,
    SlimLoadingBarModule.forRoot(),
    TrendModule,
    TagsInputModule.forRoot()
  ],
  providers: [ Title,SessionStoreService,RegisterService,LoginService,InvestorProfileService],
  bootstrap: [ AppComponent ]
})

export class AppModule {
  constructor(private router: Router, private titleService: Title, private route: ActivatedRoute) {
    router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        var title = 'Suntan Finserv | ' + this.route.snapshot.firstChild.data['title'];
        this.titleService.setTitle(title);
      }
    });
  }
}
