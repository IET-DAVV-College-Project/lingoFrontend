import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { DataService } from 'src/app/service/data.service';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-question-home',
  templateUrl: './question-home.component.html',
  styleUrls: ['./question-home.component.scss']
})
export class QuestionHomeComponent {

  question!:any;
  filter_category!:string;
  filter_campus!:string;
  filter_round!:string;
  filter_companyName!:string;
  Cards=true;
  company_menu=this.dataservice.globalArray;
  ngOnInit()
  {
    this.getQuestionsByFilter();
    if (!this.authService.user) {
      // User is not logged in, handle this 
      this.router.navigate(['/badRequest'])
    }

  }
  private getQuestionsByFilter(){
    this.questionService.getQuestionByFilter(this.filter_companyName,this.filter_category,this.filter_campus,this.filter_round).subscribe(data => {
      console.log(data);
      
      this.question=data;
    },
        error => this.Cards=false
        
     );
}
  search(){
    
    this.getQuestionsByFilter();
  }
  likePost(postid:string,q:any) {
    this.questionService.likeBlog(postid)
      .subscribe(response => {
        // Handle the response if needed
        
        console.log('Post liked successfully!', response);
        q.likes=response.likes;
      });
      
    
  }

  dislikePost(postid:string,q:any) {
    this.questionService.dislikeBlog(postid)
      .subscribe(response => {
        // Handle the response if needed
        
        console.log('Post disliked successfully!', response);
        q.likes=response.likes;
      }); 
  }
  Onload(){
    location.reload();
  }
  constructor(private dataservice:DataService ,private router: Router,private authService: AuthService,private questionService:QuestionService){
         
  }
  navigation()
  {
    this.router.navigate(['/badRequest']);
  }
  isAuthorized()
  {
    return this.authService.isAuthorized();
  } 
}
