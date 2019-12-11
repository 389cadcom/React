import { TabBar, NavBar, Drawer, Popover, Pagination} from "antd-mobile"
import { Flex, List, Carousel, Icon, Badge, NoticeBar, Accordion} from "antd-mobile"

//1.icon | type, size, color

'check-circle', 'check', 'check-circle-o',
'cross-circle', 'cross', 'cross-circle-o',
'up', 'down', 'left', 'right', 'ellipsis', 'loading'

//2. buttton | type, size, inline, disabled, loading, icon

//3.WingBlank | size,  WhileSpace | size  xs,sm,md,lg,xl

//4.Flex | wrap, direction, justify, align, alignContent

//5.Checkbox | defaultChecked, checked, disabled

//6.List | thumb, extra, warp, multi, arrow, align, error

//7.Grid | data{icon, text}, columnNum, hasLine, isCarousel, carouselMaxRow, renderItem

//8.Carousel | autoplay, autoplayInterval, infinite, dots, dotStyle, selectedIndex, vertical, cellSpacing, slideWidth

//9.Card | full Header, Body, Footer -- thumb, title, extra - content

//10.Accordion | accordion openAnimate={{}}, Accordion.Panel, defaultActiveKey

//11.Icon | type, size, color   'xxs'/'xs'/'sm'/'md'/'lg'

//12.Badge | text, overflowCount, dot, hot, corner  <Badge dot>Text</Badge>

//13.Tag | small, closable, disabled, selected, onClose, afterClose, onChange

//14.Steps.Step | current, status, icon      - wait process finish error

//15.NoticeBar | mode, icon, marqueeProps, action, onClick

//FIXME:
//1.TabBar | tabs, swipeable, initialPage, tabBarPosition, renderTab
//    tabBarUnderlineStyle, tabBarTextStyle, renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} />}

//一、菜单导航
TabBar, Tabs, NavBar, Menu, Drawer, Popover, Pagination

//二、数据展示
Flex, List, Grid, Carousel, Card, Accordion-Accordion.Panel

Icon, Steps, Tag, Badge, NoticeBar

//三、数据录入

//四、信息反馈

//五、手势操作

//六、手势操作

//七、其他组合
