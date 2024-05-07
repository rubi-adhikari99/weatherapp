import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

    private apiKey = `73f15a03e003aeeb5ccb7c7237c52a1f`
   private baseUrl = `https://api.openweathermap.org/data/2.5/weather`

  constructor(private http: HttpClient) { }

  getData(city: string){
   const url = `${this.baseUrl}?q=${city}&appid=${this.apiKey}&units=metric`
   return this.http.get(url)
  }
}
