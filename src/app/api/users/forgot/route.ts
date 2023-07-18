import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { sendEmail } from "@/helpers/mailer";

connect();
export async function POST(request: NextRequest) {
  const { email } = await request.json();

  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json({ error: "User Not found!!" }, { status: 400 });
  }

  // send Reset password  email
  await sendEmail({ email, emailType: "RESET", userId: user._id });

  return NextResponse.json({
    message: "successfully send the email",
    status: 200,
  });
}
