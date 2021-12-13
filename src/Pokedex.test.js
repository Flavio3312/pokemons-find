import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Pokedex from './components/Pokedex';



describe('Pokedex', () => {
    test('renders without crashing', () => {
        render(<Pokedex />);
    });
    
    test('renders the correct number of pokemon', () => {
        render(<Pokedex />);
        const pokemon = screen.getAllByTestId('pokemon');
        expect(pokemon.length).toBe(151);
    });
    });
    
   