import React from 'react';
import { mount } from 'enzyme';

import Footer from '../../components/Footer';

//pasamos la const de footer a un nivel mas arriba para que tenga un scope mas grande
describe('<Footer/>', () => {
  const footer = mount(<Footer />);
  test('render del componente footer', () => {
    expect(footer.length).toEqual(1);
  });
  //esto checha que el texto del elemento sea equivalente a
  test('Render del titulo', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});
