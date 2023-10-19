'use client';

import { useState } from 'react';

const UseInput = () => {
  const [value, setValue] = useState<string>();

  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  return { onChange, value };
};

export default UseInput;
