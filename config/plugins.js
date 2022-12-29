module.exports = ({ env }) => ({
  // ...
  ckeditor: true,
  email: {
    config: {
      provider: 'mailgun',
      providerOptions: {
        key: env('MAILGUN_API_KEY'), // Required
        domain: env('MAILGUN_DOMAIN'), // Required
        //url: env('MAILGUN_URL', 'https://api.mailgun.net'), //Optional. If domain region is Europe use 'https://api.eu.mailgun.net'
      },
      settings: {
        defaultFrom: 'no-reply@devmirza.ml',
        defaultReplyTo: 'no-reply@devmirza.ml',
      },
    },
  },
  // ...
});