
export default {
title: 'Components/Paragraph',

  argTypes: {
  text: {
    description: 'Transcluded text to be injected in the component slot',
      defaultValue: 'Beee is a design system inspired and built by like-minded passionates - designers,' +
        ' engineers and researchers. It is created to ensure a consistent,' +
        ' accessible and accountable user experience across all the platforms of Bumble Inc. The Beee’s aim' +
        ' is to provide engineers, researchers and designers with an extensive yet easy to use tool for the ultimate' +
        ' benefit of users. The design system is built on a basis of Figma and Stencil.',
      control: { type: 'text' },
  },
  textAlign: {
    options: ['left', 'center', 'right'],
      control: { type: 'radio' },
    description: 'The paragraph alignment',
  },
    fontSize: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      description: 'The button size'
    },
}
};

const Template = (args) => `
  <bm-paragraph text-align="${args.textAlign}" font-size="${args.fontSize}">
    ${args.text}
  </bm-paragraph>
`;

export const ParagraphStory = Template.bind({});
ParagraphStory.args = {
  textAlign: 'left',
};
