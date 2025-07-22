---
layout: "@/partials/BasePost.astro"
title: virtualization configuration
pubDate: 2024-02-14T18:00:00Z
imgSrc: "/img/posts/virtualization/docker-logo.png"
imgAlt: "virtualization configuration"
---

# virtualization configuration

There are plenty of container and virtualization management tools. This article records common commands so you won't forget them when configuring machines later.

## 1. lxd and lxc container

## 2. docker

## 3. virtualBox Manager

## 4. Qemu with kvm

### installation

```bash
sudo apt install qemu-kvm libvirt-clients libvirt-daemon-system bridge-utils libguestfs-tools genisoimage virtinst libosinfo-bin
sudo adduser shinnku libvirt
sudo adduser shinnku libvirt-qemu
```

`virt-install` and `virt-manager` are two popular tools for managing KVM virtual machines on Linux.

`virt-install` is a command line utility for creating and configuring VMs, while `virt-manager` provides a graphical interface that makes management more intuitive.
