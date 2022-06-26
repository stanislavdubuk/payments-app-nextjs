const INPUT_LABELS: { [key: string]: string } = {
  cardNumber: 'CARD NUMBER',
  expDate: 'EXPIRATION DATE',
  cvv: 'CVV',
  amount: 'AMOUNT',
};

export const getLabels = (type: string) => INPUT_LABELS[type];
