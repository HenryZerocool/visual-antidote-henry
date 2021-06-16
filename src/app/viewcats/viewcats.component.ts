import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewcats',
  templateUrl: './viewcats.component.html',
  styleUrls: ['./viewcats.component.scss', '../app.component.scss'],
})
export class ViewcatsComponent implements OnInit {
  private readonly catAPI = 'https://cataas.com/api/cats';
  randomCat: any[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getCat() {
    // get all cat from api
    this.http.get<any>(this.catAPI).subscribe((data) => {
      let i = 0;
      // create random unique index base on data length
      while (i < 12) {
        let rand = Math.floor(Math.random() * 500);
        if (!this.randomCat.find(el => el.index === rand)){
          // push random data into array to display
          this.randomCat.push({ index: rand, id: data[rand].id, imagesrc: "https://cataas.com/cat/" + data[rand].id });
          i++;
        }
      }
    });
  }
}
