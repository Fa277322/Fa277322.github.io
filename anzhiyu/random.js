var posts=["undefined/机场推荐/","undefined/Windows Server 2022配置Web服务器(IIS+php5.6+MySQL)笔记/","undefined/科学上网/","undefined/内网穿透笔记/","undefined/笔记/","undefined/配置DNS服务器进行域名解析+配置邮件服务器/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };