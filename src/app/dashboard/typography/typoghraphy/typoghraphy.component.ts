import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-typoghraphy',
  templateUrl: './typoghraphy.component.html',
  styleUrls: ['./typoghraphy.component.scss']
})
export class TypoghraphyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
