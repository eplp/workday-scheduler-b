$(document).ready(() => {   //* gets all document loaded and ready before jquery starts
   const DAY_HOUR_START = 9;
   const DAY_HOUR_END = 18;
   const NOON = 12;

   $("#current-day").text(dayjs().format("dddd, MMMM D, YYYY h:mm A")); //* displays date and time from dayjs library
   let currentHour = dayjs().hour();

   let schedule = JSON.parse(localStorage.getItem("scheduler")); //* get persisted data from localStorage
   if (schedule === null) schedule = []; //* creates array if there is no localStorage data

   //* displays current day
   for (let hour = DAY_HOUR_START; hour < DAY_HOUR_END; ++hour) {
      let colorCode = hour < currentHour ? "past" : hour === currentHour ? "present" : "future"; //* color code time block
      let hourBlock = hour < NOON ? hour + " AM" : hour === NOON ? hour + " PM" : hour - NOON + " PM"; //* formats hour as morning/afternoon

      //* build time block row
      $("<div id='time-" + hour + "' class='time-block row " + colorCode + "'></div>").appendTo("#container-fluid");
      $("<div id='time-text-" + hour + "' class='hour col-2 col-md-1 text-center py-3'>" + hourBlock + "</div>").appendTo("#time-" + hour);
      $("<textarea id='textarea-" + hour + "' class='col-8 col-md-10 description' rows='3'></textarea>").appendTo("#time-" + hour);
      $("#textarea-" + hour).val(schedule[hour]); //* refresh scheduler with data from localStorage
      $("<button id='btn-" + hour + "' class='btn saveBtn col-2 col-md-1' aria-label='save'></button>").appendTo("#time-" + hour);
      $("<i data-idx='" + hour + "' class='fas fa-floppy-disk' aria-hidden='true'></i>").appendTo("#btn-" + hour);
   }

   //* save button/icon listener using bubbling on <i> elements and handling at #container-fluid
   $("#container-fluid").on("click", "i", (event) => {
      let idx = $(event.target).data("idx"); //* index of clicked button
      schedule[idx] = $("#textarea-" + idx).val(); //* updates array from textarea
      localStorage.setItem("scheduler", JSON.stringify(schedule)); //* updates localStorage - persists data
   });
});
