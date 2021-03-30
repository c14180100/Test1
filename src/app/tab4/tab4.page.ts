import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  urlImage : string;

  constructor(public route : ActivatedRoute) { }

  ngOnInit() {
    this.urlImage = this.route.snapshot.paramMap.get('iFoto');
  }

}
