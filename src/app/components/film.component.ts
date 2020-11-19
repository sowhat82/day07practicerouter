import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatCardModule} from '@angular/material/card'

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  films = [
    {title: 'The Otter', episode_id: 1},
    {title: 'The Hunter', episode_id: 2},
    {title: 'The Mistress', episode_id: 3}
  ]
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const pId = this.activatedRoute.snapshot.params.pId;
    const fids = this.activatedRoute.snapshot.queryParams.fids.split('|');

    console.info('pID: ', pId)
    console.info('fids: ', fids)
  // this.films = //get the films

  }

}
