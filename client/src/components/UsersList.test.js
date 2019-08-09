import React from 'react';
import { render, getByPlaceholderText } from '@testing-library/react';
import UsersList from './UsersList'

describe("<UsersList />", () => {
    it("renders at all tbh", () => {
        render(<UsersList />)
    })

    it("has the right words", () => {
        const userInput = render(<UsersList />)
        userInput.findByText(/registered users:/i)
    })
})