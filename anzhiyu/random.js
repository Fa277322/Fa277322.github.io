var posts=["教程类/教程类/","笔记/Docker/","虚拟化技术/虚拟化技术与应用实训/","中小企业网络构建/Windows Server 2022 FTP服务器的搭建与使用/","中小企业网络构建/内网穿透笔记/","中小企业网络构建/配置DNS服务器进行域名解析+配置邮件服务器/","中小企业网络构建/远程进行域管理/","中小企业网络构建/Windows Server 2022配置Web服务器(IIS+php5.6+MySQL)笔记/","搭建类/搭建类/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };