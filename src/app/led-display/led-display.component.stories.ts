import { LedDisplayModule } from './led-display.module';
import { LedDisplayComponent } from './led-display.component';
import { Story } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'LedDisplay',
  component: LedDisplayComponent,
  decorators: [
    moduleMetadata({
      imports: [LedDisplayModule],
    }),
  ],
};

const Template: Story<LedDisplayComponent> = (args: LedDisplayComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
