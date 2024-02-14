import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavBarComponent {
  submitted: any;
  onSubmit() {}
  downloadResume(): void {
    const resumeUrl = '../../assets/cv.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'your-resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
