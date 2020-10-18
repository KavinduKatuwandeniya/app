import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MaterialModule} from './_material/material.module';
import {EjsModule} from './_ejs/ejs.module';
import {AppRoutingModule} from './app-routing.module';

import {AuthenticationService} from './_services/authentication.service';
import {AuthenticationGuard} from './_helpers/authentication.guard';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './auth/login/login.component';
import {TokenInterceptor} from './_helpers/token.interceptor';
import {ErrorInterceptor} from './_helpers/error.interceptor';
import {VerificationComponent} from './auth/verification/verification.component';
import {AuthComponent} from './auth/auth.component';
import {ForgotPasswordComponent} from './auth/forgot-password/forgot-password.component';
import {AttendanceDialogComponent, AttendanceComponent} from './home/attendance/attendance.component';
import {ResultsDialogComponent, ResultsComponent, DeleteModuleDialogComponent} from './home/results/results.component';
import {TimetableComponent} from './home/timetable/timetable.component';
import {EditModuleDialogComponent} from './home/results/results.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {UploadAttendanceComponent} from './home/attendance/upload-attendance/upload-attendance.component';
import {EditAttendanceComponent} from './home/attendance/edit-attendance/edit-attendance.component';
import {ViewAttendanceComponent} from './home/attendance/view-attendance/view-attendance.component';
import {PaymentComponent} from './home/payment/payment.component';
import {NotificationComponent} from './home/notification/notification.component';
import { RegistrationComponent } from './home/registration/registration.component';
import { AddResultComponent } from './home/results/add-result/add-result.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    VerificationComponent,
    AuthComponent,
    ForgotPasswordComponent,
    AttendanceComponent,
    ResultsComponent,
    ResultsDialogComponent,
    AttendanceDialogComponent,
    TimetableComponent,
    EditModuleDialogComponent,
    DeleteModuleDialogComponent,
    UploadAttendanceComponent,
    EditAttendanceComponent,
    ViewAttendanceComponent,
    NotificationComponent,
    PaymentComponent,
    NotificationComponent,
    RegistrationComponent,
    AddResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    EjsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatAutocompleteModule
  ],
  providers: [
    AuthenticationGuard,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
