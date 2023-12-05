$(document).ready(() => {
   //* displays date from dayjs library
   $("#current-day").text(dayjs().format("dddd, MMMM D, YYYY h:mm A"));

   //* displays current day
   for (let hour = 0; hour < 24; ++hour) {
      $("<div id='time-" + hour + "' class='time-block row past'></div>").appendTo("#cont-fluid");
      $("<div id='time-text-" + hour + "' class='hour col-2 col-md-1 text-center py-3'>" + hour + "</div>").appendTo("#time-" + hour);
      $("<textarea id='textarea-" + hour + "' rows='3' class='col-8 col-md-10 description'>My appointments</textarea>").appendTo("#time-" + hour);
      $("<button id='btn-" + hour + "' class='btn saveBtn col-2 col-md-1' aria-label='save'></button>").appendTo("#time-" + hour);
      $("<i id='icon-" + hour + "' data-hourindex='" + hour + "' class='fas fa-floppy-disk' aria-hidden='true'></i>").appendTo("#btn-" + hour);
   }
});
