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

  widget.properties.metrics = config.functions.map(f => ([
    'AWS/Lambda',
    'UnreservedConcurrentExecutions',
    'FunctionName',
    `${config.service}-${config.stage}-${f.name}`,
    {
      stat: 'SampleCount',
      period: 900,
      region: config.region,
      label: f.name
    }
  ]));

  return widget;
};

module.exports = {
  createWidget,
};
