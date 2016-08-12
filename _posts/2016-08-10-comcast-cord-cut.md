---
layout: post
title: "Comcast: Cord Cut"
---

Yesterday, I canceled my Comcast triple play subscription. In its place, I bought a Amazon Fire TV stick and subscribed to Sony's PS Vue. I started to enjoy a life almost entirely free from the grips of Comcast.

After reading a lot of reviews online, I bought the Arris SB6190 and connected it to my TP-Link C9 router. I chose the top-of-the-line SB6190 because it has support for more downstream (32) and upstream (8) channels than the Xfinity branded all-in-one box. Unfortunately, it's too bad this top-of-the-line modem didn't work. No matter what I or the Comcast reps did -- and I'm stressing three Comcast calls and over 4 hours with them trying -- we could not get the modem to give a IP address to my router. Initially, I ran an ethernet cable from the modem to the router and expected it to magically work, the way it did for the Xfinity modem. I couldn't even view the Comcast online activation redirect page. So, I disconnected the ethernet cable and connected the modem to my PC. I called Comcast customer support. The rep was able to activate the modem. 

However, the modem still did not give an IP address lease to my router. After an additional hour on the phone with another Comcast rep, I checked the modem's log. I noticed that it reported a T3 time-out, no ranging response. After another additional hour of walking through their procedures, I was frustrated with Comcast no being able to connect me to the internet using our SB6190. In the end, I determined this modem was defective so, off I raced to my local Best Buy to exchange it for another Moto/Arris SB6190. After I came home, I set it up the same way as before. To my surprise, I was in the same situation as before; there was still no ip address given to my router nor PC. After I called Comcast to activate this modem, there was still no leased Comcast dynamic IP address for my router. The modem was supposed to sync its time with Comcast's servers. The modem's log was checked again and this time I noticed the time was set to 00:00:00 Coordinated Universal Time (UTC), Thursday, 1 January 1970. This meant the clock was set to its factory default and that the modem could not connect to Comcast's servers to sync the time. After another half hour passed I packed it everything back, found my receipts, and went back to Best Buy. 

This time, I decided to exchange the SB6190 for one model down to the SB6183. Now one might ask why did I do that? Well, it was a logical choice since the two SB6190s did not work, I went with the SB6183. It is possible that the SB6190 is just too new for Comcast to keep up with. The SB6183 features the same amount of downstream (16) and upstream (4) channels as the Xfinity branded all-in-one box. Once out of the box, I plugged in all the cables and lo-and-behold it immediately gave my router an IP lease to a dynamically assigned IP address from Comcast. Huzzah! With my web browser, I navigated to Google.com and Comcast's DNS servers redirected me to Comcast's online modem activation system. The system worked beautifully! Within a minute, the modem restarted, bonded with both channels, and gave my router a connection to the internet that matched that of the Xfinity all-in-one box. Best of all, the size of the SB6183 is tiny compared to the behemoth Xfinity box.

Total time to painlessly connect to the internet with the SB6183: less than a minute

This experience led me to believe that the current configuration file  Comcast has for the SB6190 is not configured correctly and that the two SB6190 units I returned today would otherwise be operational. 

In conclusion, after a daunting battle with two SB6190 units and a multitude of calls with Comcast reps, the most reliable model (of the three devices) is the SB6183 because it worked as expected the first time it was given power.

Today was quite a busy day.

I can't wait for what's in store for me next!
