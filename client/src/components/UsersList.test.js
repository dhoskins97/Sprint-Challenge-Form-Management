import React from 'react';
import { render, getByPlaceholderText } from '@testing-library/react';
import UsersList from './UsersList'

describe("<UsersList />", () => {
    it("Mounts properly to the page", () => {
        render(<UsersList />)
    })

    it("Renders the proper text", () => {
        const userInput = render(<UsersList />)
        userInput.findByText(/registered users:/i)
    })
})