import React from "react";
import {render, cleanup, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from '../../Modal';

const mockToggleModal = jest.fn();
const currentPhoto = { name: 'Park bench', category: 'landscape', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie', index: 1}

afterEach(cleanup);

describe('Modal Component', () => {
    //baseline test
    it('render', () => {
        render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal}/>)
    });

    //snapshot
    it('matches snapshot DOM node structure', () => {
        const {asFragment} = render(<Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />)
        expect(asFragment()).toMatchSnapshot();
    })
});

describe('Click Event', () => {
    it('calls onClose handler', () => {
        //arrange: Render Modal
        const {getByText} = render(<Modal onClose={mockToggleModal} currentPhoto={currentPhoto}/>);

        //Act: simulate click event
        fireEvent.click(getByText('Close this modal'));

        //Assert: Expected Matcher
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    })
})