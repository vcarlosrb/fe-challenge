import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { HttpMethodConstant } from '../constants/http-method.constant';
import { GENERIC_ERROR, METHOD_DOESNT_EXIST } from '../constants/strings.constant';

@Injectable({
    providedIn: 'root'
})
export class GenericService {
    constructor(
        private http: HttpClient,
        private spinner: NgxSpinnerService
    ) { }

    public service(method: string, url: string, body: any, options?: any): Observable<any> {
        this.spinner.show();
        
        if (method === HttpMethodConstant.GET_HTTP_METHOD) {
            return this.http.get(url, options).pipe(map((resultado: any) => {
                this.spinner.hide();
                return resultado;
            }), catchError((err, caught) => {
                return this.handleError(err);
            }));
        }

        if (method === HttpMethodConstant.POST_HTTP_METHOD) {
            return this.http.post(url, body, options).pipe(map((resultado: any) => {
                this.spinner.hide();
                return resultado;
            }), catchError((err, caught) => {
                return this.handleError(err);
            }));
        }

        if (method === HttpMethodConstant.PUT_HTTP_METHOD) {
            return this.http.put(url, body, options).pipe(map((resultado: any) => {
                this.spinner.hide();
                return resultado;
            }), catchError((err, caught) => {
                return this.handleError(err);
            }));
        }

        if (method === HttpMethodConstant.DELETE_HTTP_METHOD) {
            return this.http.delete(url, options).pipe(map((resultado: any) => {
                this.spinner.hide();
                return resultado;
            }), catchError((err, caught) => {
                return this.handleError(err);
            }));
        }

        return throwError(METHOD_DOESNT_EXIST);
    }

    private handleError(response: any): Observable<never> {
        this.spinner.hide();
        return throwError(response.json);
    }
}
