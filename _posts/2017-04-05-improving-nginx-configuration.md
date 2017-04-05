---
layout: post
title: Improving Nginx Configuration
category: RCOS
tags: [YACS, Web]
---

Hello everyone,

In the beginning of the semester, I was excited to continue to build YACS Android using the YACS API to create schedules as well as to help anywhere I could with the YACS team. The YACS team tasked me to optimize the Nginx configuration. Currently, YACS runs on Docker using Nginx on production and development; a system I contributed to last semester.

When they asked me to optimize the Nginx configuration, I was full of energy to begin these improvements right away. It makes sense because it is YACS foundation as a reverse proxy to the YACS Ruby on Rails Puma server. I thoroughly researched the Nginx docs to contribute many improvements to the prior Nginx configuration. With each change, I rebuilt the modified Nginx container using Docker and tested it to ensure YACS speed improved, without any errors nor warnings. It was smooth sailing however, it took me weeks to do.

So, what does this mean now that it’s in production? Well, this means that Nginx now has the capacity to handle 2048 concurrent worker connections for asynchronous requests from YACS users. Nginx now has connection limiters in place to ensure DoS attacks are blocked (prevents YACS server denial of service by a single computer.) Essentially, with the Nginx connection limiter feature, if a malicious user sends thousands of requests per minute (hammering the YACS server to its knees,) the YACS server will keep flowing and denial of service attack is blocked by Nginx. Nginx ensures all data that travels through, is up to specification including cookies. Nginx is like a “mother” to the YACS upstream puma Ruby on Rails front-end server.

Next up, I submitted a pull request containing the optimized Nginx configuration and Docker health check for all of YACS containers.

The optimized Nginx configuration is now in place, improving YACS speed along with heightened security.

Until next time, I strive for the betterment of YACS.
