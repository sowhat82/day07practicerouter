import { Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {



  people = [
    {name: 'Obi Wan'},
    {name: 'R2 D2'},
    {name: 'Darth Vader'}
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getFilms(idx) {
    console.info(idx)
    const films = [2,5,4,6,3,1] //an array of films by idx
    this.router.navigate(['/film', idx]
                        , 
                        { queryParams: { fids: films.join('|') }}
                        )
    
  }
}
