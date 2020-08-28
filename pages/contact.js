import Head from 'next/head'
import Link from 'next/link'
import Layout, {siteTitle} from '../components/layout'

const nodemailer = require("nodemailer");

export default function Contact(){
    return(
        <Layout>
            <Head>
                <title>Contact Page</title>
            </Head>
        </Layout>
    )
}



// async..await is not allowed in global scope, must use a wrapper
async function main() {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "Gmail",    
    auth: {
      user: "reececropley@gmail.com", // generated ethereal user
      pass: process.env.MAIL_PW // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "reece_cropley@hotmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);