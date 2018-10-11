export class WeatherModel {
  coord: coordinate;
  weather: Weather;
  base: string;
  main: main;
  visibility: number;
  wind: wind;
  clouds: clouds;
  dt: number;
  sys: sys;
  id: number;
  name: string;
  cod: number;
}

export class coordinate {
  lon: any;
  lat: any;
}

export class Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export class main {
  temp: any;
  pressure: any;
  humidity: any;
  temp_min: any;
  temp_max: any;
}

export class wind {
  speed: any;
  deg: number;
}

export class clouds {
  all: number;
}

export class sys {
  type: number;
  id: number;
  message: any;
  country: string;
  sunrise: number;
  sunset: number;
}
