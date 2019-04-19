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
    [ "AWS/Lambda", "UnreservedConcurrentExecutions", { "period": 900, "stat": "SampleCount" } ]
  ];

  return widget;
};

module.exports = {
  createWidget,
};
