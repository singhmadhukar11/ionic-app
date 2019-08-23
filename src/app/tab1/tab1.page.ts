import { Component } from '@angular/core';
import { GlobalService } from '../global.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
posts: any[];
 constructor(private globalService: GlobalService) {}
ngOnInit() {
this.posts=this.globalService.data;	
console.log(this.posts);
}

}
