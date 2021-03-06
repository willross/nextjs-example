const fs = require("fs");
const path = require("path");

module.exports = function getMessage(key, locale, defaultMessage) {
  const file = fs.readFileSync(
    path.resolve(process.cwd(), `./i18n/messages/${locale}.json`)
  );
  const messages = JSON.parse(file);

  return messages[key] || defaultMessage;
};