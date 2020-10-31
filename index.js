$(function(){


  // listen for form submission
  $('#js-shopping-list-form').submit(function(event) {

    
    event.preventDefault();

    // retrieve value for the new item
    const listItem = $('#shopping-list-entry').val();


    // clear input so user can input new item
    $('#shopping-list-entry').val('');

    // add new shopping list item as a `li`
    $('.shopping-list').append(
      `<li>
        <span class="shopping-item">${listItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
  });

  // listen for click events on delete buttons for shopping list
  
  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {

    // look for the closest li element and remove it.
    $(this).closest('li').remove();
  });


  // when a user clicks the "check" button it will trigger the checked off styling
  
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {

    // go up to li, then find the .shopping-item toggle `.shopping-item__checked` class.
    //toggles the checked styling
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });

});