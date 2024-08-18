/*import React, { useEffect, useState } from 'react';
import { fetchSalesOverTime, fetchSalesGrowthRate, fetchNewCustomers, fetchRepeatCustomers, fetchCustomerDistribution, fetchCustomerLifetimeValue } from './apiService';
import ChartComponent from './ChartComponent';
import './App.css';

function App() {
    const [salesOverTime, setSalesOverTime] = useState([]);
    const [salesGrowthRate, setSalesGrowthRate] = useState([]);
    const [newCustomers, setNewCustomers] = useState([]);
    const [repeatCustomers, setRepeatCustomers] = useState([]);
    const [customerDistribution, setCustomerDistribution] = useState([]);
    const [customerLifetimeValue, setCustomerLifetimeValue] = useState([]);

    useEffect(() => {
        fetchSalesOverTime().then(setSalesOverTime);
        fetchSalesGrowthRate().then(setSalesGrowthRate);
        fetchNewCustomers().then(setNewCustomers);
        fetchRepeatCustomers().then(setRepeatCustomers);
        fetchCustomerDistribution().then(setCustomerDistribution);
        fetchCustomerLifetimeValue().then(setCustomerLifetimeValue);
    }, []);

    return (
      <div className="App">
      <h1>Shopify Dashboard</h1>
      <div className="chart-container">
          <ChartComponent data={salesOverTime} type="line" title="Total Sales Over Time" />
      </div>
      <div className="chart-container">
          <ChartComponent data={salesGrowthRate} type="line" title="Sales Growth Rate Over Time" />
      </div>
      <div className="chart-container">
          <ChartComponent data={newCustomers} type="bar" title="New Customers Added Over Time" />
      </div>
      <div className="chart-container">
          <ChartComponent data={repeatCustomers} type="bar" title="Number of Repeat Customers" />
      </div>
      <div className="chart-container">
          <ChartComponent data={customerDistribution} type="bar" title="Geographical Distribution of Customers" />
      </div>
      <div className="chart-container">
          <ChartComponent data={customerLifetimeValue} type="line" title="Customer Lifetime Value by Cohorts" />
      </div>
  </div>
    );
}

export default App;*/

import React, { useEffect, useState } from 'react';
import { fetchSalesOverTime, fetchSalesGrowthRate, fetchNewCustomers, fetchRepeatCustomers, fetchCustomerDistribution, fetchCustomerLifetimeValue } from './apiService';
import ChartComponent from './ChartComponent';
import './App.css';

function App() {
    const [salesOverTime, setSalesOverTime] = useState([]);
    const [salesGrowthRate, setSalesGrowthRate] = useState([]);
    const [newCustomers, setNewCustomers] = useState([]);
    const [repeatCustomers, setRepeatCustomers] = useState([]);
    const [customerDistribution, setCustomerDistribution] = useState([]);
    const [customerLifetimeValue, setCustomerLifetimeValue] = useState([]);

    const [chartType, setChartType] = useState('line'); // Default chart type

    useEffect(() => {
        fetchSalesOverTime().then(setSalesOverTime);
        fetchSalesGrowthRate().then(setSalesGrowthRate);
        fetchNewCustomers().then(setNewCustomers);
        fetchRepeatCustomers().then(setRepeatCustomers);
        fetchCustomerDistribution().then(setCustomerDistribution);
        fetchCustomerLifetimeValue().then(setCustomerLifetimeValue);
    }, []);

    const handleChartTypeChange = (event) => {
        setChartType(event.target.value);
    };

    return (
        <div className="App">
            <h1 className="title">Shopify Dashboard</h1>

            <div className="chart-controls">
                <label htmlFor="chart-type">Select Chart Type: </label>
                <select id="chart-type" value={chartType} onChange={handleChartTypeChange}>
                    <option value="line">Line</option>
                    <option value="bar">Bar</option>
                    <option value="pie">Pie</option>
                    <option value="doughnut">Doughnut</option>
                    
                    <option value="scatter">Scatter</option>
                    <option value="bubble">Bubble</option>
                </select>
            </div>

            <div className="chart-container">
          <ChartComponent data={salesOverTime} type={chartType} title="Total Sales Over Time" />
      </div>
      <div className="chart-container">
          <ChartComponent data={salesGrowthRate} type={chartType} title="Sales Growth Rate Over Time" />
      </div>
      <div className="chart-container">
          <ChartComponent data={newCustomers} type={chartType} title="New Customers Added Over Time" />
      </div>
      <div className="chart-container">
          <ChartComponent data={repeatCustomers} type={chartType} title="Number of Repeat Customers" />
      </div>
      <div className="chart-container">
          <ChartComponent data={customerDistribution} type={chartType} title="Geographical Distribution of Customers" />
      </div>
      <div className="chart-container">
          <ChartComponent data={customerLifetimeValue} type={chartType} title="Customer Lifetime Value by Cohorts" />
      </div>
  </div>
    );
}

export default App;
