import React from 'react';
import TitleBar from '../components/TitleBar.js';
import Heading from '../components/Heading.js';

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
    </div>
  );
};

export default Typography;
