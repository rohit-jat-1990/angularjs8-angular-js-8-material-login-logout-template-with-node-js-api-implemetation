import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { config } from '../../config/app.config';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  $sub = [];
  clearSearchButton = false;
  @Input() disableSearch = false;
  @Input() placeHolder: string;
  searchText = '';
  @Output() searchItem = new EventEmitter<string>();

  constructor(private route: ActivatedRoute) { 
    this.$sub.push(
      this.route.queryParamMap.subscribe(
        queryParams => {
          this.searchText = queryParams.get('search');
          if (this.searchText) {
            this.clearSearchButton = true;
          }
        }
      )
    );
  }

  ngOnInit() {
  }

  search(form: NgForm) {
    let text = form && form.controls['searchText'] &&
      form.controls['searchText'].value;
    text = text && text.trim();
    this.clearSearchButton = true;
    if (text && text.length > 0) {
      this.searchItem.emit(text);
    } else if (text === null || text === config.blank) {
      this.clearSearchButton = false;
      this.searchItem.emit(config.blank);
    }
  }

  clearSearch(form: NgForm) {
    if (this.clearSearchButton) {
      this.clearSearchButton = false;
      form.resetForm();
    }
  }
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.$sub.forEach(s => s.unsubscribe());
  }


}
