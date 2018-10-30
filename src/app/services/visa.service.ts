import { Injectable } from '@angular/core';

export interface Visa {
  number: string;
}

@Injectable()
export class VisaService {

  constructor() { }

  getAll(): Visa[] {
    return [{ number: 'AA 100' }, { number: 'AA 200' }, { number: 'AA 300' }];
  }
}
