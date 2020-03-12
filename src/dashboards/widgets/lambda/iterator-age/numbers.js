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
      view: 'singleValue',
      metrics: [ ],
      region: config.region,
      period: 300
    }
  };

  widget.properties.metrics = [
    [{ "expression": "SEARCH('{AWS/Lambda,FunctionName} MetricName=\"IteratorAge\"', 'Average', 2592000)"}]
  ];

  return widget;
};

module.exports = {
  createWidget,
};
