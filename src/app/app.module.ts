import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { MatTabQComponent } from './question-form/mat-tab-q/mat-tab-q.component';
import { CreateQuestionFormComponent } from './question-form/create-question-form/create-question-form.component';
import { EditQuestionsComponent } from './question-form/edit-questions/edit-questions.component';
import { PlayGameComponent } from './play-game/play-game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { AuthInterceptorService } from './auth-interceptor.service';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayGameComponent,
    LandingPageComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    FormsModule,
    MatTabQComponent,
    QuestionFormComponent,
    CreateQuestionFormComponent,
    EditQuestionsComponent,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
