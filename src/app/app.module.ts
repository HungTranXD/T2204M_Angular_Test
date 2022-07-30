import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ExampleComponent} from "./example/example.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {FavInboxComponent} from "./fav-inbox/fav-inbox.component";
import {FavSentComponent} from "./fav-sent/fav-sent.component";
import {JohnInboxComponent} from "./john-inbox/john-inbox.component";
import {JohnDraftsComponent} from "./john-drafts/john-drafts.component";
import {JohnDeletedComponent} from "./john-deleted/john-deleted.component";
import {JohnSentComponent} from "./john-sent/john-sent.component";
import {JohnOutboxComponent} from "./john-outbox/john-outbox.component";

const appRoutes: Routes = [
  {path: '', component : FavInboxComponent},
  {path: 'fav-sent', component : FavSentComponent},
  {path: 'john-inbox', component : JohnInboxComponent},
  {path: 'john-drafts', component : JohnDraftsComponent},
  {path: 'john-deleted', component : JohnDeletedComponent},
  {path: 'john-sent', component : JohnSentComponent},
  {path: 'john-outbox', component : JohnOutboxComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    FavInboxComponent,
    FavSentComponent,
    JohnInboxComponent,
    JohnDraftsComponent,
    JohnDeletedComponent,
    JohnSentComponent,
    JohnOutboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
