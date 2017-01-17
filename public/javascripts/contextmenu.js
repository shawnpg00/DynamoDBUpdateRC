document.addEventListener("DOMContentLoaded", function(event) { 
	var notepad = document.getElementById("notepad");
	notepad.addEventListener("contextmenu",function(event){
		event.preventDefault();
		var modal = document.getElementById("myModal");
        var span = document.getElementsByClassName("close")[0];
        var submitbutton = document.getElementById("submitbutton");
        modal.style.display = "block";
        span.onclick = function() {
            modal.style.display = "none";
        }
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        submitbutton.onclick = function(event) {
                modal.style.display = "none";
        }
	},false);
});

