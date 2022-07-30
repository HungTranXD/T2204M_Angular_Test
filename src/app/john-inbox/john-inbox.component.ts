import {Component} from "@angular/core";
import {IEmail} from "../interfaces/email.interface";

@Component({
  selector: 'app-john-inbox',
  templateUrl: './john-inbox.component.html'
})

export class JohnInboxComponent {
  dataArray : IEmail[] = [
    {name: 'Alfonson Burnnet', title: 'Anything I can helf with', adress: 'Hello Otto Ashley,'},
    {name: 'Rogan Espioza', title: 'Assistent Marketing Department', adress: 'Hello Kerry Best,'},
    {name: 'Sierra Kerr', title: 'Application for Transfer', adress: 'Hello Halee Linsey,'},
    {name: 'Gemma Robertson', title: 'Apology for late response email', adress: 'Hello Colette Wooten,'},
    {name: 'Ann Graza', title: 'Application for Job Title', adress: 'Hello Kerry Best,'},
  ];
}
