import { Component, OnInit } from '@angular/core';
import { Points } from '../points';
import { PointserviceService } from '../pointservice.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-pointstable',
  templateUrl: './pointstable.component.html',
  styleUrls: ['./pointstable.component.css']
})
export class PointstableComponent implements OnInit {

  points:Points [];
  constructor(private pointService: PointserviceService) { }

  ngOnInit() {
    this.getPointsTable();
  }

  getPointsTable(): void{
    this.pointService.getPoints()
        .subscribe(points => this.points = points);
  }
  displayedColumns: string[] = ['team', 'matches', 'win', 'losses','NR','pts','NetRR'];
 
}
