import { Component, OnInit } from '@angular/core';


interface Adultos {
  value: string;
  viewValue: number;
}

interface Criancas {
  valor: string;
  valoraVer: number;
}

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {
  adultos: Adultos[] = [
    {value: 'steak-0', viewValue: 1},
    {value: 'pizza-1', viewValue: 2},
    {value: 'tacos-2', viewValue: 3},
    {value: 'tacos-3', viewValue: 4},
    {value: 'tacos-4', viewValue: 5},
  ];

  criancas: Criancas[] = [
    {valor: 'criança-1', valoraVer: 1},
    {valor: 'criança-2', valoraVer: 2},
    {valor: 'criança-3', valoraVer: 3},
    {valor: 'criança-4', valoraVer: 4},
    {valor: 'criança-5', valoraVer: 5}

  ]


  constructor() { }

  ngOnInit(): void {
  }

}
