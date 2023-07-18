import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    // create a hash token
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "a23f18711150fa",
        pass: "b1faa48a01645b",
      },
    });

    const mailOptions = {
      from: "shubham@gmail.com",
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify Your Email" : "Reset Your Password",
      html: `<p>Click <a href=${
        process.env.DOMAIN
      }/${emailType ==="VERIFY"?"verifyemail":"resetpassword"}?token=${hashedToken}>here</a> to ${
        emailType === "VERIFY" ? "Verify Your Email" : "Reset Your Password"
      }
      or Copy the url and paste in to the browser <br> ${
        process.env.DOMAIN
      }/${emailType ==="VERIFY"?"verifyemail":"resetpassword"}?token=${hashedToken}
      </p>`,
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
