import { VisaService, Visa } from './../services/visa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bs-main',
  templateUrl: './bs-main.component.html',
  styleUrls: ['./bs-main.component.css']
})
export class BsMainComponent implements OnInit {
  visas: Visa[];

  constructor(private visaService: VisaService) { }

  ngOnInit() {
    this.visas = this.visaService.getAll();
  }

}
