---
id: creating-a-pipeline
title: Creating a pipeline
sidebar_label: Creating a pipeline
---

To create a pipeline, go the **Pipelines** tab at the top and then press
**Add new pipeline**. Give your pipeline a name, and then select a collection
from the dropdown list.

## Why do we need pipelines?
The charts in Mongo Dash expect the data to be in a particular format, hence
the MongoDB aggregation pipelines are a simple and flexible way to allow any
data format to be compatible with Mongo Dash.

## Pipeline stages
In the pipeline stages area, type in your pipeline using correct JSON syntax.
This means keys must be with double quotes (`"`), and no trailing commas can
be present after the last entry in an array. The pipeline stages should be a
series of objects, encased in an array `[...]`.

:::tip View your data before a pipeline
To see what your data looks like without applying any pipeline steps, simply
pass an empty array `[]` to the pipeline stages, and press **Preview pipeline**.
:::

The pipeline stages are decoded from JSON in Python, and run using the
`.aggregate` function in Python using the `pymongo` library, hence your
pipeline aggregation stages must be compatible with that library.

:::note
Refer to the specific chart you are creating a pipeline for, to know what format
your data needs to be in.
:::