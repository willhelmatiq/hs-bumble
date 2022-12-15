/**
 * STORYBOOK TEMPLATE - Copy this file into your newly generated component folder, rename it
 * accordingly to match your component name and replace the `.template` suffix by '.ts' and then
 * populate the testing stories following the instructions below.
 */

export default {
  // This creates a ‘Components’ folder and a subfolder with the MyComponent menu item
  // of in Storybook's side menu. Replace 'MyComponent' by the generic component name.
  title: 'Components/Badge',
  // Populate the `argTypes` property with knobs to customize the component.
  // Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls#annotation
  argTypes: {
    // This will create an `args.variant` binding for your component 
    text: {
      options: ['default', 'hollow', 'primary', 'success', 'accent', 'warning', 'danger'],        // Value presets
      control: { type: 'select' },          // Knob type. It can be select, radio, etc
      description: 'The badge variant', 
    },
    variant: {
      options: ['default', 'hollow', 'primary', 'success', 'accent', 'warning', 'danger'],        // Value presets
      control: { type: 'select' },          // Knob type. It can be select, radio, etc
      description: 'The badge variant',    // The description text displayed in the knobs table
    },
  }
};

/**
 * Now you can create a reusable template for your component that you 
 * can later on customize with different values for its attribute properties and events
 */
const Template = (args) => `
  <bm-badge variant="${args.variant}">
  ${args.text}
  </bm-badge>
`;

/**
 * Now you can leverage the template above to generate multiple snapshots of your component
 * with distinct combinations of property values and event handlers. 
 * Names must be PascalCased and Storybook will split names by capitals.
 * IMPORTANT: Remember to export each template binding and replace {@link ComponentStory} by
 * a proper 
 * Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls
 */
export const Badge = Template.bind({});
Badge.args = {
  text: 'default',
  variant: 'default',
  // state: 'active',
};
