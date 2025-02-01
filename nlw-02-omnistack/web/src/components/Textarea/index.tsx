import React, { TextareaHTMLAttributes, useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { LabelContainer } from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
  message?: string;
}

const Textarea: React.FC<TextareaProps> = ({ 
  label, 
  name,
  message,
  ...rest 
}) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const {
    fieldName,
    defaultValue = '',
    error,
    registerField,
    clearError,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <LabelContainer>
      <div>
        {label} {message && <span>{message}</span>}
      </div>
      <textarea
        ref={inputRef}
        defaultValue={defaultValue}
        onFocus={clearError}
        {...error}
      />
      {error && <span>{error}</span>}
    </LabelContainer>
  );
}

export default Textarea;