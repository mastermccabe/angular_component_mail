import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
  topbar = ['email',"importance","subject","content"];

  users=[
    {email:'bill@gates,com',importance:true, subject:'new windows', content : 'windows xi..'},
    {email:'ada@lovelace.com', importance : true, subject:'Programming',content : 'Enchantress of numbers'},
    {email : 'john@carmac.com', importance : false, subject : 'updated algo',content : 'new algo for shadow volumes'},
    {email: 'gabe@newel.com', importance : false, subject : 'HL3', content : 'jk'}
  ]
}
