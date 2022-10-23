# ServicePros Technical Challenge

## React Version

This application consumes the data from the API endpoint https://sfof9o2xn8.execute-api.us-east-1.amazonaws.com/books and displays to via a single page with functionality including searching/filtering, sorting, and pagination.


## Logic

It first consumes the API and stores it within *rows* using a useState Hook. From here, *columns* is created by ripping the names of the keys from one of the objects found within *rows*. This is done to ensure scalablity if there are additional keys added later. The logic of displaying the data is passed to Table.jsx, which receives assistance from helpers.jsx and Pagination.jsx



## Functionality

You may search by one or more options, sort by a single option, and clear your searches/sorting.
