module.exports = ({ env }) => ({
  // ...
  ckeditor: true,
  email: {
    config: {
      provider: "mailgun",
      providerOptions: {
        key: env("MAILGUN_API_KEY"),
        domain: env("MAILGUN_DOMAIN"),
        //url: env('MAILGUN_URL', 'https://api.mailgun.net')
      },
      settings: {
        defaultForm: "no-reply@devmirza.ml",
        defaultReplyTo: "no-reply@devmirza.ml",
      },
    },
  },
});
