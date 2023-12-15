import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { AuthComponent } from './auth/auth.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingPageComponent },
  { path: 'play', component: QuestionComponent },
  { path: 'edit', component: QuestionFormComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'results', component: ResultPageComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
