import { connectDB } from '@/dbConfig/dbConfig';
import { NextResponse } from 'next/server';

connectDB();

export async function GET() {
  try {
    const response = NextResponse.json({
      message: 'USER LOGGED OUT SUCCESSFULLY',
      status: 200,
      success: true,
    });

    response.cookies.set('token', '', {
      httpOnly: true,
      expires: new Date(0),
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: 'ERROR WHILE LOGOUT USER FROM BACKEND' },
      { status: 501 }
    );
  }
}
