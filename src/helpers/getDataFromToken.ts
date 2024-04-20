import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

// is nextresponse also possible instead of next request
export const getDataFromToken = (request: NextRequest) => {
  try {
    const token = request.cookies.get('token')?.value || '';
    const decoedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);
    console.log('DECODED TOKEN', decoedToken);

    return decoedToken.id;
  } catch (error: any) {
    throw new Error('ERROR WHILE DATA FETCHING FROM TOKEN', error.message);
  }
};
