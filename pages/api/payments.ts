import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://Stanislav:jHBo1Ua6pmFD0CPT@cluster0.23dpi.mongodb.net/payments?retryWrites=true&w=majority'
    );
    const db = client.db();

    const paymentsCollection = db.collection('payments');

    const response = await paymentsCollection.insertOne(data);

    const payment = await paymentsCollection.findOne(response.insertedId);

    const paymentResponeInfo = {
      requestId: payment?._id.toString(),
      amount: Number(payment?.amount),
    };

    client.close();

    res.status(201).json(paymentResponeInfo);
  } catch (error) {
    console.log(error);
  }
};

export default handler;
