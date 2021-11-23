import { mergeDeepRight } from 'ramda';

// echarts字体自适应
export const echartsSizeTrans = (px) => {
  const rem = px / 37.5;
  const rootSize = document.documentElement.style.fontSize;
  return Math.floor(rem * rootSize.replace('px', ''));
};

// 最大值最小值
export const maxMin = (array, percent) => {
  const arr = array.filter(item => item !== '-');
  const maxVal = Math.max.apply(this, arr);
  const minVal = Math.min.apply(this, arr);
  const val = {
    min: minVal * percent,
    max: maxVal * (1 + (1 - percent)),
  };
  return val;
};

const STYLE = {
  // 主字体集合（该字体已经在`index.html`页面中通过兼容性方式全部引入）
  GLOBAL_FONT_FACE_T1: 'exampleFont',
  // 正常字体大小
  GLOBAL_FONT_SIZE_NORMAL: `${echartsSizeTrans(12)}px`,
  // 说明字体大小（用于一些较小字体场景）
  GLOBAL_FONT_SIZE_DESC: `${echartsSizeTrans(10)}px`,
  // 常规字重
  GLOBAL_FONT_WEIGHT_NORMAL: 'normal',
  // 【主题色】主字色
  GLOBAL_FONT_COLOR: '#000000',
  // 【主题色】辅字色1
  GLOBAL_FONT_COLOR_1: '#6E9CDA',
  // 【主题色】辅字色2
  GLOBAL_FONT_COLOR_2: '#979797',

  // 无边距
  GLOBAL_GAP_NONE: '0',
  // 小间距
  GLOBAL_GAP_SMAL: `${echartsSizeTrans(8)}px`,
  // 普通间距
  GLOBAL_GAP_NORMAL: `${echartsSizeTrans(16)}px`,
  // 大间距
  GLOBAL_GAP_LARGE: `${echartsSizeTrans(24)}px`,
};
// 这里声明常量
const SOLID_LINE = 'solid';
const DASHED_LINE = 'dashed';
// 数据可视化配色
// 主色系
export const DATA_COLOR_PRIMARY = [
  '#86b4ee',
  '#F7F0E8',
  '#F7EDEB',
  '#EDEFEB',
];
// 主色系选中状态
export const DATA_COLOR_PRIMARY_HIGHLIGHT = [
  '#284E80',
  '#D9B48B',
  '#D7A59C',
  '#A4AE9B',
];
// 主色系扩展
export const DATA_COLOR_SECONDARY = [
  '#D2E1F1',
  '#A4C4E3',
  '#77A6D6',
  '#4989C8',
  '#F7F0E8',
  '#F7EDEB',
  '#EDEFEB',
];
// 主色系扩展选中状态
export const DATA_COLOR_SECONDARY_HIGHTLIGHT = [
  '#284E80',
  '#284E80',
  '#284E80',
  '#284E80',
  '#F7F0E8',
  '#F7EDEB',
  '#EDEFEB',
];
// 模块图表色
export const DATA_COLOR_MOUDLE_DEFAULT = [
  '#3D5881',
  '#8F9EB5',
  '#D9B48B',
  '#D7A59C',
  '#A4AE9B',
  '#A8A5A3',
];
// 默认正负色1 红绿
export const DATA_COLOR_PLUS_MINUS_DEFAULT = [
  '#B03320',
  '#68875C',
];
// 默认正负色2 红蓝
export const DATA_COLOR_PLUS_MINUS = [
  '#B03320',
  '#284E80',
];
// 默认百分比对比色
export const DATA_COLOR_CONTRAST = [
  '#EFDDC4',
  '#D9DFD2',
];
// 默认目标达成颜色
export const DATA_COLOR_ACCOMPLISHGOAL = [
  '#284E80',
  '#B03320',
  '#FFC000',
];
export const DATA_COLOR_SALETOOL_FUNNEL = [
  '#CDD4DC',
  '#8F9EB5',
  '#3D5881',
];

export const dataColos = (plan = 0) => {
  let result = DATA_COLOR_PRIMARY;
  if (plan === 1) {
    result = DATA_COLOR_SECONDARY;
  }
  return result;
};

// 这里设置主要参数
// 主字色
export const { GLOBAL_FONT_COLOR } = STYLE;
// 轴线（线条颜色/线条类型）
export const GLOBAL_AXIS_LINE_COLOR = '#949BAE';
export const GLOBAL_AXIS_LINE_TYPE = SOLID_LINE;
// 刻度线（线条颜色/线条类型）
export const GLOBAL_TICK_LINE_COLOR = '#949BAE';
export const GLOBAL_TICK_LINE_TYPE = SOLID_LINE;
// 分割线（线条颜色/线条类型）
export const GLOBAL_SPLIT_LINE_COLOR = '#525B6A';
export const GLOBAL_SPLIT_LINE_TYPE = DASHED_LINE;
// 指示线（线条颜色/线条类型）
export const GLOBAL_POINTER_LINE_COLOR = 'rgba(255, 255, 255, .8)';
export const GLOBAL_POINTER_LINE_TYPE = SOLID_LINE;
// 标记线（线条颜色/线条类型）
export const GLOBAL_MARK_LINE_COLOR = '#D9415A';
export const GLOBAL_MARK_LINE_TYPE = DASHED_LINE;
// 轴线默认边距
// export const AXIS_AXISLABEL_MARGIN = parseInt(STYLE.GLOBAL_GAP_SMAL, 10);
export const AXIS_AXISLABEL_MARGIN = 5;
// 轴线分割线是否显示
export const AXIS_SPLITLINE_SHOW = false;
// 轴线分割线透明度
export const AXIS_SPLITLINE_LINESTYLE_OPACITY = 1;

// options.textStyle.color
export const TEXTSTYLE_COLOR = GLOBAL_FONT_COLOR;
// options.textStyle.fontWeight
export const TEXTSTYLE_FONTWEIGHT = STYLE.GLOBAL_FONT_WEIGHT_BOLD_EN;
// options.textStyle.fontFamily
export const TEXTSTYLE_FONTFAMILY = STYLE.GLOBAL_FONT_FACE_T1;
// options.textStyle.fontSize
export const TEXTSTYLE_FONTSIZE = parseInt(STYLE.GLOBAL_FONT_SIZE_NORMAL, 10);
// 字体样式汇总
export const TEXTSTYLE = {
  color: TEXTSTYLE_COLOR,
  fontWeight: TEXTSTYLE_FONTWEIGHT,
  fontFamily: TEXTSTYLE_FONTFAMILY,
  fontSize: TEXTSTYLE_FONTSIZE,
};

// options.grid.left
export const GRID_LEFT = parseInt(STYLE.GLOBAL_GAP_NONE, 10);
// options.grid.right
export const GRID_RIGHT = parseInt(STYLE.GLOBAL_GAP_NONE, 10);
// options.grid.bottom
export const GRID_BOTTOM = parseInt(STYLE.GLOBAL_GAP_LARGE, 10);
// options.grid.top
export const GRID_TOP = parseInt(STYLE.GLOBAL_GAP_LARGE, 10);

// options.xAxis.axisLabel.color
export const XAXIS_AXISLABEL_COLOR = GLOBAL_FONT_COLOR;
// options.xAxis.axisLabel.fontWeight
export const XAXIS_AXISLABEL_FONTWEIGHT = STYLE.GLOBAL_FONT_WEIGHT_BOLD_EN;
// options.xAxis.axisLabel.fontFamily
export const XAXIS_AXISLABEL_FONTFAMILY = STYLE.GLOBAL_FONT_FACE_T1;
// options.xAxis.axisLabel.fontSize
export const XAXIS_AXISLABEL_FONTSIZE = parseInt(STYLE.GLOBAL_FONT_SIZE_DESC, 8);
// options.xAxis.axisLabel.margin
export const XAXIS_AXISLABEL_MARGIN = AXIS_AXISLABEL_MARGIN;
// options.xAxis.axisTick.show
export const XAXIS_AXISTICK_SHOW = false;
// options.xAxis.splitLine.show
export const XAXIS_SPLITLINE_SHOW = AXIS_SPLITLINE_SHOW;
// options.xAxis.splitLine.lineStyle.opacity
export const XAXIS_SPLITLINE_LINESTYLE_OPACITY = AXIS_SPLITLINE_LINESTYLE_OPACITY;

// options.tooltip.textStyle.color
export const TOOLTIP_TEXTSTYLE_COLOR = GLOBAL_FONT_COLOR;
// options.tooltip.textStyle.fontWeight
export const TOOLTIP_TEXTSTYLE_FONTWEIGHT = STYLE.GLOBAL_FONT_WEIGHT_NORMAL;
// options.tooltip.textStyle.fontFamily
export const TOOLTIP_TEXTSTYLE_FONTFAMILY = STYLE.GLOBAL_FONT_FACE_T1;
// options.tooltip.textStyle.fontSize
export const TOOLTIP_TEXTSTYLE_FONTSIZE = parseInt(STYLE.GLOBAL_FONT_SIZE_NORMAL, 10);
// options.tooltip.backgroundColor
export const TOOLTIP_BACKGROUNDCOLOR = 'rgba(56, 74, 101, 0.64)';
// options.tooltip.borderColor
// export const TOOLTIP_BORDERCOLOR = "rgba(26, 26, 26, .6)";
export const TOOLTIP_BORDERCOLOR = '#D9D9D9';
// options.tooltip.borderWidth
export const TOOLTIP_BORDERWIDTH = 1;
// options.tooltip.padding
// export const TOOLTIP_PADDING = parseInt(STYLE.GLOBAL_GAP_NORMAL.replace('px', ''), 10);
export const TOOLTIP_PADDING = 8;

// options.axisPointer.lineStyle.color
export const AXISPONITER_LINESTYLE_COLOR = GLOBAL_POINTER_LINE_COLOR;

// 标题汇总
export const TITLE = {
  show: false,
};
// 图例汇总
export const LEGEND = {
  show: false,
};
// 网格汇总
export const GRID = {
  left: GRID_LEFT,
  right: GRID_RIGHT,
};
// 横坐标汇总
export const XAXIS = {
  axisLine: {
    show: false,
    lineStyle: {
      color: GLOBAL_AXIS_LINE_COLOR,
      type: GLOBAL_AXIS_LINE_TYPE,
    },
  },
  axisTick: {
    show: XAXIS_AXISTICK_SHOW,
  },
  axisLabel: {
    triggerEvent: true,
    color: XAXIS_AXISLABEL_COLOR,
    fontWeight: XAXIS_AXISLABEL_FONTWEIGHT,
    fontFamily: XAXIS_AXISLABEL_FONTFAMILY,
    fontSize: XAXIS_AXISLABEL_FONTSIZE,
    margin: XAXIS_AXISLABEL_MARGIN,
  },
  splitLine: {
    show: XAXIS_SPLITLINE_SHOW,
    lineStyle: {
      color: GLOBAL_SPLIT_LINE_COLOR,
      type: GLOBAL_SPLIT_LINE_TYPE,
      opacity: XAXIS_SPLITLINE_LINESTYLE_OPACITY,
    },
  },
};
// 纵坐标汇总
export const YAXIS = {
  show: false,
  splitLine: {
    show: false,
  },
};
// 提示器汇总
export const TOOLTIP = {
  show: true,
  showContent: false, // 是否显示提示框浮层
  trigger: 'item',
  textStyle: {
    color: TOOLTIP_TEXTSTYLE_COLOR,
    fontWeight: TOOLTIP_TEXTSTYLE_FONTWEIGHT,
    fontFamily: TOOLTIP_TEXTSTYLE_FONTFAMILY,
    fontSize: TOOLTIP_TEXTSTYLE_FONTSIZE,
    align: 'left',
  },
  backgroundColor: TOOLTIP_BACKGROUNDCOLOR,
  borderColor: TOOLTIP_BORDERCOLOR,
  borderWidth: TOOLTIP_BORDERWIDTH,
  padding: TOOLTIP_PADDING,
};
// 指示线汇总
export const AXISPONITER = {
  lineStyle: {
    color: AXISPONITER_LINESTYLE_COLOR,
  },
};

export const RADAR = {
  name: {
    color: dataColos(1),
    fontWeight: STYLE.GLOBAL_FONT_WEIGHT_BOLD_EN,
    fontFamily: STYLE.GLOBAL_FONT_FACE_T1,
    fontSize: XAXIS_AXISLABEL_FONTSIZE,
  },
  axisLine: {
    lineStyle: {
      color: GLOBAL_AXIS_LINE_COLOR,
      type: GLOBAL_AXIS_LINE_TYPE,
    },
  },
  splitLine: {
    lineStyle: {
      color: GLOBAL_SPLIT_LINE_COLOR,
      type: GLOBAL_SPLIT_LINE_TYPE,
    },
  },
  axisLabel: {
    color: XAXIS_AXISLABEL_COLOR,
    fontWeight: XAXIS_AXISLABEL_FONTWEIGHT,
    fontFamily: XAXIS_AXISLABEL_FONTFAMILY,
    fontSize: XAXIS_AXISLABEL_FONTSIZE,
    margin: XAXIS_AXISLABEL_MARGIN,
  },
  splitArea: {
    show: false,
  },
};

// 导出默认配置
export const defaultOptions = {
  color: dataColos(),
  title: TITLE,
  legend: LEGEND,
  xAxis: XAXIS,
  yAxis: YAXIS,
  grid: GRID,
  tooltip: TOOLTIP,
  axisPointer: AXISPONITER,
  textStyle: TEXTSTYLE,
};

// 导出雷达图默认配置
export const ralarOptions = {
  color: DATA_COLOR_PRIMARY,
  title: TITLE,
  legend: LEGEND,
  grid: GRID,
  tooltip: TOOLTIP,
  radar: RADAR,
  textStyle: TEXTSTYLE,
};

// 导出构建函数
const buildEchartOption = function (options = {}, type = 'default') {
  let opt;
  switch (type) {
  case 'radar':
    opt = ralarOptions;
    break;
  default:
    opt = defaultOptions;
    break;
  }
  return mergeDeepRight(opt, options);
};

export default buildEchartOption;
