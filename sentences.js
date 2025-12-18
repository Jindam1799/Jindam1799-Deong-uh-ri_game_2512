const sentenceData = {
  day1: [
    // 1번
    {
      id: 'sentence1',
      level: 1,
      isFinal: false,
      korean: '대나무숲 한 곳',
      chinese: {
        hanzi: ['一', '片', '竹林'],
        pinyin: ['yí', 'piàn', 'zhúlín'],
      },
    },
    {
      id: 'sentence1',
      level: 2,
      isFinal: false,
      korean: '대나무숲이 한 곳 있다.',
      chinese: {
        hanzi: ['有', '一', '片', '竹林'],
        pinyin: ['yǒu', 'yí', 'piàn', 'zhúlín'],
      },
    },
    {
      id: 'sentence1',
      level: 3,
      isFinal: false,
      korean: '근처에 대나무숲이 한 곳 있다. ',
      chinese: {
        hanzi: ['附近', '有', '一', '片', '竹林'],
        pinyin: ['fùjìn', 'yǒu', 'yí', 'piàn', 'zhúlín'],
      },
    },
    {
      id: 'sentence1',
      level: 4,
      isFinal: true,
      korean: '학교 근처에 대나무숲이 한 곳 있다. ',
      chinese: {
        hanzi: ['学校', '附近', '有', '一', '片', '竹林'],
        pinyin: ['xuéxiào', 'fùjìn', 'yǒu', 'yí', 'piàn', 'zhúlín'],
      },
    },

    // 2번
    {
      id: 'sentence2',
      level: 1,
      isFinal: false,
      korean: '자원봉사자가 있다.',
      chinese: {
        hanzi: ['有', '志愿者'],
        pinyin: ['yǒu', 'zhìyuànzhě'],
      },
    },
    {
      id: 'sentence2',
      level: 2,
      isFinal: false,
      korean: '자원봉사자 300명이 있다.',
      chinese: {
        hanzi: ['有', '三百', '名', '志愿者'],
        pinyin: ['yǒu', 'sānbǎi', 'míng', 'zhìyuànzhě'],
      },
    },
    {
      id: 'sentence2',
      level: 3,
      isFinal: false,
      korean: '자원봉사자 300여 명이 있다.',
      chinese: {
        hanzi: ['有三百多名志愿者'],
        pinyin: ['yǒu', 'sānbǎi', 'duō', 'míng', 'zhìyuànzhě'],
      },
    },
    {
      id: 'sentence2',
      level: 4,
      isFinal: true,
      korean: '이 비닐봉지 안에 생수 다섯 병이 있다.',
      chinese: {
        hanzi: ['那', '个', '机构', '有', '三百', '多', '名', '志愿者'],
        pinyin: [
          'nà',
          'ge',
          'jīgòu',
          'yǒu',
          'sānbǎi',
          'duō',
          'míng',
          'zhìyuànzhě',
        ],
      },
    },

    // 3번
    {
      id: 'sentence3',
      level: 1,
      isFinal: false,
      korean: '협조해주세요.',
      chinese: {
        hanzi: ['请配合'],
        pinyin: ['qǐng', 'pèihé'],
      },
    },
    {
      id: 'sentence3',
      level: 2,
      isFinal: false,
      korean: '일정에 협조해주세요.',
      chinese: {
        hanzi: ['请', '配合', '安排'],
        pinyin: ['qǐng', 'pèihé', 'ānpái'],
      },
    },
    {
      id: 'sentence3',
      level: 3,
      isFinal: true,
      korean: '그들의 일정에 협조해주세요.',
      chinese: {
        hanzi: ['请', '配合', '他们', '的', '安排'],
        pinyin: ['qǐng', 'pèihé', 'tāmen', 'de', 'ānpái'],
      },
    },

    // 4번
    {
      id: 'sentence4',
      level: 1,
      isFinal: false,
      korean: '역사적 가치',
      chinese: {
        hanzi: ['历史', '价值'],
        pinyin: ['lìshǐ', 'jiàzhí'],
      },
    },
    {
      id: 'sentence4',
      level: 2,
      isFinal: false,
      korean: '매우 높은 역사적 가치',
      chinese: {
        hanzi: ['很高', '的', '历史', '价值'],
        pinyin: ['hěn gāo', 'de', 'lìshǐ', 'jiàzhí'],
      },
    },
    {
      id: 'sentence4',
      level: 3,
      isFinal: false,
      korean: '매우 높은 역사적 가치를 가지고 있다.',
      chinese: {
        hanzi: ['具有', '很', '高', '的', '历史', '价值'],
        pinyin: ['jùyǒu', 'hěn', 'gāo', 'de', 'lìshǐ', 'jiàzhí'],
      },
    },
    {
      id: 'sentence4',
      level: 4,
      isFinal: true,
      korean: '그 그림은 매우 높은 역사적 가치를 가지고 있다.',
      chinese: {
        hanzi: ['那', '幅', '画', '具有', '很', '高', '的', '历史', '价值'],
        pinyin: [
          'nà',
          'fú',
          'huà',
          'jùyǒu',
          'hěn',
          'gāo',
          'de',
          'lìshǐ',
          'jiàzhí',
        ],
      },
    },

    // 5번
    {
      id: 'sentence5',
      level: 1,
      isFinal: false,
      korean: '어느 부서',
      chinese: {
        hanzi: ['哪', '个', '部门'],
        pinyin: ['nǎ', 'ge', 'bùmén'],
      },
    },
    {
      id: 'sentence5',
      level: 2,
      isFinal: false,
      korean: '어느 부서가 출시해요?',
      chinese: {
        hanzi: ['哪', '个', '部门', '推出'],
        pinyin: ['nǎ', 'ge', 'bùmén', 'tuīchū'],
      },
    },
    {
      id: 'sentence5',
      level: 3,
      isFinal: false,
      korean: '어느 부서가 출시한 것',
      chinese: {
        hanzi: ['哪', '个', '部门', '推出', '的'],
        pinyin: ['nǎ', 'ge', 'bùmén', 'tuīchū', 'de'],
      },
    },
    {
      id: 'sentence5',
      level: 4,
      isFinal: false,
      korean: '어느 부서가 출시한 건가요?',
      chinese: {
        hanzi: ['是', '哪', '个', '部门', '推出', '的'],
        pinyin: ['shì', 'nǎ', 'ge', 'bùmén', 'tuīchū', 'de'],
      },
    },
    {
      id: 'sentence5',
      level: 5,
      isFinal: true,
      korean: '그 제품은 어느 부서가 출시한 건가요?',
      chinese: {
        hanzi: ['那', '个', '产品', '是', '哪', '个', '部门', '推出', '的'],
        pinyin: [
          'nà',
          'ge',
          'chǎnpǐn',
          'shì',
          'nǎ',
          'ge',
          'bùmén',
          'tuīchū',
          'de',
        ],
      },
    },
    // 6번
    {
      id: 'sentence6',
      level: 1,
      isFinal: false,
      korean: '나는 걱정한다.',
      chinese: {
        hanzi: ['我', '发愁'],
        pinyin: ['wǒ', 'fāchóu'],
      },
    },
    {
      id: 'sentence6',
      level: 2,
      isFinal: false,
      korean: '나는 걱정하고 있다.',
      chinese: {
        hanzi: ['感冒', '得', '太', '严重'],
        pinyin: ['gǎnmào', 'de', 'tài', 'yánzhòng'],
      },
    },
    {
      id: 'sentence6',
      level: 3,
      isFinal: false,
      korean: '나는 일정 때문에 걱정하고 있다.',
      chinese: {
        hanzi: ['我', '正', '为', '安排', '发愁', '呢'],
        pinyin: ['wǒ', 'zhèng', 'wèi', 'ānpái', 'fāchóu', 'ne'],
      },
    },
    {
      id: 'sentence6',
      level: 4,
      isFinal: true,
      korean: '나는 그 일정 때문에 걱정하고 있다.',
      chinese: {
        hanzi: ['我', '正', '为', '那', '个', '安排', '发愁', '呢'],
        pinyin: ['wǒ', 'zhèng', 'wèi', 'nà', 'ge', 'ānpái', 'fāchóu', 'ne'],
      },
    },
    // 7번
    {
      id: 'sentence7',
      level: 1,
      isFinal: false,
      korean: '체험했다, 경험했다',
      chinese: {
        hanzi: ['体验', '到', '了'],
        pinyin: ['tǐyàn', 'dào', 'le'],
      },
    },
    {
      id: 'sentence7',
      level: 2,
      isFinal: false,
      korean: '많은 것을 체험했다.',
      chinese: {
        hanzi: ['体验', '到', '了', '很多'],
        pinyin: ['tǐyàn', 'dào', 'le', 'hěn', 'duō'],
      },
    },
    {
      id: 'sentence7',
      level: 3,
      isFinal: false,
      korean: '우리가 많은 것을 체험하게 했다.',
      chinese: {
        hanzi: ['让', '我们', '体验', '到', '了', '很', '多'],
        pinyin: ['ràng', 'wǒmen', 'tǐyàn', 'dào', 'le', 'hěn', 'duō'],
      },
    },
    {
      id: 'sentence7',
      level: 4,
      isFinal: true,
      korean: '이 프로젝트는 우리가 많은 것을 체험하게 했다.',
      chinese: {
        hanzi: [
          '这',
          '个',
          '项目',
          '让',
          '我们',
          '体验',
          '到',
          '了',
          '很',
          '多',
        ],
        pinyin: [
          'zhè',
          'ge',
          'xiàngmù',
          'ràng',
          'wǒmen',
          'tǐyàn',
          'dào',
          'le',
          'hěn',
          'duō',
        ],
      },
    },

    // 8번
    {
      id: 'sentence8',
      level: 1,
      isFinal: false,
      korean: '서랍에 두다.',
      chinese: {
        hanzi: ['放', '在', '抽屉', '里'],
        pinyin: ['fàng', 'zài', 'chōuti', 'lǐ'],
      },
    },
    {
      id: 'sentence8',
      level: 2,
      isFinal: false,
      korean: '서랍에 두었다.',
      chinese: {
        hanzi: ['放', '在', '了', '抽屉', '里'],
        pinyin: ['fàng', 'zài', 'le', 'chōuti', 'lǐ'],
      },
    },
    {
      id: 'sentence8',
      level: 3,
      isFinal: false,
      korean: '자료를 서랍에 두었다.',
      chinese: {
        hanzi: ['把', '资料', '放', '在', '了', '抽屉', '里'],
        pinyin: ['bǎ', 'zīliào', 'fàng', 'zài', 'le', 'chōuti', 'lǐ'],
      },
    },
    {
      id: 'sentence8',
      level: 4,
      isFinal: true,
      korean: '나는 자료를 서랍에 두었다.',
      chinese: {
        hanzi: ['我', '把', '资料', '放', '在', '了', '抽屉', '里'],
        pinyin: ['wǒ', 'bǎ', 'zīliào', 'fàng', 'zài', 'le', 'chōuti', 'lǐ'],
      },
    },
    // 9번
    {
      id: 'sentence9',
      level: 1,
      isFinal: false,
      korean: '부정했다.',
      chinese: {
        hanzi: ['否定', '了'],
        pinyin: ['fǒudìng', 'le'],
      },
    },
    {
      id: 'sentence9',
      level: 2,
      isFinal: false,
      korean: '상사에게 부정되었다. (= 상사에 의해 부정 당했다.)',
      chinese: {
        hanzi: ['被', '领导', '否定', '了'],
        pinyin: ['bèi', 'lǐngdǎo', 'fǒudìng', 'le'],
      },
    },
    {
      id: 'sentence9',
      level: 3,
      isFinal: false,
      korean: '기획이 상사에게 부정되었다. (= 기획이 상사에 의해 부정 당했다.)',
      chinese: {
        hanzi: ['企划', '被', '领导', '否定', '了'],
        pinyin: ['qǐhuà', 'bèi', 'lǐngdǎo', 'fǒudìng', 'le'],
      },
    },
    {
      id: 'sentence9',
      level: 4,
      isFinal: true,
      korean:
        '내 기획이 상사에게 부정되었다. (= 내 기획이 상사에 의해 부정 당했다.)',
      chinese: {
        hanzi: ['我', '的', '企划', '被', '领导', '否定', '了'],
        pinyin: ['wǒ', 'de', 'qǐhuà', 'bèi', 'lǐngdǎo', 'fǒudìng', 'le'],
      },
    },
    // 10번
    {
      id: 'sentence10',
      level: 1,
      isFinal: false,
      korean: '토론 대회',
      chinese: {
        hanzi: ['辩论比赛'],
        pinyin: ['biànlùn bǐsài'],
      },
    },
    {
      id: 'sentence10',
      level: 2,
      isFinal: false,
      korean: '토론 대회에 참가하다.',
      chinese: {
        hanzi: ['参加', '辩论', '比赛'],
        pinyin: ['cānjiā', 'biànlùn', 'bǐsài'],
      },
    },
    {
      id: 'sentence10',
      level: 3,
      isFinal: false,
      korean: '학교를 대표하여 토론 대회에 참가하다.',
      chinese: {
        hanzi: ['代表', '学校', '参加', '辩论', '比赛'],
        pinyin: ['dàibiǎo', 'xuéxiào', 'cānjiā', 'biànlùn', 'bǐsài'],
      },
    },
    {
      id: 'sentence10',
      level: 4,
      isFinal: false,
      korean: '학교를 대표해 토론 대회에 참가할 것이다.',
      chinese: {
        hanzi: ['将', '代表', '学校', '参加', '辩论', '比赛'],
        pinyin: ['jiāng', 'dàibiǎo', 'xuéxiào', 'cānjiā', 'biànlùn', 'bǐsài'],
      },
    },
    {
      id: 'sentence10',
      level: 5,
      isFinal: true,
      korean: '그녀는 학교를 대표해 토론 대회에 참가할 것이다.',
      chinese: {
        hanzi: ['她', '将', '代表', '学校', '参加', '辩论', '比赛'],
        pinyin: [
          'tā',
          'jiāng',
          'dàibiǎo',
          'xuéxiào',
          'cānjiā',
          'biànlùn',
          'bǐsài',
        ],
      },
    },
  ],
  day2: [
    // 11번
    {
      id: 'sentence11',
      level: 1,
      isFinal: false,
      korean: '탁구를 치다.',
      chinese: {
        hanzi: ['打', '乒乓球'],
        pinyin: ['dǎ', 'pīngpāngqiú'],
      },
    },
    {
      id: 'sentence11',
      level: 2,
      isFinal: false,
      korean: '탁구를 칠 줄 안다.',
      chinese: {
        hanzi: ['会', '打', '乒乓球'],
        pinyin: ['huì', 'dǎ', 'pīngpāngqiú'],
      },
    },
    {
      id: 'sentence11',
      level: 3,
      isFinal: false,
      korean: '탁구를 매우 잘 칠 줄 안다.',
      chinese: {
        hanzi: ['很', '会', '打', '乒乓球'],
        pinyin: ['hěn', 'huì', 'dǎ', 'pīngpāngqiú'],
      },
    },
    {
      id: 'sentence11',
      level: 4,
      isFinal: true,
      korean: '내 친구는 탁구를 매우 잘 칠 줄 안다.',
      chinese: {
        hanzi: ['我的', '朋友', '很', '会', '打', '乒乓球'],
        pinyin: ['wǒ', 'de', 'péngyou', 'hěn', 'huì', 'dǎ', 'pīngpāngqiú'],
      },
    },

    // 12번
    {
      id: 'sentence12',
      level: 1,
      isFinal: false,
      korean: '교류가 부족하다.',
      chinese: {
        hanzi: ['缺少', '交流'],
        pinyin: ['quēshǎo', 'jiāoliú'],
      },
    },
    {
      id: 'sentence12',
      level: 2,
      isFinal: false,
      korean: '어른들과 교류가 부족하다.',
      chinese: {
        hanzi: ['和', '长辈', '缺少', '交流'],
        pinyin: ['hé', 'zhǎngbèi', 'quēshǎo', 'jiāoliú'],
      },
    },
    {
      id: 'sentence12',
      level: 3,
      isFinal: false,
      korean: '그는 어른들과 교류가 부족하다.',
      chinese: {
        hanzi: ['他', '和', '长辈', '缺少', '交流'],
        pinyin: ['tā', 'hé', 'zhǎngbèi', 'quēshǎo', 'jiāoliú'],
      },
    },
    {
      id: 'sentence12',
      level: 4,
      isFinal: true,
      korean:
        '그는 어른들과 교류가 부족하다. (= 그는 어른들과의 사이에 교류가 부족하다.)',
      chinese: {
        hanzi: ['他', '和', '长辈', '之间', '缺少', '交流'],
        pinyin: ['tā', 'hé', 'zhǎngbèi', 'zhījiān', 'quēshǎo', 'jiāoliú'],
      },
    },

    // 13번
    {
      id: 'sentence13',
      level: 1,
      isFinal: false,
      korean: '매력이 있다, 매력적이다',
      chinese: {
        hanzi: ['有', '魅力'],
        pinyin: ['yǒu', 'mèilì'],
      },
    },
    {
      id: 'sentence13',
      level: 2,
      isFinal: false,
      korean: '매우 매력적이다.',
      chinese: {
        hanzi: ['十分', '有', '魅力'],
        pinyin: ['shífēn', 'yǒu', 'mèilì'],
      },
    },
    {
      id: 'sentence13',
      level: 3,
      isFinal: false,
      korean: '전통 수공예품은 매우 매력적이다.',
      chinese: {
        hanzi: ['传统', '手工艺品', '十分', '有', '魅力'],
        pinyin: ['chuántǒng', 'shǒugōngyìpǐn', 'shífēn', 'yǒu', 'mèilì'],
      },
    },
    {
      id: 'sentence13',
      level: 4,
      isFinal: true,
      korean: '그 전통 수공예품들은 매우 매력적이다.',
      chinese: {
        hanzi: ['那', '些', '传统', '手工艺品', '十分', '有', '魅力'],
        pinyin: [
          'nà',
          'xiē',
          'chuántǒng',
          'shǒugōngyìpǐn',
          'shífēn',
          'yǒu',
          'mèilì',
        ],
      },
    },

    // 14번
    {
      id: 'sentence14',
      level: 1,
      isFinal: false,
      korean: '신경 안 쓰는 태도',
      chinese: {
        hanzi: ['无所谓', '的', '态度'],
        pinyin: ['wúsuǒwèi', 'de', 'tàidù'],
      },
    },
    {
      id: 'sentence14',
      level: 2,
      isFinal: false,
      korean: '그런 신경 안 쓰는 태도',
      chinese: {
        hanzi: ['那', '种', '无所谓', '的', '态度'],
        pinyin: ['nà', 'zhǒng', 'wúsuǒwèi', 'de', 'tàidù'],
      },
    },
    {
      id: 'sentence14',
      level: 3,
      isFinal: false,
      korean: '그런 신경 안 쓰는 태도이다.',
      chinese: {
        hanzi: ['是', '那', '种', '无所谓', '的', '态度'],
        pinyin: ['shì', 'nà', 'zhǒng', 'wúsuǒwèi', 'de', 'tàidù'],
      },
    },
    {
      id: 'sentence14',
      level: 4,
      isFinal: false,
      korean: '여전히 그런 신경 안 쓰는 태도이다.',
      chinese: {
        hanzi: ['依然', '是', '那', '种', '无所谓', '的', '态度'],
        pinyin: ['yīrán', 'shì', 'nà', 'zhǒng', 'wúsuǒwèi', 'de', 'tàidù'],
      },
    },
    {
      id: 'sentence14',
      level: 5,
      isFinal: true,
      korean: '그는 여전히 그런 신경 안 쓰는 태도이다.',
      chinese: {
        hanzi: ['他', '依然', '是', '那', '种', '无所谓', '的', '态度'],
        pinyin: [
          'tā',
          'yīrán',
          'shì',
          'nà',
          'zhǒng',
          'wúsuǒwèi',
          'de',
          'tàidù',
        ],
      },
    },

    // 15번
    {
      id: 'sentence15',
      level: 1,
      isFinal: false,
      korean: '사람들의 건강',
      chinese: {
        hanzi: ['人们', '的', '健康'],
        pinyin: ['rénmen', 'de', 'jiànkāng'],
      },
    },
    {
      id: 'sentence15',
      level: 2,
      isFinal: false,
      korean: '사람들의 건강을 해치다.',
      chinese: {
        hanzi: ['危害', '人们', '的', '健康'],
        pinyin: ['wēihài', 'rénmen', 'de', 'jiànkāng'],
      },
    },
    {
      id: 'sentence15',
      level: 3,
      isFinal: false,
      korean: '사람들의 건강을 심각하게 해치다.',
      chinese: {
        hanzi: ['严重', '危害', '人们', '的', '健康'],
        pinyin: ['yánzhòng', 'wēihài', 'rénmen', 'de', 'jiànkāng'],
      },
    },
    {
      id: 'sentence15',
      level: 4,
      isFinal: false,
      korean: '사람들의 건강을 심각하게 해칠 것이다.',
      chinese: {
        hanzi: ['会', '严重', '危害', '人们', '的', '健康'],
        pinyin: ['Huì', 'yánzhòng', 'wēihài', 'rénmen', 'de', 'jiànkāng'],
      },
    },
    {
      id: 'sentence15',
      level: 5,
      isFinal: true,
      korean:
        '오랫동안 오래 앉아 있는 것은 사람들의 건강을 심각하게 해칠 것이다.',
      chinese: {
        hanzi: ['长期', '久坐', '严重', '危害', '人们', '的', '健康'],
        pinyin: [
          'chángqī',
          'jiǔzuò',
          'yánzhòng',
          'wēihài',
          'rénmen',
          'de',
          'jiànkāng',
        ],
      },
    },
    // 16번
    {
      id: 'sentence16',
      level: 1,
      isFinal: false,
      korean: '단점을 고치다.',
      chinese: {
        hanzi: ['改正', '缺点'],
        pinyin: ['gǎizhèng', 'quēdiǎn'],
      },
    },
    {
      id: 'sentence16',
      level: 2,
      isFinal: false,
      korean: '이런 단점들을 고치다.',
      chinese: {
        hanzi: ['改正', '这', '些', '缺点'],
        pinyin: ['gǎizhèng', 'zhè', 'xiē', 'quēdiǎn'],
      },
    },
    {
      id: 'sentence16',
      level: 3,
      isFinal: false,
      korean: '이런 단점들을 고칠 것이다.',
      chinese: {
        hanzi: ['会', '改正', '这', '些', '缺点', '的'],
        pinyin: ['huì', 'gǎizhèng', 'zhè', 'xiē', 'quēdiǎn', 'de'],
      },
    },
    {
      id: 'sentence16',
      level: 4,
      isFinal: false,
      korean: '조만간 이런 단점들을 고칠 것이다.',
      chinese: {
        hanzi: ['迟早', '会', '改正', '这', '些', '缺点', '的'],
        pinyin: ['chízǎo', 'huì', 'gǎizhèng', 'zhè', 'xiē', 'quēdiǎn', 'de'],
      },
    },
    {
      id: 'sentence16',
      level: 5,
      isFinal: false,
      korean: '학생들은 조만간 이런 단점들을 고칠 것이다.',
      chinese: {
        hanzi: ['学生', '迟早', '会', '改正', '这', '些', '缺点', '的'],
        pinyin: [
          'xuéshēng',
          'chízǎo',
          'huì',
          'gǎizhèng',
          'zhè',
          'xiē',
          'quēdiǎn',
          'de',
        ],
      },
    },
    {
      id: 'sentence16',
      level: 6,
      isFinal: true,
      korean: '나는 학생들이 조만간 이런 단점들을 고칠 것이라 믿는다.',
      chinese: {
        hanzi: [
          '我',
          '相信',
          '学生',
          '迟早',
          '会',
          '改正',
          '这',
          '些',
          '缺点',
          '的',
        ],
        pinyin: [
          'wǒ',
          'xiāngxìn',
          'xuéshēng',
          'chízǎo',
          'huì',
          'gǎizhèng',
          'zhè',
          'xiē',
          'quēdiǎn',
          'de',
        ],
      },
    },
    // 17번
    {
      id: 'sentence17',
      level: 1,
      isFinal: false,
      korean: '오류를 수정하다.',
      chinese: {
        hanzi: ['修改', '错误'],
        pinyin: ['xiūgǎi', 'cuòwù'],
      },
    },
    {
      id: 'sentence17',
      level: 2,
      isFinal: false,
      korean: '문서 안의 오류를 수정하다.',
      chinese: {
        hanzi: ['修改', '文件', '中', '的', '错误'],
        pinyin: ['xiūgǎi', 'wénjiàn', 'zhōng', 'de', 'cuòwù'],
      },
    },
    {
      id: 'sentence17',
      level: 3,
      isFinal: false,
      korean: '문서 안의 오류를 수정했다.',
      chinese: {
        hanzi: ['修改', '了', '文件', '中', '的', '错误'],
        pinyin: ['xiūgǎi', 'le', 'wénjiàn', 'zhōng', 'de', 'cuòwù'],
      },
    },
    {
      id: 'sentence17',
      level: 4,
      isFinal: false,
      korean: '제때 문서 안의 오류를 수정했다.',
      chinese: {
        hanzi: ['及时', '修改', '了', '文件', '中', '的', '错误'],
        pinyin: ['jíshí', 'xiūgǎi', 'le', 'wénjiàn', 'zhōng', 'de', 'cuòwù'],
      },
    },
    {
      id: 'sentence17',
      level: 5,
      isFinal: false,
      korean: '조수가 제때 문서 안의 오류를 수정했다.',
      chinese: {
        hanzi: ['助手', '及时', '修改', '了', '文件', '中', '的', '错误'],
        pinyin: [
          'zhùshǒu',
          'jíshí',
          'xiūgǎi',
          'le',
          'wénjiàn',
          'zhōng',
          'de',
          'cuòwù',
        ],
      },
    },
    {
      id: 'sentence17',
      level: 6,
      isFinal: true,
      korean: '다행히 조수가 제때 문서 안의 오류를 수정했다.',
      chinese: {
        hanzi: [
          '幸亏',
          '助手',
          '及时',
          '修改',
          '了',
          '文件',
          '中',
          '的',
          '错误',
        ],
        pinyin: [
          'xìngkuī',
          'zhùshǒu',
          'jíshí',
          'xiūgǎi',
          'le',
          'wénjiàn',
          'zhōng',
          'de',
          'cuòwù',
        ],
      },
    },

    // 18번
    {
      id: 'sentence18',
      level: 1,
      isFinal: false,
      korean: '뒤집어 놓았다, 뒤바꿔 놓았다',
      chinese: {
        hanzi: ['摆反了'],
        pinyin: ['bǎi fǎn le'],
      },
    },
    {
      id: 'sentence18',
      level: 2,
      isFinal: false,
      korean: '위치를 뒤바꿔 놓았다.',
      chinese: {
        hanzi: ['把', '位置', '摆', '反', '了'],
        pinyin: ['bǎ', 'wèizhì', 'bǎi', 'fǎn', 'le'],
      },
    },
    {
      id: 'sentence18',
      level: 3,
      isFinal: false,
      korean: '자료 몇 장의 위치를 뒤바꿔 놓았다.',
      chinese: {
        hanzi: ['把', '几', '份', '材料', '的', '位置', '摆', '反', '了'],
        pinyin: [
          'bǎ',
          'jǐ',
          'fèn',
          'cáiliào',
          'de',
          'wèizhì',
          'bǎi',
          'fǎn',
          'le',
        ],
      },
    },
    {
      id: 'sentence18',
      level: 4,
      isFinal: false,
      korean: '그 자료 몇 장의 위치를 뒤바꿔 놓았다.',
      chinese: {
        hanzi: ['把', '那', '几', '份', '材料', '的', '位置', '摆', '反', '了'],
        pinyin: [
          'bǎ',
          'nà',
          'jǐ',
          'fèn',
          'cáiliào',
          'de',
          'wèizhì',
          'bǎi',
          'fǎn',
          'le',
        ],
      },
    },
    {
      id: 'sentence18',
      level: 5,
      isFinal: true,
      korean: '동료가 그 자료 몇 장의 위치를 뒤바꿔 놓았다.',
      chinese: {
        hanzi: [
          '同事',
          '桌子',
          '上',
          '的',
          '蛋糕',
          '被',
          '姐姐',
          '吃',
          '完',
          '了',
        ],
        pinyin: [
          'tóngshì',
          'bǎ',
          'nà',
          'jǐ',
          'fèn',
          'cáiliào',
          'de',
          'wèizhì',
          'bǎi',
          'fǎn',
          'le',
        ],
      },
    },
    // 19번
    {
      id: 'sentence19',
      level: 1,
      isFinal: false,
      korean: '손님에게 건네다.',
      chinese: {
        hanzi: ['递', '给', '顾客'],
        pinyin: ['dì', 'gěi', 'gùkè'],
      },
    },
    {
      id: 'sentence19',
      level: 2,
      isFinal: false,
      korean: '그 손님에게 건네다.',
      chinese: {
        hanzi: ['递', '给', '那', '位', '顾客'],
        pinyin: ['dì', 'gěi', 'nà', 'wèi', 'gùkè'],
      },
    },
    {
      id: 'sentence19',
      level: 3,
      isFinal: false,
      korean: '장갑을 그 손님에게 건네다.',
      chinese: {
        hanzi: ['把', '手套', '递', '给', '那', '位', '顾客'],
        pinyin: ['bǎ', 'shǒutào', 'dì', 'gěi', 'nà', 'wèi', 'gùkè'],
      },
    },
    {
      id: 'sentence19',
      level: 4,
      isFinal: false,
      korean: '이 장갑을 그 손님에게 건네다.',
      chinese: {
        hanzi: ['把', '这', '副', '手套', '递', '给', '那', '位', '顾客'],
        pinyin: [
          'bǎ',
          'zhè',
          'fù',
          'shǒutào',
          'dì',
          'gěi',
          'nà',
          'wèi',
          'gùkè',
        ],
      },
    },
    {
      id: 'sentence19',
      level: 5,
      isFinal: true,
      korean: '이 장갑을 그 손님에게 건네주세요.',
      chinese: {
        hanzi: ['请', '把', '这', '副', '手套', '递', '给', '那', '位', '顾客'],
        pinyin: [
          'qǐng',
          'bǎ',
          'zhè',
          'fù',
          'shǒutào',
          'dì',
          'gěi',
          'nà',
          'wèi',
          'gùkè',
        ],
      },
    },

    // 20번

    {
      id: 'sentence20',
      level: 1,
      isFinal: false,
      korean: '취소했다.',
      chinese: {
        hanzi: ['取消', '了'],
        pinyin: ['qǔxiāo', 'le'],
      },
    },
    {
      id: 'sentence20',
      level: 2,
      isFinal: false,
      korean: '갑작스럽게 취소했다, 임시로 취소했다',
      chinese: {
        hanzi: ['临时', '取消', '了'],
        pinyin: ['línshí', 'qǔxiāo', 'le'],
      },
    },
    {
      id: 'sentence20',
      level: 3,
      isFinal: false,
      korean: '갑작스럽게 취소되었다.',
      chinese: {
        hanzi: ['被', '临时', '取消', '了'],
        pinyin: ['bèi', 'línshí', 'qǔxiāo', 'le'],
      },
    },
    {
      id: 'sentence20',
      level: 4,
      isFinal: false,
      korean: '행사가 갑작스럽게 취소되었다.',
      chinese: {
        hanzi: ['活动', '被', '临时', '取消', '了'],
        pinyin: ['huódòng ', 'bèi', 'línshí', 'qǔxiāo', 'le'],
      },
    },
    {
      id: 'sentence20',
      level: 5,
      isFinal: true,
      korean: '그의 행사가 갑작스럽게 취소되었다.',
      chinese: {
        hanzi: ['他', '的', '活动', '被', '临时', '取消', '了'],
        pinyin: ['tā', 'de', 'huódòng ', 'bèi', 'línshí', 'qǔxiāo', 'le'],
      },
    },
  ],
  day3: [
    // 21번
    {
      id: 'sentence21',
      level: 1,
      isFinal: false,
      korean: '본질적인 차이',
      chinese: {
        hanzi: ['本质', '上', '的', '不同'],
        pinyin: ['běnzhì', 'shàng', 'de', 'bùtóng'],
      },
    },
    {
      id: 'sentence21',
      level: 2,
      isFinal: false,
      korean: '본질적인 차이가 없다.',
      chinese: {
        hanzi: ['没有', '本质', '上', '的', '不同'],
        pinyin: ['méiyǒu', 'běnzhì', 'shàng', 'de', 'bùtóng'],
      },
    },
    {
      id: 'sentence21',
      level: 3,
      isFinal: false,
      korean: '본질적인 차이가 전혀 없다.',
      chinese: {
        hanzi: ['并', '没有', '本质', '上', '的', '不同'],
        pinyin: ['bìng', 'méiyǒu', 'běnzhì', 'shàng', 'de', 'bùtóng'],
      },
    },
    {
      id: 'sentence21',
      level: 4,
      isFinal: false,
      korean: '두 문제는 본질적인 차이가 전혀 없다.',
      chinese: {
        hanzi: ['两', '个', '问题', '并', '没有', '本质', '上', '的', '不同'],
        pinyin: [
          'liǎng',
          'ge',
          'wèntí',
          'bìng',
          'méiyǒu',
          'běnzhì',
          'shàng',
          'de',
          'bùtóng',
        ],
      },
    },
    {
      id: 'sentence21',
      level: 5,
      isFinal: true,
      korean: '그 두 문제는 본질적인 차이가 전혀 없다.',
      chinese: {
        hanzi: [
          '那',
          '两',
          '个',
          '问题',
          '并',
          '没有',
          '本质',
          '上',
          '的',
          '不同',
        ],
        pinyin: [
          'nà',
          'liǎng',
          'ge',
          'wèntí',
          'bìng',
          'méiyǒu',
          'běnzhì',
          'shàng',
          'de',
          'bùtóng',
        ],
      },
    },
    // 22번
    {
      id: 'sentence22',
      level: 1,
      isFinal: false,
      korean: '잘 마무리했다. (준비를 잘) 마쳤다. (결과 완성)',
      chinese: {
        hanzi: ['做好了'],
        pinyin: ['zuòhǎo le'],
      },
    },
    {
      id: 'sentence22',
      level: 2,
      isFinal: false,
      korean: '준비를 마쳤다.',
      chinese: {
        hanzi: ['做好', '准备', '了'],
        pinyin: ['zuòhǎo', 'zhǔnbèi', 'le'],
      },
    },
    {
      id: 'sentence22',
      level: 3,
      isFinal: false,
      korean: '기회를 맞이할 준비를 마쳤다.',
      chinese: {
        hanzi: ['做好', '迎接', '机会', '的', '准备', '了'],
        pinyin: ['zuòhǎo', 'yíngjiē', 'jīhuì', 'de', 'zhǔnbèi', 'le'],
      },
    },
    {
      id: 'sentence22',
      level: 4,
      isFinal: false,
      korean: '이 기회를 맞이할 준비를 마쳤다.',
      chinese: {
        hanzi: ['做好', '迎接', '这个', '机会', '的', '准备', '了'],
        pinyin: ['zuòhǎo', 'yíngjiē', 'zhè ge', 'jīhuì', 'de', 'zhǔnbèi', 'le'],
      },
    },
    {
      id: 'sentence22',
      level: 5,
      isFinal: true,
      korean: '그들은 이 기회를 맞이할 준비를 마쳤다.',
      chinese: {
        hanzi: ['他们', '做好', '迎接', '机会', '的', '准备', '了'],
        pinyin: ['tāmen', 'zuòhǎo', 'yíngjiē', 'jīhuì', 'de', 'zhǔnbèi', 'le'],
      },
    },
    // 23번
    {
      id: 'sentence23',
      level: 1,
      isFinal: false,
      korean:
        '직무를 맡다. (职责：직책에 따른 중요한 임무)(= 직무를 맡기 시작하다, 책임을 적극적으로 떠맡다)',
      chinese: {
        hanzi: ['承担', '起', '职责'],
        pinyin: ['chéngdān', 'qǐ', 'zhízé'],
      },
    },
    {
      id: 'sentence23',
      level: 2,
      isFinal: false,
      korean: '중요한 직무를 맡다.',
      chinese: {
        hanzi: ['承担', '起', '重要', '的', '职责'],
        pinyin: ['chéngdān', 'qǐ', 'zhòngyào', 'de', 'zhízé'],
      },
    },
    {
      id: 'sentence23',
      level: 3,
      isFinal: false,
      korean: '그 중요한 직무를 맡다.',
      chinese: {
        hanzi: ['承担', '起', '那', '项', '重要', '的', '职责'],
        pinyin: ['chéngdān', 'qǐ', 'nà', 'xiàng', 'zhòngyào', 'de', 'zhízé'],
      },
    },
    {
      id: 'sentence23',
      level: 4,
      isFinal: false,
      korean: '주도적으로 그 중요한 직무를 맡다.',
      chinese: {
        hanzi: ['主动', '承担', '起', '那', '项', '重要', '的', '职责'],
        pinyin: [
          'zhǔdòng',
          'chéngdān',
          'qǐ',
          'nà',
          'xiàng',
          'zhòngyào',
          'de',
          'zhízé',
        ],
      },
    },
    {
      id: 'sentence23',
      level: 5,
      isFinal: true,
      korean: '매니저는 주도적으로 그 중요한 직무를 맡았다.',
      chinese: {
        hanzi: ['经理', '主动', '承担', '起', '那', '项', '重要', '的', '职责'],
        pinyin: [
          'jīnglǐ',
          'zhǔdòng',
          'chéngdān',
          'qǐ',
          'nà',
          'xiàng',
          'zhòngyào',
          'de',
          'zhízé',
        ],
      },
    },
    // 24번
    {
      id: 'sentence24',
      level: 1,
      isFinal: false,
      korean: '계획의 세부 내용(디테일)',
      chinese: {
        hanzi: ['计划', '的', '细节'],
        pinyin: ['jìhuà', 'de', 'xìjié'],
      },
    },
    {
      id: 'sentence24',
      level: 2,
      isFinal: false,
      korean: '계획의 세부 내용을 완벽하게 하다.',
      chinese: {
        hanzi: ['完善', '计划', '的', '细节'],
        pinyin: ['wánshàn', 'jìhuà', 'de', 'xìjié'],
      },
    },
    {
      id: 'sentence24',
      level: 3,
      isFinal: false,
      korean: '계획의 세부 내용을 노력하여 완벽하게 하다.',
      chinese: {
        hanzi: ['努力', '完善', '计划', '的', '细节'],
        pinyin: ['nǔlì', 'wánshàn', 'jìhuà', 'de', 'xìjié'],
      },
    },
    {
      id: 'sentence24',
      level: 4,
      isFinal: false,
      korean: '계획의 세부 내용을 노력하여 완벽하게 하고 있다.',
      chinese: {
        hanzi: ['正在', '努力', '完善', '计划', '的', '细节'],
        pinyin: ['zhèngzài', 'nǔlì', 'wánshàn', 'jìhuà', 'de', 'xìjié'],
      },
    },
    {
      id: 'sentence24',
      level: 5,
      isFinal: true,
      korean:
        '연구원은 계획의 세부 내용을 노력하여 완벽하게 하고 있다. (= 연구원은 계획의 세부 내용을 완벽하게 하기 위해 노력하고 있다.)',
      chinese: {
        hanzi: ['研究院', '正在', '努力', '完善', '计划', '的', '细节'],
        pinyin: [
          'yánjiūyuàn',
          'zhèngzài',
          'nǔlì',
          'wánshàn',
          'jìhuà',
          'de',
          'xìjié',
        ],
      },
    },
    // 25번
    {
      id: 'sentence25',
      level: 1,
      isFinal: false,
      korean: '인상을 남기다.',
      chinese: {
        hanzi: ['留下印象'],
        pinyin: ['liúxià yìnxiàng'],
      },
    },
    {
      id: 'sentence25',
      level: 2,
      isFinal: false,
      korean: '인상을 남겼다.',
      chinese: {
        hanzi: ['留下', '了', '印象'],
        pinyin: ['liúxià', 'le', 'yìnxiàng'],
      },
    },
    {
      id: 'sentence25',
      level: 3,
      isFinal: false,
      korean: '깊은 인상을 남겼다.',
      chinese: {
        hanzi: ['留下', '了', '深刻', '的', '印象'],
        pinyin: ['liúxià', 'le', 'shēnkè', 'de', 'yìnxiàng'],
      },
    },
    {
      id: 'sentence25',
      level: 4,
      isFinal: false,
      korean: '나에게 깊은 인상을 남겼다.',
      chinese: {
        hanzi: ['给', '我', '留下', '了', '深刻', '的', '印象'],
        pinyin: ['gěi', 'wǒ', 'liúxià', 'le', 'shēnkè', 'de', 'yìnxiàng'],
      },
    },
    {
      id: 'sentence25',
      level: 5,
      isFinal: false,
      korean: '그 교류는 나에게 깊은 인상을 남겼다.',
      chinese: {
        hanzi: [
          '那',
          '次',
          '交流',
          '给',
          '我',
          '留下',
          '了',
          '深刻',
          '的',
          '印象',
        ],
        pinyin: [
          'nà',
          'cì',
          'jiāoliú',
          'gěi',
          'wǒ',
          'liúxià',
          'le',
          'shēnkè',
          'de',
          'yìnxiàng',
        ],
      },
    },

    // 26번
    {
      id: 'sentence26',
      level: 1,
      isFinal: false,
      korean: '엎었다.',
      chinese: {
        hanzi: ['打翻了'],
        pinyin: ['dǎfān le'],
      },
    },
    {
      id: 'sentence26',
      level: 2,
      isFinal: false,
      korean: '컵을 엎었다.',
      chinese: {
        hanzi: ['把', '杯子', '打翻', '了'],
        pinyin: ['bǎ', 'bēizi', 'dǎfān', 'le'],
      },
    },
    {
      id: 'sentence26',
      level: 3,
      isFinal: false,
      korean: '부주의하게 컵을 엎었다.',
      chinese: {
        hanzi: ['不', '小心', '把', '杯子', '打翻', '了'],
        pinyin: ['bù', 'xiǎoxīn', 'bǎ', 'bēizi', 'dǎfān', 'le'],
      },
    },
    {
      id: 'sentence26',
      level: 4,
      isFinal: true,
      korean: '친구가 부주의하게 컵을 엎었다.',
      chinese: {
        hanzi: ['朋友', '不', '小心', '把', '杯子', '打翻', '了'],
        pinyin: ['péngyǒu', 'bù', 'xiǎoxīn', 'bǎ', 'bēizi', 'dǎfān', 'le'],
      },
    },
    // 27번
    {
      id: 'sentence27',
      level: 1,
      isFinal: false,
      korean: '우리에게 배분했다.',
      chinese: {
        hanzi: ['分配', '给', '了', '我们'],
        pinyin: ['fēnpèi', 'gěi', 'le', 'wǒmen'],
      },
    },
    {
      id: 'sentence27',
      level: 2,
      isFinal: false,
      korean: '숙제를 우리에게 배분했다.',
      chinese: {
        hanzi: ['把', '作业', '分配', '给', '了', '我们'],
        pinyin: ['bǎ', 'zuòyè', 'fēnpèi', 'gěi', 'le', 'wǒmen'],
      },
    },
    {
      id: 'sentence27',
      level: 3,
      isFinal: false,
      korean: '이번 주 숙제를 우리에게 배분했다.',
      chinese: {
        hanzi: [
          '把',
          '这',
          '个',
          '星期',
          '的',
          '作业',
          '分配',
          '给',
          '了',
          '我们',
        ],
        pinyin: [
          'bǎ',
          'zhè',
          'ge',
          'xīngqī',
          'de',
          'zuòyè',
          'fēnpèi',
          'gěi',
          'le',
          'wǒmen',
        ],
      },
    },
    {
      id: 'sentence27',
      level: 4,
      isFinal: true,
      korean: '선생님이 이번 주 숙제를 우리에게 배분했다.',
      chinese: {
        hanzi: [
          '老师',
          '把',
          '这',
          '个',
          '星期',
          '的',
          '作业',
          '分配',
          '给',
          '了',
          '我们',
        ],
        pinyin: [
          'lǎoshī',
          'bǎ',
          'zhè',
          'ge',
          'xīngqī',
          'de',
          'zuòyè',
          'fēnpèi',
          'gěi',
          'le',
          'wǒmen',
        ],
      },
    },
    // 28번
    {
      id: 'sentence28',
      level: 1,
      isFinal: false,
      korean: '합격했다.',
      chinese: {
        hanzi: ['录取了'],
        pinyin: ['lùqǔ le'],
      },
    },
    {
      id: 'sentence28',
      level: 2,
      isFinal: false,
      korean: '상하이 교통대학교에 합격되었다(합격했다).',
      chinese: {
        hanzi: ['被', '上海交通大学', '录取', '了'],
        pinyin: ['bèi', 'Shànghǎi Jiāotōng Dàxué', 'lùqǔ', 'le'],
      },
    },
    {
      id: 'sentence28',
      level: 3,
      isFinal: false,
      korean: '너는 상하이 교통대학교에 합격되었어(합격했어).',
      chinese: {
        hanzi: ['你', '被', '上海交通大学', '录取', '了'],
        pinyin: ['nǐ', 'bèi', 'Shànghǎi Jiāotōng Dàxué', 'lùqǔ', 'le'],
      },
    },
    {
      id: 'sentence28',
      level: 4,
      isFinal: true,
      korean: '축하해, 너는 상하이 교통대학교에 합격되었어(합격했어).',
      chinese: {
        hanzi: ['恭喜', '你', '被', '上海交通大学', '录取', '了'],
        pinyin: [
          'gōngxǐ',
          'nǐ',
          'bèi',
          'Shànghǎi Jiāotōng Dàxué',
          'lùqǔ',
          'le',
        ],
      },
    },
    //  29번

    {
      id: 'sentence29',
      level: 1,
      isFinal: false,
      korean: '홀로 돌아가다.',
      chinese: {
        hanzi: ['回到', '大厅'],
        pinyin: ['huídào', 'dàtīng'],
      },
    },
    {
      id: 'sentence29',
      level: 2,
      isFinal: false,
      korean: '즉시 홀로 돌아가다.',
      chinese: {
        hanzi: ['立刻', '回到', '大厅'],
        pinyin: ['lìkè', 'huídào', 'dàtīng'],
      },
    },
    {
      id: 'sentence29',
      level: 3,
      isFinal: false,
      korean: '팀원들은 즉시 홀로 돌아간다.',
      chinese: {
        hanzi: ['队员们', '立刻', '回到', '大厅'],
        pinyin: ['duìyuánmen', 'lìkè', 'huídào', 'dàtīng'],
      },
    },
    {
      id: 'sentence29',
      level: 4,
      isFinal: false,
      korean: '팀원들에게 즉시 홀로 돌아가라고 명령한다.',
      chinese: {
        hanzi: ['命令', '队员们', '立刻', '回到', '大厅'],
        pinyin: ['mìnglìng', 'duìyuánmen', 'lìkè', 'huídào', 'dàtīng'],
      },
    },
    {
      id: 'sentence29',
      level: 5,
      isFinal: false,
      korean: '코치는 팀원들에게 즉시 홀로 돌아가라고 명령한다.',
      chinese: {
        hanzi: ['教练', '命令', '队员们', '立刻', '回到', '大厅'],
        pinyin: [
          'jiàoliàn',
          'mìnglìng',
          'duìyuánmen',
          'lìkè',
          'huídào',
          'dàtīng',
        ],
      },
    },
    // 30 번
    {
      id: 'sentence30',
      level: 1,
      isFinal: false,
      korean: '팀의 규정',
      chinese: {
        hanzi: ['团队的规定'],
        pinyin: ['Tuánduì de guīdìng'],
      },
    },
    {
      id: 'sentence30',
      level: 2,
      isFinal: false,
      korean: '팀의 규정을 준수하다.',
      chinese: {
        hanzi: ['遵守', '团队', '的', '规定'],
        pinyin: ['zūnshǒu', 'tuánduì', 'de', 'guīdìng'],
      },
    },
    {
      id: 'sentence30',
      level: 3,
      isFinal: false,
      korean: '자발적으로 팀의 규정을 준수하다.',
      chinese: {
        hanzi: ['遵守', '团队', '的', '规定'],
        pinyin: ['zìjué', 'zūnshǒu', 'tuánduì', 'de', 'guīdìng'],
      },
    },
    {
      id: 'sentence30',
      level: 4,
      isFinal: false,
      korean: '모두가 자발적으로 팀의 규정을 준수하다.',
      chinese: {
        hanzi: ['自觉', '遵守', '团队', '的', '规定'],
        pinyin: ['dàjiā', 'zìjué', 'zūnshǒu', 'tuánduì', 'de', 'guīdìng'],
      },
    },
    {
      id: 'sentence30',
      level: 5,
      isFinal: true,
      korean: '모두 팀의 규정을 자발적으로 준수해 주세요.',
      chinese: {
        hanzi: ['请', '自觉', '遵守', '团队', '的', '规定'],
        pinyin: [
          'qǐng',
          'dàjiā',
          'zìjué',
          'zūnshǒu',
          'tuánduì',
          'de',
          'guīdìng',
        ],
      },
    },
  ],
  day4: [
    // 31번
    {
      id: 'sentence31',
      level: 1,
      isFinal: false,
      korean: '양초 세 개.',
      chinese: {
        hanzi: ['三根蜡烛'],
        pinyin: ['Sān gēn làzhú'],
      },
    },
    {
      id: 'sentence31',
      level: 2,
      isFinal: false,
      korean: '양초 세 개가 있다.',
      chinese: {
        hanzi: ['有', '三', '根', '蜡烛'],
        pinyin: ['yǒu', 'sān', 'gēn', 'làzhú'],
      },
    },
    {
      id: 'sentence31',
      level: 3,
      isFinal: false,
      korean: '상자 안에 양초 세 개가 있다.',
      chinese: {
        hanzi: ['盒子', '里', '有', '三', '根', '蜡烛'],
        pinyin: ['hézi', 'lǐ', 'yǒu', 'sān', 'gēn', 'làzhú'],
      },
    },
    {
      id: 'sentence31',
      level: 4,
      isFinal: true,
      korean: '그 상자 안에 양초 세 개가 있다.',
      chinese: {
        hanzi: ['那', '个', '盒子', '里', '有', '三', '根', '蜡烛'],
        pinyin: ['nà', 'ge', 'hézi', 'lǐ', 'yǒu', 'sān', 'gēn', 'làzhú'],
      },
    },
    // 32번
    {
      id: 'sentence32',
      level: 1,
      isFinal: false,
      korean: '몰래 먹다.',
      chinese: {
        hanzi: ['偷吃'],
        pinyin: ['Tōu chī'],
      },
    },
    {
      id: 'sentence32',
      level: 2,
      isFinal: false,
      korean: '몰래 먹었다.',
      chinese: {
        hanzi: ['偷', '吃', '了'],
        pinyin: ['tōu', 'chī', 'le'],
      },
    },
    {
      id: 'sentence32',
      level: 3,
      isFinal: false,
      korean: '아이에게 몰래 먹혔다.',
      chinese: {
        hanzi: ['被', '孩子', '偷', '吃', '了'],
        pinyin: ['bèi', 'háizi', 'tōu', 'chī', 'le'],
      },
    },
    {
      id: 'sentence32',
      level: 4,
      isFinal: true,
      korean: '간식은 아이가 몰래 먹었다. (= 간식이 아이에게 몰래 먹혔다.)',
      chinese: {
        hanzi: ['点心', '被', '孩子', '偷吃', '了'],
        pinyin: ['diǎnxīn', 'bèi', 'háizi', 'tōuchī', 'le'],
      },
    },
    // 33번
    {
      id: 'sentence33',
      level: 1,
      isFinal: false,
      korean: '사람들에게 칭찬받다.',
      chinese: {
        hanzi: ['被', '人们', '称赞'],
        pinyin: ['bèi', 'rénmen', 'chēngzàn'],
      },
    },
    {
      id: 'sentence33',
      level: 2,
      isFinal: false,
      korean: '여전히 사람들에게 칭찬받다.',
      chinese: {
        hanzi: ['仍', '被', '人们', '称赞'],
        pinyin: ['réng', 'bèi', 'rénmen', 'chēngzàn'],
      },
    },
    {
      id: 'sentence33',
      level: 3,
      isFinal: false,
      korean: '지금까지 여전히 사람들에게 칭찬받는다.',
      chinese: {
        hanzi: ['至今', '仍', '被', '人们', '称赞'],
        pinyin: ['zhìjīn', 'réng', 'bèi', 'rénmen', 'chēngzàn'],
      },
    },
    {
      id: 'sentence33',
      level: 4,
      isFinal: true,
      korean: '그의 작품은 지금까지 여전히 사람들에게 칭찬받는다.',
      chinese: {
        hanzi: ['他', '的', '作品', '至今', '仍', '被', '人们', '称赞'],
        pinyin: [
          'tā',
          'de',
          'zuòpǐn',
          'zhìjīn',
          'réng',
          'bèi',
          'rénmen',
          'chēngzàn',
        ],
      },
    },
    //34 번
    {
      id: 'sentence34',
      level: 1,
      isFinal: false,
      korean: '꽤 이상적이다.',
      chinese: {
        hanzi: ['挺', '理想', '的'],
        pinyin: ['tǐng', 'lǐxiǎng', 'de'],
      },
    },
    {
      id: 'sentence34',
      level: 2,
      isFinal: false,
      korean: '조건이 꽤 이상적이다.',
      chinese: {
        hanzi: ['条件', '挺', '理想', '的'],
        pinyin: ['tiáojiàn', 'tǐng', 'lǐxiǎng', 'de'],
      },
    },
    {
      id: 'sentence34',
      level: 3,
      isFinal: false,
      korean: '회사의 조건이 꽤 이상적이다.',
      chinese: {
        hanzi: ['公司', '的', '条件', '挺', '理想', '的'],
        pinyin: ['gōngsī', 'de', 'tiáojiàn', 'tǐng', 'lǐxiǎng', 'de'],
      },
    },
    {
      id: 'sentence34',
      level: 4,
      isFinal: true,
      korean: '이 회사의 조건은 꽤 이상적이다.',
      chinese: {
        hanzi: ['这', '家', '公司', '的', '条件', '挺', '理想', '的'],
        pinyin: [
          'zhè',
          'jiā',
          'gōngsī',
          'de',
          'tiáojiàn',
          'tǐng',
          'lǐxiǎng',
          'de',
        ],
      },
    },

    // 35번
    {
      id: 'sentence35',
      level: 1,
      isFinal: false,
      korean: '무지개 한 줄',
      chinese: {
        hanzi: ['一条彩虹'],
        pinyin: ['yì', 'tiáo', 'cǎihóng'],
      },
    },
    {
      id: 'sentence35',
      level: 2,
      isFinal: false,
      korean: '아름다운 무지개 한 줄',
      chinese: {
        hanzi: ['一', '条', '美丽', '的', '彩虹'],
        pinyin: ['yì', 'tiáo', 'měilì', 'de', 'cǎihóng'],
      },
    },
    {
      id: 'sentence35',
      level: 3,
      isFinal: false,
      korean: '아름다운 무지개 하나가 나타났다.',
      chinese: {
        hanzi: ['出现', '了', '一', '条', '美丽', '的', '彩虹'],
        pinyin: ['chūxiàn', 'yì', 'tiáo', 'měilì', 'de', 'cǎihóng'],
      },
    },
    {
      id: 'sentence35',
      level: 4,
      isFinal: false,
      korean: '갑자기 아름다운 무지개 하나가 나타났다.',
      chinese: {
        hanzi: ['忽然', '出现', '了', '一', '条', '美丽', '的', '彩虹'],
        pinyin: ['hūrán', 'chūxiàn', 'yì', 'tiáo', 'měilì', 'de', 'cǎihóng'],
      },
    },
    {
      id: 'sentence35',
      level: 5,
      isFinal: true,
      korean: '하늘에 갑자기 아름다운 무지개 하나가 나타났다.',
      chinese: {
        hanzi: [
          '天空',
          '中',
          '忽然',
          '出现',
          '了',
          '一',
          '条',
          '美丽',
          '的',
          '彩虹',
        ],
        pinyin: [
          'tiānkōng',
          'zhōng',
          'hūrán',
          'chūxiàn',
          'yì',
          'tiáo',
          'měilì',
          'de',
          'cǎihóng',
        ],
      },
    },
    // 36번
    {
      id: 'sentence36',
      level: 1,
      isFinal: false,
      korean: '매우 온화하다.',
      chinese: {
        hanzi: ['十分', '温柔'],
        pinyin: ['shífēn', 'wēnróu'],
      },
    },
    {
      id: 'sentence36',
      level: 2,
      isFinal: false,
      korean: '보기에 매우 온화하다. (= 매우 온화해 보인다)',
      chinese: {
        hanzi: ['看起来', '十分', '温柔'],
        pinyin: ['kànqǐlái', 'shífēn', 'wēnróu'],
      },
    },
    {
      id: 'sentence36',
      level: 3,
      isFinal: false,
      korean: '눈빛이 매우 온화해 보인다.',
      chinese: {
        hanzi: ['眼神', '看起来', '十分', '温柔'],
        pinyin: ['yǎnshén', 'kànqǐlái', 'shífēn', 'wēnróu'],
      },
    },
    {
      id: 'sentence36',
      level: 4,
      isFinal: true,
      korean: '선생님의 눈빛은 매우 온화해 보인다.',
      chinese: {
        hanzi: ['老师', '的', '眼神', '看起来', '十分', '温柔'],
        pinyin: ['lǎoshī', 'de', 'yǎnshén', 'kànqǐlái', 'shífēn', 'wēnróu'],
      },
    },
    // 37번
    {
      id: 'sentence37',
      level: 1,
      isFinal: false,
      korean: '가치가 있다.',
      chinese: {
        hanzi: ['有', '价值'],
        pinyin: ['yǒu', 'jiàzhí'],
      },
    },
    {
      id: 'sentence37',
      level: 2,
      isFinal: false,
      korean: '더 가치 있게 변하다. (= 더 가치 있게 만들다)',
      chinese: {
        hanzi: ['变得', '更', '有', '价值'],
        pinyin: ['biànde', 'gèng', 'yǒu', 'jiàzhí'],
      },
    },
    {
      id: 'sentence37',
      level: 3,
      isFinal: false,
      korean: '주말 시간을 더 가치 있게 만들다.',
      chinese: {
        hanzi: ['把', '周末', '时间', '变得', '更', '有', '价值'],
        pinyin: ['bǎ', 'zhōumò', 'shíjiān', 'biànde', 'gèng', 'yǒu', 'jiàzhí'],
      },
    },
    {
      id: 'sentence37',
      level: 4,
      isFinal: true,
      korean: '어떻게 하면 주말 시간을 더 가치 있게 만들 수 있을까?',
      chinese: {
        hanzi: ['如何', '把', '周末', '时间', '变得', '更', '有', '价值'],
        pinyin: [
          'rúhé',
          'bǎ',
          'zhōumò',
          'shíjiān',
          'biànde',
          'gèng',
          'yǒu',
          'jiàzhí',
        ],
      },
    },

    // 38번
    {
      id: 'sentence38',
      level: 1,
      isFinal: false,
      korean: '수리를 진행하다.',
      chinese: {
        hanzi: ['进行', '维修'],
        pinyin: ['jìnxíng', 'wéixiū'],
      },
    },
    {
      id: 'sentence38',
      level: 2,
      isFinal: false,
      korean: '장비를 수리하다. (= 장비에 대해 수리를 진행하다)',
      chinese: {
        hanzi: ['对', '设备', '进行', '维修'],
        pinyin: ['duì', 'shèbèi', 'jìnxíng', 'wéixiū'],
      },
    },
    {
      id: 'sentence38',
      level: 3,
      isFinal: false,
      korean: '장비를 수리하고 있다.',
      chinese: {
        hanzi: ['正在', '对', '设备', '进行', '维修'],
        pinyin: ['zhèngzài', 'duì', 'shèbèi', 'jìnxíng', 'wéixiū'],
      },
    },
    {
      id: 'sentence38',
      level: 4,
      isFinal: true,
      korean: '기술자들이 장비를 수리하고 있다.',
      chinese: {
        hanzi: ['技术员们', '正在', '对', '设备', '进行', '维修'],
        pinyin: [
          'jìshùyuánmen',
          'zhèngzài',
          'duì',
          'shèbèi',
          'jìnxíng',
          'wéixiū',
        ],
      },
    },
    // 39번
    {
      id: 'sentence39',
      level: 1,
      isFinal: false,
      korean: '담배를 피우세요.',
      chinese: {
        hanzi: ['请', '抽烟'],
        pinyin: ['qǐng', 'chōuyān'],
      },
    },
    {
      id: 'sentence39',
      level: 2,
      isFinal: false,
      korean: '담배를 피우지 마세요.',
      chinese: {
        hanzi: ['请', '勿', '抽烟'],
        pinyin: ['qǐng', 'wù', 'chōuyān'],
      },
    },
    {
      id: 'sentence39',
      level: 3,
      isFinal: true,
      korean: '실험실 내에서는 담배를 피우지 마세요.',
      chinese: {
        hanzi: ['请', '勿', '在', '实验室', '内', '抽烟'],
        pinyin: ['qǐng', 'wù', 'zài', 'shíyànshì', 'nèi', 'chōuyān'],
      },
    },
    // 40번
    {
      id: 'sentence40',
      level: 1,
      isFinal: false,
      korean: '그녀의 생각',
      chinese: {
        hanzi: ['她', '的', '想法'],
        pinyin: ['tā', 'de', 'xiǎngfǎ'],
      },
    },
    {
      id: 'sentence40',
      level: 2,
      isFinal: false,
      korean: '(단지) 그녀의 생각일 뿐이다.',
      chinese: {
        hanzi: ['只是', '她', '的', '想法'],
        pinyin: ['zhǐshì', 'tā', 'de', 'xiǎngfǎ'],
      },
    },
    {
      id: 'sentence40',
      level: 3,
      isFinal: false,
      korean: '그건 (단지) 그녀의 생각일 뿐이다.',
      chinese: {
        hanzi: ['那', '只是', '她', '的', '想法'],
        pinyin: ['nà', 'zhǐshì', 'tā', 'de', 'xiǎngfǎ'],
      },
    },
    {
      id: 'sentence40',
      level: 4,
      isFinal: true,
      korean: '어쩌면 그건 (단지) 그녀의 생각일 뿐이다.',
      chinese: {
        hanzi: ['说不定', '那', '只是', '她', '的', '想法'],
        pinyin: ['shuōbudìng', 'nà', 'zhǐshì', 'tā', 'de', 'xiǎngfǎ'],
      },
    },
  ],
  day5: [
    // 41번
    {
      id: 'sentence41',
      level: 1,
      isFinal: false,
      korean: '풍습이 있다.',
      chinese: {
        hanzi: ['有', '风俗', '习惯'],
        pinyin: ['yǒu', 'fēngsú', 'xíguàn'],
      },
    },
    {
      id: 'sentence41',
      level: 2,
      isFinal: false,
      korean: '독특한 풍습이 있다.',
      chinese: {
        hanzi: ['有', '独特', '的', '风俗', '习惯'],
        pinyin: ['yǒu', 'dútè', 'de', 'fēngsú', 'xíguàn'],
      },
    },
    {
      id: 'sentence41',
      level: 3,
      isFinal: false,
      korean: '모두 독특한 풍습이 있다.',
      chinese: {
        hanzi: ['都', '有', '独特', '的', '风俗', '习惯'],
        pinyin: ['dōu', 'yǒu', 'dútè', 'de', 'fēngsú', 'xíguàn'],
      },
    },
    {
      id: 'sentence41',
      level: 4,
      isFinal: true,
      korean: '각 지역마다 (모두) 독특한 풍습이 있다.',
      chinese: {
        hanzi: ['每', '个', '地区', '都', '有', '独特', '的', '风俗', '习惯'],
        pinyin: [
          'měi',
          'ge',
          'dìqū',
          'dōu',
          'yǒu',
          'dútè',
          'de',
          'fēngsú',
          'xíguàn',
        ],
      },
    },
    // 42번
    {
      id: 'sentence42',
      level: 1,
      isFinal: false,
      korean: '좋은 평가를 받다.',
      chinese: {
        hanzi: ['得到', '好评'],
        pinyin: ['dédào', 'hǎopíng'],
      },
    },
    {
      id: 'sentence42',
      level: 2,
      isFinal: false,
      korean: '좋은 평가를 받았다.',
      chinese: {
        hanzi: ['得到了', '好评'],
        pinyin: ['dédào le', 'hǎopíng'],
      },
    },
    {
      id: 'sentence42',
      level: 3,
      isFinal: false,
      korean: '한결같은 호평을 받았다.',
      chinese: {
        hanzi: ['得到了', '一致', '好评'],
        pinyin: ['dédào le', 'yízhì', 'hǎopíng'],
      },
    },
    {
      id: 'sentence42',
      level: 4,
      isFinal: false,
      korean: '고객들의 한결같은 호평을 받았다.',
      chinese: {
        hanzi: ['得到了', '顾客', '的', '一致', '好评'],
        pinyin: ['dédào le', 'gùkè', 'de', 'yízhì', 'hǎopíng'],
      },
    },
    {
      id: 'sentence42',
      level: 5,
      isFinal: true,
      korean: '그는 고객들의 한결같은 호평을 받았다.',
      chinese: {
        hanzi: ['他', '得到了', '顾客', '的', '一致', '好评'],
        pinyin: ['tā', 'dédào le', 'gùkè', 'de', 'yízhì', 'hǎopíng'],
      },
    },

    // 43번
    {
      id: 'sentence43',
      level: 1,
      isFinal: false,
      korean: '모두가 바라다.',
      chinese: {
        hanzi: ['大家', '希望'],
        pinyin: ['dàjiā', 'xīwàng'],
      },
    },
    {
      id: 'sentence43',
      level: 2,
      isFinal: false,
      korean: '모두가 협조하여 처리하기를 바란다.',
      chinese: {
        hanzi: ['大家', '希望', '配合', '处理'],
        pinyin: ['dàjiā', 'xīwàng', 'pèihé', 'chǔlǐ'],
      },
    },
    {
      id: 'sentence43',
      level: 3,
      isFinal: false,
      korean: '모두가 자발적으로 협조하여 처리하기를 바란다.',
      chinese: {
        hanzi: ['大家', '希望', '自觉', '配合', '处理'],
        pinyin: ['dàjiā', 'xīwàng', 'zìjué', 'pèihé', 'chǔlǐ'],
      },
    },
    {
      id: 'sentence43',
      level: 4,
      isFinal: true,
      korean: '모두들 당신이 알아서(자발적으로) 협조하여 처리하기를 바란다.',
      chinese: {
        hanzi: ['大家', '希望', '你', '能', '自觉', '配合', '处理'],
        pinyin: ['dàjiā', 'xīwàng', 'nǐ', 'néng', 'zìjué', 'pèihé', 'chǔlǐ'],
      },
    },
    // 44번
    {
      id: 'sentence44',
      level: 1,
      isFinal: false,
      korean: '결과를 초래하다.',
      chinese: {
        hanzi: ['造成', '后果'],
        pinyin: ['zàochéng', 'hòuguǒ'],
      },
    },
    {
      id: 'sentence44',
      level: 2,
      isFinal: false,
      korean: '결과를 초래했다.',
      chinese: {
        hanzi: ['造成', '了', '后果'],
        pinyin: ['zàochéng', 'le', 'hòuguǒ'],
      },
    },
    {
      id: 'sentence44',
      level: 3,
      isFinal: false,
      korean: '심각한 결과를 초래했다.',
      chinese: {
        hanzi: ['造成', '了', '严重', '的', '后果'],
        pinyin: ['zàochéng', 'le', 'yánzhòng', 'de', 'hòuguǒ'],
      },
    },
    {
      id: 'sentence44',
      level: 4,
      isFinal: false,
      korean: '매우 심각한 결과를 초래했다.',
      chinese: {
        hanzi: ['造成', '了', '极其', '严重', '的', '后果'],
        pinyin: ['zàochéng', 'le', 'jíqí', 'yánzhòng', 'de', 'hòuguǒ'],
      },
    },
    {
      id: 'sentence44',
      level: 5,
      isFinal: true,
      korean: '이번 지진은 매우 심각한 결과를 초래했다.',
      chinese: {
        hanzi: ['这', '次', '地震', '造成', '了', '极其', '严重', '的', '后果'],
        pinyin: [
          'zhè',
          'cì',
          'dìzhèn',
          'zàochéng',
          'le',
          'jíqí',
          'yánzhòng',
          'de',
          'hòuguǒ',
        ],
      },
    },
    // 45번
    {
      id: 'sentence45',
      level: 1,
      isFinal: false,
      korean: '회의에 참석하다.',
      chinese: {
        hanzi: ['出席', '会议'],
        pinyin: ['chūxí', 'huìyì'],
      },
    },
    {
      id: 'sentence45',
      level: 2,
      isFinal: false,
      korean: '의견을 발표하다.',
      chinese: {
        hanzi: ['发表', '意见'],
        pinyin: ['fābiǎo', 'yìjiàn'],
      },
    },
    {
      id: 'sentence45',
      level: 3,
      isFinal: false,
      korean: '회의에 참석하고 의견을 발표하다.',
      chinese: {
        hanzi: ['出席', '会议', '并', '发表', '意见'],
        pinyin: ['chūxí', 'huìyì', 'bìng', 'fābiǎo', 'yìjiàn'],
      },
    },
    {
      id: 'sentence45',
      level: 4,
      isFinal: false,
      korean: '회의에 참석하여 의견을 발표할 것이다.',
      chinese: {
        hanzi: ['代表', '出席', '会议', '并', '发表', '意见'],
        pinyin: ['dàibiǎo', 'chūxí', 'huìyì', 'bìng', 'fābiǎo', 'yìjiàn'],
      },
    },
    // 46번
    {
      id: 'sentence46',
      level: 1,
      isFinal: false,
      korean: '차이가 존재한다.)',
      chinese: {
        hanzi: ['存在', '差异'],
        pinyin: ['cúnzài', 'chāyì'],
      },
    },
    {
      id: 'sentence46',
      level: 2,
      isFinal: false,
      korean: '용도에 차이가 존재한다.',
      chinese: {
        hanzi: ['用途', '存在', '差异'],
        pinyin: ['yòngtú', 'cúnzài', 'chāyì'],
      },
    },
    {
      id: 'sentence46',
      level: 3,
      isFinal: false,
      korean: 'A와 B의 용도에 차이가 존재한다.',
      chinese: {
        hanzi: ['A和B', '的', '用途', '存在', '差异'],
        pinyin: ['A hé B', 'de', 'yòngtú', 'cúnzài', 'chāyì'],
      },
    },
    {
      id: 'sentence46',
      level: 4,
      isFinal: true,
      korean: '공식 영수증와 일반 영수증의 용도에 차이가 존재한다.',
      chinese: {
        hanzi: ['发票', '和', '收据', '的', '用途', '存在', '差异'],
        pinyin: ['fāpiào', 'hé', 'shōujù', 'de', 'yòngtú', 'cúnzài', 'chāyì'],
      },
    },
    // 47번
    {
      id: 'sentence47',
      level: 1,
      isFinal: false,
      korean: '토론하기 시작하다.',
      chinese: {
        hanzi: ['讨论', '起来'],
        pinyin: ['tǎolùn', 'qǐlái'],
      },
    },
    {
      id: 'sentence47',
      level: 2,
      isFinal: false,
      korean: '잇따라 토론하기 시작하다.',
      chinese: {
        hanzi: ['纷纷', '讨论', '起来'],
        pinyin: ['fēnfēn', 'tǎolùn', 'qǐlái'],
      },
    },
    {
      id: 'sentence47',
      level: 3,
      isFinal: false,
      korean: '사람들이 잇따라 토론하기 시작한다.',
      chinese: {
        hanzi: ['人们', '纷纷', '讨论', '起来'],
        pinyin: ['rénmen', 'fēnfēn', 'tǎolùn', 'qǐlái'],
      },
    },
    {
      id: 'sentence47',
      level: 4,
      isFinal: true,
      korean: '주변 사람들이 잇따라 토론하기 시작한다.',
      chinese: {
        hanzi: ['周边', '的', '人们', '纷纷', '讨论', '起来'],
        pinyin: ['zhōubiān', 'de', 'rénmen', 'fēnfēn', 'tǎolùn', 'qǐlái'],
      },
    },
    // 48번
    {
      id: 'sentence48',
      level: 1,
      isFinal: false,
      korean: '분해했다.',
      chinese: {
        hanzi: ['拆开了'],
        pinyin: ['Chāi kāi le'],
      },
    },
    {
      id: 'sentence48',
      level: 2,
      isFinal: false,
      korean: '모두 분해했다.',
      chinese: {
        hanzi: ['都', '拆开', '了'],
        pinyin: ['dōu', 'chāi', 'kāi', 'le'],
      },
    },
    {
      id: 'sentence48',
      level: 3,
      isFinal: false,
      korean: '부품을 모두 분해했다.',
      chinese: {
        hanzi: ['把', '零件', '都', '拆', '开', '了'],
        pinyin: ['bǎ', 'língjiàn', 'dōu', 'chāi', 'kāi', 'le'],
      },
    },
    {
      id: 'sentence48',
      level: 4,
      isFinal: false,
      korean: '이 기계의 부품을 모두 분해했다.',
      chinese: {
        hanzi: ['把', '这', '台', '机器', '的', '零件', '都', '拆', '开', '了'],
        pinyin: [
          'bǎ',
          'zhè',
          'tái',
          'jīqì',
          'de',
          'língjiàn',
          'dōu',
          'chāi',
          'kāi',
          'le',
        ],
      },
    },
    {
      id: 'sentence48',
      level: 5,
      isFinal: true,
      korean: '라오왕은 이 기계의 부품을 모두 분해했다.',
      chinese: {
        hanzi: [
          '老王',
          '把',
          '这',
          '台',
          '机器',
          '的',
          '零件',
          '都',
          '拆',
          '开',
          '了',
        ],
        pinyin: [
          'Lǎo Wáng',
          'bǎ',
          'zhè',
          'tái',
          'jīqì',
          'de',
          'língjiàn',
          'dōu',
          'chāi',
          'kāi',
          'le',
        ],
      },
    },
    // 49번
    {
      id: 'sentence49',
      level: 1,
      isFinal: false,
      korean: '아쉬움을 남기다.',
      chinese: {
        hanzi: ['留下', '遗憾'],
        pinyin: ['liúxià', 'yíhàn'],
      },
    },
    {
      id: 'sentence49',
      level: 2,
      isFinal: false,
      korean: '자신의 삶(생활)에 아쉬움을 남기다.',
      chinese: {
        hanzi: ['给', '自己', '的', '生活', '留下', '遗憾'],
        pinyin: ['gěi', 'zìjǐ', 'de', 'shēnghuó', 'liúxià', 'yíhàn'],
      },
    },
    {
      id: 'sentence49',
      level: 3,
      isFinal: false,
      korean: '자신의 삶(생활)에 아쉬움을 남기지 마라.',
      chinese: {
        hanzi: ['不要', '给', '自己', '的', '生活', '留下', '遗憾'],
        pinyin: ['búyào', 'gěi', 'zìjǐ', 'de', 'shēnghuó', 'liúxià', 'yíhàn'],
      },
    },
    {
      id: 'sentence49',
      level: 4,
      isFinal: true,
      korean: '최대한 자신의 삶(생활)에 아쉬움을 남기지 마라.',
      chinese: {
        hanzi: ['尽量', '不要', '给', '自己', '的', '生活', '留下', '遗憾'],
        pinyin: [
          'jǐnliàng',
          'búyào',
          'gěi',
          'zìjǐ',
          'de',
          'shēnghuó',
          'liúxià',
          'yíhàn',
        ],
      },
    },
    //50번
    {
      id: 'sentence50',
      level: 1,
      isFinal: false,
      korean: '흥정을 하다.',
      chinese: {
        hanzi: ['讨价', '还价'],
        pinyin: ['tǎojià', 'huánjià'],
      },
    },
    {
      id: 'sentence50',
      level: 2,
      isFinal: false,
      korean: '흥정하려고 한다.',
      chinese: {
        hanzi: ['要', '讨价', '还价'],
        pinyin: ['yào', 'tǎojià', 'huánjià'],
      },
    },
    {
      id: 'sentence50',
      level: 3,
      isFinal: false,
      korean: '참지 못하고 흥정하려 한다.',
      chinese: {
        hanzi: ['忍', '不', '住', '要', '讨价', '还价'],
        pinyin: ['rěn', 'bu', 'zhù', 'yào', 'tǎojià', 'huánjià'],
      },
    },
    {
      id: 'sentence50',
      level: 4,
      isFinal: false,
      korean: '늘 참지 못하고 흥정하려 한다.',
      chinese: {
        hanzi: ['总', '忍', '不', '住', '要', '讨价', '还价'],
        pinyin: ['zǒng', 'rěn', 'bu', 'zhù', 'yào', 'tǎojià', 'huánjià'],
      },
    },
    {
      id: 'sentence50',
      level: 5,
      isFinal: true,
      korean: '그녀는 쇼핑할 때 늘 참지 못하고 흥정을 한다.',
      chinese: {
        hanzi: [
          '她',
          '购物',
          '时',
          '总',
          '忍',
          '不',
          '住',
          '要',
          '讨价',
          '还价',
        ],
        pinyin: [
          'tā',
          'gòuwù',
          'shí',
          'zǒng',
          'rěn',
          'bu',
          'zhù',
          'yào',
          'tǎojià',
          'huánjià',
        ],
      },
    },
  ],
  day6: [
    // 51번
    {
      id: 'sentence51',
      level: 1,
      isFinal: false,
      korean: '수량이 증가하다.',
      chinese: {
        hanzi: ['数量', '增加'],
        pinyin: ['shùliàng', 'zēngjiā'],
      },
    },
    {
      id: 'sentence51',
      level: 2,
      isFinal: false,
      korean: '상품 수량이 증가하다.',
      chinese: {
        hanzi: ['商品', '数量', '增加'],
        pinyin: ['shāngpǐn', 'shùliàng', 'zēngjiā'],
      },
    },
    {
      id: 'sentence51',
      level: 3,
      isFinal: false,
      korean: '상품 수량이 증가했다.',
      chinese: {
        hanzi: ['商品', '数量', '增加', '了'],
        pinyin: ['shāngpǐn', 'shùliàng', 'zēngjiā', 'le'],
      },
    },
    {
      id: 'sentence51',
      level: 4,
      isFinal: true,
      korean: '이 슈퍼마켓의 상품 수량이 증가했다.',
      chinese: {
        hanzi: ['这', '家', '超市', '的', '商品', '数量', '增加', '了'],
        pinyin: [
          'zhè',
          'jiā',
          'chāoshì',
          'de',
          'shāngpǐn',
          'shùliàng',
          'zēngjiā',
          'le',
        ],
      },
    },
    // 52번
    {
      id: 'sentence52',
      level: 1,
      isFinal: false,
      korean: '매우 익숙하다.',
      chinese: {
        hanzi: ['非常', '熟悉'],
        pinyin: ['fēicháng', 'shúxī'],
      },
    },
    {
      id: 'sentence52',
      level: 2,
      isFinal: false,
      korean: '국제 무역 규칙에 매우 익숙하다.',
      chinese: {
        hanzi: ['对', '国际', '贸易', '规则', '非常', '熟悉'],
        pinyin: ['duì', 'guójì', 'màoyì', 'guīzé', 'fēicháng', 'shúxī'],
      },
    },
    {
      id: 'sentence52',
      level: 3,
      isFinal: true,
      korean: '이 전문가는 국제 무역 규칙에 매우 익숙하다.',
      chinese: {
        hanzi: [
          '这',
          '位',
          '专家',
          '对',
          '国际',
          '贸易',
          '规则',
          '非常',
          '熟悉',
        ],
        pinyin: [
          'zhè',
          'wèi',
          'zhuānjiā',
          'duì',
          'guójì',
          'màoyì',
          'guīzé',
          'fēicháng',
          'shúxī',
        ],
      },
    },
    // 28번
    {
      id: 'sentence53',
      level: 1,
      isFinal: false,
      korean: '땀을 닦다.',
      chinese: {
        hanzi: ['擦', '汗'],
        pinyin: ['cā', 'hàn'],
      },
    },
    {
      id: 'sentence53',
      level: 2,
      isFinal: false,
      korean: '땀을 한번 닦다.',
      chinese: {
        hanzi: ['擦', '一', '擦', '汗'],
        pinyin: ['cā', 'yi', 'cā', 'hàn'],
      },
    },
    {
      id: 'sentence53',
      level: 3,
      isFinal: false,
      korean: '수건으로 땀을 닦다.',
      chinese: {
        hanzi: ['用', '毛巾', '擦', '一', '擦', '汗'],
        pinyin: ['yòng', 'máojīn', 'cā', 'yi', 'cā', 'hàn'],
      },
    },
    {
      id: 'sentence53',
      level: 4,
      isFinal: true,
      korean: '빨리 수건으로 땀 좀 닦아라.',
      chinese: {
        hanzi: ['快', '用', '毛巾', '擦', '一', '擦', '汗'],
        pinyin: ['kuài', 'yòng', 'máojīn', 'cā', 'yi', 'cā', 'hàn'],
      },
    },
    // 54번
    {
      id: 'sentence54',
      level: 1,
      isFinal: false,
      korean: '예의가 있다.',
      chinese: {
        hanzi: ['有', '礼貌'],
        pinyin: ['yǒu', 'lǐmào'],
      },
    },
    {
      id: 'sentence54',
      level: 2,
      isFinal: false,
      korean: '특히 예의가 있다.',
      chinese: {
        hanzi: ['特别', '有', '礼貌'],
        pinyin: ['tèbié', 'yǒu', 'lǐmào'],
      },
    },
    {
      id: 'sentence54',
      level: 3,
      isFinal: false,
      korean: '아이가 특히 예의가 있다.',
      chinese: {
        hanzi: ['孩子', '特别', '有', '礼貌'],
        pinyin: ['háizi', 'tèbié', 'yǒu', 'lǐmào'],
      },
    },
    {
      id: 'sentence54',
      level: 4,
      isFinal: true,
      korean: '이웃집 아이는 특히 예의가 있다.',
      chinese: {
        hanzi: ['邻居家', '的', '孩子', '特别', '有', '礼貌'],
        pinyin: ['línjū jiā', 'de', 'háizi', 'tèbié', 'yǒu', 'lǐmào'],
      },
    },

    // 55번
    {
      id: 'sentence55',
      level: 1,
      isFinal: false,
      korean: '생기가 없다.',
      chinese: {
        hanzi: ['没有', '精神'],
        pinyin: ['méiyǒu', 'jīngshen'],
      },
    },
    {
      id: 'sentence55',
      level: 2,
      isFinal: false,
      korean: '정말 생기가 없다.',
      chinese: {
        hanzi: ['实在', '没有', '精神'],
        pinyin: ['shízài', 'méiyǒu', 'jīngshen'],
      },
    },
    {
      id: 'sentence55',
      level: 3,
      isFinal: false,
      korean: '정말 생기가 없어졌다.',
      chinese: {
        hanzi: ['实在', '没有', '精神', '了'],
        pinyin: ['shízài', 'méiyǒu', 'jīngshen', 'le'],
      },
    },
    {
      id: 'sentence55',
      level: 4,
      isFinal: true,
      korean: '그의 눈에는 정말 생기가 없다.',
      chinese: {
        hanzi: ['他', '的', '眼睛', '实在', '没有', '精神', '了'],
        pinyin: ['tā', 'de', 'yǎnjing', 'shízài', 'méiyǒu', 'jīngshen', 'le'],
      },
    },
    // 56번
    {
      id: 'sentence56',
      level: 1,
      isFinal: false,
      korean: '쓰레기를 함부로 버리다.',
      chinese: {
        hanzi: ['乱扔', '垃圾'],
        pinyin: ['luàn rēng', 'lājī'],
      },
    },
    {
      id: 'sentence56',
      level: 2,
      isFinal: false,
      korean: '쓰레기를 함부로 버리지 마라.',
      chinese: {
        hanzi: ['不要', '乱扔', '垃圾'],
        pinyin: ['búyào', 'luàn rēng', 'lājī'],
      },
    },
    {
      id: 'sentence56',
      level: 3,
      isFinal: false,
      korean: '제발 쓰레기를 함부로 버리지 마세요.',
      chinese: {
        hanzi: ['请', '不要', '乱扔', '垃圾'],
        pinyin: ['qǐng', 'búyào', 'luàn rēng', 'lājī'],
      },
    },
    {
      id: 'sentence56',
      level: 4,
      isFinal: true,
      korean: '여행객 여러분 쓰레기를 함부로 버리지 말아주세요.',
      chinese: {
        hanzi: ['各位', '游客', '请', '不要', '乱', '扔', '垃圾'],
        pinyin: ['gèwèi', 'yóukè', 'qǐng', 'búyào', 'luàn', 'rēng', 'lājī'],
      },
    },
    // 57번
    {
      id: 'sentence57',
      level: 1,
      isFinal: false,
      korean: '서랍 안에 넣었다.',
      chinese: {
        hanzi: ['放进了', '抽屉', '里'],
        pinyin: ['fàng jìn le', 'chōuti', 'lǐ'],
      },
    },
    {
      id: 'sentence57',
      level: 2,
      isFinal: false,
      korean: '책상의 서랍에 넣었다.',
      chinese: {
        hanzi: ['放进了', '桌子', '的', '抽屉', '里'],
        pinyin: ['fàng jìn le', 'zhuōzi', 'de', 'chōuti', 'lǐ'],
      },
    },
    {
      id: 'sentence57',
      level: 3,
      isFinal: false,
      korean: '계약서를 책상 서랍에 넣었다.',
      chinese: {
        hanzi: ['把', '合同', '放进了', '桌子', '的', '抽屉', '里'],
        pinyin: ['bǎ', 'hétóng', 'fàng jìn le', 'zhuōzi', 'de', 'chōuti', 'lǐ'],
      },
    },
    {
      id: 'sentence57',
      level: 4,
      isFinal: true,
      korean: '비서가 계약서를 책상 서랍에 넣었다.',
      chinese: {
        hanzi: ['秘书', '把', '合同', '放进了', '桌子', '的', '抽屉', '里'],
        pinyin: [
          'mìshū',
          'bǎ',
          'hétóng',
          'fàng jìn le',
          'zhuōzi',
          'de',
          'chōuti',
          'lǐ',
        ],
      },
    },
    // 58번
    {
      id: 'sentence58',
      level: 1,
      isFinal: false,
      korean: '잃어버렸다.',
      chinese: {
        hanzi: ['弄', '丢', '了'],
        pinyin: ['nòng', 'diū', 'le'],
      },
    },
    {
      id: 'sentence58',
      level: 2,
      isFinal: false,
      korean: '샤오리에게 잃어버려졌다.',
      chinese: {
        hanzi: ['被', '小李', '弄', '丢', '了'],
        pinyin: ['bèi', 'Xiǎo Lǐ', 'nòng', 'diū', 'le'],
      },
    },
    {
      id: 'sentence58',
      level: 3,
      isFinal: true,
      korean: '자료를 샤오리가 잃어버렸다. (= 자료가 샤오리에게 잃어버려졌다.)',
      chinese: {
        hanzi: ['材料', '被', '小李', '弄', '丢', '了'],
        pinyin: ['cáiliào', 'bèi', 'Xiǎo Lǐ', 'nòng', 'diū', 'le'],
      },
    },
    // 59번
    {
      id: 'sentence59',
      level: 1,
      isFinal: false,
      korean: '저는 분명히 말했어요.',
      chinese: {
        hanzi: ['我', '说', '得', '清楚'],
        pinyin: ['wǒ', 'shuō', 'de', 'qīngchu'],
      },
    },
    {
      id: 'sentence59',
      level: 2,
      isFinal: false,
      korean: '제가 분명히 말했나요?',
      chinese: {
        hanzi: ['我', '说', '得', '清楚', '吗'],
        pinyin: ['wǒ', 'shuō', 'de', 'qīngchu', 'ma'],
      },
    },
    {
      id: 'sentence59',
      level: 3,
      isFinal: false,
      korean: '제가 충분히 분명하게 말하지 않았나요?',
      chinese: {
        hanzi: ['我', '说', '得', '不够清楚', '吗'],
        pinyin: ['wǒ', 'shuō', 'de', 'búgòu qīngchu', 'ma'],
      },
    },
    {
      id: 'sentence59',
      level: 4,
      isFinal: false,
      korean: '제가 아직 충분히 분명하게 말하지 않은 건가요?',
      chinese: {
        hanzi: ['我', '说', '得', '还不够清楚', '吗'],
        pinyin: ['wǒ', 'shuō', 'de', 'hái búgòu qīngchu', 'ma'],
      },
    },
    {
      id: 'sentence59',
      level: 5,
      isFinal: true,
      korean: '도대체 제가 아직도 충분히 분명하게 말하지 않은 건가요?',
      chinese: {
        hanzi: ['难道', '我', '说', '得', '还', '不够', '清楚', '吗'],
        pinyin: ['nándào', 'wǒ', 'shuō', 'de', 'hái', 'búgòu', 'qīngchu', 'ma'],
      },
    },
    //60번
    {
      id: 'sentence60',
      level: 1,
      isFinal: false,
      korean: '중요하게 여겨지다, 주목을 끌다',
      chinese: {
        hanzi: ['引起', '重视'],
        pinyin: ['yǐnqǐ', 'zhòngshì'],
      },
    },
    {
      id: 'sentence60',
      level: 2,
      isFinal: false,
      korean: '중시되다.',
      chinese: {
        hanzi: ['被', '引起', '重视'],
        pinyin: ['bèi', 'yǐnqǐ', 'zhòngshì'],
      },
    },
    {
      id: 'sentence60',
      level: 3,
      isFinal: false,
      korean: '중시되지 않았다.',
      chinese: {
        hanzi: ['没有被', '引起', '重视'],
        pinyin: ['méiyǒu bèi', 'yǐnqǐ', 'zhòngshì'],
      },
    },
    {
      id: 'sentence60',
      level: 4,
      isFinal: false,
      korean: '전혀 중시되지 않았다.',
      chinese: {
        hanzi: ['并没有', '被', '引起', '重视'],
        pinyin: ['bìng méiyǒu', 'bèi', 'yǐnqǐ', 'zhòngshì'],
      },
    },
    {
      id: 'sentence60',
      level: 5,
      isFinal: true,
      korean: '이러한 위험들은 전혀 중시되지 않았다.',
      chinese: {
        hanzi: ['这', '些', '风险', '并', '没有', '被', '引起', '重视'],
        pinyin: [
          'zhè',
          'xiē',
          'fēngxiǎn',
          'bìng',
          'méiyǒu',
          'bèi',
          'yǐnqǐ',
          'zhòngshì',
        ],
      },
    },
  ],
  day7: [
    // 61번
    {
      id: 'sentence61',
      level: 1,
      isFinal: false,
      korean: '8위안 3마오에 팔다.',
      chinese: {
        hanzi: ['卖', '八', '块', '三', '毛', '钱'],
        pinyin: ['mài', 'bā', 'kuài', 'sān', 'máo', 'qián'],
      },
    },
    {
      id: 'sentence61',
      level: 2,
      isFinal: false,
      korean: '8위안 3마오에 팔렸다.',
      chinese: {
        hanzi: ['卖了', '八', '块', '三', '毛', '钱'],
        pinyin: ['mài le', 'bā', 'kuài', 'sān', 'máo', 'qián'],
      },
    },
    {
      id: 'sentence61',
      level: 3,
      isFinal: false,
      korean: '헌 책을 8위안 3마오에 팔았다.',
      chinese: {
        hanzi: ['旧书', '卖', '了', '八', '块', '三', '毛', '钱'],
        pinyin: ['jiùshū', 'mài', 'le', 'bā', 'kuài', 'sān', 'máo', 'qián'],
      },
    },
    {
      id: 'sentence61',
      level: 4,
      isFinal: true,
      korean: '집에 있던 헌 책을 8위안 3마오에 팔았다.',
      chinese: {
        hanzi: ['家里', '的', '旧书', '卖', '了', '八', '块', '三', '毛', '钱'],
        pinyin: [
          'jiālǐ',
          'de',
          'jiùshū',
          'mài',
          'le',
          'bā',
          'kuài',
          'sān',
          'máo',
          'qián',
        ],
      },
    },
    // 62번
    {
      id: 'sentence62',
      level: 1,
      isFinal: false,
      korean: '작년의 두 배',
      chinese: {
        hanzi: ['去年', '的', '两', '倍'],
        pinyin: ['qùnián', 'de', 'liǎng', 'bèi'],
      },
    },
    {
      id: 'sentence62',
      level: 2,
      isFinal: false,
      korean: '작년의 두 배이다.',
      chinese: {
        hanzi: ['是', '去年', '的', '两', '倍'],
        pinyin: ['shì', 'qùnián', 'de', 'liǎng', 'bèi'],
      },
    },
    {
      id: 'sentence62',
      level: 3,
      isFinal: false,
      korean: '급여가 작년의 두 배이다.',
      chinese: {
        hanzi: ['工资', '是', '去年', '的', '两', '倍'],
        pinyin: ['gōngzī', 'shì', 'qùnián', 'de', 'liǎng', 'bèi'],
      },
    },
    {
      id: 'sentence62',
      level: 4,
      isFinal: true,
      korean: '이 직위의 급여는 작년의 두 배이다.',
      chinese: {
        hanzi: ['这个', '岗位', '的', '工资', '是', '去年', '的', '两', '倍'],
        pinyin: [
          'zhège',
          'gǎngwèi',
          'de',
          'gōngzī',
          'shì',
          'qùnián',
          'de',
          'liǎng',
          'bèi',
        ],
      },
    },
    // 63번
    {
      id: 'sentence63',
      level: 1,
      isFinal: false,
      korean: '도움이 된다.',
      chinese: {
        hanzi: ['有', '帮助'],
        pinyin: ['yǒu', 'bāngzhù'],
      },
    },
    {
      id: 'sentence63',
      level: 2,
      isFinal: false,
      korean: '큰 도움이 된다.',
      chinese: {
        hanzi: ['有', '很', '大', '帮助'],
        pinyin: ['yǒu', 'hěn', 'dà', 'bāngzhù'],
      },
    },
    {
      id: 'sentence63',
      level: 3,
      isFinal: false,
      korean: '회사 관리에 큰 도움이 된다.',
      chinese: {
        hanzi: ['对', '公司的管理', '有', '很', '大', '帮助'],
        pinyin: ['duì', 'gōngsī de guǎnlǐ', 'yǒu', 'hěn', 'dà', 'bāngzhù'],
      },
    },
    {
      id: 'sentence63',
      level: 4,
      isFinal: true,
      korean: '이 제도는 회사 관리에 큰 도움이 된다.',
      chinese: {
        hanzi: [
          '这个',
          '制度',
          '对',
          '公司',
          '的',
          '管理',
          '有',
          '很',
          '大',
          '帮助',
        ],
        pinyin: [
          'zhège',
          'zhìdù',
          'duì',
          'gōngsī',
          'de',
          'guǎnlǐ',
          'yǒu',
          'hěn',
          'dà',
          'bāngzhù',
        ],
      },
    },
    // 74번
    {
      id: 'sentence64',
      level: 1,
      isFinal: false,
      korean: '너무 자세하다.',
      chinese: {
        hanzi: ['太', '详细', '了'],
        pinyin: ['tài', 'xiángxì', 'le'],
      },
    },
    {
      id: 'sentence64',
      level: 2,
      isFinal: false,
      korean: '보고서도 너무 자세하다.',
      chinese: {
        hanzi: ['报告', '也', '太', '详细', '了'],
        pinyin: ['bàogào', 'yě', 'tài', 'xiángxì', 'le'],
      },
    },
    {
      id: 'sentence64',
      level: 3,
      isFinal: false,
      korean: '그가 쓴 보고서도 너무 자세하다.',
      chinese: {
        hanzi: ['他', '写', '的', '报告', '也', '太', '详细', '了'],
        pinyin: ['tā', 'xiě', 'de', 'bàogào', 'yě', 'tài', 'xiángxì', 'le'],
      },
    },
    {
      id: 'sentence64',
      level: 4,
      isFinal: true,
      korean: '그가 새로 쓴 보고서도 너무 자세하다.',
      chinese: {
        hanzi: ['他', '新', '写', '的', '报告', '也', '太', '详细', '了'],
        pinyin: [
          'tā',
          'xīn',
          'xiě',
          'de',
          'bàogào',
          'yě',
          'tài',
          'xiángxì',
          'le',
        ],
      },
    },
    // 75번
    {
      id: 'sentence65',
      level: 1,
      isFinal: false,
      korean: '더 중요하다.',
      chinese: {
        hanzi: ['更', '重要'],
        pinyin: ['gèng', 'zhòngyào'],
      },
    },
    {
      id: 'sentence65',
      level: 2,
      isFinal: false,
      korean: '시간보다 더 중요하다.',
      chinese: {
        hanzi: ['比', '时间', '更', '重要'],
        pinyin: ['bǐ', 'shíjiān', 'gèng', 'zhòngyào'],
      },
    },
    {
      id: 'sentence65',
      level: 3,
      isFinal: false,
      korean: '효율이 시간보다 더 중요하다.',
      chinese: {
        hanzi: ['效率', '比', '时间', '更', '重要'],
        pinyin: ['xiàolǜ', 'bǐ', 'shíjiān', 'gèng', 'zhòngyào'],
      },
    },
    {
      id: 'sentence65',
      level: 4,
      isFinal: true,
      korean: '업무 효율이 시간보다 더 중요하다.',
      chinese: {
        hanzi: ['工作的', '效率', '比', '时间', '更', '重要'],
        pinyin: ['gōngzuò de', 'xiàolǜ', 'bǐ', 'shíjiān', 'gèng', 'zhòngyào'],
      },
    },
    // 76번
    {
      id: 'sentence66',
      level: 1,
      isFinal: false,
      korean: '활동에 참여하다.',
      chinese: {
        hanzi: ['参加', '活动'],
        pinyin: ['cānjiā', 'huódòng'],
      },
    },
    {
      id: 'sentence66',
      level: 2,
      isFinal: false,
      korean: '활동에 참여하고 싶다.',
      chinese: {
        hanzi: ['想', '参加', '活动'],
        pinyin: ['xiǎng', 'cānjiā', 'huódòng'],
      },
    },
    {
      id: 'sentence66',
      level: 3,
      isFinal: false,
      korean: '활동에 참여하고 싶지 않다.',
      chinese: {
        hanzi: ['不', '想', '参加', '活动'],
        pinyin: ['bù', 'xiǎng', 'cānjiā', 'huódòng'],
      },
    },
    {
      id: 'sentence66',
      level: 4,
      isFinal: false,
      korean: '조금도 활동에 참여하고 싶지 않다.',
      chinese: {
        hanzi: ['一点儿也', '不', '想', '参加', '活动'],
        pinyin: ['yìdiǎnr yě', 'bù', 'xiǎng', 'cānjiā', 'huódòng'],
      },
    },
    {
      id: 'sentence66',
      level: 5,
      isFinal: true,
      korean: '내 동료는 활동에 조금도 참여하고 싶어 하지 않는다.',
      chinese: {
        hanzi: ['我', '同事', '一点儿', '也', '不', '想', '参加', '活动'],
        pinyin: [
          'wǒ',
          'tóngshì',
          'yìdiǎnr',
          'yě',
          'bù',
          'xiǎng',
          'cānjiā',
          'huódòng',
        ],
      },
    },
    // 77번
    {
      id: 'sentence67',
      level: 1,
      isFinal: false,
      korean: '편의점 한 곳',
      chinese: {
        hanzi: ['一', '家', '便利店'],
        pinyin: ['yì', 'jiā', 'biànlìdiàn'],
      },
    },
    {
      id: 'sentence67',
      level: 2,
      isFinal: false,
      korean: '편의점이 한 곳 있다.',
      chinese: {
        hanzi: ['有', '一', '家', '便利店'],
        pinyin: ['yǒu', 'yì', 'jiā', 'biànlìdiàn'],
      },
    },
    {
      id: 'sentence67',
      level: 3,
      isFinal: false,
      korean: '(......하면,) 바로 편의점이 있다.',
      chinese: {
        hanzi: ['就有', '一', '家', '便利店'],
        pinyin: ['jiù yǒu', 'yì', 'jiā', 'biànlìdiàn'],
      },
    },
    {
      id: 'sentence67',
      level: 4,
      isFinal: false,
      korean: '10분 걷다.',
      chinese: {
        hanzi: ['走', '十', '分钟'],
        pinyin: ['zǒu', 'shí', 'fēnzhōng'],
      },
    },
    {
      id: 'sentence67',
      level: 5,
      isFinal: false,
      korean: '10분 더 걷다.',
      chinese: {
        hanzi: ['再', '走', '十', '分钟'],
        pinyin: ['zài', 'zǒu', 'shí', 'fēnzhōng'],
      },
    },
    {
      id: 'sentence67',
      level: 6,
      isFinal: true,
      korean: '10분 더 걸으면 바로 편의점이 있다.',
      chinese: {
        hanzi: ['再', '走', '十', '分钟', '就', '有', '一', '家', '便利店'],
        pinyin: [
          'zài',
          'zǒu',
          'shí',
          'fēnzhōng',
          'jiù',
          'yǒu',
          'yì',
          'jiā',
          'biànlìdiàn',
        ],
      },
    },
    // 78번
    {
      id: 'sentence68',
      level: 1,
      isFinal: false,
      korean: '한번 번역해봐요.',
      chinese: {
        hanzi: ['翻译', '一下'],
        pinyin: ['fānyì', 'yíxià'],
      },
    },
    {
      id: 'sentence68',
      level: 2,
      isFinal: false,
      korean: '내용을 한번 번역해봐요.',
      chinese: {
        hanzi: ['把', '内容', '翻译', '一下'],
        pinyin: ['bǎ', 'nèiróng', 'fānyì', 'yíxià'],
      },
    },
    {
      id: 'sentence68',
      level: 3,
      isFinal: false,
      korean: '이 단락 내용을 한번 번역해봐요.',
      chinese: {
        hanzi: ['把', '这', '段', '内容', '翻译', '一下'],
        pinyin: ['bǎ', 'zhè', 'duàn', 'nèiróng', 'fānyì', 'yíxià'],
      },
    },
    {
      id: 'sentence68',
      level: 4,
      isFinal: true,
      korean: '이 단락 내용을 한번 번역해보세요.',
      chinese: {
        hanzi: ['请', '把', '这', '段', '内容', '翻译', '一下'],
        pinyin: ['qǐng', 'bǎ', 'zhè', 'duàn', 'nèiróng', 'fānyì', 'yíxià'],
      },
    },
    // 79번
    {
      id: 'sentence69',
      level: 1,
      isFinal: false,
      korean: '잘 정리되었다.',
      chinese: {
        hanzi: ['整理', '好', '了'],
        pinyin: ['zhěnglǐ', 'hǎo', 'le'],
      },
    },
    {
      id: 'sentence69',
      level: 2,
      isFinal: false,
      korean: '분류하여 잘 정리되었다.',
      chinese: {
        hanzi: ['分类', '整理', '好', '了'],
        pinyin: ['fēnlèi', 'zhěnglǐ', 'hǎo', 'le'],
      },
    },
    {
      id: 'sentence69',
      level: 3,
      isFinal: false,
      korean: '그가 분류하여 잘 정리했다. (= 그에 의해 분류되어 잘 정리됐다.)',
      chinese: {
        hanzi: ['被', '他', '分类', '整理', '好', '了'],
        pinyin: ['bèi', 'tā', 'fēnlèi', 'zhěnglǐ', 'hǎo', 'le'],
      },
    },
    {
      id: 'sentence69',
      level: 4,
      isFinal: false,
      korean:
        '다 그가 분류해서 정리했다. (= 다 그에 의해 분류되어 잘 정리됐다.)',
      chinese: {
        hanzi: ['都', '被', '他', '分类', '整理', '好', '了'],
        pinyin: ['dōu', 'bèi', 'tā', 'fēnlèi', 'zhěnglǐ', 'hǎo', 'le'],
      },
    },
    {
      id: 'sentence69',
      level: 5,
      isFinal: true,
      korean:
        '모든 파일은 다 그가 분류·정리했다. (= 모든 파일은 다 그에 의해 분류되어 잘 정리됐다.)',
      chinese: {
        hanzi: ['所有', '文件', '都', '被', '他', '分类', '整理', '好', '了'],
        pinyin: [
          'suǒyǒu',
          'wénjiàn',
          'dōu',
          'bèi',
          'tā',
          'fēnlèi',
          'zhěnglǐ',
          'hǎo',
          'le',
        ],
      },
    },
    // 80번
    {
      id: 'sentence70',
      level: 1,
      isFinal: false,
      korean: '더 효율적이다.',
      chinese: {
        hanzi: ['更', '高效'],
        pinyin: ['gèng', 'gāoxiào'],
      },
    },
    {
      id: 'sentence70',
      level: 2,
      isFinal: false,
      korean: '더 효율적으로 변했다.',
      chinese: {
        hanzi: ['变得', '更', '高效', '了'],
        pinyin: ['biànde', 'gèng', 'gāoxiào', 'le'],
      },
    },
    {
      id: 'sentence70',
      level: 3,
      isFinal: false,
      korean: '일을 더 효율적으로 변하도록 했다.',
      chinese: {
        hanzi: ['让', '工作', '变得', '更', '高效', '了'],
        pinyin: ['ràng', 'gōngzuò', 'biànde', 'gèng', 'gāoxiào', 'le'],
      },
    },
    {
      id: 'sentence70',
      level: 4,
      isFinal: false,
      korean: '우리의 일을 더 효율적으로 변하도록 했다.',
      chinese: {
        hanzi: ['让', '我们', '的', '工作', '变得', '更', '高效', '了'],
        pinyin: [
          'ràng',
          'wǒmen',
          'de',
          'gōngzuò',
          'biànde',
          'gèng',
          'gāoxiào',
          'le',
        ],
      },
    },
    {
      id: 'sentence70',
      level: 5,
      isFinal: true,
      korean: '새 기술이 우리의 일을 더 효율적으로 변하도록 했다.',
      chinese: {
        hanzi: [
          '新',
          '技术',
          '让',
          '我们',
          '的',
          '工作',
          '变得',
          '更',
          '高效',
          '了',
        ],
        pinyin: [
          'xīn',
          'jìshù',
          'ràng',
          'wǒmen',
          'de',
          'gōngzuò',
          'biànde',
          'gèng',
          'gāoxiào',
          'le',
        ],
      },
    },
  ],
  day8: [
    // 71번
    {
      id: 'sentence71',
      level: 1,
      isFinal: false,
      korean: '공동의 책임',
      chinese: {
        hanzi: ['共同', '的', '责任'],
        pinyin: ['gòngtóng', 'de', 'zérèn'],
      },
    },
    {
      id: 'sentence71',
      level: 2,
      isFinal: false,
      korean: '인류 공동의 책임',
      chinese: {
        hanzi: ['人类', '共同', '的', '责任'],
        pinyin: ['rénlèi', 'gòngtóng', 'de', 'zérèn'],
      },
    },
    {
      id: 'sentence71',
      level: 3,
      isFinal: true,
      korean: '교육은 인류 공동의 책임이다.',
      chinese: {
        hanzi: ['教育', '是', '人类', '共同', '的', '责任'],
        pinyin: ['jiàoyù', 'shì', 'rénlèi', 'gòngtóng', 'de', 'zérèn'],
      },
    },

    // 72번
    {
      id: 'sentence72',
      level: 1,
      isFinal: false,
      korean: '감동적으로 친다. (= 치는 정도가 감동적이다.)',
      chinese: {
        hanzi: ['弹', '得', '动人'],
        pinyin: ['tán', 'de', 'dòngrén'],
      },
    },
    {
      id: 'sentence72',
      level: 2,
      isFinal: false,
      korean: '매우 감동적으로 친다. (= 치는 정도가 매우 감동적이다.)',
      chinese: {
        hanzi: ['弹', '得', '十分', '动人'],
        pinyin: ['tán', 'de', 'shífēn', 'dòngrén'],
      },
    },
    {
      id: 'sentence72',
      level: 3,
      isFinal: false,
      korean:
        '피아노를 매우 감동적으로 친다. (= 피아노를 치는 정도가 매우 감동적이다.)',
      chinese: {
        hanzi: ['钢琴', '弹', '得', '十分', '动人'],
        pinyin: ['gāngqín', 'tán', 'de', 'shífēn', 'dòngrén'],
      },
    },
    {
      id: 'sentence72',
      level: 4,
      isFinal: true,
      korean:
        '그는 피아노를 매우 감동적으로 친다. (= 그는 피아노를 치는 정도가 매우 감동적이다.)',
      chinese: {
        hanzi: ['他', '钢琴', '弹', '得', '十分', '动人'],
        pinyin: ['tā', 'gāngqín', 'tán', 'de', 'shífēn', 'dòngrén'],
      },
    },

    // 73번
    {
      id: 'sentence73',
      level: 1,
      isFinal: false,
      korean: '방법은 매우 간단하다.',
      chinese: {
        hanzi: ['方法', '很', '简单'],
        pinyin: ['fāngfǎ', 'hěn', 'jiǎndān'],
      },
    },
    {
      id: 'sentence73',
      level: 2,
      isFinal: false,
      korean: '조작 방법은 매우 간단하다.',
      chinese: {
        hanzi: ['操作', '方法', '很', '简单'],
        pinyin: ['cāozuò', 'fāngfǎ', 'hěn', 'jiǎndān'],
      },
    },
    {
      id: 'sentence73',
      level: 3,
      isFinal: false,
      korean: '소프트웨어의 조작 방법은 매우 간단하다.',
      chinese: {
        hanzi: ['软件', '的', '操作', '方法', '很', '简单'],
        pinyin: ['ruǎnjiàn', 'de', 'cāozuò', 'fāngfǎ', 'hěn', 'jiǎndān'],
      },
    },
    {
      id: 'sentence73',
      level: 4,
      isFinal: true,
      korean: '이 소프트웨어의 조작 방법은 매우 간단하다.',
      chinese: {
        hanzi: ['这个', '软件', '的', '操作', '方法', '很', '简单'],
        pinyin: [
          'zhège',
          'ruǎnjiàn',
          'de',
          'cāozuò',
          'fāngfǎ',
          'hěn',
          'jiǎndān',
        ],
      },
    },
    // 74번
    {
      id: 'sentence74',
      level: 1,
      isFinal: false,
      korean: '냉장고에 넣다.',
      chinese: {
        hanzi: ['放进', '冰箱', '里'],
        pinyin: ['fàngjìn', 'bīngxiāng', 'lǐ'],
      },
    },
    {
      id: 'sentence74',
      level: 2,
      isFinal: false,
      korean: '냉장고에 넣자(넣어라).',
      chinese: {
        hanzi: ['放进', '冰箱', '里', '吧'],
        pinyin: ['fàngjìn', 'bīngxiāng', 'lǐ', 'ba'],
      },
    },
    {
      id: 'sentence74',
      level: 3,
      isFinal: false,
      korean: '다 마시지 않은 우유',
      chinese: {
        hanzi: ['没', '喝', '完', '的', '牛奶'],
        pinyin: ['méi', 'hē', 'wán', 'de', 'niúnǎi'],
      },
    },
    {
      id: 'sentence74',
      level: 4,
      isFinal: true,
      korean: '다 마시지 않은 우유를 냉장고에 넣어라.',
      chinese: {
        hanzi: [
          '把',
          '没',
          '喝',
          '完',
          '的',
          '牛奶',
          '放进',
          '冰箱',
          '里',
          '吧',
        ],
        pinyin: [
          'bǎ',
          'méi',
          'hē',
          'wán',
          'de',
          'niúnǎi',
          'fàngjìn',
          'bīngxiāng',
          'lǐ',
          'ba',
        ],
      },
    },
    // 75번
    {
      id: 'sentence75',
      level: 1,
      isFinal: false,
      korean: '기침이 심하다. (=기침하는 정도가 심하다)',
      chinese: {
        hanzi: ['咳嗽', '得', '严重'],
        pinyin: ['késou', 'de', 'yánzhòng'],
      },
    },
    {
      id: 'sentence75',
      level: 2,
      isFinal: false,
      korean: '점점 심하게 기침한다. (=기침하는 정도가 점점 심하다)',
      chinese: {
        hanzi: ['咳嗽', '得', '越来越', '严重'],
        pinyin: ['késou', 'de', 'yuèláiyuè', 'yánzhòng'],
      },
    },
    {
      id: 'sentence75',
      level: 3,
      isFinal: true,
      korean:
        '아이가 점점 심하게 기침한다. (=아이가 기침하는 정도가 점점 심하다)',
      chinese: {
        hanzi: ['孩子', '咳嗽', '得', '越来越', '严重'],
        pinyin: ['háizi', 'késou', 'de', 'yuèláiyuè', 'yánzhòng'],
      },
    },
    // 76번
    {
      id: 'sentence76',
      level: 1,
      isFinal: false,
      korean: '내용은 훌륭하다.',
      chinese: {
        hanzi: ['内容', '精彩'],
        pinyin: ['nèiróng', 'jīngcǎi'],
      },
    },
    {
      id: 'sentence76',
      level: 2,
      isFinal: false,
      korean: '영화 내용은 훌륭하다.',
      chinese: {
        hanzi: ['电影', '内容', '精彩'],
        pinyin: ['diànyǐng', 'nèiróng', 'jīngcǎi'],
      },
    },
    {
      id: 'sentence76',
      level: 3,
      isFinal: false,
      korean: '영화 내용은 훌륭해?',
      chinese: {
        hanzi: ['电影', '内容', '精彩', '吗'],
        pinyin: ['diànyǐng', 'nèiróng', 'jīngcǎi', 'ma'],
      },
    },
    {
      id: 'sentence76',
      level: 4,
      isFinal: true,
      korean: '지난주 영화 내용은 훌륭했어?',
      chinese: {
        hanzi: ['上周', '的', '电影', '内容', '精彩', '吗'],
        pinyin: ['shàngzhōu', 'de', 'diànyǐng', 'nèiróng', 'jīngcǎi', 'ma'],
      },
    },
    // 77번
    {
      id: 'sentence77',
      level: 1,
      isFinal: false,
      korean: '의견이 있다.',
      chinese: {
        hanzi: ['有', '看法'],
        pinyin: ['yǒu', 'kànfǎ'],
      },
    },
    {
      id: 'sentence77',
      level: 2,
      isFinal: false,
      korean: '이 일에 대해 의견이 있다.',
      chinese: {
        hanzi: ['对', '这件事', '有', '看法'],
        pinyin: ['duì', 'zhè jiàn shì', 'yǒu', 'kànfǎ'],
      },
    },
    {
      id: 'sentence77',
      level: 3,
      isFinal: false,
      korean: '이 일에 대해 같은 의견이 있다.',
      chinese: {
        hanzi: ['对', '这', '件', '事', '有', '相同', '看法'],
        pinyin: ['duì', 'zhè', 'jiàn', 'shì', 'yǒu', 'xiāngtóng', 'kànfǎ'],
      },
    },
    {
      id: 'sentence77',
      level: 4,
      isFinal: true,
      korean: '그들은 이 일에 대해 같은 의견이 있다.',
      chinese: {
        hanzi: ['他们', '对', '这', '件', '事', '有', '相同', '看法'],
        pinyin: [
          'tāmen',
          'duì',
          'zhè',
          'jiàn',
          'shì',
          'yǒu',
          'xiāngtóng',
          'kànfǎ',
        ],
      },
    },
    // 78번
    {
      id: 'sentence78',
      level: 1,
      isFinal: false,
      korean: '(나쁜 습관 등을) 기르지 마라(들이지 마라)',
      chinese: {
        hanzi: ['不要', '养成'],
        pinyin: ['búyào', 'yǎngchéng'],
      },
    },
    {
      id: 'sentence78',
      level: 2,
      isFinal: false,
      korean: '나쁜 습관을 들이지 마라.',
      chinese: {
        hanzi: ['不要', '养成', '坏', '习惯'],
        pinyin: ['búyào', 'yǎngchéng', 'huài', 'xíguàn'],
      },
    },
    {
      id: 'sentence78',
      level: 3,
      isFinal: true,
      korean: '지각하는 나쁜 습관을 들이지 마라.',
      chinese: {
        hanzi: ['不要', '养成', '迟到', '的', '坏', '习惯'],
        pinyin: ['búyào', 'yǎngchéng', 'chídào', 'de', 'huài', 'xíguàn'],
      },
    },
    // 79번
    {
      id: 'sentence79',
      level: 1,
      isFinal: false,
      korean: '눈물을 흘렸다.',
      chinese: {
        hanzi: ['流泪', '了'],
        pinyin: ['liúlèi', 'le'],
      },
    },
    {
      id: 'sentence79',
      level: 2,
      isFinal: false,
      korean: '눈물을 흘릴 정도로 감동했다.',
      chinese: {
        hanzi: ['感动', '得', '流泪', '了'],
        pinyin: ['gǎndòng', 'de', 'liúlèi', 'le'],
      },
    },
    {
      id: 'sentence79',
      level: 3,
      isFinal: true,
      korean: '그녀는 눈물을 흘릴 정도로 감동했다.',
      chinese: {
        hanzi: ['她', '感动', '得', '流泪', '了'],
        pinyin: ['tā', 'gǎndòng', 'de', 'liúlèi', 'le'],
      },
    },
    // 80번
    {
      id: 'sentence80',
      level: 1,
      isFinal: false,
      korean: '그는 ……을 증명했다.',
      chinese: {
        hanzi: ['他', '证明'],
        pinyin: ['tā', 'zhèngmíng'],
      },
    },
    {
      id: 'sentence80',
      level: 2,
      isFinal: false,
      korean: '그는 ……을 증명하고 싶어 한다.',
      chinese: {
        hanzi: ['他', '想', '证明'],
        pinyin: ['tā', 'xiǎng', 'zhèngmíng'],
      },
    },
    {
      id: 'sentence80',
      level: 3,
      isFinal: false,
      korean: '선택은 옳다. (= 선택은 옳은 것이다.)',
      chinese: {
        hanzi: ['选择', '是', '正确的'],
        pinyin: ['xuǎnzé', 'shì', 'zhèngquè de'],
      },
    },
    {
      id: 'sentence80',
      level: 4,
      isFinal: false,
      korean: '자신의 선택은 옳다. (= 자신의 선택은 옳은 것이다.)',
      chinese: {
        hanzi: ['自己', '的', '选择', '是', '正确的'],
        pinyin: ['zìjǐ', 'de', 'xuǎnzé', 'shì', 'zhèngquè de'],
      },
    },
    {
      id: 'sentence80',
      level: 5,
      isFinal: true,
      korean: '그는 자신의 선택이 옳다는 것을 증명하고 싶어 한다.',
      chinese: {
        hanzi: ['他', '想', '证明', '自己', '的', '选择', '是', '正确', '的'],
        pinyin: [
          'tā',
          'xiǎng',
          'zhèngmíng',
          'zìjǐ',
          'de',
          'xuǎnzé',
          'shì',
          'zhèngquè',
          'de',
        ],
      },
    },
  ],
  day9: [
    // 81번
    {
      id: 'sentence81',
      level: 1,
      isFinal: false,
      korean: '다리 하나',
      chinese: {
        hanzi: ['一座桥'],
        pinyin: ['yí zuò qiáo'],
      },
    },
    {
      id: 'sentence81',
      level: 2,
      isFinal: false,
      korean: '다리 하나를 그리다.',
      chinese: {
        hanzi: ['画', '一', '座', '桥'],
        pinyin: ['huà', 'yí', 'zuò', 'qiáo'],
      },
    },
    {
      id: 'sentence81',
      level: 3,
      isFinal: false,
      korean: '다리 하나를 그렸다.',
      chinese: {
        hanzi: ['画了', '一', '座', '桥'],
        pinyin: ['huà le', 'yí', 'zuò', 'qiáo'],
      },
    },
    {
      id: 'sentence81',
      level: 4,
      isFinal: true,
      korean: '화이트보드에 다리 하나를 그렸다.',
      chinese: {
        hanzi: ['白板上', '画', '了', '一', '座', '桥'],
        pinyin: ['báibǎn shàng', 'huà', 'le', 'yí', 'zuò', 'qiáo'],
      },
    },
    // 82번
    {
      id: 'sentence82',
      level: 1,
      isFinal: false,
      korean: '완전히 반대이다.',
      chinese: {
        hanzi: ['正好', '相反'],
        pinyin: ['zhènghǎo', 'xiāngfǎn'],
      },
    },
    {
      id: 'sentence82',
      level: 2,
      isFinal: false,
      korean: '의견이 완전히 반대이다.',
      chinese: {
        hanzi: ['意见', '正好', '相反'],
        pinyin: ['yìjiàn', 'zhènghǎo', 'xiāngfǎn'],
      },
    },
    {
      id: 'sentence82',
      level: 3,
      isFinal: false,
      korean: '학우의 의견과 완전히 반대이다.',
      chinese: {
        hanzi: ['和', '同学', '的', '意见', '正好', '相反'],
        pinyin: ['hé', 'tóngxué', 'de', 'yìjiàn', 'zhènghǎo', 'xiāngfǎn'],
      },
    },
    {
      id: 'sentence82',
      level: 4,
      isFinal: true,
      korean: '나와 학우의 의견이 완전히 반대이다.',
      chinese: {
        hanzi: ['我', '和', '同学', '的', '意见', '正好', '相反'],
        pinyin: ['wǒ', 'hé', 'tóngxué', 'de', 'yìjiàn', 'zhènghǎo', 'xiāngfǎn'],
      },
    },
    // 83번
    {
      id: 'sentence83',
      level: 1,
      isFinal: false,
      korean: '관객을 끌어당기다.',
      chinese: {
        hanzi: ['吸引', '观众'],
        pinyin: ['xīyǐn', 'guānzhòng'],
      },
    },
    {
      id: 'sentence83',
      level: 2,
      isFinal: false,
      korean: '많은 관객을 끌어당기다',
      chinese: {
        hanzi: ['吸引', '大量', '的', '观众'],
        pinyin: ['xīyǐn', 'dàliàng', 'de', 'guānzhòng'],
      },
    },
    {
      id: 'sentence83',
      level: 3,
      isFinal: false,
      korean: '많은 관객을 끌어당겼다.',
      chinese: {
        hanzi: ['吸引了', '大量', '的', '观众'],
        pinyin: ['xīyǐn le', 'dàliàng', 'de', 'guānzhòng'],
      },
    },
    {
      id: 'sentence83',
      level: 4,
      isFinal: false,
      korean: '공연이 많은 관객을 끌어당겼다.',
      chinese: {
        hanzi: ['演出', '吸引了', '大量', '的', '观众'],
        pinyin: ['yǎnchū', 'xīyǐn le', 'dàliàng', 'de', 'guānzhòng'],
      },
    },
    {
      id: 'sentence83',
      level: 5,
      isFinal: true,
      korean: '멋진 공연이 많은 관객을 끌어당겼다.',
      chinese: {
        hanzi: ['精彩', '的', '演出', '吸引了', '大量', '的', '观众'],
        pinyin: [
          'jīngcǎi',
          'de',
          'yǎnchū',
          'xīyǐn le',
          'dàliàng',
          'de',
          'guānzhòng',
        ],
      },
    },
    // 84번
    {
      id: 'sentence84',
      level: 1,
      isFinal: false,
      korean: '놀라지 않다.',
      chinese: {
        hanzi: ['不', '惊讶'],
        pinyin: ['bù', 'jīngyà'],
      },
    },
    {
      id: 'sentence84',
      level: 2,
      isFinal: false,
      korean: '조금도 놀라지 않다.',
      chinese: {
        hanzi: ['一点儿', '都不', '惊讶'],
        pinyin: ['yìdiǎnr', 'dōu bù', 'jīngyà'],
      },
    },
    {
      id: 'sentence84',
      level: 3,
      isFinal: false,
      korean: '설마 조금도 놀라지 않는 거니?',
      chinese: {
        hanzi: ['难道', '一点儿', '都不', '惊讶', '吗'],
        pinyin: ['nándào', 'yìdiǎnr', 'dōu bù', 'jīngyà', 'ma'],
      },
    },
    {
      id: 'sentence84',
      level: 4,
      isFinal: true,
      korean:
        '너는 설마 조금도 놀라지 않는 거니? (= 너는 정말 조금도 놀라지 않는 거니?)',
      chinese: {
        hanzi: ['你', '难道', '一点儿', '都', '不', '惊讶', '吗'],
        pinyin: ['nǐ', 'nándào', 'yìdiǎnr', 'dōu', 'bù', 'jīngyà', 'ma'],
      },
    },
    // 85번
    {
      id: 'sentence85',
      level: 1,
      isFinal: false,
      korean: '재채기하다.',
      chinese: {
        hanzi: ['打', '喷嚏'],
        pinyin: ['dǎ', 'pēntì'],
      },
    },
    {
      id: 'sentence85',
      level: 2,
      isFinal: false,
      korean: '멈추지 않고 재채기하다.',
      chinese: {
        hanzi: ['不停地', '打', '喷嚏'],
        pinyin: ['bùtíng de', 'dǎ', 'pēntì'],
      },
    },
    {
      id: 'sentence85',
      level: 3,
      isFinal: false,
      korean: '눕기만 하면 바로…… 하다.',
      chinese: {
        hanzi: ['一', '躺下', '就'],
        pinyin: ['yì', 'tǎngxia', 'jiù'],
      },
    },
    {
      id: 'sentence85',
      level: 4,
      isFinal: false,
      korean: '눕기만 하면 (바로) 멈추지 않고 재채기한다.',
      chinese: {
        hanzi: ['一', '躺下', '就', '不停地', '打', '喷嚏'],
        pinyin: ['yì', 'tǎngxia', 'jiù', 'bùtíng de', 'dǎ', 'pēntì'],
      },
    },
    {
      id: 'sentence85',
      level: 5,
      isFinal: true,
      korean: '외할머니는 눕기만 하면 (바로) 멈추지 않고 재채기한다.',
      chinese: {
        hanzi: ['外婆', '一', '躺下', '就', '不停', '地', '打', '喷嚏'],
        pinyin: [
          'wàipó',
          'yì',
          'tǎngxia',
          'jiù',
          'bùtíng',
          'de',
          'dǎ',
          'pēntì',
        ],
      },
    },
    // 86번
    {
      id: 'sentence86',
      level: 1,
      isFinal: false,
      korean: '한번 닦다.',
      chinese: {
        hanzi: ['擦', '一下'],
        pinyin: ['cā', 'yíxià'],
      },
    },
    {
      id: 'sentence86',
      level: 2,
      isFinal: false,
      korean: '땀을 한번 닦다.',
      chinese: {
        hanzi: ['把', '汗', '擦', '一下'],
        pinyin: ['bǎ', 'hàn', 'cā', 'yíxià'],
      },
    },
    {
      id: 'sentence86',
      level: 3,
      isFinal: false,
      korean: '이마의 땀을 한번 닦다.',
      chinese: {
        hanzi: ['把', '额头', '上', '的', '汗', '擦', '一下'],
        pinyin: ['bǎ', 'étóu', 'shàng', 'de', 'hàn', 'cā', 'yíxià'],
      },
    },
    {
      id: 'sentence86',
      level: 4,
      isFinal: true,
      korean: '어서 이마의 땀을 한번 닦아라.',
      chinese: {
        hanzi: ['快', '把', '额头', '上', '的', '汗', '擦', '一下'],
        pinyin: ['kuài', 'bǎ', 'étóu', 'shàng', 'de', 'hàn', 'cā', 'yíxià'],
      },
    },
    {
      id: 'sentence87',
      level: 1,
      isFinal: false,
      korean: '잃어버렸다.',
      chinese: {
        hanzi: ['弄丢', '了'],
        pinyin: ['nòngdiū', 'le'],
      },
    },
    {
      id: 'sentence87',
      level: 2,
      isFinal: false,
      korean: '학우가 잃어버렸다. (= 학우에 의해 잃어버려졌다.)',
      chinese: {
        hanzi: ['被', '同学', '弄丢', '了'],
        pinyin: ['bèi', 'tóngxué', 'nòngdiū', 'le'],
      },
    },
    {
      id: 'sentence87',
      level: 3,
      isFinal: true,
      korean:
        '내 여권을 학우가 잃어버렸다. (= 내 여권은 학우에 의해 잃어버려졌다.)',
      chinese: {
        hanzi: ['我', '的', '护照', '被', '同学', '弄', '丢', '了'],
        pinyin: ['wǒ', 'de', 'hùzhào', 'bèi', 'tóngxué', 'nòng', 'diū', 'le'],
      },
    },
    {
      id: 'sentence88',
      level: 1,
      isFinal: false,
      korean: '채용에 통과하다.',
      chinese: {
        hanzi: ['通过', '应聘'],
        pinyin: ['tōngguò', 'yìngpìn'],
      },
    },
    {
      id: 'sentence88',
      level: 2,
      isFinal: false,
      korean: '순조롭게 채용에 통과하다.',
      chinese: {
        hanzi: ['顺利', '通过', '应聘'],
        pinyin: ['shùnlì', 'tōngguò', 'yìngpìn'],
      },
    },
    {
      id: 'sentence88',
      level: 3,
      isFinal: false,
      korean: '순조롭게 채용에 (충분히) 통과할 수 있다.',
      chinese: {
        hanzi: ['能够', '顺利通过', '应聘'],
        pinyin: ['nénggòu', 'shùnlì tōngguò', 'yìngpìn'],
      },
    },
    {
      id: 'sentence88',
      level: 4,
      isFinal: false,
      korean: '1%의 사람이 순조롭게 채용에 (충분히) 통과할 수 있다.',
      chinese: {
        hanzi: ['百分之', '一', '的', '人', '能够', '顺利', '通过', '应聘'],
        pinyin: [
          'bǎifēnzhī',
          'yī',
          'de',
          'rén',
          'nénggòu',
          'shùnlì',
          'tōngguò',
          'yìngpìn',
        ],
      },
    },
    {
      id: 'sentence88',
      level: 5,
      isFinal: true,
      korean: '오직 1%의 사람이 순조롭게 채용에 (충분히) 통과할 수 있다.',
      chinese: {
        hanzi: [
          '只有',
          '百分之',
          '一',
          '的',
          '人',
          '能够',
          '顺利',
          '通过',
          '应聘',
        ],
        pinyin: [
          'zhǐyǒu',
          'bǎifēnzhī',
          'yī',
          'de',
          'rén',
          'nénggòu',
          'shùnlì',
          'tōngguò',
          'yìngpìn',
        ],
      },
    },
    {
      id: 'sentence89',
      level: 1,
      isFinal: false,
      korean: '시간 안에 가능하다. (= 시간에 맞는다.)',
      chinese: {
        hanzi: ['来得及'],
        pinyin: ['láidejí'],
      },
    },
    {
      id: 'sentence89',
      level: 2,
      isFinal: false,
      korean: '완전히 시간 안에 가능하다. (= 충분히 시간에 맞는다.)',
      chinese: {
        hanzi: ['完全', '来得及'],
        pinyin: ['wánquán', 'láidejí'],
      },
    },
    {
      id: 'sentence89',
      level: 3,
      isFinal: false,
      korean: '등록하러 가기에 충분히 시간에 맞는다.',
      chinese: {
        hanzi: ['去', '登记', '完全', '来得及'],
        pinyin: ['qù', 'dēngjì', 'wánquán', 'láidejí'],
      },
    },
    {
      id: 'sentence89',
      level: 4,
      isFinal: true,
      korean: '지금 등록하러 가도 충분히 시간에 맞는다.',
      chinese: {
        hanzi: ['现在', '去', '登记', '完全', '来得及'],
        pinyin: ['xiànzài', 'qù', 'dēngjì', 'wánquán', 'láidejí'],
      },
    },
    {
      id: 'sentence90',
      level: 1,
      isFinal: false,
      korean: '기차를 제시간에 타다.',
      chinese: {
        hanzi: ['赶上', '火车'],
        pinyin: ['gǎnshàng', 'huǒchē'],
      },
    },
    {
      id: 'sentence90',
      level: 2,
      isFinal: false,
      korean: '기차를 제시간에 탈 수 있다.',
      chinese: {
        hanzi: ['能', '赶上', '火车'],
        pinyin: ['néng', 'gǎnshàng', 'huǒchē'],
      },
    },
    {
      id: 'sentence90',
      level: 3,
      isFinal: false,
      korean: '기차를 제시간에 타지 못했다.',
      chinese: {
        hanzi: ['没能', '赶上', '火车'],
        pinyin: ['méi néng', 'gǎnshàng', 'huǒchē'],
      },
    },
    {
      id: 'sentence90',
      level: 4,
      isFinal: false,
      korean: '역시 기차를 제시간에 타지 못했다.',
      chinese: {
        hanzi: ['还是', '没能', '赶上', '火车'],
        pinyin: ['háishì', 'méi néng', 'gǎnshàng', 'huǒchē'],
      },
    },
    {
      id: 'sentence90',
      level: 5,
      isFinal: false,
      korean: '결국 역시 기차를 제시간에 타지 못했다.',
      chinese: {
        hanzi: ['到底', '还是', '没能', '赶上', '火车'],
        pinyin: ['dàodǐ', 'háishì', 'méi néng', 'gǎnshàng', 'huǒchē'],
      },
    },
    {
      id: 'sentence90',
      level: 6,
      isFinal: true,
      korean: '남동생은 결국 (역시) 기차를 제시간에 타지 못했다.',
      chinese: {
        hanzi: ['弟弟', '到底', '还是', '没', '能', '赶上', '火车'],
        pinyin: [
          'dìdi',
          'dàodǐ',
          'háishì',
          'méi',
          'néng',
          'gǎnshàng',
          'huǒchē',
        ],
      },
    },
  ],
  day10: [
    // 91번
    {
      id: 'sentence91',
      level: 1,
      isFinal: false,
      korean: '유명한 강',
      chinese: {
        hanzi: ['著名的河流'],
        pinyin: ['zhùmíng de héliú'],
      },
    },
    {
      id: 'sentence91',
      level: 2,
      isFinal: false,
      korean: '가장 유명한 강',
      chinese: {
        hanzi: ['最', '著名', '的', '河流'],
        pinyin: ['zuì', 'zhùmíng', 'de', 'héliú'],
      },
    },
    {
      id: 'sentence91',
      level: 3,
      isFinal: false,
      korean: '중국에서 가장 유명한 강',
      chinese: {
        hanzi: ['中国', '最', '著名', '的', '河流'],
        pinyin: ['zhōngguó', 'zuì', 'zhùmíng', 'de', 'héliú'],
      },
    },
    {
      id: 'sentence91',
      level: 4,
      isFinal: false,
      korean: '중국에서 가장 유명한 강 중 하나이다.',
      chinese: {
        hanzi: ['中国', '最', '著名', '的', '河流', '之一'],
        pinyin: ['zhōngguó', 'zuì', 'zhùmíng', 'de', 'héliú', 'zhī yī'],
      },
    },
    {
      id: 'sentence91',
      level: 5,
      isFinal: true,
      korean: '황허강은 중국에서 가장 유명한 강 중 하나이다.',
      chinese: {
        hanzi: ['黄河', '是', '中国', '最', '著名', '的', '河流', '之', '一'],
        pinyin: [
          'huánghé',
          'shì',
          'Zhōngguó',
          'zuì',
          'zhùmíng',
          'de',
          'héliú',
          'zhī',
          'yī',
        ],
      },
    },
    //92번
    {
      id: 'sentence92',
      level: 1,
      isFinal: false,
      korean: '어떤 차이?',
      chinese: {
        hanzi: ['什么', '区别'],
        pinyin: ['shénme', 'qūbié'],
      },
    },
    {
      id: 'sentence92',
      level: 2,
      isFinal: false,
      korean: '어떤 차이가 있나요?',
      chinese: {
        hanzi: ['有', '什么', '区别'],
        pinyin: ['yǒu', 'shénme', 'qūbié'],
      },
    },
    {
      id: 'sentence92',
      level: 3,
      isFinal: false,
      korean: '두 표현에 어떤 차이가 있나요?',
      chinese: {
        hanzi: ['两', '个', '表达', '有', '什么', '区别'],
        pinyin: ['liǎng', 'ge', 'biǎodá', 'yǒu', 'shénme', 'qūbié'],
      },
    },
    {
      id: 'sentence92',
      level: 4,
      isFinal: true,
      korean: '이 두 표현에 어떤 차이가 있나요?',
      chinese: {
        hanzi: ['这', '两', '个', '表达', '有', '什么', '区别'],
        pinyin: ['zhè', 'liǎng', 'ge', 'biǎodá', 'yǒu', 'shénme', 'qūbié'],
      },
    },
    //93번
    {
      id: 'sentence93',
      level: 1,
      isFinal: false,
      korean: '적혀 있다.',
      chinese: {
        hanzi: ['写着'],
        pinyin: ['xiězhe'],
      },
    },
    {
      id: 'sentence93',
      level: 2,
      isFinal: false,
      korean: '이름이 적혀 있다.',
      chinese: {
        hanzi: ['写着', '姓名'],
        pinyin: ['xiězhe', 'xìngmíng'],
      },
    },
    {
      id: 'sentence93',
      level: 3,
      isFinal: false,
      korean: '이름이 분명하게 적혀 있다.',
      chinese: {
        hanzi: ['清楚地', '写着', '姓名'],
        pinyin: ['qīngchu de', 'xiězhe', 'xìngmíng'],
      },
    },
    {
      id: 'sentence93',
      level: 4,
      isFinal: true,
      korean: '명단에 이름이 분명하게 적혀 있다.',
      chinese: {
        hanzi: ['名单', '上', '清楚', '地', '写着', '姓名'],
        pinyin: ['míngdān', 'shàng', 'qīngchu', 'de', 'xiězhe', 'xìngmíng'],
      },
    },

    // 94번
    {
      id: 'sentence94',
      level: 1,
      isFinal: false,
      korean: '증가했다.',
      chinese: {
        hanzi: ['增加了'],
        pinyin: ['zēngjiā le'],
      },
    },
    {
      id: 'sentence94',
      level: 2,
      isFinal: false,
      korean: '4배 증가했다.',
      chinese: {
        hanzi: ['增加了', '四', '倍'],
        pinyin: ['zēngjiā le', 'sì', 'bèi'],
      },
    },
    {
      id: 'sentence94',
      level: 3,
      isFinal: false,
      korean: '과거보다 4배 증가했다.',
      chinese: {
        hanzi: ['比', '过去', '增加了', '四', '倍'],
        pinyin: ['bǐ', 'guòqù', 'zēngjiā le', 'sì', 'bèi'],
      },
    },
    {
      id: 'sentence94',
      level: 4,
      isFinal: true,
      korean: '월급이 과거보다 4배 증가했다.',
      chinese: {
        hanzi: ['工资', '比', '过去', '增加了', '四', '倍'],
        pinyin: ['gōngzī', 'bǐ', 'guòqù', 'zēngjiā le', 'sì', 'bèi'],
      },
    },

    //95번
    {
      id: 'sentence95',
      level: 1,
      isFinal: false,
      korean: '아주 깊은 인상',
      chinese: {
        hanzi: ['很深', '的', '印象'],
        pinyin: ['hěn shēn', 'de', 'yìnxiàng'],
      },
    },
    {
      id: 'sentence95',
      level: 2,
      isFinal: false,
      korean: '(아주) 깊은 인상을 남겼다.',
      chinese: {
        hanzi: ['留下', '了', '很深', '的', '印象'],
        pinyin: ['liúxià', 'le', 'hěn shēn', 'de', 'yìnxiàng'],
      },
    },
    {
      id: 'sentence95',
      level: 3,
      isFinal: false,
      korean: '나에게 (아주) 깊은 인상을 남겼다.',
      chinese: {
        hanzi: ['给', '我', '留下', '了', '很深', '的', '印象'],
        pinyin: ['gěi', 'wǒ', 'liúxià', 'le', 'hěn shēn', 'de', 'yìnxiàng'],
      },
    },
    {
      id: 'sentence95',
      level: 4,
      isFinal: true,
      korean: '선생님의 태도는 나에게 (아주) 깊은 인상을 남겼다.',
      chinese: {
        hanzi: [
          '老师的',
          '态度',
          '给',
          '我',
          '留下',
          '了',
          '很',
          '深',
          '的',
          '印象',
        ],
        pinyin: [
          'lǎoshī de',
          'tàidù',
          'gěi',
          'wǒ',
          'liúxià',
          'le',
          'hěn',
          'shēn',
          'de',
          'yìnxiàng',
        ],
      },
    },

    //96번
    {
      id: 'sentence96',
      level: 1,
      isFinal: false,
      korean: '순조롭지 않다.',
      chinese: {
        hanzi: ['不', '顺利'],
        pinyin: ['bú', 'shùnlì'],
      },
    },
    {
      id: 'sentence96',
      level: 2,
      isFinal: false,
      korean: '전혀 순조롭지 않다.',
      chinese: {
        hanzi: ['并不', '顺利'],
        pinyin: ['bìngbú', 'shùnlì'],
      },
    },
    {
      id: 'sentence96',
      level: 3,
      isFinal: false,
      korean:
        '진행이 전혀 순조롭지 않다. (= 전개되는 정도가 전혀 순조롭지 않다.)',
      chinese: {
        hanzi: ['展开', '得', '并不', '顺利'],
        pinyin: ['zhǎnkāi', 'de', 'bìngbú', 'shùnlì'],
      },
    },
    {
      id: 'sentence96',
      level: 4,
      isFinal: true,
      korean:
        '업무(임무) 진행이 전혀 순조롭지 않다. (= 임무가 전개되는 정도가 전혀 순조롭지 않다.)',
      chinese: {
        hanzi: ['任务', '展开', '得', '并不', '顺利'],
        pinyin: ['rènwù', 'zhǎnkāi', 'de', 'bìngbú', 'shùnlì'],
      },
    },

    // 97번
    {
      id: 'sentence97',
      level: 1,
      isFinal: false,
      korean: '건배하다.',
      chinese: {
        hanzi: ['干杯'],
        pinyin: ['gānbēi'],
      },
    },
    {
      id: 'sentence97',
      level: 2,
      isFinal: false,
      korean: '승리를 위해 건배하다.',
      chinese: {
        hanzi: ['为', '胜利', '干杯'],
        pinyin: ['wèi', 'shènglì', 'gānbēi'],
      },
    },
    {
      id: 'sentence97',
      level: 3,
      isFinal: true,
      korean: '우리 승리를 위해 건배하도록 하자.',
      chinese: {
        hanzi: ['让', '我们', '为', '胜利', '干杯'],
        pinyin: ['ràng', 'wǒmen', 'wèi', 'shènglì', 'gānbēi'],
      },
    },
    //98번
    {
      id: 'sentence98',
      level: 1,
      isFinal: false,
      korean: '이상적인 상태가 되었다.',
      chinese: {
        hanzi: ['理想', '了'],
        pinyin: ['lǐxiǎng', 'le'],
      },
    },
    {
      id: 'sentence98',
      level: 2,
      isFinal: false,
      korean: '점점 이상적인 상태가 되었다.',
      chinese: {
        hanzi: ['越来越', '理想', '了'],
        pinyin: ['yuèláiyuè', 'lǐxiǎng', 'le'],
      },
    },
    {
      id: 'sentence98',
      level: 3,
      isFinal: false,
      korean: '점점 이상적으로 변했다. (= 점점 이상적으로 변하게 되었다.)',
      chinese: {
        hanzi: ['变得', '越来越', '理想', '了'],
        pinyin: ['biànde', 'yuèláiyuè', 'lǐxiǎng', 'le'],
      },
    },
    {
      id: 'sentence98',
      level: 4,
      isFinal: true,
      korean:
        '환경 조건이 점점 이상적으로 변했다. (= 점점 이상적으로 변하게 되었다.)',
      chinese: {
        hanzi: ['环境', '条件', '变得', '越来越', '理想', '了'],
        pinyin: [
          'huánjìng',
          'tiáojiàn',
          'biànde',
          'yuèláiyuè',
          'lǐxiǎng',
          'le',
        ],
      },
    },
    //99번
    {
      id: 'sentence99',
      level: 1,
      isFinal: false,
      korean: '장 안에 넣다.',
      chinese: {
        hanzi: ['放到', '柜子', '里'],
        pinyin: ['fàng dào', 'guìzi', 'lǐ'],
      },
    },
    {
      id: 'sentence99',
      level: 2,
      isFinal: false,
      korean: '열쇠를 장 안에 넣다.',
      chinese: {
        hanzi: ['把', '钥匙', '放到', '柜子', '里'],
        pinyin: ['bǎ', 'yàoshi', 'fàng dào', 'guìzi', 'lǐ'],
      },
    },
    {
      id: 'sentence99',
      level: 3,
      isFinal: false,
      korean: '당신은 열쇠를 장 안에 넣어요.',
      chinese: {
        hanzi: ['你', '把', '钥匙', '放到', '柜子', '里'],
        pinyin: ['nǐ', 'bǎ', 'yàoshi', 'fàng dào', 'guìzi', 'lǐ'],
      },
    },
    {
      id: 'sentence99',
      level: 4,
      isFinal: true,
      korean: '당신은 열쇠를 장 안에 넣어주세요.',
      chinese: {
        hanzi: ['请', '你', '把', '钥匙', '放', '到', '柜子', '里'],
        pinyin: ['qǐng', 'nǐ', 'bǎ', 'yàoshi', 'fàng', 'dào', 'guìzi', 'lǐ'],
      },
    },

    // 100번
    {
      id: 'sentence100',
      level: 1,
      isFinal: false,
      korean: '즐겁다, 유쾌하다',
      chinese: {
        hanzi: ['愉快'],
        pinyin: ['yúkuài'],
      },
    },
    {
      id: 'sentence100',
      level: 2,
      isFinal: false,
      korean: '내 기분을 즐겁게 한다.',
      chinese: {
        hanzi: ['使', '我心情', '愉快'],
        pinyin: ['shǐ', 'wǒ xīnqíng', 'yúkuài'],
      },
    },
    {
      id: 'sentence100',
      level: 3,
      isFinal: true,
      korean:
        '서예 연습은 내 기분을 즐겁게 한다. (= 서예를 연습하는 것은 내 기분을 즐겁게 만든다.)',
      chinese: {
        hanzi: ['练', '书法', '使', '我', '心情', '愉快'],
        pinyin: ['liàn', 'shūfǎ', 'shǐ', 'wǒ', 'xīnqíng', 'yúkuài'],
      },
    },
  ],
};

// 전역 변수로 내보내기
window.sentenceData = sentenceData;
