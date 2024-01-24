import { JsonPipe, NgClass } from '@angular/common';
import { AfterViewChecked, AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JsonPipe, RouterOutlet, FormsModule, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {

  @ViewChild(NgForm) form!: NgForm;

  ngAfterViewInit(): void {
    this.form.statusChanges?.subscribe(console.log);
  }

  submit(value: any) {

    console.log(this.form);


    console.log(value);
  }
}
