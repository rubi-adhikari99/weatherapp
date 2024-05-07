import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  weatherData: any;
  city!: string;
  iconUrl: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  getWeather() {
    let details = this.weatherService.getData(this.city).subscribe((data) => {
      this.setData(data);
    });
  }

  setData(details: any) {
    this.weatherData = details;
    this.weatherData.temp = (this.weatherData.main.temp).toFixed(1);
    this.weatherData.temp_min = (
      this.weatherData.main.temp_min
    ).toFixed(0);
    this.weatherData.temp_max = (
      this.weatherData.main.temp_max 
    ).toFixed(0);
    
    console.log(this.weatherData);
    this.iconUrl= `https://openweathermap.org/img/wn/${this.weatherData.weather[0].icon}@2x.png`
    console.log(this.weatherData.weather[0].icon)
  }


}
