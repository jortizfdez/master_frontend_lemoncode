import { 
    addCarRows, 
    retrieveCarId, 
    populateEditCarForm,
    retrieveCarFormEdit,
    cleanTable,
} from './uiHelpers';
import * as carsApi from './API/carsApi';

const onSuccess = (result) => {
    cleanTable('cars-table');
    addCarRows(result.data, 'cars-table');
};
const onPostSuccess = () => {
    carsApi.getAllCars()
        .then(onSuccess)
        .catch(onError);
}
const onError = (error) => console.log(error);

document.addEventListener('DOMContentLoaded', () => {
    const buttonLoadCars = document.getElementById('loadcars');
    buttonLoadCars.addEventListener('click', (event) => {
        event.stopPropagation();
        carsApi.getAllCars()
            .then(onSuccess)
            .catch(onError);
    });

    const buttonLoadCar = document.getElementById('loadcar');
    buttonLoadCar.addEventListener('click', (event) => {
        event.stopPropagation();
        const carId = retrieveCarId();
        carsApi.getCarById(carId)
            .then((result) => populateEditCarForm(result.data))
            .catch(onError);
    });

    const buttonAddCar = document.getElementById('add');
    buttonAddCar.addEventListener('click', (event) => {
        event.stopPropagation();
        event.preventDefault();
        const car = retrieveCarFormEdit();
        carsApi.addCar(car)
            .then(onPostSuccess)
            .catch(onError);
    });
});