import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import { GoogleLoginProvider,
  GoogleSigninButtonDirective,
  GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { BadRequestComponent } from './components/bad-request/bad-request.component';
import { CreateComponent } from './components/create/create.component';
import { BlogTileComponent } from './components/blog-tile/blog-tile.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserBlogComponent } from './components/user-blog/user-blog.component';
import { NoContentComponent } from './components/no-content/no-content.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { UpdateComponent } from './components/update/update.component';
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { QuestionHomeComponent } from './components/question-home/question-home.component';
import { QuestionHeaderComponent } from './components/question-header/question-header.component';
import { QuestionCreateComponent } from './components/question-create/question-create.component';
import { QuestionViewComponent } from './components/question-view/question-view.component';
import { QuestionDetailsComponent } from './components/question-details/question-details.component';
import { QuestionUpdateComponent } from './components/question-update/question-update.component';
import { LogOutComponent } from './components/log-out/log-out.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    UserComponent,
    UnauthorizedComponent,
    BadRequestComponent,
    CreateComponent,
    BlogTileComponent,
    UserBlogComponent,
    NoContentComponent,
    BlogDetailsComponent,
    UpdateComponent,
    UserHeaderComponent,
    QuestionHomeComponent,
    QuestionHeaderComponent,
    QuestionCreateComponent,
    QuestionViewComponent,
    QuestionDetailsComponent,
    QuestionUpdateComponent,
    LogOutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    AngularEditorModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('281702526036-4c7mdcud53cs8emsmailimcvics7rueu.apps.googleusercontent.com',
            {
              oneTapEnabled:false,
            }),
          },
        ],
      } as SocialAuthServiceConfig,
    },
    GoogleSigninButtonDirective

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
