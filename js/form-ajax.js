$(document).ready(function(){
    $(".popup-module-form").submit(function(evt) { 
            evt.preventDefault();
            var form_data = $(this).serialize();
            $.ajax({
				type: "GET", 
				url: $(this).attr('data-mail'),
				data: form_data,
				success: function() {
					alert('Mail sent!');
			}
        });
    });
}); 