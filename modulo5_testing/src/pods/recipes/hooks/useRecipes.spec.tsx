import { renderHook, act } from '@testing-library/react-hooks';
import { useRecipes } from './useRecipes';

describe('useRecipes specs', () => {

    const mockRecipe1 = {
        id: '1',
        name: 'Pizza carbonara',
        ingredients: ['mozzarella', 'tomate', 'bacon', 'champiñones', 'nata'],
    }
    const mockRecipe2 = {
        id: '1',
        name: 'Pizza 4 quesos',
        ingredients: ['mozzarella', 'tomate', 'gorgonzola', 'parmesano', 'queso de cabra'],
    }
    const recipes = [mockRecipe1, mockRecipe2]

    it('should return an object with name equals "John Doe" and setName a function when it calls it', () => {
        // Arrange

        // Act
        const { result } = renderHook(() => useRecipes(recipes));
        // Assert
        expect(result.current.filteredRecipes).toEqual(recipes);
        expect(result.current.handleFilter).toEqual(expect.any(Function));
    });

    it('should update filtered recipes when it calls handleFilter', () => {
        // Arrange
        const value = 'bacon';

        // Act
        const { result } = renderHook(() => useRecipes(recipes));
        act (() => {
            result.current.handleFilter(value);
        });

        // Assert
        expect(result.current.filteredRecipes).toEqual([mockRecipe1]);
    });
});