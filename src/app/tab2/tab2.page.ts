import { Component } from '@angular/core';
import { GlobalService } from '../global.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
posts: any[];
 constructor(private globalService: GlobalService) {}
ngOnInit() {
this.posts=this.globalService.data;	
console.log(this.posts);
}
}
