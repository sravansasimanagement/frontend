import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {Success} from './success'; 

test('success component: render', async () => {
  render(<Success/>);
});
