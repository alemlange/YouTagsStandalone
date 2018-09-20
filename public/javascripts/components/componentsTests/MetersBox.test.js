import React from 'react';
import MetersBox from '../MetersBox';
import renderer from 'react-test-renderer';

test('MetersBox creation', () => {
    renderer.create(<MetersBox isFetchingData={true}
                               score = {10}
                               searchValueQuality = {1}
                               videoQuality = {1}
                               text = {"test"}
    />);
});