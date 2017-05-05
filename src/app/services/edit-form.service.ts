import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()

export class EditFormService {
 private somestring = new Subject<string>();


 some = this.somestring.asObservable();

 setSome (str: string) {
   this.somestring.next(str)
 }
}