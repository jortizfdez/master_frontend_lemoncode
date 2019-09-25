import { RecipesPodState } from './reducers';
import { getRecipesPodState } from './selectors';
import { Recipe } from '../api';
import { State } from 'core/store/root-reducer';

describe('pods/recipes/store/selectors', () => {
    describe('getRecipesPodState', () => {

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


        it('should return RecipesPodState from state', () => {
            // Arrange
            const state: State = {
                recipesPod: {
                    recipes: recipes,
                },
                router: undefined,
            }

            // Act
            const result = getRecipesPodState(state);

            // Assert
            expect(result).toBe(state.recipesPod);
        });

    });
});