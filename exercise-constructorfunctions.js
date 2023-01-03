const blogPost = {
    title: 'my blog',
    body: 'this is my blog post.',
    author: 'author',
    views: 10,
    comments: [
        { author: 'comments author 1', body: 'comments body 1'},
        { author: 'comments author 2', body: 'comments body 2'}],
    isLive: false
};

class Post {
    constructor(title, body, author) {
        this.title = title;
        this.body = body;
        this.author = author;
        this.views = 0;
        this.comments = []
        this.isLive = false;
    }
}

const post = new Post('title', 'body', 'author');