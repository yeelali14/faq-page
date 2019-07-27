import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/core/base.service';
import { FaqModel } from 'src/app/shared/models/faq.model';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  faqArray: Array<FaqModel> = new Array<FaqModel>();
  idx: number = 0;
  show: boolean = false;
  biologyArr = [];
  movieTvArr = [];
  astronomyArr = [];
  languageArr = [];
  isBiology: boolean = false;
  isMovie: boolean = false;
  isAstronomy: boolean = false;
  isLanguages: boolean = false;

  constructor(private base: BaseService) { }

  ngOnInit() {
    this.base.getAllQuestions().subscribe(q => {
      this.faqArray = q;
      if (this.faqArray) {
        for (const i in this.faqArray) {
          if (this.faqArray[i]["Category"] == "Biology") {
            this.biologyArr.push(this.faqArray[i]);
          } else if (this.faqArray[i]["Category"] == "Movies and Tv shows") {
            this.movieTvArr.push(this.faqArray[i]);
          } else if (this.faqArray[i]["Category"] == "Astronomy") {
            this.astronomyArr.push(this.faqArray[i]);
          } else if (this.faqArray[i]["Category"] == "Languages") {
            this.languageArr.push(this.faqArray[i]);
          }
        }
      }
    });
  }

  showCurrentResult(index) {
    if (this.idx == index) {
      this.idx = 0;
    }
    else {
      this.idx = index;
    }
  }

  openCategory(category: string) {
    switch (category) {
      case 'Biology':
        this.isBiology = !this.isBiology;
        break;
      case 'Movies and Tv shows':
        this.isMovie = !this.isMovie;
        break;
      case 'Astronomy':
        this.isAstronomy = !this.isAstronomy;
        break;
      case 'Languages':
        this.isLanguages = !this.isLanguages;
        break;
    }
  }

}
