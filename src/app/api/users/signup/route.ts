import { connectDB } from '@/dbConfig/dbConfig';
import User from '@/models/user.model';
import { NextResponse, NextRequest } from 'next/server';

connectDB();

export async function POST(request: NextRequest) {
  try {
    const { name, username, password, email, phoneNo } = await request.json();

    if (!name || !username || !password || !email || !phoneNo) {
      return NextResponse.json({
        error: 'ALL FIELDS ARE REQUIRED',
        status: 401,
      });
    }

    const createdUser = await User.findOne({ username });

    if (createdUser) {
      return NextResponse.json(
        { error: 'USER ALREADY EXISTS WITH THIS USERNAME' },
        { status: 401 }
      );
    }

    const user = new User({
      name,
      username,
      password,
      email,
      phoneNo,
    });

    const savedUser = await user.save();

    return NextResponse.json({
      message: 'USER CREATED SUCCESSFULLY',
      status: 200,
      savedUser,
      success: true,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'ERROR WHILE SIGNUP USER FROM BACKEND' },
      { status: 501 }
    );
  }
}
