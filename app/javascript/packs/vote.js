$(function() {
  $(".vote").on("click", ".upvote, .downvote", function(){
    var post_id = $(this).parent().data("id");
        is_upvote = $(this).hasClass("upvote");

    $.ajax({
      url: "/post/vote",
      type: "POST",
      beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
      data: { post_id: post_id, upvote: is_upvote },
      success: function() {
        console.log("success...");
      }
    })
  });

});