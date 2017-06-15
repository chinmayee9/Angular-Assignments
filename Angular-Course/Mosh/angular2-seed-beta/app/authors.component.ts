import {Component} from 'angular2/core'
import {AuthorService} from './authors.service'

@Component({
    selector: 'authors',
    template: `
        <h2>Authors</h2>
        {{ title }}
        <ol>
            <li *ngFor="#a of authorslist">
            {{ a }}
            </li>
        </ol>
        `,
    providers: [AuthorService]
})

export class AuthorsComponent {
    title = "Authors web page";
    authorslist;
    constructor(authorService: AuthorService) {
        this.authorslist = authorService.getAuthors();
    }
 }