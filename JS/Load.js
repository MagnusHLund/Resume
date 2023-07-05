$(document).ready(function () {
  $('#header-container').load('../Include/Header.php', function () {
  });
});


$(document).ready(function () {
  $('#footer-container').load('../Include/footer.html', function () {
  });
});

$(document).ready(function() {
  $.ajax({
      url: '../php/Database.php',
      type: 'GET',
      dataType: 'text',  // Specify the response data type as text
      success: function(response) {
          $('#visitors').text(response);  // Update the visitors count
      },
      error: function(xhr, status, error) {
          console.log(xhr.responseText);  // Log any errors to the console
      }
  });
});

$(document).ready(function () {
  $('#visitor').load('../php/visitors.php', function () {
  });
});