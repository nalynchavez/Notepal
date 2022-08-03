import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.page.html',
  styleUrls: ['./diary.page.scss'],
})
export class DiaryPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  journal(){
    this.router.navigate(['home/journal']);
  }
}
