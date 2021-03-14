---
id: timeseries-line
title: Timeseries line chart
sidebar_label: Timeseries line chart
---

Timeseries line charts let you visualise your data as a series of line traces
on a graph.

## Data format
Using the **pipelines**, transform your data to have the following keys:

- `x` to encode the X-values
- `y` to encode the Y-values

If your `x` key holds timestamps, ensure the timestamp is a ISO-8601 string.
You can use the pipeline operators in MongoDB to transform it to a compatible
string if necessary.

If you would like to visualise more than one line on a graph, i.e. colour the
lines by a metadata key, project the key which encodes that key to a key called
`groupby`. Mongo Dash will then group your data by the `groupby` key, and then
colour each line on the graph with a unique colour.