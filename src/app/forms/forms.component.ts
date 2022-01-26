import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  templateUrl: './forms.component.html',
})
export class FormsComponent {
  userModel = new User('', '', +91, '');
  submitted = false;
  errorMsg = '';
  constructor(private enrollmentService: EnrollmentService) {}
  onSubmit() {
    this.submitted = true;
    this.enrollmentService
      .enroll(this.userModel)
      .subscribe((data) => console.log('success', data));
    (error: any) => (this.errorMsg = error.statusText);
  }
}
