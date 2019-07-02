// Define JSON File
var fs = require("fs");
// Get content from file
var contents = fs.readFileSync("featured_products.json");
// Define to JSON type
var bundle = JSON.parse(contents);

for (const keycarouselImageItem in bundle.fields.field_opacity) {
  let carouselImageItem = bundle.fields.field_opacity[keycarouselImageItem];

  for (const keytextA in bundle.fields.field_featured_product) {
    let textAlignment = bundle.fields.field_featured_product[keytextA];

    for (const keythemeV in bundle.fields.field_cta_link) {
      let themeVal = bundle.fields.field_cta_link[keythemeV];

      for (const keytextC in bundle.fields.field_header) {
        let textColor = bundle.fields.field_header[keytextC];

        for (const keyctaL in bundle.fields.field_image) {
          let ctaLink = bundle.fields.field_image[keyctaL];

          for (const keydescriptionV in bundle.fields.field_mobile_banner) {
            let descriptionVal = bundle.fields.field_mobile_banner[keydescriptionV];

            for (const keymobileD in bundle.fields.field_tablet_banner) {
              let mobileDesc = bundle.fields.field_tablet_banner[keymobileD];

              for (const keynoverticalS in bundle.fields.field_slimhero_theme) {
                let noVerticalSpace = bundle.fields.field_slimhero_theme[keynoverticalS];
                process.stdout.write(String([carouselImageItem, textAlignment, themeVal, textColor, ctaLink, descriptionVal, mobileDesc, noVerticalSpace]));
                process.stdout.write("\n");
              }
            }
          }
        }
      }
    }
  }
}




