import { Meta, StoryFn } from "@storybook/react";
import { Datepicker, DatepickerProps } from "shafa-bo";
import "shafa-bo/css";

const meta: Meta = {
  title: "Components/Datepicker",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

const Template: StoryFn<DatepickerProps> = (args) => {
  return (
    <div dir="rtl" style={{ marginBottom: "20rem" }}>
      <Datepicker {...args} />
    </div>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  label: "تقویم ",
  placeholder: "انتخاب کنید...",
  value: new Date(),
  onChange: (date) => console.log("Selected Date:", date),
};

Basic.argTypes = {
  onChange: { action: "selected" },
};

export default meta;
