import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'belimadnan488@gmail.com', // Your email
    pass: 'gicz mgju xsiq cxgf', // App-specific password
  },
});

const sendEmail = ({ name, email, number, message }) => {
  const mailOptions = {
    from: email, // Sender's email
    to: 'belimadnan488@gmail.com', // Recipient's email
    subject: 'Education Enquiry',
    html: `
      <div style="font-family: Arial, sans-serif; background-color: #f3f4f6; padding: 20px; color: #111827;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
          <div style="background-color: #f5f5f5; padding: 16px; text-align: center; color: #000;">
            <h1 style="margin: 0; font-size: 20px; font-weight: bold;">New Contact Form Submission</h1>
          </div>
          <div style="padding: 20px;">
            <p style="font-size: 16px; margin-bottom: 10px;">
              <span style="font-weight: bold;">Name:</span> ${name}
            </p>
            <p style="font-size: 16px; margin-bottom: 10px;">
              <span style="font-weight: bold;">Email:</span> ${email}
            </p>
            <p style="font-size: 16px; margin-bottom: 10px;">
              <span style="font-weight: bold;">Phone Number:</span> ${number}
            </p>
            <p style="font-size: 16px; margin-bottom: 10px;">
              <span style="font-weight: bold;">Message:</span>
            </p>
            <p style="font-size: 14px; padding: 10px; background-color: #f9fafb; border-left: 4px solid #1d4ed8; margin: 10px 0;">
              ${message}
            </p>
          </div>
        </div>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
};


export default sendEmail