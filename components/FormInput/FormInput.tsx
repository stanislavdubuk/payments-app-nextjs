import * as React from 'react';
import { Moment } from 'moment';

import { OutlinedInput, TextField } from '@mui/material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';

import {
  CARD_INPUT_MAX_LENGTH,
  CVV_INPUT_MAX_LENGTH,
} from '../../pages/constants';
import { getLabels } from '../../pages/utils';

import s from './FormInput.module.scss';

interface FormInputProps {
  type: string;
  value: string | Moment;
  onChange: (value: any) => void;
}

export const FormInput = ({ type, value, onChange }: FormInputProps) => {
  const label = getLabels(type);

  const handleInput = (e: any, maxLength: number) => {
    const input = (e.target.value = Math.max(0, parseInt(e.target.value))
      .toString()
      .slice(0, maxLength));

    onChange(input);
  };

  const cardNumberType = type === 'cardNumber';
  const expDateType = type === 'expDate';
  const cvvType = type === 'cvv';
  const amountType = type === 'amount';

  return (
    <div className={s.root}>
      {cardNumberType && (
        <React.Fragment>
          <label>{label}</label>
          <OutlinedInput
            type='number'
            value={value}
            className={s.input}
            onInput={(e) => handleInput(e, CARD_INPUT_MAX_LENGTH)}
          />
        </React.Fragment>
      )}
      {expDateType && (
        <div className={s.inputContainer}>
          <label>{label}</label>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DesktopDatePicker
              disablePast
              inputFormat='MM/YYYY'
              value={value}
              onChange={(value: any) => onChange(value)}
              renderInput={(params) => (
                <TextField
                  size='small'
                  className={s.input}
                  fullWidth
                  {...params}
                />
              )}
            />
          </LocalizationProvider>
        </div>
      )}
      {cvvType && (
        <div className={s.inputContainer}>
          <label>{label}</label>
          <OutlinedInput
            type='number'
            value={value}
            className={s.input}
            onInput={(e) => handleInput(e, CVV_INPUT_MAX_LENGTH)}
          />
        </div>
      )}
      {amountType && (
        <React.Fragment>
          <label>{label}</label>
          <OutlinedInput
            startAdornment='$'
            type='number'
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={s.input}
          />
        </React.Fragment>
      )}
    </div>
  );
};
