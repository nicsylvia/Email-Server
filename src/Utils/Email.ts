import { google } from "googleapis";

import nodemailer from "nodemailer";

const GOOGLE_ID: string = "";

const GOOGLE_SECRET: string = "";

const GOOGLE_REFRESHTOKEN: string = "";

const GOOGLE_REDIRECT: string = "";

// oAUTH is open authentication, we want to tap to google's authentication
const oAUTH = new google.auth.oAUTH(GOOGLE_ID, GOOGLE_SECRET, GOOGLE_REDIRECT);
