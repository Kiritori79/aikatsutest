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
    image: "img/ichigo.png",
    keywords: ["太阳系", "直球元气", "成长主角", "舞台热爱"],
    description:
      "你像星宫莓一样，把「喜欢」写在脸上，也敢把梦想喊得很大声。你会被热情点燃，也会用自己的方式把快乐传染给身边的人。不是完美的天才型，却是让人忍不住想为你加油的那一类主角气质。",
    cardGradient: "linear-gradient(160deg, #ffb7c5 0%, #ff8fab 45%, #ffd93d 100%)",
    initial: "莓",
  },
  aoi: {
    id: "aoi",
    name: "雾矢葵",
    image: "img/aoi.png",
    keywords: ["冷静清晰", "观察力", "务实派", "温柔靠谱"],
    description:
      "你像雾矢葵一样，擅长把情绪收好，把该做的事一件件理清。你容易被「聪明又体贴」的细节打动，也更愿意用陪伴与倾听去支撑重要的人。安静的外表下，其实藏着很稳很强的内核。",
    cardGradient: "linear-gradient(165deg, #a8d8ea 0%, #7ec8e3 50%, #e0f7fa 100%)",
    initial: "葵",
  },
  ran: {
    id: "ran",
    name: "紫吹兰",
    image: "img/ran.png",
    keywords: ["不服输", "气场", "直线球", "实力至上"],
    description:
      "你像紫吹兰一样，对「变强」这件事很诚实。你不喜欢绕弯子，也更愿意用结果说话。你心软的方式很克制，但一旦认定了目标，就会用冷静又锋利的步伐一路走下去。",
    cardGradient: "linear-gradient(150deg, #c9b1ff 0%, #9b7ed9 50%, #f8bbd9 100%)",
    initial: "兰",
  },
  otome: {
    id: "otome",
    name: "有栖川乙女",
    image: "img/otome.png",
    keywords: ["童话脑", "可爱即正义", "小剧场", "甜系治愈"],
    description:
      "你像有栖川乙女一样，心里永远住着一个软绵绵的童话世界。你容易被可爱与浪漫吸引，也会用天真又真诚的方式去喜欢别人。你的快乐很纯粹，也常常在脑内上演让人会心一笑的小剧场。",
    cardGradient: "linear-gradient(165deg, #ffe0ef 0%, #ffc2d4 45%, #fff9c4 100%)",
    initial: "乙",
  },
  yurika: {
    id: "yurika",
    name: "藤堂尤里卡",
    image: "img/yurika.png",
    keywords: ["小恶魔", "神秘感", "反差萌", "自我风格"],
    description:
      "你像藤堂尤里卡一样，擅长用一点点距离感把自己包装得很「特别」。你享受被注视，也享受在夜色里独自散步的那种自由。嘴上可能很坏，心里却比谁都认真。",
    cardGradient: "linear-gradient(155deg, #2d2640 0%, #5c4a6e 40%, #b39ddb 100%)",
    initial: "尤",
  },
  sakura: {
    id: "sakura",
    name: "北大路樱",
    image: "img/sakura.png",
    keywords: ["和风静谧", "细腻体贴", "慢热温柔", "安定感"],
    description:
      "你像北大路樱一样，像雨后的空气一样干净、安静。你记得别人随口说的话，也会用不打扰的方式表达关心。你不是最吵闹的那一个，却常常是最让人安心的存在。",
    cardGradient: "linear-gradient(160deg, #fce4ec 0%, #f8bbd0 50%, #e1bee7 100%)",
    initial: "樱",
  },
  kaede: {
    id: "kaede",
    name: "一之濑枫",
    image: "img/kaede.png",
    keywords: ["自由派", "夜风系", "独特品味", "随性魅力"],
    description:
      "你像一之濑枫一样，带着一点成熟与洒脱的味道。你喜欢和别人不一样，也容易被「危险又迷人」的氛围吸引。你不会被规则绑死，更在意自己这一刻想怎么走。",
    cardGradient: "linear-gradient(150deg, #ff9a76 0%, #ff6a88 45%, #a18cd1 100%)",
    initial: "枫",
  },
  mizuki: {
    id: "mizuki",
    name: "神崎美月",
    image: "img/mizuki.png",
    keywords: ["顶点气质", "自律", "完美主义", "月亮型"],
    description:
      "你像神崎美月一样，把「强大」当成一种习惯。你思考得很深，也对自己要求很高。你未必总是最外向的人，但你的存在感像月光一样——不刺眼，却无法忽视。",
    cardGradient: "linear-gradient(165deg, #e8eaf6 0%, #c5cae9 40%, #9575cd 100%)",
    initial: "月",
  },
  seira: {
    id: "seira",
    name: "音城赛拉",
    image: "img/seira.png",
    keywords: ["摇滚魂", "直来直往", "热血", "想赢"],
    description:
      "你像音城赛拉一样，情绪很真、脚步很快。你喜欢冷空气里那种清醒感，也不害怕把「想赢」说出来。你会为朋友两肋插刀，也会用很帅的方式把问题扛下来。",
    cardGradient: "linear-gradient(155deg, #ef5350 0%, #ff7043 50%, #ffca28 100%)",
    initial: "赛",
  },
  kii: {
    id: "kii",
    name: "冴草纪伊",
    image: "img/kii.png",
    keywords: ["活力队友", "行动派", "气氛组", "一起成长"],
    description:
      "你像冴草纪伊一样，是那种「走啦走啦」会把人拉出门的类型。你喜欢热闹的房间、也喜欢和伙伴一起冲刺。你的开心很外放，也很容易因为「被邀请」而一整天都亮起来。",
    cardGradient: "linear-gradient(160deg, #fff59d 0%, #ffeb3b 45%, #ffcc80 100%)",
    initial: "纪",
  },
  sora: {
    id: "sora",
    name: "风泽空",
    image: "img/sora.png",
    keywords: ["艺术感", "氛围控", "幻想系", "黄昏粉紫"],
    description:
      "你像风泽空一样，更在意「整体好不好看」「氛围对不对」。你容易被粉紫色黄昏、展览与梦境感吸引，也想把脑海里的画面慢慢变成现实。你的强大来自很丰富的内在宇宙。",
    cardGradient: "linear-gradient(165deg, #e1bee7 0%, #ce93d8 40%, #90caf9 100%)",
    initial: "空",
  },
  maria: {
    id: "maria",
    name: "姬里玛利亚",
    image: "img/maria.png",
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
    question: "朋友临时取消了和你的约定，你更可能：",
    options: [
      {
        text: "算了，自己也能找点开心的事做",
        scores: { ichigo: 2, kaede: 1 }
      },
      {
        text: "虽然失落但会表示理解",
        scores: { maria: 2, sakura: 1 }
      },
      {
        text: "直接重新安排接下来的计划",
        scores: { ran: 2, mizuki: 1 }
      },
      {
        text: "开始一个人胡思乱想小剧场",
        scores: { otome: 2, sora: 1 }
      },
      {
        text: "嘴上没事，其实会记很久",
        scores: { yurika: 2, aoi: 1 }
      }
    ]
  },

  {
    question: "你更容易被哪种瞬间打动？",
    options: [
      {
        text: "有人在人群里朝你挥手",
        scores: { ichigo: 2, kii: 1 }
      },
      {
        text: "别人记得你随口提过的小事",
        scores: { aoi: 2, maria: 1 }
      },
      {
        text: "有人坚持完成不可能的目标",
        scores: { ran: 2, seira: 1 }
      },
      {
        text: "黄昏时很好看的天空",
        scores: { sora: 2, otome: 1 }
      },
      {
        text: "深夜里安静又孤独的氛围",
        scores: { yurika: 2, kaede: 1 }
      }
    ]
  },

  {
    question: "如果突然要上台讲话，你会：",
    options: [
      {
        text: "先讲再说，说着说着就顺了",
        scores: { ichigo: 2, kii: 1 }
      },
      {
        text: "提前在脑子里排练很多遍",
        scores: { aoi: 2, sakura: 1 }
      },
      {
        text: "想做到最好，绝不能失误",
        scores: { mizuki: 2, ran: 1 }
      },
      {
        text: "开始幻想很戏剧化的演出效果",
        scores: { otome: 2, sora: 1 }
      },
      {
        text: "表面冷静但心跳超快",
        scores: { yurika: 2, seira: 1 }
      }
    ]
  },

  {
    question: "你理想中的夜晚更像：",
    options: [
      {
        text: "和朋友边聊天边乱逛",
        scores: { ichigo: 2, kii: 1 }
      },
      {
        text: "待在家慢慢整理自己的事情",
        scores: { aoi: 2, sakura: 1 }
      },
      {
        text: "继续完成还没结束的目标",
        scores: { ran: 2, mizuki: 1 }
      },
      {
        text: "听音乐发呆到很晚",
        scores: { sora: 2, maria: 1 }
      },
      {
        text: "一个人出去吹风散步",
        scores: { yurika: 2, kaede: 1 }
      }
    ]
  },

  {
    question: "你最讨厌哪种感觉？",
    options: [
      {
        text: "被冷落",
        scores: { ichigo: 2, maria: 1 }
      },
      {
        text: "被误解",
        scores: { aoi: 2, sakura: 1 }
      },
      {
        text: "输掉重要的事情",
        scores: { ran: 2, seira: 1 }
      },
      {
        text: "现实太无聊",
        scores: { otome: 2, sora: 1 }
      },
      {
        text: "没人真正理解自己",
        scores: { yurika: 2, mizuki: 1 }
      }
    ]
  },

  {
    question: "你更喜欢哪种类型的“强大”？",
    options: [
      {
        text: "能感染周围的人",
        scores: { ichigo: 2, kii: 1 }
      },
      {
        text: "情绪稳定、让人安心",
        scores: { aoi: 2, maria: 1 }
      },
      {
        text: "即使跌倒也绝不认输",
        scores: { ran: 2, seira: 1 }
      },
      {
        text: "拥有丰富浪漫的精神世界",
        scores: { sora: 2, otome: 1 }
      },
      {
        text: "拥有独特到无法替代的气质",
        scores: { yurika: 2, mizuki: 1 }
      }
    ]
  },

  {
    question: "你理想中的房间更像：",
    options: [
      {
        text: "热热闹闹、有很多喜欢的小东西",
        scores: { ichigo: 2, kaede: 1 }
      },
      {
        text: "整洁舒服、方便生活",
        scores: { aoi: 2, sakura: 1 }
      },
      {
        text: "简单但很有质感",
        scores: { ran: 2, mizuki: 1 }
      },
      {
        text: "像童话世界或艺术展",
        scores: { sora: 2, otome: 1 }
      },
      {
        text: "带一点暗色和神秘感",
        scores: { yurika: 2, maria: 1 }
      }
    ]
  },

  {
    question: "如果拥有一种超能力，你更希望：",
    options: [
      {
        text: "让所有人开心",
        scores: { ichigo: 2, kii: 1 }
      },
      {
        text: "看懂别人真正的情绪",
        scores: { aoi: 2, sakura: 1 }
      },
      {
        text: "永远不会失败",
        scores: { mizuki: 2, ran: 1 }
      },
      {
        text: "把幻想中的东西变成现实",
        scores: { otome: 2, sora: 1 }
      },
      {
        text: "让别人永远记住自己",
        scores: { yurika: 2, seira: 1 }
      }
    ]
  },

  {
    question: "别人最可能怎么评价你？",
    options: [
      {
        text: "和你待在一起很轻松",
        scores: { ichigo: 2, maria: 1 }
      },
      {
        text: "你其实观察力很强",
        scores: { aoi: 2, sakura: 1 }
      },
      {
        text: "你对自己要求很高",
        scores: { ran: 2, mizuki: 1 }
      },
      {
        text: "你的世界观很特别",
        scores: { otome: 2, sora: 1 }
      },
      {
        text: "你有点神秘感",
        scores: { yurika: 2, kaede: 1 }
      }
    ]
  },

  {
    question: "你更接近哪种天气？",
    options: [
      {
        text: "夏天的大太阳",
        scores: { ichigo: 2, kii: 1 }
      },
      {
        text: "刚下过雨的傍晚",
        scores: { aoi: 2, maria: 1 }
      },
      {
        text: "冬天清冷的空气",
        scores: { ran: 2, seira: 1 }
      },
      {
        text: "粉紫色的晚霞",
        scores: { sora: 2, otome: 1 }
      },
      {
        text: "凌晨安静的夜风",
        scores: { yurika: 2, kaede: 1 }
      }
    ]
  },

  {
    question: "如果突然被很多人关注，你会：",
    options: [
      {
        text: "很兴奋，想和大家互动",
        scores: { ichigo: 2, kii: 1 }
      },
      {
        text: "会紧张但努力回应",
        scores: { maria: 2, aoi: 1 }
      },
      {
        text: "希望自己表现得更完美",
        scores: { mizuki: 2, ran: 1 }
      },
      {
        text: "开始设计整体氛围和风格",
        scores: { sora: 2, otome: 1 }
      },
      {
        text: "表面冷静，其实偷偷在意评价",
        scores: { yurika: 2, sakura: 1 }
      }
    ]
  },

  {
    question: "如果朋友突然情绪低落，你会：",
    options: [
      {
        text: "先努力逗对方开心",
        scores: { ichigo: 2, kii: 1 }
      },
      {
        text: "认真听对方讲话",
        scores: { aoi: 2, maria: 1 }
      },
      {
        text: "直接帮对方解决问题",
        scores: { ran: 2, seira: 1 }
      },
      {
        text: "给对方准备一点小惊喜",
        scores: { sora: 2, otome: 1 }
      },
      {
        text: "默默陪着但不会多问",
        scores: { sakura: 2, mizuki: 1 }
      }
    ]
  },

  {
    question: "深夜睡不着的时候，你通常会：",
    options: [
      {
        text: "开始幻想未来很多可能",
        scores: { ichigo: 2, kaede: 1 }
      },
      {
        text: "思考现实里的各种问题",
        scores: { aoi: 2, mizuki: 1 }
      },
      {
        text: "想“自己是不是还不够强”",
        scores: { ran: 2, seira: 1 }
      },
      {
        text: "脑内自动开始小剧场",
        scores: { otome: 2, sora: 1 }
      },
      {
        text: "突然很想一个人消失一下",
        scores: { yurika: 2, maria: 1 }
      }
    ]
  },
  
  {
    question: "你更希望别人怎么记住你？",
    options: [
      {
        text: "一个很温暖的人",
        scores: { maria: 2, ichigo: 1 }
      },
      {
        text: "聪明又可靠的人",
        scores: { aoi: 2, sakura: 1 }
      },
      {
        text: "强大到让人安心的人",
        scores: { ran: 2, mizuki: 1 }
      },
      {
        text: "很有自己风格的人",
        scores: { sora: 2, kaede: 1 }
      },
      {
        text: "特别到无法替代的人",
        scores: { yurika: 2, seira: 1 }
      }
    ]
  },
  
  {
    question: "如果突然被夸奖，你通常会：",
    options: [
      {
        text: "开心得立刻表现出来",
        scores: { ichigo: 2, kii: 1 }
      },
      {
        text: "表面冷静但会记很久",
        scores: { aoi: 2, maria: 1 }
      },
      {
        text: "嘴上说没什么，其实偷偷高兴",
        scores: { mizuki: 2, ran: 1 }
      },
      {
        text: "害羞到不知道怎么反应",
        scores: { maria: 2, otome: 1 }
      },
      {
        text: "故意骄傲地说“没错就这么宣传我",
        scores: { yurika: 2, kaede: 1 }
      }
    ]
  }
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
