import { fromEvent, merge } from 'rxjs';
import { pluck } from 'rxjs/operators';

const click = fromEvent(document, 'click');
const keyup = fromEvent(document, 'keyup');

merge(click, keyup).pipe(pluck('type')).subscribe(console.log);
