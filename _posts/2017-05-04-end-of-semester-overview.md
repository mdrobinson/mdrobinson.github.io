---
title: End of Semester Overview
date: 2017-05-04 23:00:00 -04:00
type: post
author: Mark
tags: [YACS, Android]
---

Hello again,

This semester I worked on many aspects of YACS. During the first half of the semester to the end of February, I worked diligently to make YACS more stable, secure, and fast.

First, I implemented failsafes in the Docker configuration to make YACS more stable. In the event when YACS crashes, Docker simply restarts YACS. This ensures the students experience smooth operation of YACS. These failsafes are only overridden when a system operator intentionally stops YACS through Docker command, (for system maintenance, operator error, etc.)

Next, I configured Nginx more optimally with regards to the server running YACS. To achieve a faster time to first byte (TTFB,) I enabled OCSP stapling and higher gzip compression. The OCSP stapling feature of Nginx takes the load of SSL certificate chain verification off of user web browsers role and moves it to the server’s role. SSL certificates verification is a required standard to ensure certificates in-use by the server are not revoked by a certificate authority that generated the certificates.

After that, I took a stand for improvement of YACS security through enhanced Nginx and Docker configuration. It was around this time in mid-February when I created the following work on my fork. These changes to the Nginx configuration make YACS a whole level of magnitude faster in response to API requests than ever before. I achieved this via implementing Nginx caching of the API, with hot memory stores. As well, I configured Nginx header defenses for improved header security. I also configured Nginx to defend against DoS attacks on a per ip address basis via setting Nginx to track number of connection requests per minutes. I even dockerized a popular Postgres dashboard called pgAdmin 4. I implemented pgAdmin for production use, with daily to weekly automated database backups with user authentication and user roles. I also implemented the “forgot password” email sending via pgAdmin SMTP forwarding feature. All of this was configured via Nginx reverse proxying to the pgAdmin container running in Docker.

Since the end of February, I worked solely on YACS Android to the end of the semester. I implemented more of the YACS API into YACS Android’s retrofit service. As well, I used the new parts of the implementation to create the code that handles course sections and creation of schedules. I designed YACS Android from the start, with the end users in mind. Every feature is as streamlined as possible, to ensure a functional quality and fast experience for YACS Android users. This was made possible when I minimized the amount of taps required.

In the future, I hope to continue building YACS Android.

As my sophomore year chapter draws to a close, my summer internship will be particularly exciting where  I will continue my focus utilizing my years of programming experience with educators in mind. My position as a Software Engineer will focus on school and government contracted projects with a great team. This has been a dream come true for me ever since my creation of Gradesmart app, completed at age 16, for my high school teachers to use with their Android devices.

Thanks to everyone involved, it has been yet another fulfilling semester.
