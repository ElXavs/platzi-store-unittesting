import React from 'react';
import { mount } from 'enzyme';
//para utilizar los snapshots debemos convertir el componente a un json, para eso esta react-test-renderer
import { create } from 'react-test-renderer';

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

//pruebas de snapshot
//los snapshots nos permiten comprobar la ui y establecer una regla cuando tenemos componentes que no tienen otra
//funcion mas que la visual de ser presentados en pantalla
//comprobar que la ui siempre es la misma
describe('Footer Snapshot', () => {
  test('Comprobar la UI del componente Footer', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
