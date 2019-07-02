// Define JSON File
var fs = require("fs");
// Get content from file
var contents = fs.readFileSync("jsoncontent.json");
// Define to JSON type
var bundle = JSON.parse(contents);

for (const keycarouselImageItem in bundle.fields.field_carousel_image_items) {
  let carouselImageItem = bundle.fields.field_carousel_image_items[keycarouselImageItem];

  for (const keytextA in bundle.fields.field_text_alignment) {
    let textAlignment = bundle.fields.field_text_alignment[keytextA];

    for (const keythemeV in bundle.fields.field_theme) {
      let themeVal = bundle.fields.field_theme[keythemeV];

      for (const keytextC in bundle.fields.field_text_color) {
        let textColor = bundle.fields.field_text_color[keytextC];

        for (const keyalignmentV in bundle.fields.field_alignment) {
          let alignmentVal = bundle.fields.field_text_color[keytextC];

          for (const keyctaL in bundle.fields.field_cta_link) {
            let ctaLink = bundle.fields.field_cta_link[keyctaL];

            for (const keydescriptionV in bundle.fields.field_description) {
              let descriptionVal = bundle.fields.field_description[keydescriptionV];

              for (const keymobileD in bundle.fields.field_mobile_description) {
                let mobileDesc = bundle.fields.field_mobile_description[keymobileD];

                for (const keynoverticalS in bundle.fields.field_no_vertical_spacing) {
                  let noVerticalSpace = bundle.fields.field_no_vertical_spacing[keynoverticalS];

                  for (const keypromotionV in bundle.fields.field_promotion) {
                    let promotionVal = bundle.fields.field_promotion[keypromotionV];

                    if (carouselImageItem > 0) {

                      for (const keymobileB in bundle.fields.field_mobile_banner) {
                        let mobileBanner = bundle.fields.field_mobile_banner[keymobileB];

                        for (const keytabletB in bundle.fields.field_tablet_banner) {
                          let tabletBanner = bundle.fields.field_tablet_banner[keytabletB];

                          process.stdout.write(String([carouselImageItem, textAlignment, themeVal, textColor, alignmentVal, ctaLink, descriptionVal, mobileDesc, noVerticalSpace, promotionVal, mobileBanner, tabletBanner]));
                          process.stdout.write("\n");
                        }
                      }
                    }
                    else {
                      process.stdout.write(String([carouselImageItem, textAlignment, themeVal, textColor, alignmentVal, ctaLink, descriptionVal, mobileDesc, noVerticalSpace, promotionVal]));
                      process.stdout.write("\n");
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}




