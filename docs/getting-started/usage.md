---
id: usage
title: Usage
sidebar_label: Usage
---

To launch Mongo Dash, run the following command from your terminal. Mongo Dash
will launch at `http://localhost:3000`.

```shell
$   mongo_dash --mongo-uri mongodb://localhost --database-name database
```

Replace `mongodb://localhost` with the URI for your database server. If your database
requires authentication, construct the string as follows
`mongodb://user:pass@hostname:port` (the typical port number is `27017`). Replace
`database` with your database of choice. This can also be changed from the UI
once launched.

## CLI flags

Flag | Description
---|---
`mongo-uri` | The URI to your MongoDB database server (with authentication, if necessary)
`database-name` | The database name you want to connect to on the database server
`host` | The host / IP address to bind Mongo Dash to. Defaults to `localhost`
`port` | The port number to bind Mongo Dash to. Defaults to `3000`

