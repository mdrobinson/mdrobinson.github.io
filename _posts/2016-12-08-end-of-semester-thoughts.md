---
layout: post
title: "End of Semester Thoughts"
category: RCOS
tags: [YACS Android, YACS, Android, Web]
---

YACS Android App Update


During the middle of November, I created an early concept design of the YACS courses view the way I envisioned it, using my ancient Wacom Graphire 2 tablet. I showed it to the group and the working-concept was well received by the YACS team. Soon after that, mock-ups followed.

<table align="center" style="width:414px;"><tr><td align="center" style="height:194px; no-repeat left"><a><img src="https://lh3.googleusercontent.com/5csWL8lCMgNQx4e8Eq7wEKjoF3ox6YECY8Mn0kaQyrGZ78HsbvoD6kVRYz53hJsCBkrdGM8q3RqVLhe7PAq_l5rM4hizuJHcYU20zLIWD_zgnvg7s9hllB7IF7nbbgaeKOH6dewdHYdpnlsC6kKxD6Z6iSI2lc8t6l4oHX6Nc8qb0F27CKhZ5kPxMB16Nt0iLtVAvCsRrFNVFHaQSjtrU38qTHrRD0ecgSW6Tc_mfX6ftz59RTSWJUF5mZxMEUXbMmR6xSffLgEEeu_NU11-G2JPG8iABDOsSEhJwoAwDI2aNyHh8C0I7jCbMfBOT_-zRnIe81SC3GN06vOTLUHvCvHWD4QuxY1YqldvmkAfy0sdCsYx6GHyurTH8hHE0lHwPXwcpW7OFZtpt0IVVrjcnGIcaNvmi7H1zp08uuIyeFiunB9P8Gz11DlexN2ARY1l3RgVWGx1-dYGsumKhR7sqbAhiPJ9M9Y6VQwmZYjFp4pIibXtiRYC7xFB6av8CMNp7cpPlJyq6iJ1fP3rhCg7Lr70gQezg7ZTi3ucVrm2J41vevN7ayiWrRvYcJ6lfW6mYgnh1RC6KxnOnbSpCxvuX_tJ63LTCyoqN0KCAvucTAgEOXK8_VYnyOw4IA0U5CUFDilsk02iWxKUYG3aVaOc-Pt46sRaQdFrmD89UGULSpI=w414-h727-no" width="414" height="727" style="margin:1px 0 0 4px;"></a></td></tr><tr><td style="text-align:center;font-family:arial,sans-serif;font-size:11px"><a style="color:#4D4D4D;font-weight:bold;text-decoration:none;">Courses View Design</a></td></tr></table>

I intend to continue working on YACS Android next semester. There are still a lot of features left to make for YACS Android, of which include the sections view, schedules view, and code a lot of application design logic.


YACS On Docker


So far, I have created two blog posts about my experiences working with the stellar YACS team to create the Docker build used by YACS. It was a long journey that started mid-November. I started with a working Dockerfile that was created and maintained by Richie, and a dream to make the secure Nginx configuration for YACS. I learned a lot by reading the Nginx docs. I used the Nginx configuration of my homelab as reference when I created the Nginx configuration for YACS, which made the Nginx configuration as secure as possible.


External Contribution


I decided to help the custom Linux kernel repository that I use on my Google Chromebook Pixel 2 laptop. Everytime I used the brightness script included with the kernel, I was irked by a typo that read "brighness" to the terminal. The typos were introduced in June of 2015. After the typos were corrected, a pull request was submitted to the kernel maintainer. The kernel maintainer reviewed my changes for about an hour, merged my pull request, and thanked me for it. Now, the script no longer has typos. The custom kernel used by many Chromebook Pixel owners to enable sound support because the sound drivers are not in the upstream mainline kernel yet. I plan to contribute to the custom kernel again soon.


Closing Thoughts


As the semester wraps up, It's been satisfying to see how YACS Android and YACS on Docker has progressed. I am ending the semester feeling happy since my secure Nginx pull request was successfully merged into the official YACS docker branch today!

Thanks everyone for all the encouraging support throughout the semester.

I can’t wait for what’s in store for me next!
