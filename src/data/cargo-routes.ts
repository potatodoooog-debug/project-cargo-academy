export interface RouteLink {
  label: string;
  href: string;
  tag: string;
}

export interface CargoRoute {
  id: string;
  code: string;
  label: string;
  summary: string;
  firstMove: string;
  redline: string;
  tone: 'accent' | 'danger' | 'steel';
  links: RouteLink[];
}

const BASE = '/project-cargo-academy/';

export const CARGO_ROUTES: CargoRoute[] = [
  {
    id: 'oog',
    code: 'OOG',
    label: '超宽 / 超高 / 超长',
    summary: '先判普柜是否彻底出局，再比 OT / FR 与件杂边界',
    firstMove:
      '索要最终包装后实测 L×W×H、毛重、重心与照片；确认能否顶吊、吊点是否被挡，以及客户能否接受甲板配载。',
    redline:
      '尺寸接近临界一律先按超限询，不要自行判成普货；OOG 常常没有普柜免堆，且须同看起运港、中转港、目的港三处吊重。',
    tone: 'accent',
    links: [
      { label: '特种柜 FR / OT / Platform', href: `${BASE}03-project-cargo/special-containers/`, tag: '核心口径' },
      { label: '一票货怎么走（机床演练）', href: `${BASE}05-sales-business/worked-example/`, tag: '演练' },
      { label: '询价反问清单', href: `${BASE}05-sales-business/inquiry-checklist/`, tag: '清单' },
    ],
  },
  {
    id: 'bbk',
    code: 'BBK',
    label: '超重 / 异形件杂',
    summary: '多用途船 / 重吊船路径：先定询盘性质、计费口径与码头吊重',
    firstMove:
      '分清实货（firm）、投标（bidding）还是预算（budgetary）；收齐 Excel 装箱单、照片、能否堆叠及舱内/甲板偏好。',
    redline:
      '装卸条款（FLT / FILO / FIO / FIOST）必须以委托书原文为准；件杂超期堆存是货主与码头结算，不找船公司。',
    tone: 'accent',
    links: [
      { label: '件杂货询盘与计费', href: `${BASE}03-project-cargo/bbk-inquiry/`, tag: '询盘计费' },
      { label: '中国主要件杂码头吊重', href: `${BASE}08-resources/bb-terminals/`, tag: '吊重速查' },
      { label: '件杂港口操作', href: `${BASE}03-project-cargo/port-ops/`, tag: '港口经验' },
    ],
  },
  {
    id: 'ess-dg',
    code: 'DG-9',
    label: '储能柜 / 锂电池',
    summary: '按「OOG / 重件 + 危险品 DG」双流程并行评估',
    firstMove:
      '第一问是否含锂电池及 UN 编号（UN3480 / 3481 / 3171 / 3090 等），同步索要 SDS、UN38.3、计划 SOC 与精确重量尺寸。',
    redline:
      '资料不齐坚决不订舱、不承诺船期死价；外观接近 20 尺集装箱不等于可按普柜订舱，最终分类由合格 DG 代理与船东书面确认。',
    tone: 'danger',
    links: [
      { label: '锂电池运输红线', href: `${BASE}04-energy-storage/battery-dg-rules/`, tag: '必读红线' },
      { label: '储能产品与物流视角', href: `${BASE}04-energy-storage/product-basics/`, tag: '产品直觉' },
      // V2-SLOT: ess-worked-example -> replace with 05-sales-business/worked-example-ess-dg/
      { label: '目标市场与认证直觉', href: `${BASE}04-energy-storage/markets-certs/`, tag: '市场认证' },
    ],
  },
  {
    id: 'gas',
    code: 'DG-2',
    label: '气体 / 灭火器 / 喷雾',
    summary: '2.1 易燃 / 2.2 非易燃 / 2.3 有毒气体单证与口岸完全不同',
    firstMove:
      '先拿到准确 UN 编号判断项别（如 UN1950 喷雾剂、UN1044 灭火器、UN1016 一氧化碳），再按项别核对单证与可接口岸。',
    redline:
      '2.3 有毒气体拼箱与空运不接；天津件杂船培训口径不接任何级别危险品，订舱前务必核对 MSDS 或非危鉴定。',
    tone: 'danger',
    links: [
      { label: '2 类危险品：气体', href: `${BASE}01-trade-basics/dg-class-2/`, tag: '单证口岸' },
      { label: '询价反问清单', href: `${BASE}05-sales-business/inquiry-checklist/`, tag: '清单' },
    ],
  },
  {
    id: 'roro',
    code: 'RORO',
    label: '车辆 / 滚装设备',
    summary: '滚装（Ro-Ro）与集装箱不是同一套收货与锁舱规则',
    firstMove:
      '确认车辆能否自开上下船、是否高顶车或工程机械，并核对装港收货限制（如是否接 Mafi）与舱位确认节奏。',
    redline:
      '不要用集装箱订舱习惯套滚装；部分航线舱位非预锁（如按周确认），须提前核对进港免堆窗口与码头收货规则。',
    tone: 'steel',
    links: [
      { label: '滚装与车辆', href: `${BASE}03-project-cargo/roro/`, tag: '航线规则' },
      { label: '案例模式：车辆舱内或甲板', href: `${BASE}07-case-library/vehicles-deck/`, tag: '案例模式' },
      { label: '绑扎加固与公路段', href: `${BASE}03-project-cargo/lashing-and-road/`, tag: '陆运超限' },
    ],
  },
  {
    id: 'air',
    code: 'AIR',
    label: '样品 / 急件空运',
    summary: '先算体积重与泡货比，同步排查带电、带磁、粉末与液体',
    firstMove:
      '核实毛重、体积（按 1 CBM = 167 kg 算体积重并取大）、单件超重、出口申报地与要求到达时间，问清分泡比例口径。',
    redline:
      '深广空运培训口径不接 PI965 / PI968 纯锂电池；带磁设备、干电池与化工品须提前确认当年有效的正本运输条件鉴定。',
    tone: 'steel',
    links: [
      { label: '空运基础', href: `${BASE}02-freight-forwarding/air-basics/`, tag: '计费敏感货' },
      { label: '锂电池运输红线', href: `${BASE}04-energy-storage/battery-dg-rules/`, tag: '锂电红线' },
    ],
  },
  {
    id: 'quote',
    code: 'BID',
    label: '方案 / 报价 / 订舱',
    summary: '先补齐资料与路径 A/B 对比，再拆结构化报价与交接节点',
    firstMove:
      '按反问清单发缺失项；对外方案先讲需求复述、可选路径对比、风险披露与下一步，再按分项逻辑准备报价结构。',
    redline:
      '方案未定，报价无意义；公开站只保留结构逻辑，真实运价、底价与客户信息一律走本地私密记录。',
    tone: 'accent',
    links: [
      { label: '项目运输方案怎么讲', href: `${BASE}03-project-cargo/solution-framing/`, tag: '方案结构' },
      { label: '报价结构', href: `${BASE}05-sales-business/quoting-structure/`, tag: '分项拆解' },
      // V2-SLOT: booking-handoff -> add 05-sales-business/booking-handoff/ & 07-case-library/shipment-checklist/
      { label: '询价反问清单', href: `${BASE}05-sales-business/inquiry-checklist/`, tag: '防翻车' },
    ],
  },
  {
    id: 'bd',
    code: 'BD',
    label: '展会拓客 / 英文沟通',
    summary: '会前锁定高价值目标，会后 48 小时内完成个性化跟进',
    firstMove:
      '展前预扫参展商并定主攻名单；展台先问出货区域、货型与是否含电，当晚完成 ABC 分级并准备英文跟进邮件。',
    redline:
      '展台绝不口头锁运价，统一承诺「收到装箱单与照片后在约定工作日内提供初步路径建议」。',
    tone: 'steel',
    links: [
      { label: '展会获客 SOP', href: `${BASE}05-sales-business/exhibition-sop/`, tag: '展会动作' },
      { label: '展会日历', href: `${BASE}08-resources/exhibitions/`, tag: '年度排期' },
      // V2-SLOT: english-templates -> add 06-english-terms/email-templates/ & 06-english-terms/call-phrases/
      { label: '行业英文术语表', href: `${BASE}06-english-terms/glossary/`, tag: '英文速查' },
    ],
  },
];
