---
layout: post
title: "YACS on Android: Part 1"
category: RCOS
tags: [YACS, Android]
---

Hello RCOS!

My name is Mark Robinson and at the start of this semester, I collaborated with the RPI YACS team to help build a brilliant idea.

Since the start of the semester, I've been creating the Android mobile app for YACS, called "YACS Android."

I am proud to be a part of YACS, a stellar team to support my every step in building an amazing app that will reach every student on campus.

<table align="center" style="width:194px;"><tr><td align="center" style="height:194px; no-repeat left"><a><img src="https://lh3.googleusercontent.com/x6txbA9PNefKIPpkxR97nUjkOEqper6s1N6GdZxXGZeTQAQWKVemI_FP14P71EXaL7mXZeTxM7BreMY4CyC3Ws98BL4RQ16_enwJXkslBeAhjJEPvX-hB5lHcQmvqUQYh-W8WqVR-4QLNLetINpApzRn7s9wB7zv6YMKFu_dvyjrQzFmhvrm2kNvjLstAF-rdUijyXZ3c0wyOT25vpxT1eKpJxnTdsWG9XnuvktbIrz_Jr9IrTSo9MjRzpp0_k-KrpmsFLRgBO_ayVr0LdR6EiQWrIuVPK22Z59bqJfQN6bm7UYvjrGAhVTSe4M46pq-115BFleKHzxzleWCRBY4jcaV9lDRFk2S08ZSFuNc08i12s1SWmAe6eMsh4nM6SCxABL8gfxJ1NQVm7rXwGBgJpAk4ap_BbwJKKq29l4bulYpRu86jA_4tmO74bmk-ehx6Nfma1CYRZhAr7Dqv40KNvXYv-jDCyOZH8SmFGRCoA7vEMDUsWC2JvWfzsLDWxWZxlIvQ1aa_lA-7gsSzfmd1ZbRQQrlsESDwLjgt1_7AF4JLM24tOx1aoLpNyi3-J3KCL8I89jy_OCknyVuKyaV33KmC0s30DeiNYRWGk4L3K8OnrqUHg=w182-h320-no" width="182" height="320" style="margin:1px 0 0 4px;"></a></td></tr><tr><td style="text-align:center;font-family:arial,sans-serif;font-size:11px"><a style="color:#4D4D4D;font-weight:bold;text-decoration:none;">App structure imagined</a></td></tr></table>

I built the foundation of YACS Android, the main activity view, using the "MaterialViewPager" and "MaterialDrawer" libraries. I linked the navigation drawer to the viewpager and found out that the libraries worked interoperably.

From visualized concept to implementation, the first major component of YACS Android was the departments view. First, it fetches data from the YACS API via the famous Retrofit library made by Square. It is efficient because it turns the YACS API JSON responses into Java interfaces.

<table align="left" style="width:360px;"><tr><td align="center" style="height:194px; no-repeat left"><a><img src="https://lh3.googleusercontent.com/YUYlJWyLBfdvBZirL6hEoTpcbz6oZse4QBn1EtrWIEnxdV0U5D2-J2iUN2s2A7-9mvghLq-Q8cTonWOhzwk9t51QrOisD30O6V_E-deEYxo1o8YehfXrqcEPxcZbfult2fQcldRX5Cq3YzTh0ZUluQd_Zm8z9tC5v3WSJeLtwQJJnyvgxgTR04yOPsgJ9W1sczvj7k3XiGvRuQeuufDsw0aS3BOTJd_Zuf-ReKUHWbnavWykYz8cQqWELDSuqUFLtQNJdow1Yyc_iUEk_QnpBGJGYXu_LAktjb7ZcrVmB5-aDzJ4ke_pooLUWBcfZHCp2KIAjRz6KiDD74xLM0qaMbp5l95zL6TnxfwGaBO57J2RlIePQkyES4kQzTvIcTs_R-DdCm_vGsT6fMPBJ7SDMMQE7-ZUrAeJZV-Qni3ZlXVyw8an21gVWxSdgX-BjmrcpWe0eW-j9Wlx9DfOBlOHnj9wfunEC3gpRnd7KmOhCcAGIvFnR60hj6AO4pMD9ECGlqjutdihCx_CDGSjVyzyoxt0T6OI7ijo5b76cEEi0eLSDHc3yZq1H6AxdboPLWZl5wxpA4_Hpo4hL2j9pqcQy5RwomoBUje7O0IO0gxBOUFJg2GVkQ=w205-h360-no" width="205" height="360" style="margin:1px 0 0 4px;"></a></td></tr><tr><td style="text-align:center;font-family:arial,sans-serif;font-size:11px"><a style="color:#4D4D4D;font-weight:bold;text-decoration:none;">Early Departments View Design</a></td></tr></table>

<table align="right" style="width:360px;"><tr><td align="center" style="height:194px; no-repeat left"><a><img src="https://lh3.googleusercontent.com/tD6_RSiTexhz5NIsKjxCee26nr2lnQp-CPQwfypfy5sjq4FItSThSvgv8Iyy9M_qdAiY8qGsuR4RUxM00hVrFHG5A-Yr8UNrZ2QXW8xLkzU8B_6Vxkr4w7iIe8_MIsGv2SEwXm2YMd5OKsgde2gAG6qxg419TcFdNhMHqTl_AsC4RcGobWkSF08DjSdCTBJW3z6JbW4PnVfEAExPB5M9VKWluZKMKu9uTQ-cHwLdT5Ed6YiIk_aukWGEEl6Ja64QJ9fXZMCmTNQNnEltxpjBQCroSMb0fMHv_XZS7kJg9ffyt1OUpwEzCm9u2fzGxD0FvxGj8DkJRRWiyqxBLDu3OlQjOZ25ae_3jAEdSXlxC5oZmM1n-he_3-1CFqV-vaGyUrwvtT4VwPLHax4wksg63b1IeAe8pEeMEahDGAHIGS6L4ynN36C1YC-Vg4Bk0KXvyT-6anleAbQyJZ0FnCIIXJWQLuP8oIX22c75I9xyYdHB4ad1Q2W-_uMzzk0Uo6SKRfqTroXz8brBwtLh3p5cdRKGeR8LRoXpVGaN39WBdSff05_DkpOrJpCkkZefu9cf0ZrdEv0iuH6-1zj2Nqw_cmVvwtCoqDufbkZf5MCEgars79-qBQ=w205-h360-no" width="205" height="360" style="margin:1px 0 0 4px;"></a></td></tr><tr><td style="text-align:center;font-family:arial,sans-serif;font-size:11px"><a style="color:#4D4D4D;font-weight:bold;text-decoration:none;">Current Departments View Design</a></td></tr></table>

<p style="clear:both; padding-top:30px;">
The YACS team and I want YACS to expand from Rensselaer Polytechnic Institute.
<br>
I made YACS Android to bring native Android support to any college that uses YACS.
</p>

By the end of the semester, I want to create the courses view and scheduling concept.

I have many more ideas that I plan to implement in the near future for YACS Android.

<table align="center" style="width:194px;"><tr><td align="center" style="height:194px; no-repeat left"><a><img src="https://lh3.googleusercontent.com/fImAziMx1Y1gJ3PrjW1uIvNdHhUiX25jk8B-lDv18P87kyb12PGJb6VZfyJzSRPWfoMrKhRSsxXqem2AE2dHFK5FGak_dN5mRDbtMX6aezAKT2sREOhKmetTSJ36KKzEq9m92N4ABxw_DUpgu6on5Im6Noo1YFZHHI3dJi82FCR6raAXx_PMD4szFN0gGsr9JMYqe_y62GU1RltlQEd1odkK0_BPv67NR0KdlD7BcS85PWXx1h22NoEabVf1gYsrSDxjjROW4SyKpM4agReAA9mfWwbMDCSOiEmmGzWmHeIYP2emY_egJXyjmZBNNAjK6738bRbhvuS47Ff5Kp5YuXUrrQQXPUJ1zWKn3ZrfO_ec61LveLOWCyNf-sOiwtAVOBpx-J_jU1uHD3TM-z_QbpUXGRCCccft6VFGcrJu69r1S5Tdy86hsq6Jn4EGI6dAWzRBDz3GD3eLFs7iriEgDFrapwwSNTDpqj9ARJ6gunLfj6BoReaLDN4O8Q8oTg9QI3w32YmFGSx49WvhDeUe0qOBfUsZlAanQK6nW0FVI8fIv-l6tuyvgVFFOLHAEZ47km6VAgtNtzGk3aSsYq7mOO1dOXAKInsmzCxY-kzSjrIwUiH36g=w182-h320-no" width="182" height="320" style="margin:1px 0 0 4px;"></a></td></tr><tr><td style="text-align:center;font-family:arial,sans-serif;font-size:11px"><a style="color:#4D4D4D;font-weight:bold;text-decoration:none;">YACS Android Intro</a></td></tr></table>
