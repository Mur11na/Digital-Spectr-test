$( document ).ready(function() {
    $("#btn").click(
		function(){
			sendAjaxForm('result_form', 'ajax_form', 'https://digital-spectr.com/ac/academy.php');
			return false; 
		}
	);
});
 
function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url:     url, 
        type:     "POST", 
        dataType: "html", 
        data: $("#"+ajax_form).serialize(),  
        success: function(response) { 
        	alert ('Всё хорошо!');
    	},
    	error: function(response) { 
            alert('Проверьте правильность введенных данных');
    	}
 	});
}