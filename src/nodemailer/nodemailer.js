const nodemailer = require("nodemailer");

//Creando trasnporter
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});
//Configuraciones para nodemailer
let mailOptions = {
  from: process.env.EMAIL,
  to: "akanzaakamaru@gmail.com",
  subject: "Testing and testing",
  //Se puede neviar texto plano text:"dsadas"
  //Pero tambien se puede enviar html
  //Se recomienda usar estilos en linea
  html: `
  <table border="0" cellpadding="0" cellspacing="0" width="600px" background-color="#2d3436" bgcolor="#2d3436">
  <tr height="200px">  
      <td bgcolor="" width="600px">
          <h1 style="color: #fff; text-align:center">Bienvenido</h1>
          <p  style="color: #fff; text-align:center">
              <span style="color: #e84393">Nombre</span> 
              a la aplicación
          </p>
      </td>
  </tr>
  <tr bgcolor="#fff">
      <td style="text-align:center">
          <p style="color: #000">¡Un mundo de servicios a su disposición!</p>
      </td>
  </tr>
  </table>
`,
};

//Enviando email
transporter.sendMail(mailOptions, (e, data) => {
  if (e) {
    console.log("Error en send email");
  } else {
    console.log("Todo ok");
  }
});