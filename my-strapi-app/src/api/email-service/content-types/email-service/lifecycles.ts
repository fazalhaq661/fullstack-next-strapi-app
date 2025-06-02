export default {
  async afterCreate(event) {    // Connected to "Save" button in admin panel
    const { result } = event;

    try{
      await strapi.plugins['email'].services.email.send({

        to: 'mustafa.waqar@aps.gov.af',
        from: 'fazalhaq.fazel@aps.gov.af', // e.g. single sender verification in SendGrid
        subject: 'Congratulation Dear APS member',
        text: `hellow jani  ${result.name }`, // Replace with a valid field ID
        html: 'Hello world! this email is sent by fazalhaq Fazel from new aps website', 
      })
    } catch(err) {
      console.log(err);
    }
  }
}
