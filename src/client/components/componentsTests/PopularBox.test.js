import React from 'react';
import PopularBox from '../PopularBox';
import renderer from 'react-test-renderer';

test('PopularBox creation', () => {
    renderer.create(<PopularBox youTubePopular={[{score:10, text:"test"}]} trends={[{score:10, text:"test"}]}/>);
});