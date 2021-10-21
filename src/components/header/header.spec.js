import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '.';

describe('<Header />', () => {
  it('Should correctly render Header', () => {
    render(
      <Router>
        <Header onTypeSearch={() => null} />
      </Router>
    );

    expect(screen.getByPlaceholderText('Nunca deixe de buscar')).toBeInTheDocument();
  });
});
