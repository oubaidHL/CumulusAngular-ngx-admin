import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import { ActivatedRoute, Router } from '@angular/router';
import { ThreadService } from '../../../Service/Thread.Service';
import { ThreadTagEntity } from '../../../Entity/ThreadTag';
import { Thread } from '../../../Entity/Thread';
import { SharedDataService } from '../../../Service/SharedDataService ';
import { Comment } from '../../../Entity/Comment';












@Component({
  selector: 'ngx-ViewThreadDetail',
  templateUrl: './ViewThreadDetail.component.html',
  styleUrls: ['./ViewThreadDetail.component.scss'],
})
export class ViewThreadDetailComponent  {
name:any;
data:any;
input:string;
 comment = new Comment();
 thread = new Thread();

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData,private route: ActivatedRoute,private th:ThreadService,private router:Router,private sharedDataService: SharedDataService) {
    this.data=sharedDataService.getThreadData();

console.log((sharedDataService.getThreadData()));
  }
  ngOnInit(): void {
    
   
  }

Post(input:string){
 this.comment.content=input;
this.thread.id=this.data.id;
 this.comment.setCommentedThread(this.thread);

  console.log(this.comment);
this.th.postComment(this.data.id,this.comment)
  
}
 

}
