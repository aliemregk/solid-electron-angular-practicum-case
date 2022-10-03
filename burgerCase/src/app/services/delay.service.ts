import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DelayService {

  constructor() { }

  delay(miliseconds: number) {
    return new Promise<void>((resolve) => {
      setTimeout(resolve, miliseconds);
    });
  }
}
