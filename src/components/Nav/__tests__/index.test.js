import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..'

afterEach(cleanup);

describe('Nav Component', () => {
    //baseline test
    it('render', () => {
        render(<Nav />)
    })

    //snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render (<Nav />);

        expect(asFragment()).toMatchSnapshot();
    })
});

describe('emoji is visible', () => {
    it('insert emoji into the h2', () => {
        //arrage
        const { getByLabelText } = render(<Nav />)
        //assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
});

describe('Links are visible', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = render(<Nav />);

        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me')
    })
});