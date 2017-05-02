import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app.component'
import { ProjectsService } from './services/projects.service';

@NgModule ({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [],
  providers: [ProjectsService],
  bootstrap: []
})

export class AppModule {}