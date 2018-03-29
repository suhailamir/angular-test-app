import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { UsersComponent } from './users/users.component';
import { MenuComponent } from './menu/menu.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ForexComponent } from './forex/forex.component';


@NgModule({
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        FormsModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        UsersComponent,
        MenuComponent,
        AddUserComponent,
        ForexComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
