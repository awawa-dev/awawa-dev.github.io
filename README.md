<p align="center">
  <img src="https://repository-images.githubusercontent.com/284335610/25357144-0927-40fc-8ae3-48a8430770ad" />
</p>
  
# HyperHDR Debian APT repository

1) **Installing**  

All HyperHDR SD images since version v19beta2 are linked to the HyperHDR repository so you don't need this step if you use it.  

If you have HyperHDR manually installed from Github or are using old SD images before v19beta2, remove HyperHDR first.  

```bash
sudo apt remove hyperhdr
```

Add HyperHDR repository and install the application.  
For **Ubuntu** change `$(lsb_release -cs)` from the belowe command to a supported Debian equivalent e.g. `bullseye` or newer `bookworm`. 

```bash
type -p curl >/dev/null || sudo apt install curl -y
curl -fsSL https://awawa-dev.github.io/hyperhdr.public.apt.gpg.key | sudo dd of=/usr/share/keyrings/hyperhdr.public.apt.gpg.key \
&& sudo chmod go+r /usr/share/keyrings/hyperhdr.public.apt.gpg.key \
&& echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/hyperhdr.public.apt.gpg.key] https://awawa-dev.github.io $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hyperhdr.list > /dev/null \
&& sudo apt update \
&& sudo apt install hyperhdr -y
```   

2) **Upgrade**  

If you already have a HyperHDR repository set up, you can easily update HyperHDR later:  

```bash
sudo apt update && sudo apt install hyperhdr -y
```

If you are using an officially unsupported ws281x driver that requires root privileges, you need to switch the new service to the root user:  

```bash
sudo systemctl disable --now hyperhdr@pi
sudo systemctl enable --now hyperhdr@root
sudo reboot
```   

# RPM packages

<div id="RpmTarget"></div>  

# Arch Linux

<div id="ArchTarget"></div>  




<script src="https://awawa-dev.github.io/scripts.js">

</script>
