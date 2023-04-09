import { google } from "googleapis";

import nodemailer from "nodemailer";

import { EnvironmentVariables } from "../Config/EnvironmentVariables";

const GOOGLE_ID: string = EnvironmentVariables.GOOGLE_ID;

const GOOGLE_SECRET: string = EnvironmentVariables.GOOGLE_SECRET;

const GOOGLE_REFRESHTOKEN: string = "";

const GOOGLE_REDIRECT: string = "https://developers.google.com/oauthplayground";

// oAUTH is open authentication, we want to tap to google's authentication
const oAUTH = new google.auth.OAuth2(GOOGLE_ID, GOOGLE_SECRET, GOOGLE_REDIRECT);

export const VerifyAccount = async () => {
  try {
    oAUTH.setCredentials({ access_token: GOOGLE_REFRESHTOKEN });

    const GetToken = await oAUTH.getAccessToken();

    // Nodemailer aspect:
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        clientId: GOOGLE_ID,
        clientSecret: GOOGLE_SECRET,
        refreshToken: GOOGLE_REFRESHTOKEN,
        accessToken: GetToken?.token!,
      },
    });

    const MailerOption = {
      from: "Easy Pay 💰💷💶💵💰",
      to: "Send Email",
      subject: "BUGA ALERT!!! WAKE UP",
      html: `<div>Moeney has been paid</div>`,
    };

    transporter
      .sendMail(MailerOption)
      .then(() => {
        console.log("Email has been sent");
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }
};
