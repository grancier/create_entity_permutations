// Define JSON File
var fs = require("fs");
// Get content from file
var contents = fs.readFileSync("featured_content.json");
// Define to JSON type
var bundle = JSON.parse(contents);

for (const keythemeV in bundle.fields.field_featured_content_ref) {
  let themeVal = bundle.fields.field_featured_content_ref[keythemeV];

  for (const keyBackgroundC in bundle.fields.field_featured_content_type) {
    let backgroundCol = bundle.fields.field_featured_content_type[keyBackgroundC];

    for (const keydescriptionV in bundle.fields.field_featured_content_mode) {
      let descriptionVal = bundle.fields.field_featured_content_mode[keydescriptionV];

      for (const keymobileB in bundle.fields.field_header) {
        let mobileBanner = bundle.fields.field_header[keymobileB];

        process.stdout.write(String([themeVal, backgroundCol, descriptionVal, mobileBanner]));

        process.stdout.write("\n");

      }
    }
  }
}



