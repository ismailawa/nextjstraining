import React from 'react';

type TextInputProps = {
  label?: string;
  type?: string;
  name?: string;
  hint?: string;
  onChange?: (value: any) => void;
};

function TextInput({ label, type, name, hint, onChange }: TextInputProps) {
  return (
    <div className='flex flex-col gap-3 w-full'>
      <div className='text-lg'>{label}</div>
      <input
        type={type}
        name={name}
        required
        id={name}
        placeholder={hint}
        onChange={(event) => onChange?.(event.target.value)}
        className='w-full  focus:ring-green-500 rounded-lg p-3 placeholder:text-lg text-xl'
      />
    </div>
  );
}

export default TextInput;
