import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  static toBool(val:any) {
    if (val === undefined || val === null || val === '' || val === 'false' || val === 'False') {
      return false;
    } else {
      return true;
    }
  }

  static shuffle(array:any) {
    let currentIndex = array.length, temp, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temp = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temp;
    }
    return array;
  }
  static extend(out:any) {
    out = out || {};

    for (let i = 1; i < arguments.length; i++) {
      if (!arguments[i]) {
        continue;
      }

      for (const key in arguments[i]) {
        if (arguments[i].hasOwnProperty(key)) {
          out[key] = arguments[i][key];
        }
      }
    }
    return out;
  }
}
