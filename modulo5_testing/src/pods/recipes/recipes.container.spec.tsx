import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { Recipe } from 'pods/recipes/recipes.view-model';
import { RecipesPodState, recipesPodReducer } from 'pods/recipes';
import { RecipesComponent } from './recipes.component';
import * as actions from './store/actions';

const renderWithRedux = (
  component,
  { initialState = {}, reducer, store = createStore(reducer, initialState) }
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store,
});

describe('src/pods/recipes/recipe container specs', () => {

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

    const handleOnSearch = (value)  => value;

  it('should render empty table when it feeds initial state', () => {
    // Arrange
    const initialState: RecipesPodState = {
      recipes: [],
    };

    // Act
    const { queryAllByTestId } = renderWithRedux(<RecipesComponent recipes={[]} onSearch={handleOnSearch}/>, {
      initialState,
      reducer: recipesPodReducer,
    });

    const recipesElements = queryAllByTestId('recipe');

    // Assert
    expect(recipesElements).toHaveLength(0);
  });

  it('should render two items when it feeds initial state with two item', () => {
    // Arrange
    const initialState: RecipesPodState = {
        recipes: recipes,
      };

    // Act
    const { queryAllByTestId } = renderWithRedux(<RecipesComponent recipes={recipes} onSearch={handleOnSearch}/>, {
        initialState,
        reducer: recipesPodReducer,
      });

    const memberElements = queryAllByTestId('recipe');

    // Assert
    expect(memberElements).toHaveLength(2);
  });

});