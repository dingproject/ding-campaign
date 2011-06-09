
Drupal.behaviors.dingCampaignEdit = function () {
  $('#node-form')
    .find('.campaign-type-select input')
      .click(function () {
          if ($(this).val() == 'text-only') {
            $('#node-form')
              .find('.body-field-wrapper').show('fast').end()
              .find('#edit-field-campaign-image-0-ahah-wrapper').hide('fast').end()
            .end();
          }
          else if ($(this).val() == 'image-only') {
            $('#node-form')
              .find('.body-field-wrapper').hide('fast').end()
              .find('#edit-field-campaign-image-0-ahah-wrapper').show('fast').end()
            .end();
          }
        })
      .end()
    // Now that we have a click handler, trigger it on the already
    // selected radio to have the inital hiding taking place.
    .find('.campaign-type-select input[checked]').click()
    .end();
};

