// File: src/api/auth/controllers/auth.custom.ts (or wherever your custom logic is)

export default {
  async registerWithTransaction(ctx) {
    const { email, username, password } = ctx.request.body;

    try {
      await strapi.db.transaction(async (trx) => {
        // 1. Create user
        const user = await strapi.entityService.create('plugin::users-permissions.user', {
          data: {
            username,
            email,
            password,
            confirmed: false, // Optional: mark as not confirmed initially
          },
          transacting: trx,
        });

        // 2. Send confirmation email
        const confirmationToken = strapi.service('plugin::users-permissions.user').generateEmailToken(user);

        const emailSent = await strapi.plugin('email').service('email').send({
          to: user.email,
          subject: 'Confirm your email',
          html: `<p>Click <a href="${process.env.FRONTEND_URL}/auth/confirm-email?token=${confirmationToken}">here</a> to confirm your email.</p>`,
        });

        if (!emailSent) {
          throw new Error("Failed to send confirmation email");
        }

        // Optionally store the token, or rely on built-in confirmation endpoint
      });

      ctx.send({ success: true, message: 'User registered, confirmation email sent.' });
    } catch (error) {
      ctx.send({ success: false, message: error.message }, 500);
    }
  },
};
