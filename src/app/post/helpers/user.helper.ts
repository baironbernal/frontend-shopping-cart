import {Injectable} from "@angular/core";
import {Http} from "@angular/http";


@Injectable()
export class HelperService {
   constructor(private http: Http, private translateService: TranslateService) {

   }

}