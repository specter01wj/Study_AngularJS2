import { Observable, of, from, fromEvent, concat, interval, throwError, Subject,
				 asyncScheduler, asapScheduler, queueScheduler, merge } from 'rxjs';
import { mergeMap, map, filter, tap, catchError, take, takeUntil,
				 multicast, refCount, publish, share, scan,
				 publishLast, publishBehavior, publishReplay } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { allBooks, allReaders } from './data';



/*fromEvent(document, 'click').subscribe(
	() => console.log('Clicked!'),
);*/


fromEvent(document, 'click')
  .pipe(scan(count => count + 1, 0))
  .subscribe(count => console.log(`Clicked ${count} times`));






