---
id: intro
title: Introduction
sidebar_label: Introduction
slug: /
---

Mongo Dash is a Python based web-app for creating dashboards using data stored
from a MongoDB database. Mongo Dash is installed as a Python package, and is
launched using its CLI from your terminal. It's intended to be used to setup
dashboards quickly and locally.

## Why does it exist?
A lot of open-source dashboard solutions exist for databases such as Grafana,
Kibana, Prometheus, etc. but none of these offer a simple and quick way to
get up and running with a MongoDB database.

With **Mongo Dash**, you can launch a dashboard with just one command from
your CLI, plus its **free**.

## What does Mongo Dash offer?

- Interactive charts for visualising your data
- Customisable layouts for your charts on the dashboard
- Pipelines to transform your data for visualisation

Mongo Dash offers you a way to create a dashboard to visualise your data
stored in a MongoDB database. Since your data can take on any kind of schema,
**Mongo Dash** offers the concept of **pipelines** to transform your data from 
its current format, to one which is compatible with Mongo Dash. These are simply
MongoDB aggregation pipelines that can be setup and previewed directly via the
dashboard web app.