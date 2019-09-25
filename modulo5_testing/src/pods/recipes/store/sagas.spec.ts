import { watchRecipesPodSagas, getRecipesRequestSaga } from './sagas'
import { actionTypes } from './action-types';
import { BaseAction } from 'common/types';
import { Recipe, getRecipes } from '../api';
import { call, put, takeLatest } from 'redux-saga/effects';

describe('pods/recipes/store/ watchRecipesPodSagas sagas', () => {
    describe('watchRecipesPodSagas', () => {
        it('should wait for expected action and execute the expected worker', () => {
            // Arrange
            const saga = watchRecipesPodSagas();
            // Act
            const result = saga.next();
            // Assert
            expect(result.value).toEqual(takeLatest(actionTypes.GET_RECIPES_REQUEST, getRecipesRequestSaga))
        });
    });

    describe('getRecipesRequestSaga', () => {

        const mockRecipe1: Recipe = {
            id: '1',
            name: 'Pizza carbonara',
            ingredients: ['mozzarella', 'tomate', 'bacon', 'champiñones', 'nata'],
        }
        const mockRecipe2: Recipe = {
            id: '1',
            name: 'Pizza 4 quesos',
            ingredients: ['mozzarella', 'tomate', 'gorgonzola', 'parmesano', 'queso de cabra'],
        }
        const recipes: Recipe[] = [mockRecipe1, mockRecipe2];

        it('should put updateRecipes with given recipes when API call is succesful', () => {
            // Arrange
            const updateRecipes: BaseAction = {
                type: actionTypes.UPDATE_RECIPES,
                payload: recipes,
            };
            const saga = getRecipesRequestSaga();
            //Act & Assert
            expect(saga.next().value).toEqual(call(getRecipes));
            expect(saga.next(recipes).value).toEqual(put(updateRecipes));
        });

    });
    
});