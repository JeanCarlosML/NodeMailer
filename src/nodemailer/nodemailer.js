const nodemailer = require("nodemailer");

//Enviando email
async function enviarEmail(data) {
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
    //correo corporativo
    to: "akanzaakamaru@gmail.com",
    subject: "Solicitud proveniente de Página Web",
    //Se puede neviar texto plano text:"dsadas"
    //Pero tambien se puede enviar html
    //Se recomienda usar estilos en linea
    html: `
  <table border="0" cellpadding="0" cellspacing="0" width="600px" background-color="#2d3436" bgcolor="#2d3436">
  <tr height="200px">  
      <td bgcolor="" width="600px">
          <h1 style="color: #fff; text-align:center">Me gustaria contactar contigo</h1>
          <p  style="color: #fff; text-align:start ; padding:10px 40px">
              <span style="color: #e84393">Nombres: </span> 
              ${data.nombres}
          </p>
          <p  style="color: #fff; text-align:start ;padding:10px 40px">
              <span style="color: #e84393">Email: </span> 
              ${data.email}
          </p>
          <p  style="color: #fff; text-align:start ; padding:10px 40px">
              <span style="color: #e84393">Teléfono: </span> 
              ${data.telefono}
          </p>
          <p  style="color: #fff; text-align:start ; padding:10px 40px">
              <span style="color: #e84393">Mensaje: </span> 
              ${data.mensaje}
          </p>
          <p  style="color: #fff; text-align:start ; padding:10px 40px">
              <span style="color: #e84393">Asunto: </span> 
              ${data.asunto}
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
  let respuesta = await transporter.sendMail(mailOptions).catch((e) => {
    throw new Error("Error : " + e);
  });
  return respuesta;
}

module.exports = {
  enviarEmail,
};
