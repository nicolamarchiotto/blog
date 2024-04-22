+++
title = "My Home Server"
date = 2024-04-02
description = "My server powered by Docker containers"
[extra]
toc = false
insert_anchor_links = "none"
icon = "docker"
+++

## Old laptop, let's use it
The project came to my mind after discovering the existence of media-serving solutions like Plex or Jellyfin. I was also interested in polishing my skills on Docker containers, so I picked up my old laptop, the chosen "server", and started playing.

## Docker? Containers?
For those who don't know what I am talking about, _Docker is an open source platform that enables developers to build, deploy, run, update and manage containers, standardized and executable components that combine application source code with the operating system (OS) libraries and dependencies required to run that code in any environment._ With cooler words, you can summarize the previous statement with _Develop faster, run everywhere._ 

The awesome thing about [Docker](https://www.docker.com/) is that it allows to easily deploy services (containers) in a matter of seconds. To make you understand the potential of what I am talking about, the following snippet shows how to start a bash session in container based on the Ubuntu image. Yes, Virtual Machines have been already invented, but this is way FASTER.

```
ubuntu@victus:~$ docker run -it ubuntu /bin/bash
Unable to find image 'ubuntu:latest' locally
latest: Pulling from library/ubuntu
bccd10f490ab: Pull complete
Digest: sha256:77906da86b60585ce12215807090eb327e7386c8fafb5402369e421f44eff17e
Status: Downloaded newer image for ubuntu:latest
root@062f46837057:/#
```

A container based on an Ubuntu image may not sound so revolutionary. But on top of this image you could add other software components, from a simple python application to whole frontend/backend solutions. From this, you could make your own personalized Docker image, with all the necessary dependencies already declared inside it.
You have now a tool which allows you to easily distribute your application, with the only requirement that the system must host a Docker engine. 

Following this line of thought, lots of open-source Docker Images were developed, you can have a look at some of them at [Docker Hub](https://hub.docker.com/) if you are curious. Enough for the introduction, let's get to something more concrete.

## System