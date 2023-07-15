const nodemailer = require("nodemailer");

const { google } = require("googleapis");

const { OAuth2 } = google.auth;
const oauth_link = "https://developers.google.com/oauthplayground";

const auth = new OAuth2(
  process.env.MAILING_ID,
  process.env.MAILING_SECRET,
  process.env.MAILING_REFRESH,
  oauth_link
);
exports.sendVerificationEmail = (email, name, url) => {
    auth.setCredentials({
      refresh_token:process.env.MAILING_REFRESH,
    });
    const accessToken = auth.getAccessToken();
    const stmp = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        clientId: process.env.MAILING_ID,
        clientSecret: process.env.MAILING_SECRET,
        refreshToken: process.env.MAILING_REFRESH,
        accessToken,
      },
    });
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Facebook email verification",
      html: `<div style="max-width:700px;margin-bottom:1rem;display:flex;align-items:center;gap:10px;font-family:Roboto;font-weight:600;color:#3b5998"><img src="https://res.cloudinary.com/dmhcnhtng/image/upload/v1645134414/logo_cs1si5.png" alt="" style="width:30px"><span>Action requise : Activate your facebook account</span></div><div style="padding:1rem 0;border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5;color:#141823;font-size:17px;font-family:Roboto"><span>Hello ${name}</span><div style="padding:20px 0"><span style="padding:1.5rem 0">You recently created an account on Facebook. To complete your registration, please confirm your account.</span></div><a href=${url} style="width:200px;padding:10px 15px;background:#4c649b;color:#fff;text-decoration:none;font-weight:600">Confirm your account</a><br><div style="padding-top:20px"><span style="margin:1.5rem 0;color:#898f9c">Facebook allows you to stay in touch with all your friends, once refistered on facebook,you can share photos,organize events and much more.</span></div></div>`,
    };
    stmp.sendMail(mailOptions, (err, res) => {
      if (err) return err;
      return res;
    });
  };

exports.sendResetPasswordcode = (email, name, code) => {
  auth.setCredentials({
    refresh_token: process.env.MAILING_REFRESH,
  });
  const accessToken = auth.getAccessToken();
  const stmp = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      clientId: process.env.MAILING_ID,
      clientSecret: process.env.MAILING_SECRET,
      refreshToken: process.env.MAILING_REFRESH,
      accessToken,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Reset Facebook Password",
    html: `<div style="display:flex;align-items:center;max-width:700px;margin-bottom:1rem;gap:10px;font-family:Roboto,sans-serif;font-weight:600;color:#3b5998"><img style="max-width:50px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAA1UlEQVR4AWOwDp9LUzTELRi1wDdtaf+8w9sPXDtx7h4Q7Tt2c92OS9SxwCZibtesg0+fv3756i0aoo4FkxcdgxhHEwtiite8ePmGhhas3HIB2cRL1x5t3HV5xebzEEQFC67efAI3/cDxW7aR86icip6/QIRP9+xD1E+myOHTPv3AqAVA1DJ1/76jN+EI2YKLVx8hS+0+cgMY5yRbMHfVKbBxhNGFqw+B6mloweY9V2hrAbAIIceCugl7gE6DI2QTT124jyyVXrNxEKaiUQtGLRi1YNQCAMs01I34bbYCAAAAAElFTkSuQmCC" alt=""><span>Action required : Activate your facebook account</span></div><div style="padding:1rem 0;border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5;font-family:Roboto,sans-serif;color:#141023;font-size:17px"><span>Hello ${name}</span></div><div style="padding:20px 0;font-family:Roboto,sans-serif"><span style="padding:1.5rem 0">You recently created an account on facebook. To complete your registration, Please confirm your account</span></div><a style="width:200px;padding:10px 15px;background-color:#4c649b;color:#fff;text-decoration:none;font-weight:600;font-family:Roboto,sans-serif">${code}</a><br><div style="margin:1.5rem 0;color:#898f9c;font-family:Roboto,sans-serif"><span>Facebook allows you to stay in touch with all your friends ,once registered on facebook, you can share photos, orgainze events and much more.</span></div>`,
  };
  stmp.sendMail(mailOptions, (err, res) => {
    if (err) {
      return err;
    }
    return res;
  });
};
