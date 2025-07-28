## Reflection Questions

1.  How did you ensure unique keys for your list items?

I assigned unique keys to the data I wrote for the assignment.  When working with SQL, a unique identifier can be assured by working with SQL characteristics (or else an error triggers).  When working with HTML/CSS/Javascript, with access to the full database of IDs (whether using API or data file), validation can be run on the imported file to ensure that IDs are unique, and if not, to automatically assign a unique ID.  At time of new data entry, validation should alwo be run against existing database to make sure keys are unique.  Iterating through the entire database would be a bother, so I'd use a Set to check in O(1) instead of O(n).

2.  What considerations did you make when implementing the filtering functionality?

Unsatisfactory considerations.  As it is, I hard-coded dropdowns corresponding to valid types of 'status' and 'priority', but there should be a more elegant way of handling it.  Explicitly, if a new 'status' is added in the 'index' file of types, then there should be some way to automatically update dropboxes.  However, Typescript data types, I think cannot work that way.  Something like, union types are decided at compile time so can't handle dynamic updates.  At any rate it's awkward.

Filtering works; when filter is set to "All Priorities" or "All Statuses", the filter simply doesn't flag the task to be pushed into the list of tasks that's given to the TaskList component to render.

3.  How did you handle state updates for task status changes?

Dropdown event handler received a function that invoked setState passed down as props, and used event.target.value to feed into that function.  So setState was invoked.

4.  What challenges did you face when implementing conditional rendering?

No challenges, really.  Was in something of a rush, as had little time (felt sick, so slept a lot); I knew there were issues with shallow and deep copies using setState.  On testing I noticed filtering wasn't working properly; I looked up Array.map in Javascript and noticed it's a shallow copy, so I made a deep copy.  I'd done something similar earlier somewhere, I forget.  (Probably the .sort, if I remember right).

## Resources

Assignment provided code for typing.
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/date
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox
https://css-tricks.com/snippets/css/a-guide-to-flexbox/
https://www.w3schools.com/css/css_positioning.asp
https://www.w3schools.com/css/tryit.asp?filename=trycss_image_text_top_right
https://css-tricks.com/a-complete-guide-to-calc-in-css/
https://www.freecodecamp.org/news/how-to-remove-an-element-from-a-javascript-array-removing-a-specific-item-in-js/
https://www.w3schools.com/cssref/pr_class_cursor.php
https://developer.mozilla.org/en-US/docs/Web/CSS/:hover
https://developer.mozilla.org/en-US/docs/Web/CSS/:active
https://www.w3schools.com/css/css_display_visibility.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
https://react.dev/reference/react-dom/components/select