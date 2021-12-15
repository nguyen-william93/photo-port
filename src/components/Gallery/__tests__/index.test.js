import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Gallery from '..';

const portraits = {name: "portraits", description: "Portraits of people in my life"};

afterEach(cleanup);

describe('Gallery is rendering', () => {
    it('render', () => {
        render(<Gallery currentCategory={portraits} />)
    });

    it('matches snapshot', () => {
        const {asFragment} = render(<Gallery currentCategory={portraits}/>)
        expect(asFragment()).toMatchSnapshot();
    });
});

