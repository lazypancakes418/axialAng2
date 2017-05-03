import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app.component';
import { ProjectsComponent } from './components/project.component'
import { ProjectsService } from './services/projects.service';
import { AppRoutingModule } from './routes/app-routing.module'
@NgModule ({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    ProjectsComponent
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})

export class AppModule {}