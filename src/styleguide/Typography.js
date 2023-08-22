import React from 'react';
import TitleBar from '../components/TitleBar.js';
import Heading from '../components/Heading.js';
import Text from '../components/Text.js';

const Typography = () => {
  return (
    <div>
      <section>
        <TitleBar title="Typography" />
      </section>
      <h5 className="guide-heading">Display Text</h5>
      <Heading
        Tag="h1"
        color="text-secondary"
        text="Display 1: Noto Serif 120px"
        fontFamily="font-serif"
        type="display-one"
      />
      <Heading
        Tag="h2"
        color="text-secondary"
        text="Display 2: Noto Serif 80px"
        fontFamily="font-serif"
        type="display-two"
      />
      <Heading
        Tag="h2"
        color="text-secondary"
        text="Display 3: Noto Serif 80px"
        fontFamily="font-serif"
        type="display-three"
      />

      <h5 className="mt-4 guide-heading">Body Text</h5>
      <Text Tag="p" text="Body Large: DM Sans Regular, 20px" type="body-lg" />
      <Text
        Tag="p"
        text="Body Primary: DM Sans Regular, 16px"
        type="body-primary"
      />
      <Text Tag="p" text="Body Small: DM Sans Regular, 14px" type="body-sm" />

      <h5 className="mt-4 guide-heading">Button Text</h5>
      <Text Tag="p" text="Button Xl: DM Sans Bold, 20px" type="button-xl" />
      <Text
        Tag="p"
        text="Button Primary: DM Sans Regular, 18px"
        type="button-primary"
      />
      <Text Tag="p" text="Button Md: DM Sans Bold, 18px" type="button-md" />
      <Text Tag="p" text="Button Sm: DM Sans Bold, 16px" type="button-sm" />
      <Text Tag="p" text="Button Xs: DM Sans Bold, 14px" type="button-xs" />
    </div>
  );
};

export default Typography;
