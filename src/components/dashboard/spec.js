import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr } from '../../Utils/index'
import Notifications from './Notifications'
import checkPropTypes from 'check-prop-types'


const setUp = (props = {}) => {
    const component = shallow(<Notifications { ... props } />);
    return component;
}

describe('Notification Component',() => {

    describe('Checking PropTypes', () => {
        
        it ('Should not throw a warning',() => {

            const expectedProps = [{
                content:'test content',
                user:'test user',
                time:'31 May 2019 17:38PM'
            }];
            const propsErr = checkPropTypes(Notifications.propTypes,expectedProps);


        })
    });

    describe('Have props', () => {

        let wrapper;
        beforeEach(()=>{
            const props = {
                notifications:[{                    
                    content: 'test content',
                    user: 'test user',
                    time: '31 May 2019 17:38PM'
                }],
            };
        
            wrapper = setUp(props);
        });

        it('Should render notifications', () => {
            const component = findByTestAttr(wrapper,'notifications');
            expect(component.length).toBe(1);
        });

        
    });

    describe('Have No props', () => {
        let wrapper;
        beforeEach(()=>{
            wrapper = setUp();
        });

        it('Should not render', () => {
            // const component = findByTestAttr(wrapper,'notifications');
            const component = findByTestAttr(wrapper,'notifications')
            expect(component.length).toBe(0)
        })

    })
})