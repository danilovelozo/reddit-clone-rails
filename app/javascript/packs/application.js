require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("expose-loader?$!jquery")

require("packs/vote")

import "bootstrap"
import "../stylesheets/application"
import "@fortawesome/fontawesome-free/js/all";

document.addEventListener("turbolinks:load", () => {
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()
});

// Auto-close Boostrap Alert Messages
window.setTimeout(function() {
  $(".alert").fadeTo(500, 0).slideUp(500, function(){
      $(this).remove();
  });
}, 4000);

