
sudo nano /etc/nginx/sites-available/webapp

sudo ln -s /etc/nginx/sites-available/webapp /etc/nginx/sites-enabled
# sudo ln -sf /etc/nginx/sites-available/webapp /etc/nginx/sites-enable

sudo nginx -t


sudo systemctl restart nginx

/var/www/analiz-krovi-online.ru/html

sudo scp -r ./build/* /var/www/analiz-krovi-online.ru/html




sudo certbot --nginx -d analiz-krovi-online.ru