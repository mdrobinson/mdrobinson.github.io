---
layout: post
title: "YACS on Android: Part 2"
category: RCOS
tags: [YACS Android, YACS, Android]
---

Hello everyone,

It has been awhile since I last gave an update of YACS Android. I implemented major features of YACS in the Android app. I designed an intuitive sections view, optimized for mobile devices, back in March. The design truncates course descriptions while in collapsed state in order to account for mobile device screen size. All the user has to do is tap once to expand it. Everything in the design is responsive in line with Google’s Material Design specification.

<table align="left" style="width:50%;"><tr><td align="center" style="height:194px; no-repeat left"><a><img src="https://lh3.googleusercontent.com/J51xRjsehD0oOC499cy_riAawaFrYcrMOGIwSn5KF2ii5-xNabOrAMTzHHbJuByzkwU86LGD1K-MZvcSrJkL9UsXcQKw_0jDjK4heB3e5nvRMSAjpnbedr_iwdg7UY2XknrjYobFTXXxwlcMpLAEC2896hsKO4K4Z_Y2lfGlJTB3YVYq78CDewGNWIoxzPs6TSL9tNEaRWBZHa434vgKFVFZzkusdQ0y4d5JsM1I9ak1B50fuXCvIPx1c8Kopl4uS8nZ0UWrbCAmBS3gP-i-pSGTKWTL991uIYfHfg0NYNVcnWnfWhZ2BmzuYR_gdcrVSCNXhEZXBaidNsmWZIkVWFCZCyTKDf2O_AYHujZIl_bf41FELZ78ieIQbc5HxaDhdS3dZL2g_JMnTTv7xijL3M7T3Am-7qhRyZpjxZJTo0iicunkdFDQ-bX5s_I6NJ6Z04H4fQna1cbmIb9Cu9BMaKr5Q5fXpG60yy7fGmrhC43CAPmmG8IgaDwRP-5ntgLdBxWhaNiz5h6B4venEjJ8wH6hwVH6xPOJBRTreBk44pKRIqTgofXAMctAG6uDdnfyKb6wRjYw8NmVNgBLKT4P9-jVMZFkJLrYevQWtrcFjpq29XzJ3zXoizzLLA3CvJQP4Wgsy8Z-8o1l9uOV7i53DErCMCjFrgfUJkyMdNzC8ZI=w360-h632-no" width="360" height="632" style="margin:1px 0 0 4px;"></a></td></tr><tr><td style="text-align:center;font-family:arial,sans-serif;font-size:11px"><a style="color:#4D4D4D;font-weight:bold;text-decoration:none;">CSCI 1100 Course View</a></td></tr></table>

<table align="right" style="width:50%;"><tr><td align="center" style="height:194px; no-repeat left"><a><img src="https://lh3.googleusercontent.com/KEKR-TpHdp_MRdqtxod3M-ervtzBfwpiogHGc08azKv48Www23cofXTVE0yehplWeZOL6UQdaCLjdsZTWWp9s1XH6LeFil3KH-QQrKfxdHMkyOkTpGtg6o4XuElxh3kEsqq_HDh41hPWVZ0a-g9xRz2B-3am4LzWx7cZRdvRMSynYfL1Gug112ugi-jrXBKVEDV4Ta2WP7hSpSG7irA22Uh58yLyl6ogYjN1VgYGvnmXrPjWCvRKSvQYpoDOTo9NK_JSh-GbRmGTJNnlJtwodRP9GzGjUchCUQX8QbGR4tljV2BanKC6KXy4reFb_2nMbl1s9cqgn_y14RhC-FlOZi6NGm93H3KBwZ4GIybaOG9hJzRYup6Je3ozaAV2g1Ix1vmhEEF_3geYUrCvyTxasw88XXczPgXSM-JJOr_H-N6586mvhHaDoLi856ERAZRRoPQR8Fsu9h64OcN2Ab59OIycL_zmsFZ0RoqijQ8fpULLGKfFM7y3YUIA5F85oo1lXquQ0yxjrKCg0gzLNKLJKb9wGcIAZLQdSh-8dH_MgLu4-oYb4-AWFUiw5gUJ2D6kT9TCwVFCDv_O88Re4g8S7F3MESMfEjW3swKLgjRu8EmOW2WLVzcPH32HpszJy57FmzCEyu6Mgv9wPMzqowXYgALdur-eYi3Sb_dgFfke9eA=w360-h632-no" width="360" height="632" style="margin:1px 0 0 4px;"></a></td></tr><tr><td style="text-align:center;font-family:arial,sans-serif;font-size:11px"><a style="color:#4D4D4D;font-weight:bold;text-decoration:none;">CSCI 4250 Course View</a></td></tr></table>

<p style="clear:both; padding-top:30px;">
I coded the application logic to present course sections in a stylistic manner. I created fluid animations to entertain the users while the views change. The first animations the users will experience are the gorgeous ripple effects when tapping on any interactive view.
</p>

I am a stickler when it comes to testing everything before pushing into production. While working on YACS in Ruby on Rails over the last few semesters, the concept of test-driven development grew on me. I implemented and configured Travis CI for instrumentation testing. Travis CI is a very popular service to test open source projects of almost all programming languages. I enjoy testing YACS Android’s multiple build variants in parallel. As the creator of YACS Android, I appreciate that Travis CI is free for open source project developers.

Recently, I read that the resulting APK built by Travis CI can be published automatically. This is a very interesting concept in which the automation cycle pushes fresh, bleeding-edge APKs directly to Github Releases and Google Play Developer Console alpha testers.

One last thing, I can't wait to show you all a live demo next semester.
