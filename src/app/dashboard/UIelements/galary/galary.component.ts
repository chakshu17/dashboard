import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galary',
  templateUrl: './galary.component.html',
  styleUrls: ['./galary.component.scss']
})
export class GalaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageObject = [
    {
      image: 'assets/Images/mian2.jpg',
      thumbImage: 'assets/Images/mian2.jpg',
    },
    {
      image: 'assets/Images/main02.jpg',
      thumbImage: 'assets/Images/main02.jpg',
    },
  ];
}
