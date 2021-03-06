now_time=$(date +"%Y%m%d_%H%M%S")
echo '停止 PM2 yd-test'
pm2 stop yd-test

echo '将当前web目录备份'
tar -zcvf /data/bak/yd-test/$(date +"%Y%m%d_%H%M%S").tar.gz /www/yd-test --exclude node_modules

echo '将jenkins传输的文件放到目录'
/bin/cp -r /data/jenkins/yd-test /www/

echo '进入 /www/yd-test'
cd /www/yd-test

echo '安装依赖'
npm install --registry=https://registry.npm.taobao.org --production

echo '开启PM2'
pm2 start
