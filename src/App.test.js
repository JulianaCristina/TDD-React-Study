import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import {  shallow } from 'enzyme';
import Counter from "./Counter";
import {mount} from "enzyme";

describe('Counter Testing', () => {

  //Externalizando o wrapper que aparecia em todos os testes
  let wrapper;
  beforeEach(() => {
    // wrapper = shallow(<App/>); consegue ver apenas o que esta dentro do componete mencionado
    //renderiza o dom, olha dentro dos outros componentes
    wrapper = mount(<App/>);
  })

  test('renders the title of counter', () => {
    //mostra o conteudo dentro do componente no console
    console.log(wrapper.debug())

    expect(wrapper.find('h1').text()).toContain("This is counter app")
  });

  test("render a button with text of `increment`", () => {
    expect(wrapper.find('#increment-btn').text()).toBe("Increment")
  });

  test("render the initial value of state in a div", () => {
    expect(wrapper.find('#counter-value').text()).toBe("0")
  })

  test("render the click event of increment button and increment counter value", () => {
    wrapper.find("#increment-btn").simulate('click');
    expect(wrapper.find("#counter-value").text()).toBe("1")
  })

  test("render the click event of decrement button and decrement counter value", () => {
    wrapper.find("#increment-btn").simulate('click');
    expect(wrapper.find("#counter-value").text()).toBe("1")
    wrapper.find("#decrement-btn").simulate('click');
    expect(wrapper.find("#counter-value").text()).toBe("0")
  })
})


