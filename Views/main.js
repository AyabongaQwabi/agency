
$('.addNew').click(function(){

		$('.newContract').css({transition:'all 2s linear',display:'table-row'})
})

$('.close').click(function(){

		$('.newContract').css({transition:'all 2s linear',display:'none'})
})

// Initialize collapse button
  $("#open").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();

  $('#open').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );


// Show sideNav
$('#open').sideNav('show');
// Hide sideNav
$('#open').sideNav('hide');

Materialize.toast('I am a toast!', 4000) // 4000 is the duration of the toast

    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });

