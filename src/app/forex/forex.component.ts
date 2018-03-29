import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.css']
})
export class ForexComponent implements OnInit {
  // rates = [];
  rates: any = [];
  base = 'EUR';
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getRates().subscribe(rates => {
      console.log('rates :', rates);

      this.rates = rates;
    });
  }
  getRates() {
    return this.http.get(`http://data.fixer.io/api/latest?access_key=d5e9da497687c7025004da605028448c`);
    // return this.http.get(`http://data.fixer.io/api/latest?access_key=d5e9da497687c7025004da605028448c&base=${this.base}`);

  }
  toggle() {
    // this.base === 'HKD' ? this.base = 'SGD' : this.base = 'HKD'; restricted for free plan
  }
}
