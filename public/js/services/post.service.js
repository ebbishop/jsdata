'use strict';

app.factory('Post', function(DS, $state) {

  return DS.defineResource({
    name: 'posts',
    relations: {
      belongsTo: {
        users: { //must be the same as the other resource name

          localField: '_author', //this is the entire author object (user instance). if the author is in the cache, it will be populated.

          localKey: 'author' //this is an id; Post has key, which is Id of user

          // foreign vs. local: where is the key that connects the two models? I have it: local other has it: foreign

          //does the _ have any actual meaning or is it just useful for humans? just for humans
        }
      }
    },
    methods: {
      go: function(){
        console.log('leaving the', $state, 'state');
        $state.go('post',{
          myPostName: this._id, //what is this? the instance of Post
          myAuthorName: this.author //why not id?
        }); //somewhere
      }
    }
  })
	/*

		TODOS:
		1) create a js-data POST resource that establishes a relationship
		between posts and users

		2) add a methods object to the resource
				a) add a `go` method that takes each post to the individual post page
				(HINT: see post.js)

	*/

}).run(function(Post){});