import { Injectable }              from '@angular/core';
// import { Http, Response }          from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class Contact {

    // private url = 'submit-form'

    constructor(
                public name: string,
                public email: string,
                public message: string) {}

    send(): String {

        return 'this is a test';
        // return this.http.post(this.url, {
        //      name : this.name,
        //      email: this.email,
        //      message: this.message
        // })
        //     .map(this.extractData)
        //     .catch(this.handleError);
    }

    // private extractData(res: Response) {
    //     let body = res.json();
    //     return body.data || {};
    // }
    //
    // private handleError(error: Response | any) {
    //     In a real world app, we might use a remote logging infrastructure
        // let errMsg: string;
        // if (error instanceof Response) {
        //     const body = error.json() || '';
        //     const err = body.error || JSON.stringify(body);
        //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        // } else {
        //     errMsg = error.message ? error.message : error.toString();
        // }
        // console.error(errMsg);
        // return Promise.reject(errMsg);
    // }
}
//
