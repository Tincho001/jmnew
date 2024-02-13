// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     authorization:
//       "2I2p6kcXxdjs4uxDtl4M5K12G8KlgnYla1lfHLqGsINq7UQb6sSwv0wver5OqqAi",
//   },
// };

// fetch("https://erp.duxsoftware.com.ar/WSERP/rest/services/items", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));


const axios = require('axios');

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    authorization:
      "2I2p6kcXxdjs4uxDtl4M5K12G8KlgnYla1lfHLqGsINq7UQb6sSwv0wver5OqqAi",
  },
};

axios.get("https://erp.duxsoftware.com.ar/WSERP/rest/services/items", options)
  .then((response) => console.log(response.data))
  .catch((err) => console.error(err));
