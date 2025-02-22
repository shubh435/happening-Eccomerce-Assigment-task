/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import CommonButton from '../src/components/common/CommonButton';

test('renders correctly', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<CommonButton title='Sample test cases' />);
  });
});
