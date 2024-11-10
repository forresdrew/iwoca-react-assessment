<!-- Project Comments Go Here -->

Unfortunately just completely ran out of time here. Tried to rush through to the finish line quickly so I'd have time for tidy up and Unit tests. Ran into a (very self inflicted) issue trying to pull data from the localhost3001 which I didn't resolve until the hour mark.

Hopefully you get the gist of the tests I would have like to have written. Opted to use jest but couldn't get around a config error this caused. Wrote some test stubs to show a few of the things I would have liked to have tested for. Would ultimately want separate test files for each component to check all logic branches.

Some things I'd like to have implemented:

- Proper unit tests!
- Error handling behaviour for what happens when you get to the final index of the available data.
- To have state store data for all loaded indexes. Ultimately would want a "pagination" option at least to go back a page in which instance local data would be used instead of an API call.
- Static button placement of load more button so it's always anchored at the bottom of the screen (attempted to flex the data container to fill all available height but had a few issues with this approach). To approach this you would want the data container to be a block which becomes scrollable
- Adaptive sizing of font and side scrollable data blocks so that when screen width is minimised, data is always accessible and not overflowing container.
- Centered loading indicator.
- Button loading indicator instead of disabled look.
