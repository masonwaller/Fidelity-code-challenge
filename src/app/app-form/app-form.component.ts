import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css']
})
export class AppFormComponent {
  cipherArray = [];
  ngOnInit() {
    fetch('http://localhost:3000/caesar')
      .then(res => res.json())
      .then(res => (this.cipherArray = res.cipher));
  }
  onSubmit(e: string) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ original: e })
    };
    fetch('http://localhost:3000/caesar', requestOptions)
      .then(res => res.json())
      .then(
        res => (this.cipherArray = [...this.cipherArray, res.caesarCipher])
      );
  }
}
