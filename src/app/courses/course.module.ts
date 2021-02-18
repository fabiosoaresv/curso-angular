import { NgModule } from '@angular/core';
import { CourseInfoComponent } from './course-info.component';
import { CourseListComponent } from './course-list.component';
import { FormsModule } from '@angular/forms';
import { ReplacePipe } from '../pipe/replace.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StarComponent } from '../star/star.component';

@NgModule({
  declarations: [
  CourseListComponent,
  CourseInfoComponent,
  StarComponent,
  ReplacePipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      }
    ])
  ]
})

export class CourseModule { }
