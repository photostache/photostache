$(document).ready(function() {

  var mn = $(".main-nav");
  var mns = "main-nav-scrolled";
  var hdr = $('header').height();
  var fs = $('.flexslider');

  /* WOW.js Init */

  new WOW().init();

  /* Sticky Navi */

  $(window).scroll(function() {
    if( $(this).scrollTop() > hdr ) {
      mn.addClass(mns);
    } else {
      mn.removeClass(mns);
    }
  });

 /* Nano Gallery */

 /* Main Gallery Nano Gallery */

    $("#photostacheGallery").nanoGallery({
      thumbnailWidth: 'auto',
      thumbnailHeight: 250,
      userID: '103904153101772789154',
      kind:'picasa',
      album: '6112210826813885713&authkey=CN6koOK66Z3KAw',
      colorScheme: 'none',
      thumbnailHoverEffect: [{ name: 'labelAppear75', duration: 300 }],
      theme: 'light',
      thumbnailGutterWidth : 0,
      thumbnailGutterHeight : 0,
      i18n: { thumbnailImageDescription: 'View Photo', thumbnailAlbumDescription: 'Open Album' },
      thumbnailLabel: { display: true, position: 'overImageOnMiddle', align: 'center' },
      thumbnailLazyLoad: true
    });

    $("#pastEvents").nanoGallery({
      thumbnailWidth: 'auto',
      thumbnailHeight: 250,
      userID: '103904153101772789154',
      kind:'picasa',
      album: '6112228930804505729&authkey=CNy0n5rN-LWcvgE',
      colorScheme: 'none',
      thumbnailHoverEffect: [{ name: 'labelAppear75', duration: 300 }],
      theme: 'light',
      thumbnailGutterWidth : 0,
      thumbnailGutterHeight : 0,
      i18n: { thumbnailImageDescription: 'View Photo', thumbnailAlbumDescription: 'Open Album' },
      thumbnailLabel: { display: true, position: 'overImageOnMiddle', align: 'center' },
      thumbnailLazyLoad: true
    });

      $("#frontpage-gallery").nanoGallery({
      thumbnailWidth: 'auto',
      thumbnailHeight: 250,
      userID: '103904153101772789154',
      kind:'picasa',
      album: '6113963919844552913&authkey=CL_A9db-6Zv8uwE',
      colorScheme: 'none',
      thumbnailHoverEffect: [{ name: 'labelAppear75', duration: 300 }],
      theme: 'light',
      thumbnailGutterWidth : 0,
      thumbnailGutterHeight : 0,
      i18n: { thumbnailImageDescription: 'View Photo', thumbnailAlbumDescription: 'Open Album' },
      thumbnailLabel: { display: true, position: 'overImageOnMiddle', align: 'center' },
      thumbnailLazyLoad: true
    });


  $("#gallery-main").nanoGallery({
      thumbnailWidth: 'auto',
      thumbnailHeight: 250,
      colorScheme: 'none',
      thumbnailHoverEffect: [{ name: 'labelAppear75', duration: 300 }],
      theme: 'light',
      thumbnailGutterWidth : 0,
      thumbnailGutterHeight : 0,
      i18n: { thumbnailImageDescription: 'View Photo', thumbnailAlbumDescription: 'Open Album' },
      thumbnailLabel: { display: true, position: 'overImageOnMiddle', align: 'center' },
      thumbnailLazyLoad: true
  });




/* Flex Slider */
   var sliderOptions = {
    animation: "fade",
    easing: "swing",
    slideshow: true,
    slideshowSpeed: 3500,
    animationSpeed: 300,
   };

   fs.flexslider(sliderOptions);

});
