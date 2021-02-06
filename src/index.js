const express = require("express");
const { enviarEmail } = require("./nodemailer/nodemailer");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/email", async (req, res) => {
  try {
    let { nombres , email, telefono, mensaje, asunto } = req.body;
    let dataMail = { nombres, email, telefono, mensaje, asunto };
    let data = await enviarEmail(dataMail);
    res.status(200).json({
      ok: true,
      message: "Todo correcto",
      data,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      error,
      message: "Error interno",
    });
  }
});

app.listen(process.env.PORT || 3000, (e) => {
  if (e) {
    console.log("Error al iniciar servidor");
  } else {
    console.log("Servidor iniciado con exito");
  }
});
