const sdk = require("api")("@duxsoftware/v1.0#9pefko16lq5lvpps");

sdk.auth("2I2p6kcXxdjs4uxDtl4M5K12G8KlgnYla1lfHLqGsINq7UQb6sSwv0wver5OqqAi");
sdk
  .consultarItems()
  .then(({ data }) => console.log(data))
  .catch((err) => console.error(err));


//*tira TRUE
// const sdk = require("api")("@duxsoftware/v1.0#9pefko16lq5lvpps");

// sdk.auth("2I2p6kcXxdjs4uxDtl4M5K12G8KlgnYla1lfHLqGsINq7UQb6sSwv0wver5OqqAi");
// sdk
//   .consultarItems()
//   .then(({ data }) => console.log(data.results[0].cod_item ==='ARTICULO0000'))
//   .catch((err) => console.error(err));


