import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {
data: any;
  constructor() {  this.data = 'Nuwan';}

 executeHelloWorldBeanService() {
 console.log('Hellow Nuwan');
 }
}
