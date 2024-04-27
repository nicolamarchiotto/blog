+++
title = "My Home Server"
date = 2024-04-02
description = "Server powered by Docker containers"
[extra]
toc = false
insert_anchor_links = "none"
icon = "docker"
+++

## Old laptop, let's use it
The project came to my mind after discovering the existence of media-serving solutions like Plex or Jellyfin. I was also interested in polishing my skills on Docker containers, so I picked up my old laptop, the chosen "_server_", and started playing.

## Docker? Containers?
For those who don't know what I am talking about, _Docker is an open source platform that enables developers to build, deploy, run, update and manage containers, standardized and executable components that combine application source code with the operating system (OS) libraries and dependencies required to run that code in any environment._ With cooler words, you can summarize the previous statement with _Develop faster, run everywhere._ 

Another awesome thing about [Docker](https://www.docker.com/) lies in its ease of use. To make you understand the potential of what I am talking about, the following snippet shows how to start a bash session in container based on the Ubuntu image. Yes, Virtual Machines have been already invented, but this is way FASTER.

```
ubuntu@victus:~$ docker run -it ubuntu /bin/bash
Unable to find image 'ubuntu:latest' locally
latest: Pulling from library/ubuntu
bccd10f490ab: Pull complete
Digest: sha256:77906da86b60585ce12215807090eb327e7386c8fafb5402369e421f44eff17e
Status: Downloaded newer image for ubuntu:latest
root@062f46837057:/#
```

A container based on an Ubuntu image may not sound so revolutionary. But on top of this image you could add other software components, from a simple python application to whole frontend/backend solutions. From this, you then could make your own personalized Docker image, with all the necessary dependencies already declared inside it.
You have now acquired a tool which allows you to easily distribute your application, with the only requirement that the system must host a Docker engine. 

Following this line of thought, lots of open-source Docker Images were developed. You can have a look at some of them at [Docker Hub](https://hub.docker.com/) if you are curious. Enough for the introduction, let's get to something more concrete.

## System

The pc I am using is my first laptop, which retired after 5 stressful long years of University. It is equipped with an Intel i5 8th gen processor, 8 GB of ram DDR4, an SSD of 128 GB and HHD of 1 TB. These are more than enough requirements if you are planning of just serving your medias or backing your photos. The system has also an onboard low-end GPU, which I did not bother neither to disable from the BIOS nor to remove it. After setting up the OS and installing an ssh server, I removed the laptop screen, to reduce the system power consumption and to make it as less invasive as possible. I set up a static IP, placed the sever near my home modem/router and connect it via an Ethernet cable.

<div class="flex" style="margin-top: -20px; margin-bottom: -20px;">
    <div style="padding: 10px;" width="50%" >
        <img src="server1e.jpeg" alt="Server 1">
        <!-- <p style="margin-top: -20px;">Server image 1</p> -->
    </div>
    <div width="50%" style="padding: 10px;">
        <img src="server2e.jpeg" alt="Server 2">  
        <!-- <p></p> -->
    </div>
</div>

## Services

The system runs on a Debian server image. I don't need the system to run 24/7 since I mainly use it when I am home at night. The only automation I implemented is the system automatic shutdown, scheduled at 01:00 AM if the system is up and running.

The services hosted by the server were all installed using Docker. To make things maintainable, I created a script which automatically set up the system by:

* Installing the Docker engine and ssh server
* Setting up the system automatic shutdown
* Installing the services via a [Docker Compose](https://docs.docker.com/compose/) file 

You can find the setup script on my [Github repo](https://github.com/nicolamarchiotto/k8-zola-blog). You can access the services via a single page.