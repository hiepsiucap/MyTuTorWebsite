/** @format */

const transporter = require("./ConfigEmail");
const SendEmail = async ({ html, to, subject }) => {
  await transporter.sendMail({
    from: "BestTutor Việt Nam",
    to,
    subject,
    html,
  });
};
module.exports = SendEmail;
