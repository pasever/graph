Restful routing:

Referring to a some set of conventions used in web development for manipulating a collection of data hosted on a server. These are common rules around the type of HTTP requests and URLs, used for reading, creating and updating the data that is sitting on the server.

(for example: we might have a comments section on the page. So we should be able post a comment, read the comment, update the comment.) (different requsts)

/<name>     URL /posts ;      method POST ;   operation create a new post
/<name>     URL /posts ;      method GET ;    fetch all posts
/<name>/:id URL /posts/11 ;   method GET ;    fetch post 11
/<name>/:id URL /posts/23 ;   method PUT ;    update post 23
/<name>/:id URL /posts/44 ;   method DELETE;  delete post 44