---
layout: post
title: "In-Depth Nginx"
category: RCOS
tags: [YACS, Web]
---

I am pleased to announce that YACS will soon run using Nginx with Docker. Docker makes the installation of Nginx easy by simply specifying the Nginx image name in the "docker-compose.yml" file.


The switch from Apache to Nginx induces great performance improvements. This is because Nginx caches static files. In the "nginx.config" file that I made for YACS on Docker, I set Nginx to cache images, css, js, svg, html, xml files for 30 days. Once a visitor navigates to any of those file types, Nginx caches the file so it can efficiently load the file for the next visitor.


Nginx is highly compatible with web applications, like Ruby on Rails projects (i.e. YACS.) This was accomplished by using Puma, a web server for Ruby which is concurrent and lightweight. In the docker-compose.yml file, the container for Puma exposes port 3000 to rest of the containers and does not forward the Puma service on the host machine. Since Nginx is relatively simple to work with, I set up a forward proxy to the container containing Puma, which is called "web," and forwarded ports 80 and 443 to the host machine's ports using the "docker-compose.yml" file.


To enforce HTTPS with strict transport security, I configured Nginx to redirect port 80 connections to port 443 with a 301 "Moved Permanently" response. As well, I set Nginx to enable use of the new http/2 protocol for its high transfer speed over the http/1 protocol.


There is another amazing feature of modern web servers which is called "OCSP (SSL) stapling." SSL stapling verifies that the SSL certificate, from the server, is valid. The brilliance of this feature is that it allows a web server like Nginx to provide information on the validity of its own certificates rather than having the browser send a request to the certificate's vendor every time the browser needs to check the validity of the server's certificate. SSL stapling effectively shifts the burden of handling OCSP requests from the certificate vendors to web servers, which in turn helps users connect to YACS faster and more securely than they could if YACS was insecure.


I have overridden the Nginx default weak DHE (Ephemeral Diffie-Hellman) parameters provided by OpenSSL, by generating a 4096-bit DHE parameters file for the server that runs YACS. This ensures highly secure communications between the server and clients.


I tried to make an SSL cipher list that is compatible with many browsers while remaining very secure. The choice to set ChaCha20-Poly1305 was the most favored cipher because the server running YACS does not currently run processors that support the AES-NI instruction set. Since ChaCha-Poly is a new symmetric cipher, it means that ChaCha-Poly will compute faster than AES will on the same machine.


Finally, I made a Content Security Policy to enforce only loading approved asset locations and denying all others. This is to prevent XSS attacks, clickjacking, and other code injection attacks that can result from the execution of malicious third-party content.


To optimize Nginx even further, I enabled "tcp_nopush" and "tcp_nodelay." These options allow Nginx to send the requested data as soon as it's available, to save resources. This greatly reduces network overhead and increases the speed at which files are sent.


Lastly, I enabled gzip compression. This significantly reduces the size of transmitted data to client web browsers by compressing the files on the web server.


Overall, Nginx has been a pleasure to work with via Docker and I hope everyone will be able to enjoy the benefits of Nginx soon.


I can’t wait for what’s in store for me next!
