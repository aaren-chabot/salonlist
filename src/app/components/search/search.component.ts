import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  handleSubmit(f: NgForm) {
    const search = f.value.search;
    if (search.length > 0) {
      this.router.navigate(['/search'], {
        queryParams: { query: search }
      });
    }
  }
}
