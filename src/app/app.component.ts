import { Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private service: DataService) {
    // title = 'my-app';
    service.getJSON().subscribe(data => {
      this.displayedColumns = data.fields.map(tmp => tmp.label);
      ELEMENT_DATA = data.values.map(tmp => {
        return Object.entries(tmp).map(([key, value]) => value);
      });
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    });
  }

  displayedColumns: string[];
  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    // empty method
  }
}

 /* const */ var ELEMENT_DATA: Array<any>;
