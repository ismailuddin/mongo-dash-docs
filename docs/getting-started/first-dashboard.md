---
id: first-dashboard
title: Create your first dashboard
sidebar_label: Create your first dashboard
---

To create your first dashboard, you first need to create a pipeline to transform
your data into the required format for visualising on a chart.

## Create a pipeline
Go the **Pipelines** tab at the top and then press **Add new pipeline**. Give
your pipeline a name, and then select a collection from the dropdown list.

In the pipeline stages area, type in your pipeline using correct JSON syntax.
This means keys must be with double quotes (`"`), and no trailing commas can
be present after the last entry in an array. The pipeline stages should be a
series of objects, encased in an array. To preview the output of your pipeline,
press the **Preview pipeline** button. When ready, press **Register pipeline**
to save your pipeline.

The following example shows the corresponding pipeline stages required to
transform the example data to what is required for Mongo Dash.

### Example data
```json
[
    {
        "timestamp": "2021-03-21T18:00:00Z",
        "value": 674.45747,
        "sensor": "4633"
    },
    {
        "timestamp": "2021-03-21T20:00:00Z",
        "value": 3524.35747,
        "sensor": "345"
    },
]
```
### Example pipeline
```json
[
    {
        "$project": {
            "x": "$timestamp",
            "y": "$value",
            "groupby": "$sensor"
        }
    }
]
```
### Example pipeline output


```json
[
    {
        "x": "2021-03-21T18:00:00Z",
        "y": 674.45747,
        "groupby": "4633"
    },
    {
        "x": "2021-03-21T20:00:00Z",
        "y": 3524.35747,
        "groupby": "345"
    },
]
```

For a timeseries line chart, one document is required for each data point on the
graph, which should have a key `x` for the X-axis, and a key `y` for the Y-axis.
If the X-axis values are timestamps, they should be in IS0-8601 format.
To colour the lines on the graph by a certain key, project that key to a key
called `groupby`.

## Create a dashboard
Now go to the **Dashboards** tab and press **Create new dashboard**. Give your
dashboard a name, and then click the dashboard card to view your dashboard. By
default there are no charts present. Press the **Edit dashboard** button to
add some charts.

## Add charts to your dashboard
Press the **Add chart** button to add a new chart to your dashboard. Give your
chart a name, then select your pipeline from the dropdown list. Currently, only
timeseries line charts are supported. A preview of your chart will be shown
below, below which you can press the **Save chart** button.

You are now ready to view your dashboard, by pressing the **View dashboard**
button.