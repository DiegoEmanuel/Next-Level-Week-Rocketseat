import { useField } from '@unform/core';
import React, { useRef, InputHTMLAttributes, useEffect } from 'react';

import { LabelContainer, Input } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  labelStyle?: React.CSSProperties;
}

const InputWithLabel: React.FC<InputProps> = ({ 
  name,
  label,
  className,
  labelStyle,
  ...rest 
}) => {
  const InputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue = '', error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: InputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return (
    <LabelContainer style={labelStyle} className={className}>
      {label}
      <Input ref={InputRef} defaultValue={defaultValue} {...rest}/>
      {error && <span>{error}</span>}
    </LabelContainer>
  );
}

export default InputWithLabel;