// Define JSON File
var fs = require("fs");
// Get content from file
var contents = fs.readFileSync("email_capture_banner.json");
// Define to JSON type
var bundle = JSON.parse(contents);

for (const keythemeV in bundle.fields.field_theme) {
  let themeVal = bundle.fields.field_theme[keythemeV];

  for (const keyBackgroundC in bundle.fields.field_background_color) {
    let backgroundCol = bundle.fields.field_background_color[keyBackgroundC];

    for (const keydescriptionV in bundle.fields.field_description) {
      let descriptionVal = bundle.fields.field_description[keydescriptionV];

      for (const keypromotionV in bundle.fields.field_promotion) {
        let promotionVal = bundle.fields.field_promotion[keypromotionV];

        for (const keymobileB in bundle.fields.field_email_list) {
          let mobileBanner = bundle.fields.field_email_list[keymobileB];

          for (const keytabletB in bundle.fields.field_text_color) {
            let tabletBanner = bundle.fields.field_text_color[keytabletB];

            process.stdout.write(String([themeVal, backgroundCol, descriptionVal, promotionVal, mobileBanner, tabletBanner]));

            process.stdout.write("\n");

          }
        }
      }
    }
  }
}


