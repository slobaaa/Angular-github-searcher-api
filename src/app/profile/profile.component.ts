import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // user: any[];
  user: any;
  repos: any[];
  username: string;
  constructor(private githubService: GithubService) {
    this.user = false;
    // this.githubService.getUser()
    // .subscribe(user => {
    //   console.log(user);
    //   this.user = user;
    // });
    // this.githubService.getRepos()
    // .subscribe(repos => {
    //   console.log(repos);
    //   this.repos = repos;
    // });
  }

  searchUser() {
  this.githubService.updateUser(this.username);
  this.githubService.getUser()
    .subscribe(user => {
      console.log(user);
      this.user = user;
    });
  this.githubService.getRepos()
    .subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
  }

  ngOnInit() {
  }

}
