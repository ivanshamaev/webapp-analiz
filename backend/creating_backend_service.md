sudo nano /etc/systemd/system/backend.service

sudo systemctl start backend
sudo systemctl enable backend

sudo systemctl status backend

# После изменений
sudo systemctl restart backend