import { Component, AfterViewInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { BudgetService } from '../budget.service';
import { StorageService } from '../_services/storage.service';
import { UserService } from '../_services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-dispense-statistics',
  templateUrl: './dispense-statistics.component.html',
  styleUrls: ['./dispense-statistics.component.css']
})
export class DispenseStatisticsComponent implements AfterViewInit {
  @ViewChild('chartCanvas') chartCanvas: any;
  @ViewChild('pieChartCanvas') pieChartCanvas: any; // Reference to the pie chart canvas

  chart: any;
  pieChart: any; // Reference to the pie chart
  data: any;
  currentUser: any;
  category?: string;
  percentage?: number;
  showFinancials: boolean | undefined;
financials: any;


  constructor(private budgetService: BudgetService, private storageService: StorageService) {}

   // Function to generate random colors
   generateRandomColors(count: number): string[] {
    const colors = [];
    for (let i = 0; i < count; i++) {
      const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.6)`;
      colors.push(color);
    }
    return colors;
  }

  ngAfterViewInit() {
    this.currentUser = this.storageService.getUser();
  
    // Initialize the chart with empty data
    this.chart = new Chart(this.chartCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Expense Percentage',
            data: [],
            backgroundColor: [],
            borderWidth: 1
          }
        ]
      },
      options: {
        // Customize chart options
      }
    });

    // Initialize the pie chart
    this.pieChart = new Chart(this.pieChartCanvas.nativeElement, {
      type: 'pie',
      data: {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: [],
          }
        ]
      },
      options: {
        // Customize pie chart options
      }
    });
  
    // Fetch data from your API and update the chart
    this.budgetService.getDispensesStatistics(this.currentUser.id).subscribe((data: any) => {
      console.log(data);
      this.updateChart(data);
      this.updatePieChart(data);
    });
  }

  updatePieChart(data: DispenseItem[]) {
    const labels: any[] = [];
    const percentages: number[] = [];
    const backgroundColors = this.generateRandomColors(data.length); // Generate random colors

    data.forEach(item => {
      try {
        const categoryObj = JSON.parse(item.category);
        if (categoryObj && categoryObj.prediction) {
          labels.push(categoryObj.prediction);
          percentages.push(item.percentage);
        }
      } catch (error) {
        console.error(`Error parsing category for item: ${JSON.stringify(item)}`);
      }
    });

    // Check if the pie chart instance exists
    if (this.pieChart) {
      // Update the pie chart with new data and random colors
      this.pieChart.data.labels = labels;
      this.pieChart.data.datasets[0].data = percentages;
      this.pieChart.data.datasets[0].backgroundColor = backgroundColors; // Assign random colors

      // Finally, update the pie chart
      this.pieChart.update();
    } else {
      console.error('Pie Chart instance is not available.');
    }
  }

  
  updateChart(data: DispenseItem[]) {
    const labels: any[] = [];
    const percentages: number[] = [];
    const backgroundColors = this.generateRandomColors(data.length); // Generate random colors

  
    data.forEach(item => {
      try {
        const categoryObj = JSON.parse(item.category);
        if (categoryObj && categoryObj.prediction) {
          labels.push(categoryObj.prediction);
          percentages.push(item.percentage);
        }
      } catch (error) {
        console.error(`Error parsing category for item: ${JSON.stringify(item)}`);
      }
    });
  
    // Check if the chart instance exists
    if (this.chart) {
      // Update the chart with new data
      this.chart.data.labels = labels;
      this.chart.data.datasets[0].data = percentages;
            // You can also update the chart's backgroundColor if needed
      this.chart.data.datasets[0].backgroundColor = backgroundColors; // Assign random colors

  
      // You can also update the chart's backgroundColor if needed
  
      // Finally, update the chart
      this.chart.update();
    } else {
      console.error('Chart instance is not available.');
    }
  }

  // Method to toggle the visibility of financials
  toggleFinancialsVisibility(): void {
    this.showFinancials = !this.showFinancials;
  }


}

interface DispenseItem {
  category: string;
  percentage: number;
}
