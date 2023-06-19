import { SceneAppPage, SceneAppPageState } from '@grafana/scenes';
import { getRuntimePanelPluginDemo } from './runtimePanelPlugin';
import { getBehaviorsDemo } from './behaviors/behaviorsDemo';
import { getDynamicPageDemo } from './dynamicPage';
import { getFlexLayoutTest } from './flexLayout';
import { getGridLayoutTest } from './grid';
import { getGridWithRowLayoutTest } from './gridWithRow';
import { getLazyLoadDemo } from './lazyLoad';
import { getNestedScene } from './nestedScene';
import { getPanelContextDemoScene } from './panelContext';
import { getPanelMenuTest } from './panelMenu';
import { getPanelRepeaterTest } from './panelRepeater';
import { getQueryEditorDemo } from './queryEditor';
import { getResponsiveLayoutDemo } from './responsiveLayout';
import { getVariablesDemo } from './variables';
import { getDrilldownsAppPageScene } from './withDrilldown/WithDrilldown';
import { getTimeZoneTest } from './timeZones';
import { getQueryCancellationTest } from './queryCancellation';

export interface DemoDescriptor {
  title: string;
  getPage: (defaults: SceneAppPageState) => SceneAppPage;
}

export function getDemos(): DemoDescriptor[] {
  return [
    { title: 'Flex layout', getPage: getFlexLayoutTest },
    { title: 'Responsive layout', getPage: getResponsiveLayoutDemo },
    { title: 'Panel menu', getPage: getPanelMenuTest },
    { title: 'Panel context', getPage: getPanelContextDemoScene },
    { title: 'Repeat layout by series', getPage: getPanelRepeaterTest },
    { title: 'Grid layout', getPage: getGridLayoutTest },
    { title: 'Grid with rows', getPage: getGridWithRowLayoutTest },
    { title: 'Lazy load', getPage: getLazyLoadDemo },
    { title: 'Variables', getPage: getVariablesDemo },
    { title: 'Nested scene', getPage: getNestedScene },
    { title: 'With drilldowns', getPage: getDrilldownsAppPageScene },
    { title: 'Query editor', getPage: getQueryEditorDemo },
    { title: 'Dynamic page', getPage: getDynamicPageDemo },
    { title: 'Runtime panel plugin', getPage: getRuntimePanelPluginDemo },
    { title: 'Behaviors demo', getPage: getBehaviorsDemo },
    { title: 'Time zones demo', getPage: getTimeZoneTest },
    { title: 'Query cancellation', getPage: getQueryCancellationTest },
  ];
}
