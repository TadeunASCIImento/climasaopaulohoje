import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent{

  nuvens ='assets/imagens/nuvens.png';
  clima = {
    "id": 3477,
    "name": "São Paulo",
    "state": "SP",
    "country": "BR  ",
    "data": {
        "temperature": 22,
        "wind_direction": "SSE",
        "wind_velocity": 24,
        "humidity": 78,
        "condition": "Muitas nuvens",
        "pressure": 1014,
        "icon": "2",
        "sensation": 22,
        "date": "2020-11-12 17:25:14"
    }
}
}
