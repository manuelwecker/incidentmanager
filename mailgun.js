require("dotenv").config();
const API_KEY = process.env.API_KEY_MAILGUN;
const DOMAIN = process.env.DOMAIN_MAILGUN;
const mailgun = require("mailgun-js")({ apiKey: API_KEY, domain: DOMAIN });

const emailtext = "A new issue has been reported";

const data = {
  from: "alert@incidentmanager.eu",
  to: "manuelwecker@web.de",
  subject: "New issues on IncidentManager",
  text: `Important: ${emailtext}! Please check open tasks and follow the instructions in the  IncidentManager.app`
};

mailgun.messages().send(data, (error, body) => {
  console.log(body);
  console.log(data.text);
});
