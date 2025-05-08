import React from 'react';
import OtpInput from 'react-otp-input';

interface OtpInputComponentProps {
  value: string;
  onChange: (otp: string) => void;
  numInputs?: number;
  inputStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
}

const OtpInputComponent= ({
  value,
  onChange,
  numInputs = 4,
  inputStyle = {},
  containerStyle = {},
}: OtpInputComponentProps) => {
  return (
    <OtpInput
      value={value}
      onChange={onChange}
      numInputs={numInputs}
      inputStyle={{
        width: '48px',
        height: '48px',
        margin: '0 8px',
        fontSize: '24px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        textAlign: 'center',
        background: '#fff',
        color: '#222',
        ...inputStyle,
      }}
      containerStyle={{
        display: 'flex',
        justifyContent: 'center',
        gap: 8,
        ...containerStyle,
      }}
      renderInput={(props) => <input {...props} />}
    />
  );
};

export default OtpInputComponent; 