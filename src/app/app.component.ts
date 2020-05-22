import { Component, ViewEncapsulation } from '@angular/core';
import { MenuItem, MessageService, ConfirmationService } from 'primeng/api';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { style } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {
  title = 'apsunip';
  items: MenuItem[];
  home: MenuItem;
  graficoone: any;
  msgs: Message[] = [];
  position: string;
  display: boolean = false;
  displaytwo: boolean = false;
  graficotwo: any;
  cars: any[];
  constructor(
  ) {

    this.graficoone = {
        labels: ['Segunda-Feira', 'Terça-Feira', 'Quarta-Feira',
         'Quinta-Feira', 'Sexta-Feira', 'Sabado', 'Domingo'],
        datasets: [
            {
                label: 'Semana atual',
                backgroundColor: '#42A5F5',
                borderColor: '#1E88E5',
                data: [90, 49, 40, 35, 70, 100, 65]
            },

            {
              label: 'Semana passada',
              backgroundColor: '#9CCC65',
              borderColor: '#1E88E5',
              data: [34, 33, 22, 40, 50, 41, 30]
          },

        ]
    }

    this.graficotwo = {
      labels: ['Norte', 'LESTE', 'SUL', 'OESTE'],
      datasets: [
          {
              label: 'Semena passada',
              backgroundColor: 'rgba(179,181,198,0.2)',
              borderColor: 'rgba(179,181,198,1)',
              pointBackgroundColor: 'rgba(179,181,198,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(179,181,198,0)',
              data: [65, 59, 90, 81]
          },
          {
              label: 'Semana atual',
              backgroundColor: 'rgba(255,99,132,0.2)',
              borderColor: 'rgba(255,99,132,1)',
              pointBackgroundColor: 'rgba(255,99,132,0)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(255,99,132,1)',
              data: [28, 48, 40, 19]
          }
      ]
  };
}

ngOnInit() {
   this.items = [
            {label: 'Link para o GitHub', icon: 'pi pi-fw pi-file', url: 'https://github.com/hugofsd/APS5'}
          ];
    }


informacaoGrafico(){
 this.display = true;
}

informacaoGraficotwo(){
  this.displaytwo = true;
 }


}
