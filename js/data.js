/**
 * 偶像活动初代印象测试 — 数据层
 * 修改角色文案、题目或分值时，只需编辑本文件。
 */

/** @typedef {{ [characterId: string]: number }} ScoreMap */

/** 计分用角色 id 顺序（同分时的优先顺序） */
const CHARACTER_IDS = [
  "ichigo",
  "aoi",
  "ran",
  "otome",
  "yurika",
  "sakura",
  "kaede",
  "mizuki",
  "seira",
  "kii",
  "sora",
  "maria",
];

/**
 * 角色资料：姓名、关键词、结果文案、SSR 卡用渐变与首字
 * @type {Record<string, {
 *   id: string,
 *   name: string,
 *   keywords: string[],
 *   description: string,
 *   cardGradient: string,
 *   initial: string
 * }>}
 */
const CHARACTERS = {
  ichigo: {
    id: "ichigo",
    name: "星宫莓",
    keywords: ["太阳系", "直球元气", "成长主角", "舞台热爱"],
    description:
      "你像星宫莓一样，把「喜欢」写在脸上，也敢把梦想喊得很大声。你会被热情点燃，也会用自己的方式把快乐传染给身边的人。不是完美的天才型，却是让人忍不住想为你加油的那一类主角气质。",
    cardGradient: "linear-gradient(160deg, #ffb7c5 0%, #ff8fab 45%, #ffd93d 100%)",
    initial: "莓",
  },
  aoi: {
    id: "aoi",
    name: "雾矢葵",
    keywords: ["冷静清晰", "观察力", "务实派", "温柔靠谱"],
    description:
      "你像雾矢葵一样，擅长把情绪收好，把该做的事一件件理清。你容易被「聪明又体贴」的细节打动，也更愿意用陪伴与倾听去支撑重要的人。安静的外表下，其实藏着很稳很强的内核。",
    cardGradient: "linear-gradient(165deg, #a8d8ea 0%, #7ec8e3 50%, #e0f7fa 100%)",
    initial: "葵",
  },
  ran: {
    id: "ran",
    name: "紫吹兰",
    keywords: ["不服输", "气场", "直线球", "实力至上"],
    description:
      "你像紫吹兰一样，对「变强」这件事很诚实。你不喜欢绕弯子，也更愿意用结果说话。你心软的方式很克制，但一旦认定了目标，就会用冷静又锋利的步伐一路走下去。",
    cardGradient: "linear-gradient(150deg, #c9b1ff 0%, #9b7ed9 50%, #f8bbd9 100%)",
    initial: "兰",
  },
  otome: {
    id: "otome",
    name: "有栖川乙女",
    keywords: ["童话脑", "可爱即正义", "小剧场", "甜系治愈"],
    description:
      "你像有栖川乙女一样，心里永远住着一个软绵绵的童话世界。你容易被可爱与浪漫吸引，也会用天真又真诚的方式去喜欢别人。你的快乐很纯粹，也常常在脑内上演让人会心一笑的小剧场。",
    cardGradient: "linear-gradient(165deg, #ffe0ef 0%, #ffc2d4 45%, #fff9c4 100%)",
    initial: "乙",
  },
  yurika: {
    id: "yurika",
    name: "藤堂尤里卡",
    keywords: ["小恶魔", "神秘感", "反差萌", "自我风格"],
    description:
      "你像藤堂尤里卡一样，擅长用一点点距离感把自己包装得很「特别」。你享受被注视，也享受在夜色里独自散步的那种自由。嘴上可能很坏，心里却比谁都认真。",
    cardGradient: "linear-gradient(155deg, #2d2640 0%, #5c4a6e 40%, #b39ddb 100%)",
    initial: "尤",
  },
  sakura: {
    id: "sakura",
    name: "北大路樱",
    keywords: ["和风静谧", "细腻体贴", "慢热温柔", "安定感"],
    description:
      "你像北大路樱一样，像雨后的空气一样干净、安静。你记得别人随口说的话，也会用不打扰的方式表达关心。你不是最吵闹的那一个，却常常是最让人安心的存在。",
    cardGradient: "linear-gradient(160deg, #fce4ec 0%, #f8bbd0 50%, #e1bee7 100%)",
    initial: "樱",
  },
  kaede: {
    id: "kaede",
    name: "一之濑枫",
    keywords: ["自由派", "夜风系", "独特品味", "随性魅力"],
    description:
      "你像一之濑枫一样，带着一点成熟与洒脱的味道。你喜欢和别人不一样，也容易被「危险又迷人」的氛围吸引。你不会被规则绑死，更在意自己这一刻想怎么走。",
    cardGradient: "linear-gradient(150deg, #ff9a76 0%, #ff6a88 45%, #a18cd1 100%)",
    initial: "枫",
  },
  mizuki: {
    id: "mizuki",
    name: "神崎美月",
    keywords: ["顶点气质", "自律", "完美主义", "月亮型"],
    description:
      "你像神崎美月一样，把「强大」当成一种习惯。你思考得很深，也对自己要求很高。你未必总是最外向的人，但你的存在感像月光一样——不刺眼，却无法忽视。",
    cardGradient: "linear-gradient(165deg, #e8eaf6 0%, #c5cae9 40%, #9575cd 100%)",
    initial: "月",
  },
  seira: {
    id: "seira",
    name: "音城赛拉",
    keywords: ["摇滚魂", "直来直往", "热血", "想赢"],
    description:
      "你像音城赛拉一样，情绪很真、脚步很快。你喜欢冷空气里那种清醒感，也不害怕把「想赢」说出来。你会为朋友两肋插刀，也会用很帅的方式把问题扛下来。",
    cardGradient: "linear-gradient(155deg, #ef5350 0%, #ff7043 50%, #ffca28 100%)",
    initial: "赛",
  },
  kii: {
    id: "kii",
    name: "冴草纪伊",
    keywords: ["活力队友", "行动派", "气氛组", "一起成长"],
    description:
      "你像冴草纪伊一样，是那种「走啦走啦」会把人拉出门的类型。你喜欢热闹的房间、也喜欢和伙伴一起冲刺。你的开心很外放，也很容易因为「被邀请」而一整天都亮起来。",
    cardGradient: "linear-gradient(160deg, #fff59d 0%, #ffeb3b 45%, #ffcc80 100%)",
    initial: "纪",
  },
  sora: {
    id: "sora",
    name: "风泽空",
    keywords: ["艺术感", "氛围控", "幻想系", "黄昏粉紫"],
    description:
      "你像风泽空一样，更在意「整体好不好看」「氛围对不对」。你容易被粉紫色黄昏、展览与梦境感吸引，也想把脑海里的画面慢慢变成现实。你的强大来自很丰富的内在宇宙。",
    cardGradient: "linear-gradient(165deg, #e1bee7 0%, #ce93d8 40%, #90caf9 100%)",
    initial: "空",
  },
  maria: {
    id: "maria",
    name: "姬里玛利亚",
    keywords: ["软萌", "天然", "治愈", "害羞真诚"],
    description:
      "你像姬里玛利亚一样，像棉花糖一样柔软，却也有很真的坚持。你会因为小动物与可爱事物心软，也会在突然被夸奖时害羞到不知所措。你的温柔不是技巧，是本性。",
    cardGradient: "linear-gradient(160deg, #ffe0f0 0%, #f8bbd9 50%, #e1bee7 100%)",
    initial: "玛",
  },
};

/**
 * 题目：每题 5 个选项，选项内 scores 为各角色加分（未写视为 0）
 * @type {{ id: string, text: string, options: { label: string, scores: ScoreMap }[] }[]}
 */
const QUESTIONS = [
  {
    id: "q1",
    text: "如果今天突然不用上课/上班，你会：",
    options: [
      { label: "约好朋友出去玩", scores: { ichigo: 2, kii: 2 } },
      { label: "待在家慢慢整理最近的事情", scores: { aoi: 2, sakura: 2 } },
      { label: "去完成已经计划好的目标", scores: { ran: 2, mizuki: 2 } },
      { label: "找一家氛围很好的店发呆", scores: { sora: 2, otome: 1 } },
      { label: "半夜突然出门散步", scores: { yurika: 2, kaede: 2 } },
    ],
  },
  {
    id: "q2",
    text: "你更容易被什么吸引？",
    options: [
      { label: "聪明又观察细致的人", scores: { aoi: 2, sakura: 1 } },
      { label: "气场很强的人", scores: { ran: 2, seira: 2 } },
      { label: "有感染力的人", scores: { ichigo: 2, maria: 2 } },
      { label: "像童话一样的东西", scores: { otome: 2, sora: 2 } },
      { label: "神秘又有距离感的人", scores: { yurika: 2, mizuki: 2 } },
    ],
  },
  {
    id: "q3",
    text: "深夜睡不着时，你通常会：",
    options: [
      { label: "开始幻想未来很多可能", scores: { ichigo: 2, kaede: 2 } },
      { label: "思考现实里的问题", scores: { aoi: 2, mizuki: 2 } },
      { label: "想「自己还不够强」", scores: { ran: 2, seira: 1 } },
      { label: "脑内自动开始小剧场", scores: { otome: 2, yurika: 2 } },
      { label: "突然想创作点什么", scores: { sora: 2, sakura: 1 } },
    ],
  },
  {
    id: "q4",
    text: "你最喜欢哪种「闪闪发光」？",
    options: [
      { label: "舞台上的热烈感", scores: { ichigo: 2, kii: 1 } },
      { label: "绝对不会输的压迫感", scores: { mizuki: 2, seira: 2 } },
      { label: "像梦境一样的氛围", scores: { sora: 2, otome: 2 } },
      { label: "危险又迷人的感觉", scores: { yurika: 2, kaede: 1 } },
      { label: "认真努力后的成果", scores: { aoi: 2, ran: 2 } },
    ],
  },
  {
    id: "q5",
    text: "如果朋友突然 emo 了，你会：",
    options: [
      { label: "认真听对方讲话", scores: { aoi: 2, maria: 2 } },
      { label: "直接帮对方解决问题", scores: { ran: 2, seira: 1 } },
      { label: "给对方准备一点小惊喜", scores: { otome: 2, sora: 1 } },
      { label: "先努力逗对方开心", scores: { ichigo: 2, kii: 1 } },
      { label: "默默陪着但不会多问", scores: { sakura: 2, mizuki: 1 } },
    ],
  },
  {
    id: "q6",
    text: "你更喜欢哪种天气？",
    options: [
      { label: "黄昏天空变成粉紫色的时候", scores: { sora: 2, maria: 1 } },
      { label: "大晴天", scores: { ichigo: 2, kii: 1 } },
      { label: "刚下完雨的安静天气", scores: { aoi: 2, sakura: 2 } },
      { label: "冬天冷冷的空气", scores: { ran: 2, seira: 1 } },
      { label: "深夜有风的时候", scores: { yurika: 2, kaede: 1 } },
    ],
  },
  {
    id: "q7",
    text: "你会因为什么突然开心？",
    options: [
      { label: "有人邀请你一起做事", scores: { ichigo: 2, maria: 1 } },
      { label: "被人记住随口说的话", scores: { aoi: 2, sakura: 1 } },
      { label: "自己进步很明显", scores: { ran: 2, mizuki: 2 } },
      { label: "看到漂亮又可爱的东西", scores: { otome: 2, sora: 1 } },
      { label: "被说「你很特别」", scores: { yurika: 2, kaede: 2 } },
    ],
  },
  {
    id: "q8",
    text: "如果必须参加比赛，你会：",
    options: [
      { label: "先冲了再说", scores: { ichigo: 2, kii: 1 } },
      { label: "提前做很多准备", scores: { aoi: 2, mizuki: 2 } },
      { label: "想赢，而且不想输", scores: { ran: 2, seira: 1 } },
      { label: "先想整体表现好不好看", scores: { sora: 2, otome: 1 } },
      { label: "想做得和别人不一样", scores: { yurika: 2, kaede: 1 } },
    ],
  },
  {
    id: "q9",
    text: "你理想中的房间更像：",
    options: [
      { label: "整洁舒服、方便生活", scores: { aoi: 2, sakura: 2 } },
      { label: "简单但很有质感", scores: { ran: 2, mizuki: 1 } },
      { label: "像童话或艺术展", scores: { sora: 2, otome: 1 } },
      { label: "有一点暗色系和神秘感", scores: { yurika: 2, kaede: 1 } },
      { label: "热闹、有很多喜欢的小东西", scores: { ichigo: 2, kii: 1 } },
    ],
  },
  {
    id: "q10",
    text: "你更想拥有哪种能力？",
    options: [
      { label: "让大家开心", scores: { ichigo: 2, maria: 1 } },
      { label: "一眼看透别人情绪", scores: { aoi: 2, sakura: 1 } },
      { label: "永远保持强大", scores: { ran: 2, seira: 1 } },
      { label: "把幻想变成现实", scores: { otome: 2, sora: 1 } },
      { label: "让别人永远记住自己", scores: { yurika: 2, mizuki: 2 } },
    ],
  },
  {
    id: "q11",
    text: "如果你是电影角色，你更像：",
    options: [
      { label: "成长型主角", scores: { ichigo: 2, kii: 2 } },
      { label: "军师型角色", scores: { aoi: 2, sakura: 2 } },
      { label: "冷脸强者", scores: { ran: 2, mizuki: 2 } },
      { label: "梦幻系配角", scores: { otome: 2, sora: 2 } },
      { label: "亦正亦邪的神秘角色", scores: { yurika: 2, kaede: 2 } },
    ],
  },
  {
    id: "q12",
    text: "你最容易因为什么心软？",
    options: [
      { label: "别人很努力的时候", scores: { ichigo: 2, maria: 2 } },
      { label: "别人藏起来的小情绪", scores: { aoi: 2, sakura: 2 } },
      { label: "有人拼命坚持目标", scores: { ran: 2, mizuki: 2 } },
      { label: "小动物或可爱东西", scores: { otome: 2, sora: 1 } },
      { label: "孤独感", scores: { yurika: 2, kaede: 1 } },
    ],
  },
  {
    id: "q13",
    text: "你更喜欢哪种「强大」？",
    options: [
      { label: "能带动别人", scores: { ichigo: 2, kii: 1 } },
      { label: "永远冷静", scores: { aoi: 2, mizuki: 1 } },
      { label: "不服输", scores: { ran: 2, seira: 1 } },
      { label: "有丰富内心世界", scores: { sora: 2, otome: 1 } },
      { label: "有独特魅力", scores: { yurika: 2, kaede: 1 } },
    ],
  },
  {
    id: "q14",
    text: "如果突然被夸奖，你会：",
    options: [
      { label: "嘴上无所谓其实有点高兴", scores: { ran: 2, seira: 1 } },
      { label: "超开心直接表现出来", scores: { ichigo: 2, kii: 1 } },
      { label: "表面冷静但会记很久", scores: { aoi: 2, sakura: 1 } },
      { label: "害羞到不知道怎么反应", scores: { maria: 2, otome: 1 } },
      { label: "故意装得更神秘", scores: { yurika: 2, kaede: 1 } },
    ],
  },
  {
    id: "q15",
    text: "你觉得自己更接近：",
    options: [
      { label: "月亮", scores: { aoi: 2, sakura: 1 } },
      { label: "火焰", scores: { ran: 2, seira: 1 } },
      { label: "云朵", scores: { otome: 2, sora: 1 } },
      { label: "太阳", scores: { ichigo: 2, kii: 1 } },
      { label: "夜晚", scores: { yurika: 2, mizuki: 1 } },
    ],
  },
];

/**
 * 每题每角理论最高分（用于匹配百分比）
 */
function computeMaxScoresPerCharacter(questions, ids) {
  /** @type {Record<string, number>} */
  const max = {};
  ids.forEach((id) => {
    max[id] = 0;
  });
  questions.forEach((q) => {
    ids.forEach((id) => {
      let best = 0;
      q.options.forEach((opt) => {
        const v = opt.scores[id] || 0;
        if (v > best) best = v;
      });
      max[id] += best;
    });
  });
  return max;
}

const MAX_SCORES_BY_CHARACTER = computeMaxScoresPerCharacter(QUESTIONS, CHARACTER_IDS);

/** 供非模块 `app.js` 读取 */
window.AIKATSU_QUIZ_DATA = {
  CHARACTER_IDS,
  CHARACTERS,
  QUESTIONS,
  MAX_SCORES_BY_CHARACTER,
};
