module.exports = ({ env }) => ({
    // ...
    email: {
        config: {
            provider: 'mailgun',
            providerOptions: {
                key: env('MAILGUN_API_KEY'), 
                domain: env('MAILGUN_DOMAIN'), 
                url: env('MAILGUN_URL', 'https://api.mailgun.net')
            },
            settings: {
                defaultForm: 'pzhafeez@gmail.com',
                defaultReplyTo: 'pzhafeez@gmail.com'
            }
        }
    }
})