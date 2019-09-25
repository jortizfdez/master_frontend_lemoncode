import * as apiModel from './api/recipes.api-model';
import * as viewModel from './recipes.view-model';
import { mapRecipeFromApiToVm } from './recipes.mappers';

describe('mapper specs', () => {
  it('should return empty recipe when it feeds undefined', () => {
    // Arrange
    const recipe: apiModel.Recipe = undefined;
    const emptyRecipe = {
      id: '',
      name: '',
      ingredients: [],
    }
    // Act
    const result: viewModel.Recipe = mapRecipeFromApiToVm(recipe);
    // Assert
    expect(result).toEqual(emptyRecipe);
  });

  it('should return one recipe when it feeds a recipe', () => {
    // Arrange
    const mockRecipe = {
      id: '1',
      name: 'Pizza carbonara',
      ingredients: ['queso', 'tomate', 'bacon', 'champiñones', 'nata'],
    }
    const recipe: apiModel.Recipe = mockRecipe;
    // Act
    const result: viewModel.Recipe = mapRecipeFromApiToVm(recipe);
    // Assert
    expect(result).toEqual(mockRecipe);
  });
});