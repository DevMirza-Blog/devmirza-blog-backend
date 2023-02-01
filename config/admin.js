const forgotPasswordTemplate = require("./email-templates/forget-password");

module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  forgotPassword: {
    from: "support@devmirza.ml",
    replyTo: "support@devmirza.ml",
    emailTemplate: forgotPasswordTemplate,
  },
});
