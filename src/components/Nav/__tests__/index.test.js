import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..'

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

describe('Nav Component', () => {
    //baseline test
    it('render', () => {
        render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
          />);
    })

    //snapshot test
    it('matches snapshot', () => {
        const { asFragment } =   render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
          />);

        expect(asFragment()).toMatchSnapshot();
    })
});

describe('emoji is visible', () => {
    it('insert emoji into the h2', () => {
        //arrage
        const { getByLabelText } =   render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
          />);
        //assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
});

describe('Links are visible', () => {
    it('inserts text into the links', () => {
        const { getByTestId } =   render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
          />);

        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me')
    })
});