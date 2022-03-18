本專案是參考 Youtube 教學影片
再加上 Docker 做些微修改

[Youtube 連結](https://www.youtube.com/watch?v=ldYcgPKEZC8)

---

如果沒有安裝過 docker 的話可以用 homebrew 進行安裝
```shell
$ brew cask install docker
```
<br>

在專案資料夾中啟動 docker

```shell
$ docker-compose up -d
```

下載並完成之後進入 docker
這段會需要三個 Terminal 分頁視窗都輸入

```shell
$ docker exec -it pern_todo_node_1 zsh
```

第一步先啟動 React

```shell
$ cd root/todo/client
$ npm start
```

不需要等它完成

直接開一個新的 Terminal 分頁進入 docker

然後啟動 express

```
$ cd /root/todo/server
$ node index.js
```

接著再開一個 Terminal 分頁進入 docker

然後利用 pgcli 進入 postgresql command line 模式

```pgsql
$ pgcli -U postgres perntodo -h db
Password: psql
```

創建資料庫
```sql
CREATE TABLE todo(
    id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);
```

都完成之後用瀏覽器打開網址

http://localhost:3000/todos

順利的話就可以看到 CRUD 的頁面運作了
