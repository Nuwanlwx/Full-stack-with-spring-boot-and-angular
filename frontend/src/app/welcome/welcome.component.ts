import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
  message = 'Some welcome message';
  welcomeMessageFromService: string;
  name: '';
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService,
  ) { }

  ngOnInit() {
    console.log(this.route.snapshot.params.name);
    this.name = this.route.snapshot.params.name;
  }
  getWelcomeMessage() {
  // this.service.data;

  // console.log('test');
  // alert(this.service.data);
    this.service.executeHelloWorldBeanService().subscribe (
      // response => console.log(response.message)
      response => this.handleSucessfulResponse(response),
      error => this.handdleErrorResponse(error)
    );
  // console.log( this.service. executeHelloWorldBeanService());
  }
  getWelcomeMessageWithParameter() {
      this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe (
        // response => console.log(response.message)
        response => this.handleSucessfulResponse(response),
        error => this.handdleErrorResponse(error)
      );
    // console.log( this.service. executeHelloWorldBeanService());
    }

  handleSucessfulResponse(response) {
    this.welcomeMessageFromService = response.message;
    console.log(response);
    console.log(response.message);
  }
  handdleErrorResponse(error) {
    this.welcomeMessageFromService = error.error.message;
    console.log(error);
    console.log(error.error);
    console.log(error.error.message);
  }
}
