import { Component } from '@angular/core';
import { Contact }    from './contact';
import {ContactService} from './contact.service';
import { Http }          from '@angular/http';

@Component({
  selector: 'my-app',
  templateUrl: 'app/form.html',
})

export class AppComponent  {
    http  = Http
    model = new Contact('', '', '');
    send(){
      let service = new ContactService();
      service.send(this.model);
  }
}
