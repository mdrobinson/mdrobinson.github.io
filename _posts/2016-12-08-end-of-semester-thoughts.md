---
layout: post
title: "End of Semester Thoughts"
category: RCOS
tags: [YACS, Web, Android]
---

YACS Android App Update


During the middle of November, I created an early concept design of the YACS courses view the way I envisioned it, using my ancient Wacom Graphire 2 tablet. I showed it to the group and the working-concept was well received by the YACS team. Soon after that, mock-ups followed.

<table align="center" style="width:414px;"><tr><td align="center" style="height:194px; no-repeat left"><a><img src="https://lh3.googleusercontent.com/5raET7jvSWZQt86puHoY7X3BlyrQZqtQnlrnsaeHv3T6iOHJOF25HfnnN01_PGOfAtn3qUceC-b4xSStlShVNiDThQmC1bBElfGYhQURhic_gWWsISXOgYY4Hmn3Xx3YAyPqqomYmenP6j3bYQH-0P7zqmzU1cKpHzu8plHJxW6z8OdUF3ME_JyD4zJHiyU8_kzy6TMviFeY3nxQwEMsB1p3P5Pulttihayt_rZ2TTdlnRG80nTjG8EkO24z79v8FHZZBOs6b163xxcVL5bJT1wDwtfmdsCV3gVVSpMR0G-3ASX1F10P2rF8XEhV3oUIU_nfgfc2y_U82PwLq7GaC_Sz-Yw6R2D27stL5cH0hH3RJZabXRAF0VthjYKMIsNGc8lffQBVEJzyLwSGw2PEWyn9fLDQ0F2luO13zLgFQSNmOV64TexHjCL9zRo8pZsQXBL2u2EsRwCsaDvVD0M8j1W90ph_P4v_oV8mA8pNeJWjMSJFFBJ2IpXFgvVple2yCfcGen3FlU_Xn99DhmZoEV2gq8UXX2p8hR2RVO3923hkKNyAktbLzs-3aGTQI87ggStx1ZxmZnenPRXpEQ5mXZ-m6Mvkm2ivA0KKVpuLTfcrBNVFLU3wYw=w414-h727-no" width="414" height="727" style="margin:1px 0 0 4px;"></a></td></tr><tr><td style="text-align:center;font-family:arial,sans-serif;font-size:11px"><a style="color:#4D4D4D;font-weight:bold;text-decoration:none;">Courses View Design</a></td></tr></table>

I intend to continue working on YACS Android next semester. There are still a lot of features left to make for YACS Android, of which include the sections view, schedules view, and code a lot of application design logic.


YACS On Docker


So far, I have created two blog posts about my experiences working with the stellar YACS team to create the Docker build used by YACS. It was a long journey that started mid-November. I started with a working Dockerfile that was created and maintained by Richie, and a dream to make the secure Nginx configuration for YACS. I learned a lot by reading the Nginx docs. I used the Nginx configuration of my homelab as reference when I created the Nginx configuration for YACS, which made the Nginx configuration as secure as possible.


External Contribution


I decided to help the custom Linux kernel repository that I use on my Google Chromebook Pixel 2 laptop. Everytime I used the brightness script included with the kernel, I was irked by a typo that read "brighness" to the terminal. The typos were introduced in June of 2015. After the typos were corrected, a pull request was submitted to the kernel maintainer. The kernel maintainer reviewed my changes for about an hour, merged my pull request, and thanked me for it. Now, the script no longer has typos. The custom kernel used by many Chromebook Pixel owners to enable sound support because the sound drivers are not in the upstream mainline kernel yet. I plan to contribute to the custom kernel again soon.


Closing Thoughts


As the semester wraps up, It's been satisfying to see how YACS Android and YACS on Docker has progressed. I am ending the semester feeling happy since my secure Nginx pull request was successfully merged into the official YACS docker branch today!

Thanks everyone for all the encouraging support throughout the semester.

I can’t wait for what’s in store for me next!
