$(document).ready(() => {
   //* displays date from dayjs library
   $("#current-day").text(dayjs().format("dddd, MMMM D, YYYY h:mm A"));

   const NOON = 12;
   let currentHour = dayjs().hour();

   //* displays current day
   for (let hour = 0; hour < 24; ++hour) {
      let colorCode = hour < currentHour ? "past" : hour === currentHour ? "present" : "future";
      let hourBlock = hour < NOON ? hour + " AM" : hour === NOON ? hour + " PM" : hour - NOON + " PM";
      $("<div id='time-" + hour + "' class='time-block row " + colorCode + "'></div>").appendTo("#cont-fluid");
      $("<div id='time-text-" + hour + "' class='hour col-2 col-md-1 text-center py-3'>" + hourBlock + "</div>").appendTo("#time-" + hour);
      $("<textarea id='textarea-" + hour + "' rows='3' class='col-8 col-md-10 description'></textarea>").appendTo("#time-" + hour);
      $("<button id='btn-" + hour + "' class='btn saveBtn col-2 col-md-1' aria-label='save'></button>").appendTo("#time-" + hour);
      $("<i id='icon-" + hour + "' data-hourindex='" + hour + "' class='fas fa-floppy-disk' aria-hidden='true'></i>").appendTo("#btn-" + hour);
   }
});
