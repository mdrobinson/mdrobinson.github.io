---
layout: post
title: "YACS DevOps Upgrade: Power of Docker"
category: RCOS
tags: [YACS, Web]
---

Hello everyone,

Here’s an update I’d like to share with what I’ve contributed to the operational side of YACS.

At the start of this semester, I was tasked with optimizing YACS as much as possible without touching the Ruby codebase. Also, at the request of the YACS team from last semester, I helped dockerize the YACS stack. I thoroughly tested my work to ensure it works in development and in production for Rensselaer Polytechnic Institute.

Initially, Vagrant was the blood line that ran Puma Ruby on Rails server which then serves the YACS Ruby on Rails-based front-end. Vagrant has been replaced with the implementation of Docker to YACS Ruby on Rails.

YACS Ruby on Rails is still in use today.

I would like to explain why I prefer Docker. First, Docker only needs seconds to launch all of YACS containers. The reason for this is because Docker runs in a virtual environment of containers on the host machine, whereas Vagrant ran in a virtual machine.The need to dedicate storage to a virtual machine (VM) will never be an issue now that Docker has been implemented. This new addition will not only save space, it also makes Linux containers much more maintainable with Docker. This will literally mean that it will be unnecessary to ever have the system run via (VM) nor will the YACS team ever again, need to resize a virtual drive when it hits maximum capacity.

What makes Docker a great tool? Well, it allows sysadmins to control the daemon and containers. Imagine this hypothetical scenario if you will… a heap of containers stacked up like a wall of bricks operating as a whole. Yet, one container suddenly combusts! The system will not fall but rather, Docker will spin up a replacement container and the old exploded container will be set aside for later review. Thus, the regenerate container kicks itself into operational mode along with the rest of the heap. I will not go into the logistics, but it can be dealt with using a single command to avoid downtime in case of any sudden mishap within any one container. Thus, once a newly built container goes into place (like magic) all its updated changes are morphed instantly back into the rest of the wall structure.

Additionally, I configured Docker to run automated health checks on all containers. These health checks ensure that all of YACS Docker containers are healthy and functioning. If for any reason a container is degraded, the health check removes the defective container and spins up a replacement and logs the event to system for later review. This is one of the many fail-safes that I configured with the Docker daemon on Linux.

To ensure the efficient operation of YACS, it’s imperative to ensure that users experience an uneventful time in creating the best schedules each semester.

With these new changes in place, I am excited that so many will benefit from the faster and much improved performance.

Now I know that YACS can handle the pressure of real multi-thousand concurrent requests via the Nginx and Docker configurations I contributed to YACS.

On February 21st, I submitted the 200th pull request to YACS staging branch with all of these improvements, at request of the YACS team.

With these new contributions in place, YACS can now handle the pressure of real multi-thousand concurrent requests via the Nginx and Docker configurations; Results are security and speed for YACS users!

More updates to follow, coming soon!
