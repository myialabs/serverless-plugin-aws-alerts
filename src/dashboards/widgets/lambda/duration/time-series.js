'use strict';

const createWidget = (config) => {
  const widget = {
    type: 'metric',
    x: config.coordinates.x,
    y: config.coordinates.y,
    width: config.coordinates.width,
    height: config.coordinates.height,
    properties: {
      title: config.title,
      view: 'timeSeries',
      stacked: false,
      metrics: [ ],
      region: config.region,
      period: 300
    }
  };

  widget.properties.metrics = [
    [{ "expression": "SEARCH('{AWS/Lambda,FunctionName} MetricName=\"Duration\"', 'p50', 900)", "label": "[max: ${MAX}, avg: ${AVG}]" }],
    [{ "expression": "SEARCH('{AWS/Lambda,FunctionName} MetricName=\"Duration\"', 'p90', 900)", "label": "[max: ${MAX}, avg: ${AVG}]" }]
  ];

  return widget;
};

module.exports = {
  createWidget,
};
