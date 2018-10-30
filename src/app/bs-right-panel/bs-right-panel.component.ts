import { VisaService } from './../services/visa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bs-right-panel',
  templateUrl: './bs-right-panel.component.html',
  styleUrls: ['./bs-right-panel.component.css']
})
export class BsRightPanelComponent implements OnInit {
  current = 80;
  max = 100;

  constructor(private visaService: VisaService) { }

  ngOnInit() {
  }

}
