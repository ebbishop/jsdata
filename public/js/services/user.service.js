'use  strict';

app.factory('User', function(DS) {

  return DS.defineResource({
    name: 'users', //name of resource & path for http request
  })
}).run(function(User){});

