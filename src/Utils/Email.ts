import { google } from "googleapis";

import nodemailer from "nodemailer";

const GOOGLE_ID: string = "";

const GOOGLE_SECRET: string = "";

const GOOGLE_REFRESHTOKEN: string = "";

const GOOGLE_REDIRECT: string = "";

// oAUTH is open authentication, we want to tap to google's authentication
const oAUTH = new google.auth.oAUTH(GOOGLE_ID, GOOGLE_SECRET, GOOGLE_REDIRECT);

export const VerifyAccount = async () => {
  try {
    oAUTH.setCredentials({ access_token: GOOGLE_REFRESHTOKEN });

    const GetToken = await oAUTH.getAccessToken;

    // Nodemailer aspect:
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        clientId: GOOGLE_ID,
        clientSecret: GOOGLE_SECRET,
        refreshToken: GOOGLE_REFRESHTOKEN,
        accessToken: GetToken?.token,
      },
    });

    const MailerOption = {};
  } catch (error) {
    console.log(error);
  }
};
