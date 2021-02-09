import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css']
})
export class AppFormComponent {
  log(x) {
    console.log(x);
  }
  onSubmit(e: string) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ original: e })
    };
    fetch('http://localhost:3000/caesar', requestOptions)
      .then(res => res.json())
      .then(res => console.log(res));
  }
}
