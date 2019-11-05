import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string) {}
}
@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {
data: any;
  constructor(
    private http: HttpClient
  ) {  }

 executeHelloWorldBeanService() {
  return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
//  console.log('Hellow Nuwan');
 }
//  http://localhost:8080/hello-world/path-variable/nuwan
executeHelloWorldServiceWithPathVariable(name) {
  return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
//  console.log('Hellow Nuwan');
 }
}
