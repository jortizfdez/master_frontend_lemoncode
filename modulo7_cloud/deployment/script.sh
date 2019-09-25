#!/bin/bash 

sudo yum install docker -y 
sudo usermod -aG docker ec2-user
sudo service docker start
sudo docker run -d -p 80:8888 --name cloudlab jortizfdez/cloudlab