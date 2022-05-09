【expressのセッティング】
$ npm install
$ npm install express --save

サーバー用のjsファイルを作成（今回はserver.js）
内部で呼び出し
-------------------
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
-------------------
$ npm server.js

【Postgres】
・マイグレーション前にDBを作成
$ psql postgres
$ psql
$ create database solo_pj
#\c solo_pj

・DBコマンド復習
#\dt テーブル一覧の取得
#SELECT * FROM "vocab_list"; テーブル閲覧

【knex】
・マイグレーション
$ npx knex init
knexfile.jsが自動生成される
内容をpsql用に書き換える

$ npx knex migrate:make [作りたいファイル名]
（今回はnpx knex migrate:make vocabList）
指定場所（今回はmigrations）にマイグレーション用のファイルの雛形が作成される
upとdownの関数を作成する

$ npx knex migrate:up 
up関数を走らせてテーブルを作成

・環境変数の利用
サーバーが立ち上がっていることを確認
$ npm install dotenv --save

.envを作成
-------------------
DB_NAME=solo_pj
DB_USER=
DB_PASSWORD=NULL
-------------------

使用するファイル（knexfile.js）の上部に下記を追加
-------------------
require('dotenv').config();
-------------------

