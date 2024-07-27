import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CatalogueService {
  public host: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  public getResource(url: string) { 
    return this.http.get(this.host + url);
  }

  public getResource2(url) {
    return this.http.get(url);
  }
  uploadPhotoProduct(file: File, idProduct): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest(
      'POST',
      this.host + '/uploadPhoto/' + idProduct,
      formdata,
      {
        reportProgress: true,
        responseType: 'text',
      }
    );

    return this.http.request(req);
  }

  public patchResource(url, data) {
    return this.http.patch(url, data);
  }
}
