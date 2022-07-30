import {Component, Input} from "@angular/core";
import {ExampleInterface} from "../interfaces/example.interface";

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html'
})

export class ExampleComponent{
  @Input()
  data !: ExampleInterface;
}
