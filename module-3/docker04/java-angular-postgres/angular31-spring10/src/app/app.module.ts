import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PersonFormComponent} from './components/person/person-form/person-form.component';
import {PersonListComponent} from './components/person/person-list/person-list.component';
import {PersonViewComponent} from './components/person/person-view/person-view.component';
import {peopleServiceInjectables} from './services/people.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MessageComponent} from './components/commun/message/message.component';
import {messageNotificationServiceInjectables} from './services/message-notification.service';
import {LoadingComponent} from './components/commun/loading/loading.component';
import {httpRequestInterceptInjectables} from './components/commun/util/http-request-intercept';
import {IConfig, NgxMaskModule} from 'ngx-mask';
import { ConfirmComponent } from './components/commun/confirm/confirm.component';
import { PagerComponent } from './components/commun/pager/pager.component';
import {InputMaskComponent} from './components/commun/input-mask/input-mask.component';
import {InputTextComponent} from './components/commun/input-text/input-text.component';
import { LoginComponent } from './components/login/login.component';
import { InputSecretComponent } from './components/commun/input-secret/input-secret.component';
import {jwtHttpRequestInterceptInjectables} from './components/commun/util/jwt-http-request-intercept';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    PersonFormComponent,
    PersonListComponent,
    PersonViewComponent,
    MessageComponent,
    LoadingComponent,
    ConfirmComponent,
    PagerComponent,
    InputTextComponent,
    InputMaskComponent,
    LoginComponent,
    InputSecretComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    peopleServiceInjectables,
    messageNotificationServiceInjectables,
    httpRequestInterceptInjectables,
    jwtHttpRequestInterceptInjectables
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
