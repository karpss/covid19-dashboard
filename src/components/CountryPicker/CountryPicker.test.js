/* eslint-disable */
import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import CountryPicker from './CountryPicker';



   test('renders the select dropdown for countries', () => {
    render (<CountryPicker/>);
    screen.debug();
    });


    test('should correctly set as default option', () => {
        render(<CountryPicker />)
        expect(screen.getByRole('option', { name: 'Global' }).selected).toBe(true)
      });


      test('should allow user to change country', () => {
        render(<CountryPicker />)
        userEvent.selectOptions(
          screen.getByRole('combobox'),
          screen.getByRole('option', { country: 'Nigeria' }),
        )
        expect(screen.getByRole('option', { country: 'Nigeria' }).selected).toBe(true)
      })







   

   


