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
  onSubmit(str: string, num: number) {
    if (!str || !num) {
      return;
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ original: str, number: num })
    };
    fetch('http://localhost:3000/caesar', requestOptions)
      .then(res => res.json())
      .then(
        res => (this.cipherArray = [...this.cipherArray, res.caesarCipher])
      );
  }
}
