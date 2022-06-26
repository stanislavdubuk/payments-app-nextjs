import * as React from 'react';
import moment, { Moment } from 'moment';

import { FormInput } from '../FormInput';
import { Button } from '../Button';
import { Popup } from '../Popup';

import s from './PaymentForm.module.scss';

export const PaymentForm = () => {
  const [cardNumber, setCardNumber] = React.useState<string>('');
  const [expDate, setExpDate] = React.useState<Moment>(moment());
  const [cvv, setCvv] = React.useState<string>('');
  const [amount, setAmount] = React.useState<string>('');
  const [successPopup, setSuccessPopup] = React.useState<boolean>(false);

  const handleSendRequest = async () => {
    await fetch('/api/payments', {
      method: 'POST',
      body: JSON.stringify({
        cardNumber,
        expDate: expDate.format('MM/YYYY'),
        cvv,
        amount,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    setSuccessPopup(true);
    setCardNumber('');
    setExpDate(moment());
    setCvv('');
    setAmount('');
  };

  const invalidCvv = cvv?.length < 3;
  const invalidCardNumberLength = cardNumber?.length < 16;
  const invalidExpirationDate = expDate?.isBefore(
    moment().subtract(1, 'month')
  );

  const isButtonDisabled =
    invalidCardNumberLength || invalidCvv || !amount || invalidExpirationDate;

  return (
    <div className={s.root}>
      <div className={s.title}>Payment Details</div>
      <div className={s.bottom}>
        <div className={s.inputContainer}>
          <FormInput
            type='cardNumber'
            value={cardNumber}
            onChange={setCardNumber}
          />
          <div className={s.shortInputs}>
            <FormInput type='expDate' value={expDate} onChange={setExpDate} />
            <FormInput type='cvv' value={cvv} onChange={setCvv} />
          </div>
          <FormInput type='amount' value={amount} onChange={setAmount} />
        </div>

        <Button
          className={s.button}
          disabled={isButtonDisabled}
          onClick={handleSendRequest}
        >
          Submit
        </Button>

        <Popup open={successPopup} setOpen={setSuccessPopup} />
      </div>
    </div>
  );
};
