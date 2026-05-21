
import { render } from '@testing-library/react-native';
import RecipeCard from '../RecipeCard';

import { Provider } from 'react-redux';
import { store } from '../../store/store';

export const renderWithProviders = (ui: React.ReactElement) => {
  return render(<Provider store={store}>{ui}</Provider>);
};

const mockRecipe = {
    id: 'qwertyuiop',
    title: 'Test Recipe',
    servings: 5,
    ingredients: [],
    category: 'Test Category'
}

describe('ReipeCard', () => {
    it('renders correctly', async () => {
        const { getByText } = renderWithProviders(<RecipeCard recipe={mockRecipe}/>);

        expect(getByText('Test Recipe')).toBeTruthy();

    })
})