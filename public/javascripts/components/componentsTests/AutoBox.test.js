import React from 'react';
import AutoBox from '../AutoBox';
import renderer from 'react-test-renderer';

test('AutoBox creation', () => {
    renderer.create(<AutoBox yandex={[]} youtube={[]} google={[]}/>);
});