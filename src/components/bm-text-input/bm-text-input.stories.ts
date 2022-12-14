// /**
//  * STORYBOOK TEMPLATE - Copy this file into your newly generated component folder, rename it
//  * accordingly to match your component name and replace the `.template` suffix by '.ts' and then
//  * populate the testing stories following the instructions below.
//  */
//
// export default {
//   // This creates a ‘Components’ folder and a subfolder with the MyComponent menu item
//   // of in Storybook's side menu. Replace 'MyComponent' by the generic component name.
//   title: 'Components/TextInput',
//   // Populate the `argTypes` property with knobs to customize the component.
//   // Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls#annotation
//   argTypes: {
//     fontStyle: {
//       options: ['normal', 'italic', 'oblique', 'inherit'],
//       control: { type: 'radio' },
//       description: 'The fontStyle',
//     },
//   }
// };
//
// /**
//  * Now you can create a reusable template for your component that you
//  * can later on customize with different values for its attribute properties and events
//  */
// const Template = (args) => `
//   <hs-text-input fontStyle="${args.fontStyle}">
//     ${args.text}
//   </hs-text-input>
// `;
//
// /**
//  * Now you can leverage the template above to generate multiple snapshots of your component
//  * with distinct combinations of property values and event handlers.
//  * Names must be PascalCased and Storybook will split names by capitals.
//  * IMPORTANT: Remember to export each template binding and replace {@link ComponentStory} by
//  * a proper
//  * Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls
//  */
// export const ComponentStory = Template.bind({});
// ComponentStory.args = {
//   fontStyle: 'normal',
// };
