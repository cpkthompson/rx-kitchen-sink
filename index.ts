import {from, Observable} from 'rxjs'

let bookArray = [
    {id: 1, title: 'Harry Potter'},
    {id: 2, title: 'Beauty and the Beast'},
    {id: 2, title: 'Cinderella'},
];

let booksObservable$: Observable<any> = from(bookArray);
booksObservable$.subscribe();
