import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { AuthComponent } from './auth/auth.component';
import { PlayGameComponent } from './play-game/play-game.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingPageComponent },
  { path: 'questions', component: QuestionFormComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'play', component: PlayGameComponent },
  { path: 'results', component: ResultPageComponent},
  { path: '**', redirectTo: '/landing', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
