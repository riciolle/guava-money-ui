import { Component, OnInit } from '@angular/core';

import { DashboardService } from './../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pieChartData: any;
  lineChartData: any;

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.configurarGraficoPizza();
    this.configurarGraficoLinha();
  }

  private configurarGraficoPizza() {
    this.dashboardService.lancamnetosPorCategoria().then(dados => {
      this.pieChartData = {
        labels: dados.map(dado => dado.categoria.nome),
        datasets: [
          {
            data: dados.map(dado => dado.total),
            backgroundColor: ['#FF9900', '#109618', '#990099', '#3B3EAC', '#0099C6', '#DD4477', '#3366CC', '#DC3912']
          }
        ]
      };
    });
  }

  private configurarGraficoLinha() {
    this.dashboardService.lancamnetosPorDia().then(dados => {
      const diasDoMes = this.configurarDiaMes();
      console.log(dados.filter(dado => dado.tipo === 'RECEITA'));
      const totalReceita = this.totalPorCadaDiaMes(dados.filter(dado => dado.tipo === 'RECEITA'), diasDoMes);
      const totalDespesa = this.totalPorCadaDiaMes(dados.filter(dado => dado.tipo === 'DESPESA'), diasDoMes);
      this.lineChartData = {
        labels: diasDoMes,
        datasets: [
          {
            label: 'RECEITA',
            data: totalReceita,
            backgroundColor: '#3366CC'
          },
          {
            label: 'DESPESA',
            data: totalDespesa,
            backgroundColor: '#DC3912'
          }
        ]
      };
    });
  }

  private configurarDiaMes() {
    const mesReferencia = new Date();
    mesReferencia.setMonth(mesReferencia.getMonth() + 1);
    mesReferencia.setDate(0);

    const quantidade = mesReferencia.getDate();
    const dias: number[] = [];
    for (let i = 1; i <= quantidade; i++) {
      dias.push(i);
    }

    return dias;
  }

  private totalPorCadaDiaMes(dados, diaMes) {
    const totais: number[] = [];
    for (const dia of diaMes) {
      let total = 0;
      for (const dado of dados) {
        if (dado.dia.getDate() === dia) {
          total = dado.total;
          break;
        }
      }
      totais.push(total);
    }
    return totais;
  }

}
