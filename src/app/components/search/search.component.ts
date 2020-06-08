import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { SearchService } from '@services/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  form: FormGroup;
  searchQuery: string;

  constructor(private router: Router, private searchService: SearchService) {}

  ngOnInit() {
    this.searchService.getSearchQuery().subscribe((query) => {
      this.searchQuery = query;
    });
    this.form = new FormGroup({
      search: new FormControl(this.searchQuery, {
        validators: [Validators.required]
      })
    });
  }

  handleSubmit() {
    if (this.form.valid) {
      this.searchService.setSearchQuery(this.form.value.search);
      this.router.navigate(['/search']);
    }
  }
}
