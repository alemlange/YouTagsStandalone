import React from 'react';
import ControlPanel from '../ControlPanel';
import renderer from 'react-test-renderer';

test('ControlPanel creation', () => {
    renderer.create(<ControlPanel activeCheckListTab={true}
                                  onCheckListClick ={()=>{}}
                                  onRestartStepsClick = {()=>{}}
                                  onTagExplorerClick = {()=>{}}
    />);
});