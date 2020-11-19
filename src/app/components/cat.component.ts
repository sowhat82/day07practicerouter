import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const catId = this.activatedRoute.snapshot.params.catId;
    console.info(catId)
  }

}
