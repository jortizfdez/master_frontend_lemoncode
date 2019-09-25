import * as React from 'react';
import { Button } from 'common/components/button';
import { render, fireEvent } from '@testing-library/react';

describe('button specs', () => {
    const buttonTitle = "Javi Button";

    it('should render with specified label', () => {
        const { getByText } = render(<Button label={buttonTitle} />);
        expect(getByText(buttonTitle)).toBeDefined();
    });
    
    it('should call function when clicked', () => {
        const mockFn = jest.fn();
        const { getByText } = render(<Button label={buttonTitle} onClick={mockFn} />);
        fireEvent.click(getByText(buttonTitle));
        expect(getByText(buttonTitle)).toBeDefined();
        expect(mockFn).toHaveBeenCalled();
    });
});