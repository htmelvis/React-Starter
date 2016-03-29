import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { render } from 'react-dom';
import expect from 'expect';

import App from '../components/app';

describe('App', function(){
  it('Loads without an error', function(){
    var AppTest = TestUtils.renderIntoDocument(
      <App />
    );
    expect(AppTest).toExist();
  });
});

