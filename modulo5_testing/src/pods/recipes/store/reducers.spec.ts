import deepFreeze from 'deep-freeze';
import { recipesPodReducer, RecipesPodState } from './reducers';
import { BaseAction } from 'common/types/base-action';
import { Recipe } from '../api';
import { actionTypes } from './action-types';

describe('pods/recipes/store/default reducer tests', () => {
    it('should return the expected state when initialized with undefined initial state', () => {
        // Arrange
        const action: BaseAction = {
            type: 'foo',
            payload: null,
        };

        const initialState: RecipesPodState = {
            recipes: [],
        };
        // Act
        const result = recipesPodReducer(undefined, action as BaseAction);
        // Assert
        expect(result).toEqual(initialState);
    });

    it('should return the expected state when action type is UPDATE_RECIPES', () => {
        // Arrange
        const mockRecipe1:Recipe = {
            id: '1',
            name: 'Pizza carbonara',
            ingredients: ['mozzarella', 'tomate', 'bacon', 'champiñones', 'nata'],
        }
        const mockRecipe2:Recipe = {
            id: '1',
            name: 'Pizza 4 quesos',
            ingredients: ['mozzarella', 'tomate', 'gorgonzola', 'parmesano', 'queso de cabra'],
        }
        const recipes:Recipe[] = [mockRecipe1, mockRecipe2];
        const action: BaseAction = {
            type: actionTypes.UPDATE_RECIPES,
            payload: recipes,
        };
        const initialState: RecipesPodState = deepFreeze({
            recipes: [],
        });

        // Act
        const result = recipesPodReducer(initialState, action);

        // Assert
        expect(result.recipes).toBe(recipes);
    });
});