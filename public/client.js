let blogPostsTemplate = (
    '<div class="blog-posts js-blog-posts">' +
      '<h3 class="js-blog-posts-title"><h3>' +
      '<hr>' +
      '<h6 class="js-blog-posts-author">' +
      '</h6>' +
      '<div class="js-blog-posts-content">' +
      '</div>' +
      '<div class="blogPost-controls">' +
        '<button class="js-blogPost-delete">' +
          '<span class="button-label">delete</span>' +
        '</button>' +
      '</div>' +
    '</div>'
  );
  
  
const BLOG_POSTS_URL = '/blog-posts';
  
  
  function getAndDisplayBlogPosts() {
    console.log('Retrieving blog posts')
    $.getJSON(BLOG_POSTS_URL, function(blogPosts) {
      console.log('Rendering blogPosts');
      let blogPostsElement = blogPosts.map(function(blogPost) {
        let element = $(blogPostsTemplate);
        element.attr('id', blogPosts.id);
        element.find('.js-blog-posts-title').text(blogPosts.title);
        element.find('.js-blog-posts-author').text(blogPosts.author);
        element.find('.js-blog-posts-content').text(blogPosts.content);
        });
        return element
      });
      $('.js-blogPosts').html(blogPostsElement);
    }
  
  function addBlogPost(blogPost) {
    console.log('Adding blog post: ' + blogPost);
    $.ajax({
      method: 'POST',
      url: BLOG_POSTS_URL,
      data: JSON.stringify(blogPost),
      success: function(data) {
        getAndDisplayBlogPosts();
      },
      dataType: 'json',
      contentType: 'application/json'
    });
  }
  
  function deleteBlogPost(blogPostId) {
    console.log('Deleting blog post `' + blogPost.id + '`');
    $.ajax({
      url: BLOG_POSTS_URL + '/' + blogPost.id,
      method: 'DELETE',
      success: getAndDisplayBlogPosts
    });
  }
 
  function updateBlogPost(blogPost) {
    console.log('Updating recipe `' + blogPost.id + '`');
    $.ajax({
      url: BLOG_POSTS_URL + '/' + blogPost.id,
      method: 'PUT',
      data: blogPost,
      success: function(data) {
        getAndDisplayBlogPosts();
      }
    });
  }
  
  function handleBlogPostAdd() {
    $('#js-recipe-form').submit(function(e) {
      e.preventDefault();
      addBlogPost({
        title: $(e.currentTarget).find('#js-blog-post-title').val(),
        author: $(e.currentTarget).find('#js-blog-post-author').val(),
        content: $(e.currentTarget).find('#js-blog-post-content').val()
      });
    });
  }
  
  function handleBlogPostDelete() {
    $('.js-blogPosts').on('click', '.js-blogPost-delete', function(e) {
      e.preventDefault();
      deleteRecipe(
        $(e.currentTarget).closest('.js-blogPost').attr('id'));
    });
  }
  
  $(function() {
    getAndDisplayBlogPosts();
    handleBlogPostAdd();
    handleBlogPostDelete();
  });