const { response } = require("express");
const Hospital = require("../models/hospitales");

const getHospitales = async (req, res) => {
  const hospitales = await Hospital.find().populate("usuario", "nombre");
  res.json({
    ok: true,
    msg: hospitales,
  });
};
const crearHospitales = async (req, res = response) => {
  const uid = req.uid;
  const hospital = new Hospital({
    usuario: uid,
    ...req.body,
  });

  try {
    const hospitalDB = await hospital.save();

    res.json({
      ok: true,
      hospital: hospitalDB,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};
const actualizarHospitales = (req, res) => {
  res.json({
    ok: true,
    msg: "actualizarHospitales",
  });
};
const borrarHospitales = (req, res) => {
  res.json({
    ok: true,
    msg: "borrarHospitales",
  });
};

module.exports = {
  getHospitales,
  crearHospitales,
  actualizarHospitales,
  borrarHospitales,
};
