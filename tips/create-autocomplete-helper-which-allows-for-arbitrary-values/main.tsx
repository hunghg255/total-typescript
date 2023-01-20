import React from 'react';

// Old
type IconSize = 'sm' | 'xs' | string;

// New
type NewIconSize = LooseAutocomplete<'sm' | 'xs'>;
type LooseAutocomplete<T extends string> = T | Omit<string, T>;

interface IconProps {
  size: NewIconSize;
}

export const Icon = (props: IconProps) => {
  return <></>;
};

const Comp1 = () => {
  return (
    <>
      <Icon size='xs'></Icon>
      <Icon size='something'></Icon>
    </>
  );
};
