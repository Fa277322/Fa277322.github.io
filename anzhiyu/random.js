var posts=["undefined/Linux基础笔记/","undefined/这是另一篇新的博文/","undefined/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };