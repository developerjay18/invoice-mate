import { connectDB } from '@/dbConfig/dbConfig';
import User from '@/models/user.model';
import { NextResponse, NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

connectDB();

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json({
        error: 'USERNAME AND PASSWORD BOTH FIELDS ARE REQUIRED',
        status: 401,
      });
    }

    const user = await User.findOne({ username });

    if (!user) {
      return NextResponse.json(
        { error: "USER DOESN'T EXISTS WITH THIS USERNAME" },
        { status: 401 }
      );
    }

    if (user.password !== password) {
      return NextResponse.json({
        error: "PASSWORD DOESN'T MATCH PLEASE RE-ENTER PASSWORD",
        status: 401,
      });
    }

    const tokenData = {
      id: user._id,
    };

    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: '1d',
    });

    const response = NextResponse.json({
      message: 'USER LOGGEDIN SUCCESSFULLY',
      status: 200,
      user,
      success: true,
    });

    response.cookies.set('token', token, { httpOnly: true });

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: 'ERROR WHILE LOGIN USER FROM BACKEND' },
      { status: 501 }
    );
  }
}
