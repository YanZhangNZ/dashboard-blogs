import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr } from '../../Utils/index'
import SignedOutLinks from './SignedOutLinks'

const setUp = (props = {}) => {
    const component = shallow(<SignedOutLinks { ... props } />);
    return component;
}

describe('SignedOutLinks Component',() => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('It should be render without errors',() => {
        const wrapper = findByTestAttr(component,'signedOutLinks')
        expect(wrapper.length).toBe(1);
    });
})