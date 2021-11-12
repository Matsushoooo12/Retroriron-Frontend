import React from 'react';
import styled from '@emotion/styled';

export const TicketFormLabel = ({ title, htmlFor, errors, required }) => {
  if (!required) return <Label htmlFor={htmlFor}>{title}</Label>;
  return (
    <Label htmlFor={htmlFor}>
      {title}
      <RequiredSign>*</RequiredSign>
      {errors && <RequiredSign>こちらは必須項目です。</RequiredSign>}
    </Label>
  );
};

const Label = styled.label`
  font-size: 1.6rem;
  font-weight: 700;
`;

const RequiredSign = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: #f42626;
  margin-left: 4px;
  margin-right: 16px;
`;
