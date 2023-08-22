import React from 'react';
import TitleBar from '../components/TitleBar.js';
import Button from '../components/Button.js';
//
const Buttons = () => {
  return (
    <section>
      <TitleBar title="Buttons" />

      <h5 className="guide-heading">Button Default Enabled</h5>
      <div className="grid grid-cols-3 gap-3 mt-6">
        <span className="">
          <Button label="Primary" size="button-default" look="button-primary" />
        </span>
        <span className="">
          <Button
            label="Secondary"
            size="button-default"
            look="button-secondary"
          />
        </span>
        <span className="">
          <Button
            label="Outlined"
            size="button-default"
            look="button-outlined"
          />
        </span>
      </div>

      <h5 className="guide-heading">Button Default Disabled</h5>
      <div className="grid grid-cols-3 gap-3 mt-6">
        <span className="">
          <Button
            disableBtn="true"
            label="Primary"
            size="button-default"
            look="button-primary"
          />
        </span>
        <span className="">
          <Button
            disableBtn="true"
            label="Secondary"
            size="button-default"
            look="button-secondary"
          />
        </span>
        <span className="">
          <Button
            disableBtn="true"
            label="Outlined"
            size="button-default"
            look="button-outlined"
          />
        </span>
      </div>

      <h5 className="guide-heading">Button Medium</h5>
      <div className="grid grid-cols-3 gap-3 mt-6">
        <span className="">
          <Button label="Primary" size="button-md" look="button-primary" />
        </span>
        <span className="">
          <Button label="Secondary" size="button-md" look="button-secondary" />
        </span>
        <span className="">
          <Button label="Outlined" size="button-md" look="button-outlined" />
        </span>
      </div>

      <h5 className="guide-heading">Button Small</h5>
      <div className="grid grid-cols-3 gap-3 mt-6">
        <span className="">
          <Button label="Primary" size="button-sm" look="button-primary" />
        </span>
        <span className="">
          <Button label="Secondary" size="button-sm" look="button-secondary" />
        </span>
        <span className="">
          <Button label="Outlined" size="button-sm" look="button-outlined" />
        </span>
      </div>

      <h5 className="guide-heading">Button X-Small</h5>
      <div className="grid grid-cols-3 gap-3 mt-6">
        <span className="">
          <Button label="Primary" size="button-xs" look="button-primary" />
        </span>
        <span className="">
          <Button label="Secondary" size="button-xs" look="button-secondary" />
        </span>
        <span className="">
          <Button label="Outlined" size="button-xs" look="button-outlined" />
        </span>
      </div>

      <h5 className="guide-heading">Button X-Large, Mobile Only</h5>
      <div className="grid grid-cols-3 gap-3 mt-6">
        <span className="">
          <Button label="Primary" size="button-xl" look="button-primary" />
        </span>
        <span className="">
          <Button label="Secondary" size="button-xl" look="button-secondary" />
        </span>
        <span className="">
          <Button label="Outlined" size="button-xl" look="button-outlined" />
        </span>
      </div>
    </section>
  );
};

export default Buttons;
