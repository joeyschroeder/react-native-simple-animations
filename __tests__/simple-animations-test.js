import React from 'react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Text } from 'react-native';
import { SimpleAnimation } from '../src/simple-animation';

jest.useFakeTimers();
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('<SimpleAnimation />', () => {
  it('should call this.animate() when this.componentDidMount() is called', () => {
    const component = shallow(<SimpleAnimation />);
    const animate = jest.fn();

    component.instance().animate = animate;
    component.instance().componentDidMount();

    expect(animate).toHaveBeenCalled();
  });

  it('should not call this.animate() when this.componentDidUpdate() is called and props.animatedOnUpdate !== true', () => {
    const component = shallow(<SimpleAnimation animateOnUpdate={false} />);
    const animate = jest.fn();

    component.instance().animate = animate;
    component.instance().componentDidUpdate();

    expect(animate).not.toHaveBeenCalled();
  });

  it('should call this.animate() when this.componentDidUpdate() is called and props.animatedOnUpdate === true', () => {
    const component = shallow(<SimpleAnimation animateOnUpdate />);
    const animate = jest.fn();

    component.instance().animate = animate;
    component.instance().componentDidUpdate();

    expect(animate).toHaveBeenCalled();
  });

  it('should return 0 when this.getDistanceStartValue() is called and props.direction and props.distance to not exist', () => {
    const component = shallow(<SimpleAnimation />);
    const result = component.instance().getDistanceStartValue();

    expect(result).toEqual(0);
  });

  it('should return undefined when this.animate() is called and props.animate !== true', () => {
    const component = shallow(<SimpleAnimation animate={false} />);
    expect(component.instance().animate()).toEqual(undefined);
  });

  it('should return undefined when this.animate() is called and props.animate !== true', () => {
    const component = shallow(<SimpleAnimation animate={false} />);
    expect(component.instance().animate()).toEqual(undefined);
  });

  it('should return empty object when this.getOpacity() is called and props.fade !== true', () => {
    const component = shallow(<SimpleAnimation fade={false} />);
    expect(component.instance().getOpacity()).toEqual({});
  });

  it('should return object with opacity value when this.getOpacity() is called and props.fade === true', () => {
    const component = shallow(<SimpleAnimation fade />);
    component.instance().opacityAnimation = 'test';

    expect(component.instance().getOpacity()).toEqual({ opacity: 'test' });
  });

  it('should return empty array when this.getMovementTransform() is called and props.direction does not exist', () => {
    const component = shallow(<SimpleAnimation direction={null} />);
    expect(component.instance().getMovementTransform()).toEqual([]);
  });

  it('should return empty array when this.getMovementTransform() is called and props.movementType does not exist', () => {
    const component = shallow(<SimpleAnimation movementType={null} />);
    expect(component.instance().getMovementTransform()).toEqual([]);
  });

  it('should return empty array when this.getStaticTransform() is called and props.staticType does not exist', () => {
    const component = shallow(<SimpleAnimation staticType={null} />);
    expect(component.instance().getStaticTransform()).toEqual([]);
  });

  it('should return array with object with scale value when this.getStaticTransform() is called and props.staticType exists', () => {
    const component = shallow(<SimpleAnimation staticType="bounce" />);
    component.instance().staticAnimation = 'test';

    expect(component.instance().getStaticTransform()).toEqual([{ scale: 'test' }]);
  });

  it('should render null when props.children does not exist', () => {
    const component = create(<SimpleAnimation />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('should render SimpleAnimation with children when props.children exists', () => {
    const component = create(
      <SimpleAnimation>
        <Text>test</Text>
      </SimpleAnimation>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
