import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cats = [
    {catId: 1, type: 'British Short Hair'},
    {catId: 2, type: 'Stray'},
    {catId: 3, type: 'Pussy Cat Dolls'}
  ]
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toCat(){
    console.info(this.cats[0].catId)
//    this.router.navigate(['/cats']);
    this.router.navigate(['/cats', this.cats[0].catId]);
  }

}
