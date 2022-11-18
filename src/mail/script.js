$('.alert').hide();

function myAnchor(anchorName) {
	$('html, body').animate({
		scrollTop: $(anchorName).offset().top
	}, 'slow', function () {
		document.location.href = anchorName;
	});
};

$(document).ready(function () {
	//E-mail Ajax Send
	$("#contact").submit(function () { //Change
		myAnchor("#mail");

		var th = $(this);

		$.ajax({
			type: "POST",
			url: "src/mail/mail.php", //Change
			data: th.serialize()
		}).done(function () {
			$('.alert').toggle("slow");

			setTimeout(function () {
				$('.alert').toggle("slow");
			}, 5000);
		});

		return false;
	});
});