import { Observable, of, from, fromEvent, concat, interval, throwError, Subject,
				 asyncScheduler, asapScheduler, queueScheduler, merge } from 'rxjs';
import { mergeMap, map, filter, tap, catchError, take, takeUntil,
				 multicast, refCount, publish, share, scan, throttleTime,
				 publishLast, publishBehavior, publishReplay } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { allBooks, allReaders } from './data';




const observable$ = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});









