# Blog API Challenge

[Github](https://github.com/jwoleslagle/blog-api.git) | [Glitch](https://github.com/jwoleslagle/blog-api.git)

* Serves client that:
    + makes AJAX calls back to API endpoints to initially retrieve and display existing blog posts.
    + allows users to add, edit, and delete blog posts
* Uses `express.Router` to route requests for `/blog-posts` to a separate module.
* CRUD (create, read, update, delete) operations for blog posts
* Note: uses volatile, in memory storage, since we haven't studied data persistence yet in the course.