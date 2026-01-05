	
	document.addEventListener("DOMContentLoaded",  function () {
	const buttons=document.querySelectorAll(".service-title");
	buttons.forEach(function(btn) {
	btn.addEventListener("click", function() {
	const content=btn.nextElementSibling;
	content.style.display=content.style.display===
	"block" ? "none" : "block";
	});
	});
	});