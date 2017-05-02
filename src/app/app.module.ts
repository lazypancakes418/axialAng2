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
  declarations: [
    AppComponent
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})

export class AppModule {}