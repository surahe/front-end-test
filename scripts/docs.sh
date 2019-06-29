echo '删除  /data/jenkins/docs'
rm -rf /usr/share/nginx/html/docs

echo '移动  /data/jenkins/docs'
mv /data/jenkins/docs /usr/share/nginx/html
