import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgChartsModule } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { ChartOptions, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, NgChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  revenue = 45000;
  orders = 320;
  customers = 210;
  products = 120;

  barChartLabels: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  barChartType: ChartType = 'bar';
  barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };
  barChartData = {
    labels: this.barChartLabels,
    datasets: [
      {
        label: 'Sales',
        data: [1500, 2000, 3000, 1600, 3500, 1400, 1900],
        backgroundColor: [
          '#00796b', '#5d1049', '#0277bd', '#f9a825', '#8e24aa', '#43a047', '#e53935'
        ],
      }
    ]
  };
}




