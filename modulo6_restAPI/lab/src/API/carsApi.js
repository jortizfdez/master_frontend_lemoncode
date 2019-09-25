import axios from 'axios';

const baseUrl = 'http://localhost:3050';

export const getAllCars = () => (axios.get(`${baseUrl}/api/cars/`));
export const getCarById = (id) => (axios.get(`${baseUrl}/api/cars/${id}`));
export const addCar = (car) => (axios.post(`${baseUrl}/api/cars/`, car));