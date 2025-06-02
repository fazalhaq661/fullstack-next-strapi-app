export default ({ env }) => ({
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'fazalhaq6870542@gmail.com',
        defaultReplyTo: 'fazalhaq6870542@gmail.com',
      },
    },
  },
});
