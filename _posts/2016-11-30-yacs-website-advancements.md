---
layout: post
title: "YACS Website Advancements"
category: RCOS
tags: [YACS, Web]
---

Hello again RCOS!

At the start of November, I took on the opportunity to help improve the YACS website's performance and security. This included improving the foundation of YACS in Docker. The YACS Docker branch will make YACS easy for colleges to deploy.

The current production build of YACS uses Apache. While Apache is great, Nginx has more security features and loads static files faster than Apache does. That is why we decided to migrate to Nginx from Apache.

YACS uses the Puma web server because Puma is fast, lightweight, and both projects are based on Ruby.

Nginx is used to proxy HTTP and HTTPS requests to the Puma server.

I will go more in depth into my YACS Nginx configuration in my next blog post.

Docker containers are used to keep components separated from one another. This made sure that each container could only access exposed ports explicitly defined in the Dockerfile.

The Puma server was set up to be in its own container that's separate from the Nginx container for security.

When YACS used Apache, Apache took consistently over 20 ms time to first byte.

After YACS moved to Nginx and I created and optimized the configuration files, Nginx took consistently only about 5 ms time to first byte.

All of these improvements are coming soon.

The YACS team and I want YACS on Docker for the improvements to efficiency and simple portability that Docker provides by use of containers.

I have more news that I want to share about YACS Android, though that's for another blog post.
