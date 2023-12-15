import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { MatTabQComponent } from './question-form/mat-tab-q/mat-tab-q.component';
import { CreateQuestionFormComponent } from './question-form/create-question-form/create-question-form.component';
import { EditQuestionsComponent } from './question-form/edit-questions/edit-questions.component';
import { QuestionComponent } from './question/question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptorService } from './shared/services/auth-interceptor.service';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MatTabsModule } from '@angular/material/tabs';
import { AuthComponent } from './auth/auth.component';
import { TriviaService } from './shared/services/trivia.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ResultPageComponent } from './result-page/result-page.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    LandingPageComponent,
    CreateQuestionFormComponent,
    EditQuestionsComponent,
    QuestionFormComponent,
    MatTabQComponent,
    AuthComponent,
    NavbarComponent,
    ResultPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
