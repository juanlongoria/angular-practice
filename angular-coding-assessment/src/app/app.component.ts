import { Component } from '@angular/core';
import {EnrollmentService} from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-coding-assessment';
}
constructor(private _enrollmentService: EnrollmentService){}
validateTopic(value) {
  if (value === 'default') {
    this.topicHasError = true;
  } else {
    this.topicHasError = false;
  }
}

onsubmit() {
  this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data => console.log('Success!', data),
      error => console.error('Error!', error)
    )
  // console.log(this.userModel);
}

resetForm(){
  this.checkoutForm.reset();
}

