export default {
  title: 'Components/Tabs',
  // Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls#annotation
  argTypes: {
    selectedIndex: {
      options: [0, 1, 2, 3, 4],
      control: { type: 'select' },
      description: 'Tab selected by default',
    },
  }
};


const Template = (args) => `
  <bm-tabs selected-index="${args.selectedIndex}">
    <bm-tab-list>
      <bm-tab>Tab 1</bm-tab>
      <bm-tab>Tab 2</bm-tab>
      <bm-tab>Tab 3</bm-tab>
      <bm-tab>Tab 4</bm-tab>
      <bm-tab>Tab 5</bm-tab>
    </bm-tab-list>
    <bm-tab-panels>
      <bm-tab-panel>
        <bm-header level="1">The 1st Tab</bm-header>
        <p>Here is the first tab with h1 header</p>
      </bm-tab-panel>
      <bm-tab-panel>
        <bm-header level="2">The 2nd Tab</bm-header>
        <p>Here is the second tab with h2 header </p>
      </bm-tab-panel>
      <bm-tab-panel>
        <bm-header level="3">The 3rd Tab</bm-header>
        <p>Here is the second tab with h3 header</p>
      </bm-tab-panel>
      <bm-tab-panel>
        <bm-header level="3">The 4th Tab</bm-header>
        <p>I'm just a tab #4</p>
      </bm-tab-panel>
      <bm-tab-panel>
        <bm-header level="3">The 5th Tab</bm-header>
        <p>Finally the last tab</p>
      </bm-tab-panel>
    </bm-tab-panels>
  </bm-tabs>
`;

export const TabsStories = Template.bind({});
TabsStories.args = {
  selectedIndex: 0,
};
