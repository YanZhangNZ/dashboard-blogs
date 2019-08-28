import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr } from '../../Utils/index'
import Notifications from './Notifications'

const setUp = (props = {}) => {
    const component = shallow(<Notifications { ... props } />);
    return component;
}

describe('Notification Component',() => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('It should be render without errors',() => {
        const wrapper = findByTestAttr(component,'section')
        expect(wrapper.length).toBe(1);
    });

    it('It should be render without errors',() => {
        const card = findByTestAttr(component,'card')
        expect(card.length).toBe(1);
    })
})