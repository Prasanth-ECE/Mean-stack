import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http'
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-bing-search',
  templateUrl: './bing-search.component.html',
  //template: `<div [innerHtml]="myTemplate">`,
  styleUrls: ['./bing-search.component.css']
})
export class BingSearchComponent implements OnInit {
  private myTemplate: any = "";
  @Input() url: string;
  content;
  constructor(private http: HttpClient, private httpo: Http, private sanitizer: DomSanitizer) {
    this.bingSearch();
   }

  ngOnInit() {
    //this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.content);
  }
  bingSearch(){
    let subscriptionKey = '89d22b6a773b4b279396322f132db902';
    let headers = new HttpHeaders({'Ocp-Apim-Subscription-Key': subscriptionKey});
    this.httpo.get('https://ui.customsearch.ai/hosted?customConfig=3723305441&market=en-US&safeSearch=Moderate&q=')
    .map( (html:any) => {
      console.log(html)
      this.myTemplate = html
    });
  }
  doSearch(searchvalue) {
    console.log(searchvalue.value)
       let subscriptionKey = '89d22b6a773b4b279396322f132db902';
       let customConfigId = '3723305441';
       let searchTerm = searchvalue.value;
       let headers = new HttpHeaders({'Ocp-Apim-Subscription-Key': subscriptionKey});
       // here your url
       let url = 'https://api.cognitive.microsoft.com/bingcustomsearch/v7.0/search?' + 'q=' + searchTerm + '&customconfig=' + customConfigId

        this.http.get(url, {headers: headers}).subscribe(
          res => console.log('handle your response', res),
          msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
        );

      }
}
