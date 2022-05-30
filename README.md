# Todo App

My first somewhat more advanced React project. App for tracking todo items, filtering through them, marking them as completed and removing them.

Made with HTML5, SASS, ReactJS (a bunch of useStates, random ID generation with nanoid).

# Live URL

https://nikavolk.github.io/todo-app/

# How it works

User enters an item into the input and presses "Enter" to confirm and submit
the input. The app lists the item and any entered after below the input field.

When a user clicks on one of the items, the item is checked, item's text is struck through, and the item is marked as completed. If the item is clicked on
again, it's unchecked, and its state returns back to active.

Below the list of items is a filter function, which shows items by chosen filter.
If the user selects "All", all items are shown, whether active or completed.
If the user selects "Active", only active items are shown, completed are hidden.
If the user selects "Completed", only complete items are shown, active are hidden.

User has the ability to remove items. One way of doing so is by hovering over an item and clicking the "X" on the right side of the same row. Likewise
all completed items can be removed from the list by clicking the "Clear completed"
button.

A counter is shown of all active items left on the list.

Features light / dark themes.
Fully responsive design.

Coding challenge by frontendmentor.io
