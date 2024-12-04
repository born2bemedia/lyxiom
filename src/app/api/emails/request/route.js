import { NextResponse } from "next/server";
const { google } = require("googleapis");

function makeBody(to, from, subject, message) {
  const str = [
    `To: ${to}`,
    `From: ${from}`,
    `Subject: ${subject}`,
    `MIME-Version: 1.0`,
    `Content-Type: text/html; charset=UTF-8`,
    "",
    message,
  ].join("\n");

  return Buffer.from(str)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);

    const {
      firstName,
      lastName,
      email,
      phone,
      activity,
      socialMediaLink,
      message,
      goal,
      need,
      agree,
    } = bodyJSON;

    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(
      process.env.EMAIL_CLIENT_ID,
      process.env.EMAIL_CLIENT_SECRET,
      "https://developers.google.com/oauthplayground"
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.EMAIL_REFRESH_TOKEN,
    });

    const accessToken = await oauth2Client.getAccessToken();
    if (!accessToken.token) {
      throw new Error("Failed to generate access token.");
    }

    const gmail = google.gmail({ version: "v1", auth: oauth2Client });

    const adminEmailBody = makeBody(
      process.env.EMAIL_USER,
      process.env.EMAIL_USER,
      `New Request Form Submission`,
      `
      <p><b>First Name:</b> ${firstName}</p>
      <p><b>Last Name:</b> ${lastName}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Activity:</b> ${activity}</p>
      <p><b>Social Media Link:</b> ${socialMediaLink || "N/A"}</p>
      <p><b>Goal:</b> ${goal || "N/A"}</p>
      <p><b>Need:</b> ${need || "N/A"}</p>
      <p><b>Message:</b> ${message || "N/A"}</p>
      <p><b>Agreed to Terms:</b> ${agree ? "Yes" : "No"}</p>
      `
    );

    const clientEmailBody = makeBody(
      email, // Client email
      process.env.EMAIL_USER, // Sender (admin)
      "Lyxiom: We’ve Received Your Request", // Subject
      `
      <table width="640" style="border-collapse: collapse; margin: 0 auto; font-style: sans-serif;">
        <thead>
        </thead>
            <tbody>
                <tr>
                    <td style="padding: 50px 40px; font-family: Roboto, sans-serif; color:#0A0A0A;">
                        <h2 style="text-align: left; font-size: 20px;">Hi ${firstName},</h2>
                        <p style="font-size: 16px; line-height: 19px;">Thank you for reaching out to Lyxiom! We’ve received your service request and will review it promptly.</p>
                        <p style="font-size: 16px; line-height: 19px;">One of our experts will contact you soon to gather more details and discuss the next steps. If you have any immediate questions, please reply to this email.</p>
                        <p style="font-size: 16px; line-height: 19px;">We look forward to helping you achieve your goals!
</p>
                        <p style="font-size: 16px; line-height: 19px; font-weight: 600;">
                            Best regards,
                            <br>
                            The Lyxiom Team

                        </p>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td style="background-color: #222222; font-weight: 600; font-family: Roboto, sans-serif;padding: 24px 0;">
                        <p style="font-size: 20px; line-height: 24px; color: #ffffff; text-align: center;margin: 0;">Thanks for using <a href="https://lyxiom.com/" style="color: #3516B1; text-decoration: none;">Lyxiom</a></p>
                    </td>
                </tr>
            </tfoot>
        </table>
      `
    );

    await gmail.users.messages.send({
      userId: "me",
      resource: { raw: adminEmailBody },
    });

    await gmail.users.messages.send({
      userId: "me",
      resource: { raw: clientEmailBody },
    });

    return NextResponse.json({ message: "Emails sent successfully." });
  } catch (error) {
    console.error("Error details:");
    console.error("Message:", error.message);
    console.error("Stack Trace:", error.stack);
    return NextResponse.json(
      { message: "Failed to send emails.", error: error.message },
      { status: 500 }
    );
  }
}
