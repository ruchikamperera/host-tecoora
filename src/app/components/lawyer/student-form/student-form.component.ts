import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDocumentSelect(){
    this.router.navigate(['/document-select'])
  }

}
