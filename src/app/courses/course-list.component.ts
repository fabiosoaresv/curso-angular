import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit {
  _courses: Course[] = [];

  _filteredCourses: Course[] = [];
  _filterBy: string;

  constructor(private courseService: CourseService) { }

  retrieveAll(): void {
    this.courseService.retrieveAll().subscribe({
      next: courses => {
        this._courses = courses;
        this._filteredCourses = this._courses;
      },
      error: err => console.log('Error ', err)
    })
  }

  set filter(value: string) {
    this._filterBy = value;
    this._filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  deleteById(courseId: number): void {
    this.courseService.deleteById(courseId).subscribe({
      next: () => {
        console.log('Deleted with success');
        this.retrieveAll();
      },
      error: err => console.log('Error ', err)
    })
  }
  get filter() {
    return this._filterBy;
  }

  ngOnInit(): void {
    // Com API
    this.retrieveAll();

    // Sem API
    //this._courses = this.courseService.retrieveAll();
    //this._filteredCourses = this._courses;


    // Sem service
    //this.courses = [
    //  {
    //    id: 1,
    //    name: 'Angular Forms',
    //    imageURL: '/assets/images/forms.png',
    //    price: 99.99,
    //    code: 'XPS-8796',
    //    duration: 120,
    //    rating: 2.5,
    //    releaseDate: 'December, 2, 2019'
    //  },
    //  {
    //    id: 2,
    //    name: 'Angular HTML',
    //    imageURL: '/assets/images/html.png',
    //    price: 89.99,
    //    code: 'XPS-8797',
    //    duration: 100,
    //    rating: 4.2,
    //    releaseDate: 'November, 2, 2019'
    //  }
    //]
  }
}
