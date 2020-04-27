/** @jsx jsx */
import Input from './Input';
import { jsx, css } from '@emotion/core';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'components|Input',
  component: Input,
  decorators: [withKnobs]
};

export const basicInput = () => {
  const label = text('children', '테스트');
  const disabled = boolean('disabled', false);
  const width = text('width', '');
  const maxLength = number('maxLength', 0);

  return (
    <Input
      disabled={disabled}
      width={width}
      maxLength={maxLength}
      onChange={action('onChange')}
    >
      {label}
    </Input>
  );
};

basicInput.story = {
  name: 'Default'
};