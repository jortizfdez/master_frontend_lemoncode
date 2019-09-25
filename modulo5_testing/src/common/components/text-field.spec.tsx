import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { TextField } from './text-field';

afterEach(cleanup);

describe('TextField component specs', () => {
    it('should display textfield with a name and label', () => {
        // Arrange
        const props = {
            name: 'Test name',
            label: 'Test label',
            value: 'Test value',
            onChange: jest.fn(),
        };

        // Act
        const { getByText } = render(<TextField {...props} />);
        const labelElement = getByText(props.label);

        // Assert
        expect(labelElement).not.toBeUndefined();
    });

    it('should display textfield using snapshot testing', () => {
        // Arrange
        const props = {
            name: 'Test name',
            label: 'Test label',
            value: 'Test value',
            onChange: jest.fn(),
        }

        // Act
        const { asFragment } = render(<TextField {...props} />);
        // Assert
        expect(asFragment()).toMatchSnapshot();
    });
});