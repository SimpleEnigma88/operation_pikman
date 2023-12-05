import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabQComponent } from './question-form/mat-tab-q/mat-tab-q.component';
import { CreateQuestionFormComponent } from './question-form/create-question-form/create-question-form.component';
import { EditQuestionsComponent } from './question-form/edit-questions/edit-questions.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabQComponent,
    QuestionFormComponent,
    CreateQuestionFormComponent,
    EditQuestionsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
