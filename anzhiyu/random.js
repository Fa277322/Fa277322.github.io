var posts=["undefined/Windows Server 2022配置Web服务器(IIS+php5.6+MySQL)笔记/","undefined/内网穿透笔记/","undefined/科学上网/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };