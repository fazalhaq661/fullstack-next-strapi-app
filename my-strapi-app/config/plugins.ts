module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"), // Required
      },
      settings: {
        defaultFrom: env("SENDGRID_EMAIL"),
        defaultReplyTo: env("SENDGRID_EMAIL"),
      },
    },
  },
});

// module.exports = {
//   email: {
//     config: {
//       provider: 'nodemailer',
//       providerOptions: {
//         host: 'sandbox.smtp.mailtrap.io',
//         port: 2525,
//         auth: {
//           user: '4d5f1cb6c9052f',
//           pass: '2b5936f46c935c',
//         },
//       },
//       settings: {
//         defaultFrom: 'noreply@example.com',
//         defaultReplyTo: 'support@example.com',
//       },
//     },
//   },
// };

