+++
title = "My Home Server"
date = 2024-04-02
description = "Server powered by Docker containers"
[extra]
toc = false
insert_anchor_links = "none"
icon = "docker"
+++

# Old laptop, let's use it
The project came to my mind after discovering the existence of media-serving solutions like Plex or Jellyfin. I was also interested in polishing my skills on Docker containers, so I picked up my old laptop, the chosen "_server_", and started playing.

# Docker? Containers?
For those who don't know what I am talking about, _Docker is an open source platform that enables developers to build, deploy, run, update and manage containers, standardized and executable components that combine application source code with the operating system (OS) libraries and dependencies required to run that code in any environment._ 

With less fancy words, Docker allows you to build your program in a standalone and secure environment. And when I say environment, I also mean the operating system and all the software dependencies you want. This translates to: 

- Easily distribute software
- Assurance of the host machine setup. With Docker you will never hear again _"but it works on my machine"_

With respect to Virtual Machines, which are tricked by the hypervisor layer to run on real hardware, Docker containers are more friendly with the host and just emulate a minimal file system, they need less time to startup and are typically faster.

[Docker](https://www.docker.com/) is also incredibly easy to use. To make you understand the potential of what I am talking about, the following snippet shows how to start a bash session in container based on the Ubuntu image. And to start the container, only 10 seconds were necessary!

```
ubuntu@victus:~$ docker run -it ubuntu /bin/bash
Unable to find image 'ubuntu:latest' locally
latest: Pulling from library/ubuntu
bccd10f490ab: Pull complete
Digest: sha256:77906da86b60585ce12215807090eb327e7386c8fafb5402369e421f44eff17e
Status: Downloaded newer image for ubuntu:latest
root@062f46837057:/#
```

A container based on an Ubuntu may not sound so revolutionary. But on top of this image you could add other software components, from a simple python application to whole frontend/backend solutions. From this you could then create your own personalized Docker image and distribute it, with the only requirement that the system must host the Docker engine. 

Following this line of thought, lots of open-source Docker Images were developed. You can have a look at some of them at [Docker Hub](https://hub.docker.com/) if you are curious. 

The most mind-blowing project I found is [dockur/windows](https://github.com/dockur/windows), which allows you to host Windows (from XP to W11) inside a container in legal way and automating the installation process. It saved me when I needed to configure old IT hardware with a software tool compatible only with Windows XP. 

Enough for the introduction, let's get to something more concrete.

# System

The pc I am using is my first laptop, which retired after 5 stressful long years of Computer Science University. It is equipped with an Intel i5 8th gen processor, 8 GB of ram DDR4, an SSD of 128 GB and HHD of 1 TB. The system has also an onboard low-end GPU, which I did not bother neither to disable from the BIOS nor to remove it. After setting up the OS and installing an ssh server, I removed the laptop screen, to reduce the system power consumption and to make it as less invasive as possible. I set up a static IP, placed the sever near my home modem/router and connect it via an Ethernet cable.

<div class="flex flex-col md:flex-row" style="margin-top: -20px; margin-bottom: -20px;">
    <div style="padding: 5px;" >
        <img src="server1e.jpeg" alt="Server 1">
    </div>
    <div style="padding: 5px;">
        <img src="server2e.jpeg" alt="Server 2">  
    </div>
</div>

# Installation

The system runs on an Ubuntu server image. I don't need the system to run 24/7 since I mainly use it when I am home at night. The only automation I implemented is the system automatic shutdown scheduled for 01:30 AM.

The services hosted by the server were all installed using Docker. To make things maintainable, I created a script which automatically set up the system by:

* Installing the Docker engine and ssh server
* Setting up the system automatic shutdown
* Installing the services via a [Docker Compose](https://docs.docker.com/compose/) file 

You can find the setup script on my [GitHub repo](https://github.com/nicolamarchiotto/media-server-script).

# Services

The server host a discrete number of applications, I'll quickly list them 

### Jellyfin
[Jellyfin](https://jellyfin.org/) is a media serving solution. It allows you to share your media over the network
### FileBrowser
[Filebrowser](https://filebrowser.org/) is exactly what you expect, a file explorer on the system which expose a web-UI to perform file-management operations.
### Photoprism
[Photoprism](https://www.photoprism.app/) is an app which allows you to easily manage and organize your photos. I use it to back up all my phone photos exploiting the smartphone app [Photosync](https://www.photosync-app.com/home) and the compatible synchronization via WebDAV.
### qBitTorrent
Torrent client to download whatever you want
### Homer
[Homer](https://github.com/bastienwirtz/homer) is a simple app developed by [bastienwirtz](https://github.com/bastienwirtz) which allows you to access your server services from a single page
### Sonarr and Radarr
[Sonarr](https://sonarr.tv/) and [Radarr](https://radarr.video/) are two apps for respectively manage shows and movies.


<div class="container">
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="item active">
        <img src="server1e.jpeg" alt="Los Angeles" style="width:100%;">
      </div>
      <div class="item">
        <img src="server1e.jpeg" alt="Chicago" style="width:100%;">
      </div>
      <div class="item">
        <img src="server1e.jpeg" alt="New york" style="width:100%;">
      </div>
    </div>
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>

# Perfomance

Sometimes Jellyfin struggles to serve some media files, thus resulting in a stuttering video. This occurred to me maybe twice since I set up the system one year ago, so nothing too impactful. Apart from this I never had major problems.

# Would be nice things to do

There are other things I would like to add on a future version of my server

- Set the system in a raid configuration
- Expose the system to the world safely and:
  - Integrate a file sharing solution i.e. [Nextcloud](https://nextcloud.com/it/)
  - Host a [Bitwarden](https://bitwarden.com/) instance 