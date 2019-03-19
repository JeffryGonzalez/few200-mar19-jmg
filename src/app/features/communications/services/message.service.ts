import { BehaviorSubject, Observable } from 'rxjs';

export class MessageService {

  private message: string;


  private msgSubject = new BehaviorSubject<string>('JEff Was Here');

  getMessage() {
    return this.message;
  }

  setMessage(value: string) {
    this.message = value;
    this.msgSubject.next(value);
  }

  getObservable(): Observable<string> {
    return this.msgSubject.asObservable();
  }
}
