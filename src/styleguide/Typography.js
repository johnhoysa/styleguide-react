import React from 'react';
import TitleBar from '../components/TitleBar.js';
import Heading from '../components/Heading.js';
import Text from '../components/Text.js';

const Typography = () => {
  return (
    <>
      <section>
        <TitleBar title="Typography" />
        <h5 className="guide-heading">Display Text</h5>
      </section>
      <section className="guide-section">
        <Heading
          Tag="h1"
          color="text-secondary"
          text="Display Large: Merriweather Serif 120px"
          fontFamily="font-serif"
          type="display-lg"
        />
        <Heading
          Tag="h2"
          color="text-secondary"
          text="Display Default: Merriweather Serif 80px"
          fontFamily="font-serif"
          type="display-default"
        />
        <Heading
          Tag="h2"
          color="text-secondary"
          text="Display Small: Merriweather Serif 64px"
          fontFamily="font-serif"
          type="display-sm"
        />

        <h5 className="mt-4 guide-section-heading">Body Text</h5>
        <Text Tag="p" text="Body Large: DM Sans Regular, 20px" type="body-lg" />
        <Text
          Tag="p"
          text="Body Primary: DM Sans Regular, 16px"
          type="body-default"
        />
        <Text Tag="p" text="Body Small: DM Sans Regular, 14px" type="body-sm" />

        <h5 className="mt-4 guide-section-heading">Button Text</h5>
        <Text
          Tag="p"
          text="Button Xl: DM Sans Bold, 20px"
          type="button-xl !p-0"
        />
        <Text
          Tag="p"
          text="Button Default: DM Sans Regular, 18px"
          type="button-default !p-0"
        />
        <Text
          Tag="p"
          text="Button Md: DM Sans Bold, 18px"
          type="button-md !p-0"
        />
        <Text
          Tag="p"
          text="Button Sm: DM Sans Bold, 16px"
          type="button-sm !p-0"
        />
        <Text
          Tag="p"
          text="Button Xs: DM Sans Bold, 14px"
          type="button-xs !p-0"
        />
      </section>
    </>
  );
};

export default Typography;
