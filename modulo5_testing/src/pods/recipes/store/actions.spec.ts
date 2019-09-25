import { Recipe } from '../api/recipes.api-model';
import { actionTypes } from './action-types';
import { getRecipesRequest, updateRecipes } from './actions';

describe('pods/recipes/store/actions/getRecipesRequest action creators', () => {
  describe('getRecipesRequest', () => {
    it('should return an action with type GET_RECIPES_REQUEST and payload undefined', () => {
      // Arrange

      // Act
      const result = getRecipesRequest();

      // Assert
      expect(result.type).toBe(actionTypes.GET_RECIPES_REQUEST);
      expect(result.payload).toBeUndefined();
    });
  });

  describe('updateRecipes', () => {
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
    it('should return an action with type UPDATE_RECIPES and payload a list of recipes', () => {
      // Arrange

      // Act
      const result = updateRecipes(recipes);

      // Assert
      expect(result.type).toBe(actionTypes.UPDATE_RECIPES);
      expect(result.payload).not.toBeNull();
      expect(result.payload).toBe(recipes);
    });
  });
  
});