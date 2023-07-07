// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

const localeSettings = {};
dayjs.locale(localeSettings);

$(function () {

// Today's Date & Time
function currentTime() {
  const date = $('#date');
  const time = $('#time');
  const currentDate = dayjs().format('dddd, MMMM D, YYYY');
  const currentTime = dayjs().format('hh:mm:ss A');
  date.text(currentDate);
  time.text(currentTime);
}
  setInterval(currentTime, 1000);
});

// Time Block Color Change
function colorTime () {
  $('.time-block').each(function() {
    const blockTime = parseInt(this.id);
    $(this).toggleClass('past', blockTime < currentTime);
    $(this).toggleClass('present', blockTime === currentTime);
    $(this).toggleClass('future', blockTime > currentTime);
  });

  // Color Refresh
  function colorRefresh() {
    $('.time-block').each(function() {
      const blockTime = parseInt(this.id);
      if (blockTime == currentTime) {
        $(this).removeClass('past future').addClass('present');
      } else if (blockTime < currentTime) {
        $(this).removeClass('future present').addClass('past');
      } else {
        $(this).removeClass('past present').addClass('future');
      }
    });
  }

  colorTime();
  colorRefresh();

};




  
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.

  