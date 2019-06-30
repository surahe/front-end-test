now_time=$(date +"%Y%m%d_%H%M%S")

pm2 stop yd-test
tar -zcvf /data/bak/yd-test/$(date +"%Y%m%d_%H%M%S").tar.gz /www/jenkins/yd-test # 将当前web目录备份
mv /data/jenkins/yd-test /www/jenkins/yd-test # 将jenkins传输的文件放到目录

cd /www/jenkins/yd-test

npm install --registry=https://registry.npm.taobao.org --production
pm2 start