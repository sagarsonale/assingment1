
const API_BASE_URL = 'https://assingment-dash.onrender.com';

export async function fetchSalesOverTime(){
    const response = await fetch(`${API_BASE_URL}/sales-over-time`);
    return await response.json();
}

export async function fetchSalesGrowthRate(){
    const response = await fetch(`${API_BASE_URL}/sales-growth-rate`);
    return await response.json();
}
export async function fetchNewCustomers() {
    const response = await fetch(`${API_BASE_URL}/new-customers`);
    return await response.json();
}

export async function fetchRepeatCustomers() {
    const response = await fetch(`${API_BASE_URL}/repeat-customers`);
    return await response.json();
}

export async function fetchCustomerDistribution() {
    const response = await fetch(`${API_BASE_URL}/customer-distribution`);
    return await response.json();
}

export async function fetchCustomerLifetimeValue() {
    const response = await fetch(`${API_BASE_URL}/customer-lifetime-value`);
    return await response.json();
}