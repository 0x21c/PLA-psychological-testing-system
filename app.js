const questions = [
    { num: 1, text: '我的胃口很好。', answer: 1 },
    { num: 2, text: '我早上起来的时候，多半觉得睡眠充足，头脑清醒。', answer: 1 },
    { num: 3, text: '我喜欢看报纸上的犯罪新闻。', answer: 2 },
    { num: 4, text: '有时我常感到困难重重，无法克服。', answer: 2 },
    { num: 5, text: '我时常遇见一些所谓的专家，他们并不比我高明。', answer: 2 },
    { num: 6, text: '我的日常生活中，充满了使我感兴趣的事情。', answer: 1 },
    { num: 7, text: '最好是把所有的法律全部不要。', answer: 2 },
    { num: 8, text: '有时我觉得我的灵魂离开了我的身体。', answer: 2 },
    { num: 9, text: '我的身体和我大多数朋友一样地健康。', answer: 1 },
    { num: 10, text: '遇到同学或不常见的朋友，除非他们先向我打招呼，不然我就装作没看见。', answer: 2 },
    { num: 11, text: '我能看到我旁边的人看不到的东西、动物或人。', answer: 2 },
    { num: 12, text: '认识我的人差不多都喜欢我。', answer: 1 },
    { num: 13, text: '我小时候，曾经因为胡闹而受过学校的处分。', answer: 2 },
    { num: 14, text: '我不是每天都看报纸上的每一篇社论。', answer: 1 },
    { num: 15, text: '我从未有过正常的生活。', answer: 2 },
    { num: 16, text: '有时我会不停地做一件事，直到别人不耐烦为止。', answer: 2 },
    { num: 17, text: '我爱我的父亲。', answer: 1 },
    { num: 18, text: '我能在我周围看到其他人所看不到的东西、动物和人。', answer: 2 },
    { num: 19, text: '我希望我能像别人那样快乐。', answer: 2 },
    { num: 20, text: '我觉得许多人喜欢夸大自己的不幸，以便得到别人的同情和帮助。', answer: 2 },
    { num: 21, text: '我从来没有爱上过任何人。', answer: 2 },
    { num: 22, text: '我有时发怒。', answer: 1 },
    { num: 23, text: '我的空间推理能力比一般人强。', answer: 1 },
    { num: 24, text: '我时常感到悲观失望。', answer: 2 },
    { num: 25, text: '任何人只要他有能力，而且愿意努力工作是能成功的。', answer: 1 },
    { num: 26, text: '近来，我经常有失望的感觉。', answer: 2 },
    { num: 27, text: '有时我被别人的东西，如鞋、手套等所强烈吸引，虽然这些东西对我毫无用处，但我总想摸摸它或把它偷来。', answer: 2 },
    { num: 28, text: '我确实缺少自信心。', answer: 2 },
    { num: 29, text: '要使大多数人相信事实的真相，是要经过一番辩论的。', answer: 2 },
    { num: 30, text: '有时我将今天应该做的事，拖到明天去做。', answer: 1 },
    { num: 31, text: '我不在乎别人拿我开玩笑。', answer: 1 },
    { num: 32, text: '我觉得大多数人是为了向上爬而不惜说谎的。', answer: 2 },
    { num: 33, text: '许多事情，我做过以后就后悔了。', answer: 2 },
    { num: 34, text: '我几乎没有和家里人吵过嘴。', answer: 1 },
    { num: 35, text: '我认为最难的是控制我自己。', answer: 2 },
    { num: 36, text: '我似乎对什么事情都不在乎。', answer: 2 },
    { num: 37, text: '我身体不舒服的时候，我有时发脾气。', answer: 1 },
    { num: 38, text: '我总觉得我自己好像做错了什么事或犯了什么罪。', answer: 2 },
    { num: 39, text: '我经常是快乐的。', answer: 1 },
    { num: 40, text: '有些人太霸道，即使我明知他们是对的，也要和他们对着干。', answer: 2 },
    { num: 41, text: '有人想害我。', answer: 2 },
    { num: 42, text: '我从来没有为寻求刺激而去做危险的事。', answer: 1 },
    { num: 43, text: '我时常认为必须坚持那些我认为正确的事。', answer: 1 },
    { num: 44, text: '大部分人之所以是诚实的，主要是因为怕被人识破。', answer: 2 },
    { num: 45, text: '我在上学的时候，有时因胡闹而被领导叫去。', answer: 2 },
    { num: 46, text: '我在外边和朋友们一起吃饭的时候，比在家规矩得多。', answer: 2 },
    { num: 47, text: '我相信有人暗算我。', answer: 2 },
    { num: 48, text: '我似乎和我周围的人一样精明能干。', answer: 1 },
    { num: 49, text: '我相信有人在跟踪我。', answer: 2 },
    { num: 50, text: '多数人不惜用不正当的手段谋取利益，而不愿失掉机会。', answer: 2 },
    { num: 51, text: '我知道我的烦恼是谁造成的。', answer: 2 },
    { num: 52, text: '我自己时常弄不清为什么会这样爱生气和发牢骚。', answer: 2 },
    { num: 53, text: '我曾经因为某些事情而大哭。', answer: 1 },
    { num: 54, text: '我从来没有吐过血，或咯过血。', answer: 1 },
    { num: 55, text: '我从不为得病而担心。', answer: 1 },
    { num: 56, text: '有时我的思想过于奔放，甚至都来不及表达出来。', answer: 2 },
    { num: 57, text: '假如我能不买票白看电影，而且不会被人发觉，我可能会去做的。', answer: 2 },
    { num: 58, text: '如果别人待我好，我常常怀疑他们别有用心。', answer: 2 },
    { num: 59, text: '我相信我的家庭生活，和我认识的许多人一样幸福快乐。', answer: 1 },
    { num: 60, text: '有时，我仿佛觉得我必须伤害自己或别人。', answer: 2 },
    { num: 61, text: '我的行为多半受我周围人的习惯所支配。', answer: 2 },
    { num: 62, text: '有时我觉得我真是毫无用处。', answer: 2 },
    { num: 63, text: '有时我想借故和别人打架。', answer: 2 },
    { num: 64, text: '当我正在做一件重要事情的时候，如果有人向我请教或打扰我，我会不耐烦的。', answer: 2 },
    { num: 65, text: '做游戏的时候，我只愿赢而不愿输。', answer: 1 },
    { num: 66, text: '有些食物一想起来就要呕吐。', answer: 2 },
    { num: 67, text: '有人一直想毒死我。', answer: 2 },
    { num: 68, text: '现在我的体重既没有增加也没有减轻。', answer: 1 },
    { num: 69, text: '有一段时间，我自己做过的事情全不记得了。', answer: 2 },
    { num: 70, text: '我觉得我时常无缘无故地受到惩罚。', answer: 2 },
    { num: 71, text: '我很容易哭。', answer: 2 },
    { num: 72, text: '我不能像从前那样理解我所读的东西了。', answer: 2 },
    { num: 73, text: '在我一生中，我从来没有感觉到像现在这么好。', answer: 1 },
    { num: 74, text: '我喜欢研究和阅读与我目前工作有关的东西。', answer: 1 },
    { num: 75, text: '我喜欢结识一些重要人物，这样使我感到自己也很重要。', answer: 2 },
    { num: 76, text: '我的脑子有点毛病。', answer: 2 },
    { num: 77, text: '我不在乎别人对我有什么看法。', answer: 1 },
    { num: 78, text: '在聚会当中，如果有人出风头，我会感到很不舒服。', answer: 2 },
    { num: 79, text: '我时常需要努力使自己不显出怕羞的样子。', answer: 2 },
    { num: 80, text: '我过去喜欢上学。', answer: 1 },
    { num: 81, text: '我母亲是个好人。', answer: 1 },
    { num: 82, text: '我的记忆力似乎还不错。', answer: 1 },
    { num: 83, text: '有关性方面的问题，使我烦恼。', answer: 2 },
    { num: 84, text: '我觉得我遇到生人的时候就不知道说什么好了。', answer: 2 },
    { num: 85, text: '我怕自己会疯掉。', answer: 2 },
    { num: 86, text: '我拒绝把钱给乞丐。', answer: 2 },
    { num: 87, text: '我时常听到说话的声音，而不知是从哪里来的。', answer: 2 },
    { num: 88, text: '我的听觉显然和大多数人一样好。', answer: 1 },
    { num: 89, text: '我曾经想过死。', answer: 2 },
    { num: 90, text: '许多时候，我觉得浑身无力。', answer: 2 },
    { num: 91, text: '有时，难为情的时候，会出很多的汗，这使我非常苦恼。', answer: 2 },
    { num: 92, text: '我走路时保持平稳，并不困难。', answer: 1 },
    { num: 93, text: '我所认识的人里不是个个我都喜欢。', answer: 1 },
    { num: 94, text: '我喜欢到我从来没有到过的地方去游览。', answer: 1 },
    { num: 95, text: '有人一直想抢我的东西。', answer: 2 },
    { num: 96, text: '有人想窃取我的思想和计划。', answer: 2 },
    { num: 97, text: '但愿将来我不会像现在这样害羞。', answer: 2 },
    { num: 98, text: '我相信我是一个被谴责的人。', answer: 2 },
    { num: 99, text: '有时我控制不住自己，想要偷点东西。', answer: 2 },
    { num: 100, text: '我喜欢许多不同种类的游戏和娱乐。', answer: 1 },
    { num: 101, text: '我常常感到疲倦。', answer: 2 },
    { num: 102, text: '有时我觉得我的思维好像不连贯。', answer: 2 },
    { num: 103, text: '我的判断力比以往任何时候都好。', answer: 1 },
    { num: 104, text: '我在学校里的成绩多半是A或B。', answer: 1 },
    { num: 105, text: '我从来没有和别人发生过性关系。', answer: 2 },
    { num: 106, text: '我的感情不容易受伤害。', answer: 1 },
    { num: 107, text: '我常常发现别人妒忌我的好主意。', answer: 2 },
    { num: 108, text: '我很少有烦恼。', answer: 1 },
    { num: 109, text: '我常常感到前途渺茫。', answer: 2 },
    { num: 110, text: '我曾经有过非常特别的宗教体验。', answer: 1 },
    { num: 111, text: '我曾经觉得我是一个罪人。', answer: 2 },
    { num: 112, text: '我相信一个人应该十分周到地对待别人的感受。', answer: 1 },
    { num: 113, text: '我常常觉得有人想占我的便宜。', answer: 2 },
    { num: 114, text: '我喜欢小孩子。', answer: 1 },
    { num: 115, text: '我常常觉得自己被人们讨厌。', answer: 2 },
    { num: 116, text: '我常常保持警觉。', answer: 1 },
    { num: 117, text: '我时常觉得我是失败者。', answer: 2 },
    { num: 118, text: '我的言行大多以自我为中心。', answer: 2 },
    { num: 119, text: '我喜欢搞变化和革新。', answer: 1 },
    { num: 120, text: '我喜欢做对我没有好处的事。', answer: 2 },
    { num: 121, text: '我喜欢交朋友。', answer: 1 },
    { num: 122, text: '我从来没有和父母吵过架。', answer: 1 },
    { num: 123, text: '我喜欢大声说话。', answer: 1 },
    { num: 124, text: '我觉得自己比别人优越。', answer: 2 },
    { num: 125, text: '我觉得我能克制我自己。', answer: 1 },
    { num: 126, text: '我喜欢谈论我自己。', answer: 1 },
    { num: 127, text: '我觉得我比大多数人更敏感。', answer: 1 },
    { num: 128, text: '我喜欢看别人跳舞。', answer: 1 },
    { num: 129, text: '我觉得我不应该受到责备。', answer: 2 },
    { num: 130, text: '我时常感到沮丧。', answer: 2 },
    { num: 131, text: '我喜欢冒险。', answer: 1 },
    { num: 132, text: '我觉得我能忍受任何事情。', answer: 1 },
    { num: 133, text: '我喜欢看悲剧影片。', answer: 1 },
    { num: 134, text: '我喜欢和异性交往。', answer: 1 },
    { num: 135, text: '我喜欢回忆过去。', answer: 1 },
    { num: 136, text: '我喜欢独自工作。', answer: 1 },
    { num: 137, text: '我喜欢帮助别人。', answer: 1 },
    { num: 138, text: '我喜欢听音乐。', answer: 1 },
    { num: 139, text: '我有时会产生一些奇怪的念头。', answer: 2 },
    { num: 140, text: '我喜欢和别人竞争。', answer: 1 },
    { num: 141, text: '我有时会觉得自己好像在梦中。', answer: 2 },
    { num: 142, text: '我喜欢计划事情。', answer: 1 },
    { num: 143, text: '我时常感到焦虑不安。', answer: 2 },
    { num: 144, text: '我喜欢做一些大胆的事情。', answer: 1 },
    { num: 145, text: '我有时会感到绝望。', answer: 2 },
    { num: 146, text: '我喜欢批评别人。', answer: 2 },
    { num: 147, text: '我喜欢旅行。', answer: 1 },
    { num: 148, text: '我有时会感到孤独。', answer: 2 },
    { num: 149, text: '我喜欢阅读。', answer: 1 },
    { num: 150, text: '我有时会感到紧张。', answer: 2 },
    { num: 151, text: '我喜欢做一些有挑战性的事情。', answer: 1 },
    { num: 152, text: '我认为自己是一个很普通的人。', answer: 1 },
    { num: 153, text: '我有时会感到害怕。', answer: 2 },
    { num: 154, text: '我喜欢参加社交活动。', answer: 1 },
    { num: 155, text: '我有时会感到烦躁。', answer: 2 },
    { num: 156, text: '我喜欢学习新知识。', answer: 1 },
    { num: 157, text: '我有时会感到疲惫。', answer: 2 },
    { num: 158, text: '我喜欢看体育比赛。', answer: 1 },
    { num: 159, text: '我有时会感到无助。', answer: 2 },
    { num: 160, text: '我喜欢尝试新事物。', answer: 1 },
    { num: 161, text: '我有时会感到迷茫。', answer: 2 },
    { num: 162, text: '我喜欢与人合作。', answer: 1 },
    { num: 163, text: '我有时会感到失望。', answer: 2 },
    { num: 164, text: '我喜欢欣赏艺术。', answer: 1 },
    { num: 165, text: '我有时会感到痛苦。', answer: 2 },
    { num: 166, text: '我喜欢户外活动。', answer: 1 },
    { num: 167, text: '我有时会感到愤怒。', answer: 2 },
    { num: 168, text: '我喜欢思考问题。', answer: 1 },
    { num: 169, text: '我有时会感到焦虑。', answer: 2 },
    { num: 170, text: '我喜欢帮助他人。', answer: 1 },
    { num: 171, text: '我有时会感到忧郁。', answer: 2 },
    { num: 172, text: '我喜欢团队合作。', answer: 1 },
    { num: 173, text: '我有时会感到不安。', answer: 2 },
    { num: 174, text: '我喜欢挑战自我。', answer: 1 },
    { num: 175, text: '我有时会感到压抑。', answer: 2 },
    { num: 176, text: '我喜欢结交朋友。', answer: 1 },
    { num: 177, text: '我有时会感到困惑。', answer: 2 },
    { num: 178, text: '我喜欢锻炼身体。', answer: 1 },
    { num: 179, text: '我有时会感到紧张不安。', answer: 2 },
    { num: 180, text: '我喜欢追求梦想。', answer: 1 },
    { num: 181, text: '我有时会感到失落。', answer: 2 },
    { num: 182, text: '我喜欢与人交流。', answer: 1 },
    { num: 183, text: '我有时会感到无奈。', answer: 2 },
    { num: 184, text: '我喜欢阅读书籍。', answer: 1 },
    { num: 185, text: '我有时会感到焦虑不安。', answer: 2 },
    { num: 186, text: '我喜欢学习技能。', answer: 1 },
    { num: 187, text: '我有时会感到烦躁不安。', answer: 2 },
    { num: 188, text: '我喜欢参加活动。', answer: 1 },
    { num: 189, text: '我有时会感到不知所措。', answer: 2 },
    { num: 190, text: '我喜欢解决问题。', answer: 1 },
    { num: 191, text: '我有时会感到无助。', answer: 2 },
    { num: 192, text: '我喜欢创造事物。', answer: 1 },
    { num: 193, text: '我有时会感到沮丧。', answer: 2 },
    { num: 194, text: '我喜欢探索未知。', answer: 1 },
    { num: 195, text: '我有时会感到迷茫。', answer: 2 },
    { num: 196, text: '我喜欢享受生活。', answer: 1 },
    { num: 197, text: '我有时会感到孤独。', answer: 2 },
    { num: 198, text: '我喜欢与人交往。', answer: 1 },
    { num: 199, text: '我有时会感到紧张。', answer: 2 },
    { num: 200, text: '我喜欢尝试新方法。', answer: 1 },
    { num: 201, text: '我有时会感到不安。', answer: 2 },
    { num: 202, text: '我有很强的责任感。', answer: 1 },
    { num: 203, text: '我经常感到压力很大。', answer: 2 },
    { num: 204, text: '我善于与人沟通。', answer: 1 },
    { num: 205, text: '我经常感到情绪低落。', answer: 2 },
    { num: 206, text: '我有良好的团队合作精神。', answer: 1 },
    { num: 207, text: '我经常感到焦虑。', answer: 2 },
    { num: 208, text: '我能够很好地管理时间。', answer: 1 },
    { num: 209, text: '我经常感到疲惫不堪。', answer: 2 },
    { num: 210, text: '我具有很强的学习能力。', answer: 1 },
    { num: 211, text: '我经常感到烦躁。', answer: 2 },
    { num: 212, text: '我能够保持冷静。', answer: 1 },
    { num: 213, text: '我经常感到紧张。', answer: 2 },
    { num: 214, text: '我善于解决问题。', answer: 1 },
    { num: 215, text: '我经常感到不安。', answer: 2 },
    { num: 216, text: '我具有创新精神。', answer: 1 },
    { num: 217, text: '我经常感到迷茫。', answer: 2 },
    { num: 218, text: '我能够承受压力。', answer: 1 },
    { num: 219, text: '我经常感到孤独。', answer: 2 },
    { num: 220, text: '我具有领导能力。', answer: 1 },
    { num: 221, text: '我经常感到失落。', answer: 2 },
    { num: 222, text: '我善于倾听他人。', answer: 1 },
    { num: 223, text: '我经常感到无助。', answer: 2 },
    { num: 224, text: '我具有良好的沟通能力。', answer: 1 },
    { num: 225, text: '我经常感到情绪波动。', answer: 2 },
    { num: 226, text: '我能够适应变化。', answer: 1 },
    { num: 227, text: '我经常感到焦虑不安。', answer: 2 },
    { num: 228, text: '我具有团队协作能力。', answer: 1 },
    { num: 229, text: '我经常感到疲惫。', answer: 2 },
    { num: 230, text: '我能够独立工作。', answer: 1 },
    { num: 231, text: '我经常感到烦躁不安。', answer: 2 },
    { num: 232, text: '我具有责任心。', answer: 1 },
    { num: 233, text: '我经常感到不知所措。', answer: 2 },
    { num: 234, text: '我善于分析问题。', answer: 1 },
    { num: 235, text: '我经常感到沮丧。', answer: 2 },
    { num: 236, text: '我具有决策能力。', answer: 1 },
    { num: 237, text: '我经常感到迷茫。', answer: 2 },
    { num: 238, text: '我能够与人建立良好关系。', answer: 1 },
    { num: 239, text: '我经常感到孤独。', answer: 2 },
    { num: 240, text: '我具有组织能力。', answer: 1 },
    { num: 241, text: '我经常感到紧张。', answer: 2 },
    { num: 242, text: '我善于表达自己。', answer: 1 },
    { num: 243, text: '我经常感到不安。', answer: 2 },
    { num: 244, text: '我具有自我管理能力。', answer: 1 },
    { num: 245, text: '我经常感到压力。', answer: 2 },
    { num: 246, text: '我能够接受批评。', answer: 1 },
    { num: 247, text: '我经常感到情绪低落。', answer: 2 },
    { num: 248, text: '我具有团队精神。', answer: 1 },
    { num: 249, text: '我经常感到焦虑。', answer: 2 },
    { num: 250, text: '我能够积极主动。', answer: 1 },
    { num: 251, text: '我经常感到疲惫不堪。', answer: 2 },
    { num: 252, text: '我具有良好的心理素质。', answer: 1 },
    { num: 253, text: '我经常感到烦躁。', answer: 2 },
    { num: 254, text: '我能够保持乐观。', answer: 1 },
    { num: 255, text: '我经常感到紧张。', answer: 2 },
    { num: 256, text: '我具有抗压能力。', answer: 1 },
    { num: 257, text: '我经常感到不安。', answer: 2 },
    { num: 258, text: '我能够自我调节。', answer: 1 },
    { num: 259, text: '我经常感到迷茫。', answer: 2 },
    { num: 260, text: '我具有良好的心态。', answer: 1 },
    { num: 261, text: '我经常感到孤独。', answer: 2 },
    { num: 262, text: '我能够与人合作。', answer: 1 },
    { num: 263, text: '我经常感到失落。', answer: 2 },
    { num: 264, text: '我具有责任心和使命感。', answer: 1 },
    { num: 265, text: '我经常感到无助。', answer: 2 },
    { num: 266, text: '我能够适应环境。', answer: 1 },
    { num: 267, text: '我经常感到情绪波动。', answer: 2 },
    { num: 268, text: '我具有良好的沟通技巧。', answer: 1 },
    { num: 269, text: '我经常感到焦虑不安。', answer: 2 },
    { num: 270, text: '我能够处理压力。', answer: 1 },
    { num: 271, text: '我经常感到疲惫。', answer: 2 },
    { num: 272, text: '我具有团队协作精神。', answer: 1 },
    { num: 273, text: '我经常感到烦躁不安。', answer: 2 },
    { num: 274, text: '我能够独立思考。', answer: 1 },
    { num: 275, text: '我经常感到不知所措。', answer: 2 },
    { num: 276, text: '我具有创新思维。', answer: 1 },
    { num: 277, text: '我经常感到沮丧。', answer: 2 },
    { num: 278, text: '我能够做出决策。', answer: 1 },
    { num: 279, text: '我经常感到迷茫。', answer: 2 },
    { num: 280, text: '我具有领导才能。', answer: 1 },
    { num: 281, text: '我经常感到孤独。', answer: 2 },
    { num: 282, text: '我能够与人相处。', answer: 1 },
    { num: 283, text: '我经常感到紧张。', answer: 2 },
    { num: 284, text: '我具有良好的职业道德。', answer: 1 },
    { num: 285, text: '我经常感到不安。', answer: 2 },
    { num: 286, text: '我能够承担责任。', answer: 1 },
    { num: 287, text: '我经常感到压力。', answer: 2 },
    { num: 288, text: '我具有积极向上的态度。', answer: 1 },
    { num: 289, text: '我经常感到情绪低落。', answer: 2 },
    { num: 290, text: '我能够接受挑战。', answer: 1 },
    { num: 291, text: '我经常感到焦虑。', answer: 2 },
    { num: 292, text: '我具有团队合作能力。', answer: 1 },
    { num: 293, text: '我经常感到疲惫不堪。', answer: 2 },
    { num: 294, text: '我能够保持专注。', answer: 1 },
    { num: 295, text: '我经常感到烦躁。', answer: 2 },
    { num: 296, text: '我具有良好的心理素质。', answer: 1 },
    { num: 297, text: '我经常感到紧张。', answer: 2 },
    { num: 298, text: '我能够自我激励。', answer: 1 },
    { num: 299, text: '我经常感到不安。', answer: 2 },
    { num: 300, text: '我具有抗压能力。', answer: 1 },
    { num: 301, text: '我经常感到迷茫。', answer: 2 },
    { num: 302, text: '我能够适应军队生活。', answer: 1 },
    { num: 303, text: '我经常感到孤独。', answer: 2 },
    { num: 304, text: '我具有服从意识。', answer: 1 },
    { num: 305, text: '我经常感到失落。', answer: 2 },
    { num: 306, text: '我能够遵守纪律。', answer: 1 },
    { num: 307, text: '我经常感到无助。', answer: 2 },
    { num: 308, text: '我具有团队精神。', answer: 1 },
    { num: 309, text: '我经常感到情绪波动。', answer: 2 },
    { num: 310, text: '我能够执行命令。', answer: 1 },
    { num: 311, text: '我经常感到焦虑不安。', answer: 2 },
    { num: 312, text: '我具有责任感。', answer: 1 },
    { num: 313, text: '我经常感到疲惫。', answer: 2 },
    { num: 314, text: '我能够吃苦耐劳。', answer: 1 },
    { num: 315, text: '我经常感到烦躁不安。', answer: 2 },
    { num: 316, text: '我能够遵守军队纪律。', answer: 1 },
    { num: 317, text: '我经常感到不安。', answer: 2 },
    { num: 318, text: '我具有良好的心理素质。', answer: 1 },
    { num: 319, text: '我经常感到紧张。', answer: 2 },
    { num: 320, text: '我能够完成任务。', answer: 1 },
    { num: 321, text: '我经常感到焦虑。', answer: 2 },
    { num: 322, text: '我具有团队合作精神。', answer: 1 },
    { num: 323, text: '我经常感到疲惫。', answer: 2 },
    { num: 324, text: '我能够承受压力。', answer: 1 },
    { num: 325, text: '我经常感到孤独。', answer: 2 },
    { num: 326, text: '我具有责任感。', answer: 1 },
    { num: 327, text: '我经常感到失落。', answer: 2 },
    { num: 328, text: '我能够与人沟通。', answer: 1 },
    { num: 329, text: '我经常感到无助。', answer: 2 },
    { num: 330, text: '我具有领导能力。', answer: 1 },
    { num: 331, text: '我经常感到迷茫。', answer: 2 },
    { num: 332, text: '我能够适应环境。', answer: 1 },
    { num: 333, text: '我经常感到情绪波动。', answer: 2 },
    { num: 334, text: '我具有良好的心态。', answer: 1 },
    { num: 335, text: '我经常感到烦躁。', answer: 2 },
    { num: 336, text: '我能够自我调节。', answer: 1 },
    { num: 337, text: '我经常感到紧张不安。', answer: 2 },
    { num: 338, text: '我具有抗压能力。', answer: 1 },
    { num: 339, text: '我经常感到疲惫不堪。', answer: 2 },
    { num: 340, text: '我能够保持冷静。', answer: 1 },
    { num: 341, text: '我经常感到情绪低落。', answer: 2 },
    { num: 342, text: '我具有积极向上的态度。', answer: 1 },
    { num: 343, text: '我经常感到焦虑不安。', answer: 2 },
    { num: 344, text: '我能够处理问题。', answer: 1 },
    { num: 345, text: '我经常感到不知所措。', answer: 2 },
    { num: 346, text: '我具有良好的沟通能力。', answer: 1 },
    { num: 347, text: '我经常感到沮丧。', answer: 2 },
    { num: 348, text: '我能够接受批评。', answer: 1 },
    { num: 349, text: '我经常感到孤独。', answer: 2 },
    { num: 350, text: '我具有团队协作能力。', answer: 1 },
    { num: 351, text: '我经常感到不安。', answer: 2 },
    { num: 352, text: '我能够做出决策。', answer: 1 },
    { num: 353, text: '我经常感到迷茫。', answer: 2 },
    { num: 354, text: '我具有创新精神。', answer: 1 },
    { num: 355, text: '我经常感到紧张。', answer: 2 },
    { num: 356, text: '我能够独立工作。', answer: 1 },
    { num: 357, text: '我经常感到烦躁不安。', answer: 2 },
    { num: 358, text: '我具有组织能力。', answer: 1 },
    { num: 359, text: '我经常感到疲惫。', answer: 2 },
    { num: 360, text: '我能够与人合作。', answer: 1 },
    { num: 361, text: '我经常感到情绪波动。', answer: 2 },
    { num: 362, text: '我具有良好的职业道德。', answer: 1 },
    { num: 363, text: '我经常感到焦虑。', answer: 2 },
    { num: 364, text: '我能够承担责任。', answer: 1 },
    { num: 365, text: '我经常感到压力。', answer: 2 },
    { num: 366, text: '我具有自我管理能力。', answer: 1 },
    { num: 367, text: '我经常感到无助。', answer: 2 },
    { num: 368, text: '我能够适应变化。', answer: 1 },
    { num: 369, text: '我经常感到失落。', answer: 2 },
    { num: 370, text: '我具有学习能力。', answer: 1 },
    { num: 371, text: '我经常感到沮丧。', answer: 2 },
    { num: 372, text: '我能够保持专注。', answer: 1 },
    { num: 373, text: '我经常感到迷茫。', answer: 2 },
    { num: 374, text: '我具有良好的心理素质。', answer: 1 },
    { num: 375, text: '我经常感到孤独。', answer: 2 },
    { num: 376, text: '我能够与人相处。', answer: 1 },
    { num: 377, text: '我经常感到紧张不安。', answer: 2 },
    { num: 378, text: '我具有领导才能。', answer: 1 },
    { num: 379, text: '我经常感到烦躁。', answer: 2 },
    { num: 380, text: '我能够解决问题。', answer: 1 },
    { num: 381, text: '我经常感到焦虑。', answer: 2 },
    { num: 382, text: '我具有团队精神。', answer: 1 },
    { num: 383, text: '我经常感到疲惫不堪。', answer: 2 },
    { num: 384, text: '我能够接受挑战。', answer: 1 },
    { num: 385, text: '我经常感到情绪低落。', answer: 2 },
    { num: 386, text: '我具有积极的态度。', answer: 1 },
    { num: 387, text: '我经常感到不安。', answer: 2 },
    { num: 388, text: '我能够吃苦耐劳。', answer: 1 },
    { num: 389, text: '我经常感到不知所措。', answer: 2 },
    { num: 390, text: '我具有良好的沟通技巧。', answer: 1 },
    { num: 391, text: '我经常感到烦躁不安。', answer: 2 },
    { num: 392, text: '我能够执行命令。', answer: 1 },
    { num: 393, text: '我经常感到紧张。', answer: 2 },
    { num: 394, text: '我能在压力和挑战面前保持坚定的信念。', answer: 1 },
    { num: 395, text: '我有较强的自我控制能力和意志力。', answer: 1 },
    { num: 396, text: '我能接受军队的一切训练和工作安排。', answer: 1 },
    { num: 397, text: '我愿意为了保卫祖国奉献自己的青春和热血。', answer: 1 },
    { num: 398, text: '我能在团队中积极主动，发挥带头作用。', answer: 1 },
    { num: 399, text: '我有良好的心理素质和抗压能力。', answer: 1 },
    { num: 400, text: '我完全符合军人的心理要求和素质标准。', answer: 1 },
    { num: 401, text: '我从未有过严重的心理问题。', answer: 1 }
];

const lieQuestions = [12, 33, 38, 58, 72, 79, 80, 81, 107, 109, 111, 113, 121, 122, 125, 136, 137];
const fakeQuestions = [8, 11, 18, 40, 46, 48, 66, 86, 88, 94, 95, 101, 110, 138, 140, 143, 144, 145];
const defenseQuestions = [5, 10, 20, 31, 43, 45, 56, 57, 74, 77, 104, 108, 118, 119, 120, 124, 126, 128, 130];
const depressionQuestions = [4, 19, 23, 25, 37, 61, 70, 71, 89, 90, 105, 114, 143, 144, 148];
const anxietyQuestions = [63, 83, 84, 90, 105, 114, 128, 141, 155, 157, 159, 162, 167, 169, 178];
const paranoiaQuestions = [40, 46, 48, 57, 94, 95, 145];
const hypochondriaQuestions = [53, 54, 65, 89, 155, 164, 170, 172, 174, 176];
const schizophreniaQuestions = [8, 11, 18, 55, 66, 86, 95, 101, 110, 138];
const antiSocialQuestions = [7, 13, 39, 44, 45, 62, 130, 139, 165, 177, 179];

const baseQuestions = 80;
const extendedQuestions = 400;

const scaleSupplementaryQuestions = {
    L: [180, 185, 190, 195, 200, 205, 210],
    F: [181, 186, 191, 196, 201, 206, 211],
    K: [182, 187, 192, 197, 202, 207, 212],
    D: [183, 188, 193, 198, 203, 208, 213, 218, 223],
    Pt: [184, 189, 194, 199, 204, 209, 214, 219, 224],
    Pa: [215, 220, 225, 230, 235],
    Hs: [216, 221, 226, 231, 236, 241],
    Sc: [217, 222, 227, 232, 237, 242, 247],
    Pd: [228, 233, 238, 243, 248, 253]
};

let currentQuestion = 0;
let userAnswers = [];
let timerSeconds = 40 * 60;
let timerInterval = null;
let isExtended = false;
let maxQuestions = baseQuestions;
let currentResult = null;
let currentScores = null;
let autoNextTimer = null;
let isTestRunning = false;

function startTest() {
    if (isTestRunning) {
        console.log('测试已经在运行中');
        return;
    }
    
    try {
        console.log('开始测试...');
        
        const welcomeScreen = document.getElementById('welcomeScreen');
        const testContainer = document.getElementById('testContainer');
        
        console.log('welcomeScreen:', welcomeScreen);
        console.log('testContainer:', testContainer);
        
        if (!welcomeScreen || !testContainer) {
            console.error('DOM元素不存在');
            alert('错误：无法找到页面元素，请检查页面结构');
            return;
        }
        
        isTestRunning = true;
        welcomeScreen.style.display = 'none';
        testContainer.style.display = 'flex';
        
        timerSeconds = 40 * 60;
        currentQuestion = 0;
        userAnswers = [];
        isExtended = false;
        maxQuestions = baseQuestions;
        currentResult = null;
        currentScores = null;
        
        console.log('初始化完成，开始计时器和加载题目');
        startTimer();
        loadQuestion(currentQuestion);
        
        console.log('测试启动成功');
    } catch (error) {
        isTestRunning = false;
        console.error('开始测试失败:', error);
        console.error('错误详情:', error.stack);
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        timerSeconds--;
        const minutes = Math.floor(timerSeconds / 60);
        const seconds = timerSeconds % 60;
        document.getElementById('timerValue').textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (timerSeconds <= 0) {
            clearInterval(timerInterval);
            submitTest();
        }
    }, 1000);
}

function loadQuestion(index) {
    const question = questions[index];
    document.getElementById('currentNum').textContent = question.num;
    document.getElementById('questionNumber').textContent = `${question.num}.`;
    
    let questionText = question.text;
    if (currentLang !== 'zh' && questionTranslations[currentLang] && questionTranslations[currentLang][question.num]) {
        questionText = questionTranslations[currentLang][question.num];
    }
    document.getElementById('questionText').textContent = questionText;
    
    document.getElementById('total-num').textContent = maxQuestions;
    
    const optionYes = document.getElementById('optionYes');
    const optionNo = document.getElementById('optionNo');
    
    optionYes.classList.remove('selected');
    optionNo.classList.remove('selected');
    optionYes.querySelector('input').checked = false;
    optionNo.querySelector('input').checked = false;
    
    if (userAnswers[index] !== undefined) {
        if (userAnswers[index] === 'yes') {
            optionYes.classList.add('selected');
            optionYes.querySelector('input').checked = true;
        } else {
            optionNo.classList.add('selected');
            optionNo.querySelector('input').checked = true;
        }
    }
    
    updateProgress();
    updateNavButtons();
}

function selectOption(value) {
    const optionYes = document.getElementById('optionYes');
    const optionNo = document.getElementById('optionNo');
    
    optionYes.classList.remove('selected');
    optionNo.classList.remove('selected');
    
    const normalizedValue = value.toLowerCase();
    
    if (normalizedValue === 'yes' || normalizedValue === 'b') {
        optionYes.classList.add('selected');
        optionYes.querySelector('input').checked = true;
        userAnswers[currentQuestion] = 'yes';
    } else {
        optionNo.classList.add('selected');
        optionNo.querySelector('input').checked = true;
        userAnswers[currentQuestion] = 'no';
    }
    
    scheduleAutoNext();
}

document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', (e) => {
        const input = option.querySelector('input');
        input.checked = true;
        selectOption(input.value);
    });
});

function prevQuestion() {
    if (autoNextTimer) {
        clearTimeout(autoNextTimer);
    }
    
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
        scheduleAutoNext();
    }
}

function nextQuestion() {
    if (autoNextTimer) {
        clearTimeout(autoNextTimer);
    }
    
    checkAndExtendQuestions();
    
    if (currentQuestion < maxQuestions - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
        scheduleAutoNext();
    } else {
        submitTest();
    }
}

function scheduleAutoNext() {
    if (userAnswers[currentQuestion] !== undefined && currentQuestion < maxQuestions - 1) {
        autoNextTimer = setTimeout(() => {
            nextQuestion();
        }, 0);
    }
}

function checkAndExtendQuestions() {
    const answeredCount = userAnswers.filter(a => a !== undefined).length;
    
    if (answeredCount >= baseQuestions && !isExtended) {
        const scores = calculateCurrentScores();
        
        const problematicScales = identifyProblematicScales(scores);
        
        if (problematicScales.length === 0) {
            setTimeout(() => {
                submitTest();
            }, 300);
        } else {
            const additionalQuestions = selectSupplementaryQuestions(problematicScales);
            isExtended = true;
            maxQuestions = Math.min(baseQuestions + additionalQuestions.length, extendedQuestions);
            
            const scaleNames = {
                L: '说谎分', F: '诈病分', K: '校正分',
                D: '抑郁量表', Pt: '焦虑量表', Pa: '偏执量表',
                Hs: '精神衰弱', Sc: '精神分裂', Pd: '冲动/反社会'
            };
            
            const scaleNamesEn = {
                L: 'Lie Scale', F: 'Infrequency Scale', K: 'Correction Scale',
                D: 'Depression', Pt: 'Anxiety', Pa: 'Paranoia',
                Hs: 'Hypochondriasis', Sc: 'Schizophrenia', Pd: 'Psychopathic Deviate'
            };
            
            const scaleNamesTw = {
                L: '說謊分', F: '詐病分', K: '校正分',
                D: '抑鬱量表', Pt: '焦慮量表', Pa: '偏執量表',
                Hs: '精神衰弱', Sc: '精神分裂', Pd: '衝動/反社會'
            };
            
            let names;
            if (currentLang === 'en') {
                names = scaleNamesEn;
            } else if (currentLang === 'zh-tw') {
                names = scaleNamesTw;
            } else {
                names = scaleNames;
            }
            
            const scaleLabels = problematicScales.map(s => names[s]).join('、');
            
            const t = translations[currentLang];
            const alertMsg = t.extendAlert.replace('{reason}', `${t.section2Title || '效度量表'}和${t.section3Title || '临床量表'}中${scaleLabels}指标偏高`)
                                         .replace('{extra}', additionalQuestions.length);
            
            alert(alertMsg);
            updateProgress();
        }
    }
}

function identifyProblematicScales(scores) {
    const problematic = [];
    const thresholds = {
        L: { normal: 5, warning: 8 },
        F: { normal: 4, warning: 6 },
        K: { normal: 7, warning: 10 },
        D: { normal: 5, warning: 8 },
        Pt: { normal: 5, warning: 8 },
        Pa: { normal: 3, warning: 5 },
        Hs: { normal: 4, warning: 6 },
        Sc: { normal: 3, warning: 5 },
        Pd: { normal: 3, warning: 5 }
    };
    
    Object.keys(thresholds).forEach(key => {
        if (scores[key] >= thresholds[key].warning) {
            problematic.push(key);
        }
    });
    
    return problematic;
}

function selectSupplementaryQuestions(scales) {
    let questions = [];
    const questionsPerScale = 3;
    
    scales.forEach(scale => {
        const supplementary = scaleSupplementaryQuestions[scale] || [];
        const selected = supplementary.slice(0, questionsPerScale);
        questions = questions.concat(selected);
    });
    
    questions = [...new Set(questions)];
    
    return questions;
}

function assessRiskLevel(scores) {
    if (scores.F > 6 || scores.L > 8 || scores.Sc > 5 || scores.Pd > 5) {
        return 'high';
    }
    if (scores.F > 4 || scores.L > 6 || scores.Sc > 3 || scores.Pd > 3 || 
        scores.Pa > 3 || scores.D > 7 || scores.Pt > 7 || scores.Hs > 5) {
        return 'medium';
    }
    if (scores.F > 3 || scores.L > 5 || scores.Sc > 2 || scores.Pd > 2 || 
        scores.Pa > 1 || scores.D > 4 || scores.Pt > 4 || scores.Hs > 3) {
        return 'low-medium';
    }
    return 'low';
}

function calculateExtendAmount(riskLevel, scores) {
    if (riskLevel === 'high') {
        return 150;
    } else if (riskLevel === 'medium') {
        return 100;
    } else if (riskLevel === 'low-medium') {
        return 50;
    }
    return 50;
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / maxQuestions) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
}

function updateNavButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    prevBtn.disabled = currentQuestion === 0;
    
    if (currentQuestion >= maxQuestions - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
    }
}

function calculateCurrentScores() {
    let scores = {
        L: 0, F: 0, K: 0,
        D: 0, Pt: 0, Pa: 0, Hs: 0, Sc: 0, Pd: 0
    };
    
    function countScore(questionList) {
        let count = 0;
        questionList.forEach(qNum => {
            const index = qNum - 1;
            if (index >= 0 && index < userAnswers.length && userAnswers[index] !== undefined) {
                if (userAnswers[index] === 'yes') count++;
            }
        });
        return count;
    }
    
    scores.L = countScore(lieQuestions);
    scores.F = countScore(fakeQuestions);
    scores.K = countScore(defenseQuestions);
    scores.D = countScore(depressionQuestions);
    scores.Pt = countScore(anxietyQuestions);
    scores.Pa = countScore(paranoiaQuestions);
    scores.Hs = countScore(hypochondriaQuestions);
    scores.Sc = countScore(schizophreniaQuestions);
    scores.Pd = countScore(antiSocialQuestions);
    
    return scores;
}

function calculateScores() {
    let scores = {
        L: 0, F: 0, K: 0,
        D: 0, Pt: 0, Pa: 0, Hs: 0, Sc: 0, Pd: 0,
        adaptation: 0
    };
    
    let correctAnswers = 0;
    
    questions.forEach((q, index) => {
        if (userAnswers[index] !== undefined) {
            const userAnswer = userAnswers[index] === 'yes' ? 1 : 2;
            if (userAnswer === q.answer) {
                correctAnswers++;
            }
        }
    });
    
    const answeredCount = userAnswers.filter(a => a !== undefined).length;
    scores.adaptation = answeredCount > 0 ? Math.round((correctAnswers / answeredCount) * 100) : 0;
    
    function countScore(questionList) {
        let count = 0;
        questionList.forEach(qNum => {
            const index = qNum - 1;
            if (index >= 0 && index < userAnswers.length && userAnswers[index] !== undefined) {
                if (userAnswers[index] === 'yes') count++;
            }
        });
        return count;
    }
    
    scores.L = countScore(lieQuestions);
    scores.F = countScore(fakeQuestions);
    scores.K = countScore(defenseQuestions);
    scores.D = countScore(depressionQuestions);
    scores.Pt = countScore(anxietyQuestions);
    scores.Pa = countScore(paranoiaQuestions);
    scores.Hs = countScore(hypochondriaQuestions);
    scores.Sc = countScore(schizophreniaQuestions);
    scores.Pd = countScore(antiSocialQuestions);
    
    return scores;
}

function determineGrade(scores) {
    const t = translations[currentLang];
    if (scores.F > 8 || scores.L > 10) {
        return { grade: t.grade3, label: t.labelFail, level: 'danger', reason: t.reasonFail1 };
    }
    if (scores.Sc > 5 || scores.Pd > 5) {
        return { grade: t.grade3, label: t.labelFail, level: 'danger', reason: t.reasonFail2 };
    }
    if (scores.Pa > 4) {
        return { grade: t.grade2, label: t.labelSuspicious, level: 'warning', reason: t.reasonSuspicious1 };
    }
    if (scores.D > 8 || scores.Pt > 8 || scores.Hs > 6) {
        return { grade: t.grade2, label: t.labelSuspicious, level: 'warning', reason: t.reasonSuspicious2 };
    }
    if (scores.adaptation < 60) {
        return { grade: t.grade2, label: t.labelSuspicious, level: 'warning', reason: t.reasonSuspicious3 };
    }
    return { grade: t.grade1, label: t.labelPass, level: 'success', reason: t.reasonPass };
}

function getStatus(score, maxNormal) {
    const t = translations[currentLang];
    let width = Math.min(100, (score / maxNormal) * 100);
    if (width < 10) width = 10;
    
    if (score > maxNormal * 1.5) return { status: t.statusAbnormal, level: 'danger', width: width };
    if (score > maxNormal) return { status: t.statusHigh, level: 'warning', width: width };
    return { status: t.statusNormal, level: 'success', width: width };
}

function submitTest() {
    clearInterval(timerInterval);
    if (autoNextTimer) {
        clearTimeout(autoNextTimer);
    }
    
    const answeredCount = userAnswers.filter(a => a !== undefined).length;
    
    if (answeredCount < baseQuestions && timerSeconds > 0) {
        const t = translations[currentLang];
        const confirmMsg = t.confirmSubmit.replace('{count}', answeredCount);
        if (!confirm(confirmMsg)) {
            startTimer();
            return;
        }
    }
    
    const scores = calculateScores();
    const result = determineGrade(scores);
    
    currentScores = scores;
    currentResult = result;
    
    console.log('测试分数:', scores);
    console.log('测试结果:', result);
    
    const testContainer = document.getElementById('testContainer');
    const resultContainer = document.getElementById('resultContainer');
    const gradeText = document.getElementById('gradeText');
    const gradeLabel = document.getElementById('gradeLabel');
    const gradeCircle = document.getElementById('gradeCircle');
    const summary = document.getElementById('resultSummary');
    
    testContainer.style.display = 'none';
    resultContainer.style.display = 'flex';
    
    gradeText.textContent = result.grade;
    gradeLabel.textContent = result.label;
    
    gradeCircle.className = 'grade-circle';
    if (result.level === 'danger') {
        gradeCircle.classList.add('danger');
    } else if (result.level === 'warning') {
        gradeCircle.classList.add('warning');
    }
    
    document.getElementById('adaptationValue').textContent = scores.adaptation;
    document.getElementById('adaptationFill').style.width = `${scores.adaptation}%`;
    
    const lStatus = getStatus(scores.L, 8);
    document.getElementById('scaleL').style.width = `${lStatus.width}%`;
    document.getElementById('scaleL').className = `scale-fill ${lStatus.level}`;
    document.getElementById('statusL').textContent = lStatus.status;
    document.getElementById('statusL').className = `scale-status ${lStatus.level}`;
    
    const fStatus = getStatus(scores.F, 5);
    document.getElementById('scaleF').style.width = `${fStatus.width}%`;
    document.getElementById('scaleF').className = `scale-fill ${fStatus.level}`;
    document.getElementById('statusF').textContent = fStatus.status;
    document.getElementById('statusF').className = `scale-status ${fStatus.level}`;
    
    const kStatus = getStatus(scores.K, 10);
    document.getElementById('scaleK').style.width = `${kStatus.width}%`;
    document.getElementById('scaleK').className = `scale-fill ${kStatus.level}`;
    document.getElementById('statusK').textContent = kStatus.status;
    document.getElementById('statusK').className = `scale-status ${kStatus.level}`;
    
    const dStatus = getStatus(scores.D, 6);
    document.getElementById('scaleD').style.width = `${dStatus.width}%`;
    document.getElementById('scaleD').className = `scale-fill ${dStatus.level}`;
    document.getElementById('statusD').textContent = dStatus.status;
    document.getElementById('statusD').className = `scale-status ${dStatus.level}`;
    
    const ptStatus = getStatus(scores.Pt, 6);
    document.getElementById('scalePt').style.width = `${ptStatus.width}%`;
    document.getElementById('scalePt').className = `scale-fill ${ptStatus.level}`;
    document.getElementById('statusPt').textContent = ptStatus.status;
    document.getElementById('statusPt').className = `scale-status ${ptStatus.level}`;
    
    const paStatus = getStatus(scores.Pa, 3);
    document.getElementById('scalePa').style.width = `${paStatus.width}%`;
    document.getElementById('scalePa').className = `scale-fill ${paStatus.level}`;
    document.getElementById('statusPa').textContent = paStatus.status;
    document.getElementById('statusPa').className = `scale-status ${paStatus.level}`;
    
    const hsStatus = getStatus(scores.Hs, 5);
    document.getElementById('scaleHs').style.width = `${hsStatus.width}%`;
    document.getElementById('scaleHs').className = `scale-fill ${hsStatus.level}`;
    document.getElementById('statusHs').textContent = hsStatus.status;
    document.getElementById('statusHs').className = `scale-status ${hsStatus.level}`;
    
    const scStatus = getStatus(scores.Sc, 4);
    document.getElementById('scaleSc').style.width = `${scStatus.width}%`;
    document.getElementById('scaleSc').className = `scale-fill ${scStatus.level}`;
    document.getElementById('statusSc').textContent = scStatus.status;
    document.getElementById('statusSc').className = `scale-status ${scStatus.level}`;
    
    const pdStatus = getStatus(scores.Pd, 4);
    document.getElementById('scalePd').style.width = `${pdStatus.width}%`;
    document.getElementById('scalePd').className = `scale-fill ${pdStatus.level}`;
    document.getElementById('statusPd').textContent = pdStatus.status;
    document.getElementById('statusPd').className = `scale-status ${pdStatus.level}`;
    
    summary.className = 'result-summary';
    if (result.level === 'danger') {
        summary.classList.add('danger');
    } else if (result.level === 'warning') {
        summary.classList.add('warning');
    }
    
    const t = translations[currentLang];
    let summaryText = '';
    if (result.level === 'success') {
        summaryText = t.summaryPass.replace('{score}', scores.adaptation).replace('{reason}', result.reason);
    } else if (result.level === 'warning') {
        summaryText = t.summarySuspicious.replace('{score}', scores.adaptation).replace('{reason}', result.reason);
    } else {
        summaryText = t.summaryFail.replace('{score}', scores.adaptation).replace('{reason}', result.reason);
    }
    summary.querySelector('p').innerHTML = summaryText;
    
    isTestRunning = false;
}

function restartTest() {
    currentQuestion = 0;
    userAnswers = [];
    timerSeconds = 40 * 60;
    isExtended = false;
    maxQuestions = baseQuestions;
    currentResult = null;
    currentScores = null;
    
    document.getElementById('resultContainer').style.display = 'none';
    document.getElementById('welcomeScreen').style.display = 'flex';
    
    document.getElementById('timerValue').textContent = '40:00';
}

function openShareModal() {
    const shareModal = document.getElementById('shareModal');
    const shareGradeCircle = document.getElementById('shareGradeCircle');
    const shareGradeText = document.getElementById('shareGradeText');
    const shareGradeLabel = document.getElementById('shareGradeLabel');
    const shareGrade = document.getElementById('shareGrade');
    const shareAdaptation = document.getElementById('shareAdaptation');
    const shareConclusion = document.getElementById('shareConclusion');
    const qrCode = document.getElementById('qrCode');
    
    if (currentResult && currentScores) {
        shareGradeCircle.className = 'share-grade-circle';
        if (currentResult.level === 'danger') {
            shareGradeCircle.classList.add('danger');
        } else if (currentResult.level === 'warning') {
            shareGradeCircle.classList.add('warning');
        }
        
        shareGradeText.textContent = currentResult.grade;
        shareGradeLabel.textContent = currentResult.label;
        shareGrade.textContent = `${currentResult.grade}（${currentResult.label}）`;
        shareAdaptation.textContent = `${currentScores.adaptation}分`;
        
        const t = translations[currentLang];
        let conclusionText = '';
        if (currentResult.level === 'success') {
            conclusionText = `${t.summaryPass.replace(/<br><br>/g, '\n\n').replace(/<strong>|<\/strong>/g, '')}`;
        } else if (currentResult.level === 'warning') {
            conclusionText = `${t.summarySuspicious.replace(/<br><br>/g, '\n\n').replace(/<strong>|<\/strong>/g, '')}`;
        } else {
            conclusionText = `${t.summaryFail.replace(/<br><br>/g, '\n\n').replace(/<strong>|<\/strong>/g, '')}`;
        }
        shareConclusion.textContent = conclusionText.replace('{score}', currentScores.adaptation).replace('{reason}', currentResult.reason);
    }
    
    const qrUrl = 'https://dh.0x21c.cc/dh';
    qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(qrUrl)}`;
    
    shareModal.style.display = 'block';
}

function closeShareModal() {
    const shareModal = document.getElementById('shareModal');
    shareModal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('shareModal');
    if (event.target == modal) {
        closeShareModal();
    }
}

const translations = {
    'zh': {
        'headerTitle': '2026年士兵职业基本适应性模拟检测系统',
        'welcomeTitle': '测验三：人格测验',
        'welcomeIntro': '欢迎参加士兵职业基本适应性检测。本测验包含399道题目，请根据自身实际情况作答。',
        'rulesTitle': '测试说明：',
        'rule1': '请仔细阅读每道题目，根据自己的真实情况选择"是"或"否"',
        'rule2': '测试时间约40分钟，请合理安排答题速度',
        'rule3': '请务必如实作答，前后答案保持一致',
        'rule4': '一旦开始测试，请完成所有题目',
        'startBtn': '开始测试',
        'timerLabel': '剩余时间:',
        'testTitle': '测验三：人格测验',
        'optionYesText': '是',
        'optionNoText': '否',
        'prevBtnText': '上一题',
        'nextBtnText': '下一题',
        'submitBtnText': '提交测试',
        'resultTitle': '测试结果',
        'summaryTitle': '测评结论',
        'detailsTitle': '测评详情',
        'section1Title': '一、综合适应度',
        'adaptationLabel': '综合适应度：',
        'adaptationUnit': '分',
        'section2Title': '二、效度量表（答题真实性检测）',
        'scaleLName': '说谎分 (L)',
        'scaleLDesc': '检测是否刻意装"完美好人"',
        'scaleFName': '诈病分 (F)',
        'scaleFDesc': '检测是否故意装病或乱答',
        'scaleKName': '校正分 (K)',
        'scaleKDesc': '检测是否过度自我防御',
        'section3Title': '三、临床量表（心理健康检测）',
        'scaleDName': '抑郁量表 (D)',
        'scaleDDesc': '评估抑郁倾向程度',
        'scalePtName': '焦虑量表 (Pt)',
        'scalePtDesc': '评估焦虑和神经衰弱程度',
        'scalePaName': '偏执量表 (Pa)',
        'scalePaDesc': '评估偏执和多疑倾向',
        'scaleHsName': '精神衰弱 (Hs)',
        'scaleHsDesc': '评估躯体化症状和疑病倾向',
        'scaleScName': '精神分裂 (Sc)',
        'scaleScDesc': '评估精神分裂倾向',
        'scalePdName': '冲动/反社会 (Pd)',
        'scalePdDesc': '评估冲动和反社会倾向',
        'section4Title': '四、结果解释',
        'interpret1': '<strong>1类（合格）：</strong>各项指标均在正常范围内，心理素质符合士兵职业基本适应性要求。',
        'interpret2': '<strong>2类（可疑）：</strong>部分指标偏高，需要进行心理医生一对一访谈进一步评估。',
        'interpret3': '<strong>3类（不合格）：</strong>存在明显的心理异常指标，未能通过本次检测。',
        'restartBtn': '重新测试',
        'shareBtn': '分享成绩',
        'shareModalTitle': '分享成绩',
        'qrCodeLabel': '扫描二维码访问：',
        'grade1': '1类',
        'grade2': '2类',
        'grade3': '3类',
        'labelPass': '合格',
        'labelSuspicious': '可疑',
        'labelFail': '不合格',
        'statusNormal': '正常',
        'statusHigh': '偏高',
        'statusAbnormal': '异常',
        'confirmSubmit': '您只回答了 {count} 道题，尚未完成基础测试（80题），确定要提交吗？',
        'extendAlert': '根据您的答题情况，{reason}，需要额外回答 {extra} 道题目进行更全面的评估。',
        'summaryPass': '<strong>测评结果：1类（合格）</strong><br><br><strong>能否通过士兵职业基本适应性检测系统：</strong>是<br><br><strong>综合适应度：{score}分</strong><br><br><strong>评估说明：</strong>{reason}<br><br>恭喜您通过本次检测！您的心理素质符合士兵职业基本适应性要求。',
        'summarySuspicious': '<strong>测评结果：2类（可疑）</strong><br><br><strong>能否通过士兵职业基本适应性检测系统：</strong>待定，需进一步评估<br><br><strong>综合适应度：{score}分</strong><br><br><strong>评估说明：</strong>{reason}<br><br>建议进行心理医生一对一访谈，进一步评估您的心理状态。',
        'summaryFail': '<strong>测评结果：3类（不合格）</strong><br><br><strong>能否通过士兵职业基本适应性检测系统：</strong>否<br><br><strong>综合适应度：{score}分</strong><br><br><strong>评估说明：</strong>{reason}<br><br>未能通过本次检测，建议寻求专业心理咨询帮助。',
        'reasonPass': '各项指标均在正常范围内',
        'reasonFail1': '效度量表异常，答题真实性存疑',
        'reasonFail2': '存在明显的精神分裂倾向或反社会倾向',
        'reasonSuspicious1': '偏执倾向偏高，建议进一步访谈',
        'reasonSuspicious2': '抑郁、焦虑或躯体化症状偏高',
        'reasonSuspicious3': '综合适应度偏低',
        'copyright': '© 2026 21C技术 · 博客：',
        'allRightsReserved': '版权所有'
    },
    'en': {
        'headerTitle': '2026 Soldier Occupational Basic Adaptability Simulation Test System',
        'welcomeTitle': 'Test III: Personality Test',
        'welcomeIntro': 'Welcome to the Soldier Occupational Basic Adaptability Test. This test contains 399 questions. Please answer according to your actual situation.',
        'rulesTitle': 'Test Instructions:',
        'rule1': 'Please read each question carefully and choose "Yes" or "No" based on your true situation',
        'rule2': 'Test time is approximately 40 minutes. Please arrange your answering speed reasonably',
        'rule3': 'Please answer truthfully and keep your answers consistent',
        'rule4': 'Once you start the test, please complete all questions',
        'startBtn': 'Start Test',
        'timerLabel': 'Remaining Time:',
        'testTitle': 'Test III: Personality Test',
        'optionYesText': 'Yes',
        'optionNoText': 'No',
        'prevBtnText': 'Previous',
        'nextBtnText': 'Next',
        'submitBtnText': 'Submit Test',
        'resultTitle': 'Test Results',
        'summaryTitle': 'Evaluation Conclusion',
        'detailsTitle': 'Evaluation Details',
        'section1Title': 'I. Comprehensive Adaptability',
        'adaptationLabel': 'Comprehensive Adaptability: ',
        'adaptationUnit': 'points',
        'section2Title': 'II. Validity Scales (Answer Authenticity Test)',
        'scaleLName': 'Lie Scale (L)',
        'scaleLDesc': 'Detecting deliberate "perfect person" behavior',
        'scaleFName': 'Infrequency Scale (F)',
        'scaleFDesc': 'Detecting deliberate malingering or random answers',
        'scaleKName': 'Correction Scale (K)',
        'scaleKDesc': 'Detecting excessive self-defense',
        'section3Title': 'III. Clinical Scales (Mental Health Test)',
        'scaleDName': 'Depression Scale (D)',
        'scaleDDesc': 'Evaluating depression tendency',
        'scalePtName': 'Anxiety Scale (Pt)',
        'scalePtDesc': 'Evaluating anxiety and neurasthenia',
        'scalePaName': 'Paranoia Scale (Pa)',
        'scalePaDesc': 'Evaluating paranoid and suspicious tendencies',
        'scaleHsName': 'Hypochondriasis (Hs)',
        'scaleHsDesc': 'Evaluating somatic symptoms and hypochondriasis',
        'scaleScName': 'Schizophrenia (Sc)',
        'scaleScDesc': 'Evaluating schizophrenia tendency',
        'scalePdName': 'Psychopathic Deviate (Pd)',
        'scalePdDesc': 'Evaluating impulsive and anti-social tendencies',
        'section4Title': 'IV. Result Interpretation',
        'interpret1': '<strong>Category 1 (Pass):</strong> All indicators are within normal range. Psychological quality meets the basic adaptability requirements for soldiers.',
        'interpret2': '<strong>Category 2 (Suspicious):</strong> Some indicators are high. Further evaluation through one-on-one interview with a psychologist is recommended.',
        'interpret3': '<strong>Category 3 (Fail):</strong> Significant psychological abnormality indicators exist. Failed the test.',
        'restartBtn': 'Retake Test',
        'shareBtn': 'Share Results',
        'shareModalTitle': 'Share Results',
        'qrCodeLabel': 'Scan QR Code:',
        'grade1': 'Category 1',
        'grade2': 'Category 2',
        'grade3': 'Category 3',
        'labelPass': 'Pass',
        'labelSuspicious': 'Suspicious',
        'labelFail': 'Fail',
        'statusNormal': 'Normal',
        'statusHigh': 'High',
        'statusAbnormal': 'Abnormal',
        'confirmSubmit': 'You have only answered {count} questions. You have not completed the basic test (80 questions). Are you sure you want to submit?',
        'extendAlert': 'Based on your answers, {reason}. You need to answer {extra} additional questions for a more comprehensive assessment.',
        'summaryPass': '<strong>Test Result: Category 1 (Pass)</strong><br><br><strong>Qualification for Soldier Occupational Basic Adaptability Test:</strong> Yes<br><br><strong>Comprehensive Adaptability: {score} points</strong><br><br><strong>Assessment Note:</strong> {reason}<br><br>Congratulations! You have passed the test. Your psychological quality meets the basic adaptability requirements for soldiers.',
        'summarySuspicious': '<strong>Test Result: Category 2 (Suspicious)</strong><br><br><strong>Qualification for Soldier Occupational Basic Adaptability Test:</strong> Pending, further evaluation required<br><br><strong>Comprehensive Adaptability: {score} points</strong><br><br><strong>Assessment Note:</strong> {reason}<br><br>It is recommended to have a one-on-one interview with a psychologist for further evaluation.',
        'summaryFail': '<strong>Test Result: Category 3 (Fail)</strong><br><br><strong>Qualification for Soldier Occupational Basic Adaptability Test:</strong> No<br><br><strong>Comprehensive Adaptability: {score} points</strong><br><br><strong>Assessment Note:</strong> {reason}<br><br>You have not passed the test. It is recommended to seek professional psychological counseling.',
        'reasonPass': 'All indicators are within normal range',
        'reasonFail1': 'Validity scale abnormal, answer authenticity questionable',
        'reasonFail2': 'Significant schizophrenia or anti-social tendencies',
        'reasonSuspicious1': 'Paranoia tendency high, further interview recommended',
        'reasonSuspicious2': 'Depression, anxiety or somatic symptoms high',
        'reasonSuspicious3': 'Comprehensive adaptability low',
        'copyright': '© 2026 21C Technology · Blog:',
        'allRightsReserved': 'All Rights Reserved'
    },
    'zh-tw': {
        'headerTitle': '2026年士兵職業基本適應性模擬檢測系統',
        'welcomeTitle': '測驗三：人格測驗',
        'welcomeIntro': '歡迎參加士兵職業基本適應性檢測。本測驗包含399道題目，請根據自身實際情況作答。',
        'rulesTitle': '測試說明：',
        'rule1': '請仔細閱讀每道題目，根據自己的真實情況選擇「是」或「否」',
        'rule2': '測試時間約40分鐘，請合理安排答題速度',
        'rule3': '請務必如實作答，前後答案保持一致',
        'rule4': '一旦開始測試，請完成所有題目',
        'startBtn': '開始測試',
        'timerLabel': '剩餘時間:',
        'testTitle': '測驗三：人格測驗',
        'optionYesText': '是',
        'optionNoText': '否',
        'prevBtnText': '上一題',
        'nextBtnText': '下一題',
        'submitBtnText': '提交測試',
        'resultTitle': '測試結果',
        'summaryTitle': '測評結論',
        'detailsTitle': '測評詳情',
        'section1Title': '一、綜合適應度',
        'adaptationLabel': '綜合適應度：',
        'adaptationUnit': '分',
        'section2Title': '二、效度量表（答題真實性檢測）',
        'scaleLName': '說謊分 (L)',
        'scaleLDesc': '檢測是否刻意裝「完美好人」',
        'scaleFName': '詐病分 (F)',
        'scaleFDesc': '檢測是否故意裝病或亂答',
        'scaleKName': '校正分 (K)',
        'scaleKDesc': '檢測是否過度自我防禦',
        'section3Title': '三、臨床量表（心理健康檢測）',
        'scaleDName': '抑鬱量表 (D)',
        'scaleDDesc': '評估抑鬱傾向程度',
        'scalePtName': '焦慮量表 (Pt)',
        'scalePtDesc': '評估焦慮和神經衰弱程度',
        'scalePaName': '偏執量表 (Pa)',
        'scalePaDesc': '評估偏執和多疑傾向',
        'scaleHsName': '精神衰弱 (Hs)',
        'scaleHsDesc': '評估軀體化症狀和疑病傾向',
        'scaleScName': '精神分裂 (Sc)',
        'scaleScDesc': '評估精神分裂傾向',
        'scalePdName': '衝動/反社會 (Pd)',
        'scalePdDesc': '評估衝動和反社會傾向',
        'section4Title': '四、結果解釋',
        'interpret1': '<strong>1類（合格）：</strong>各項指標均在正常範圍內，心理素質符合士兵職業基本適應性要求。',
        'interpret2': '<strong>2類（可疑）：</strong>部分指標偏高，需要進行心理醫生一對一訪談進一步評估。',
        'interpret3': '<strong>3類（不合格）：</strong>存在明顯的心理異常指標，未能通過本次檢測。',
        'restartBtn': '重新測試',
        'shareBtn': '分享成績',
        'shareModalTitle': '分享成績',
        'qrCodeLabel': '掃描二維碼訪問：',
        'grade1': '1類',
        'grade2': '2類',
        'grade3': '3類',
        'labelPass': '合格',
        'labelSuspicious': '可疑',
        'labelFail': '不合格',
        'statusNormal': '正常',
        'statusHigh': '偏高',
        'statusAbnormal': '異常',
        'confirmSubmit': '您只回答了 {count} 道題，尚未完成基礎測試（80題），確定要提交嗎？',
        'extendAlert': '根據您的答題情況，{reason}，需要額外回答 {extra} 道題目進行更全面的評估。',
        'summaryPass': '<strong>測評結果：1類（合格）</strong><br><br><strong>能否通過士兵職業基本適應性檢測系統：</strong>是<br><br><strong>綜合適應度：{score}分</strong><br><br><strong>評估說明：</strong>{reason}<br><br>恭喜您通過本次檢測！您的心理素質符合士兵職業基本適應性要求。',
        'summarySuspicious': '<strong>測評結果：2類（可疑）</strong><br><br><strong>能否通過士兵職業基本適應性檢測系統：</strong>待定，需進一步評估<br><br><strong>綜合適應度：{score}分</strong><br><br><strong>評估說明：</strong>{reason}<br><br>建議進行心理醫生一對一訪談，進一步評估您的心理狀態。',
        'summaryFail': '<strong>測評結果：3類（不合格）</strong><br><br><strong>能否通過士兵職業基本適應性檢測系統：</strong>否<br><br><strong>綜合適應度：{score}分</strong><br><br><strong>評估說明：</strong>{reason}<br><br>未能通過本次檢測，建議尋求專業心理諮詢幫助。',
        'reasonPass': '各項指標均在正常範圍內',
        'reasonFail1': '效度量表異常，答題真實性存疑',
        'reasonFail2': '存在明顯的精神分裂傾向或反社會傾向',
        'reasonSuspicious1': '偏執傾向偏高，建議進一步訪談',
        'reasonSuspicious2': '抑鬱、焦慮或軀體化症狀偏高',
        'reasonSuspicious3': '綜合適應度偏低',
        'copyright': '© 2026 21C技術 · 部落格：',
        'allRightsReserved': '版權所有'
    }
};

const questionTranslations = {
    'en': {
        1: 'My appetite is very good.',
        2: 'When I wake up in the morning, I mostly feel well-rested and clear-headed.',
        3: 'I like reading crime news in the newspaper.',
        4: 'Sometimes I feel overwhelmed by difficulties that I cannot overcome.',
        5: 'I often meet so-called experts who are not better than me.',
        6: 'My daily life is full of things that interest me.',
        7: 'It would be best to abolish all laws.',
        8: 'Sometimes I feel like my soul has left my body.',
        9: 'My health is about the same as most of my friends.',
        10: 'When I meet classmates or infrequent friends, I pretend not to see them unless they greet me first.',
        11: 'I can see things, animals, or people that others around me cannot see.',
        12: 'Almost everyone who knows me likes me.',
        13: 'When I was a child, I was disciplined at school for misbehaving.',
        14: 'I do not read every editorial in the newspaper every day.',
        15: 'I have never had a normal life.',
        16: 'Sometimes I keep doing something until others get impatient.',
        17: 'I love my father.',
        18: 'I can see things, animals, and people that others around me cannot see.',
        19: 'I wish I could be as happy as others.',
        20: 'I think many people like to exaggerate their misfortunes to gain sympathy and help from others.',
        21: 'I sometimes get angry.',
        22: 'My spatial reasoning ability is better than average.',
        23: 'I often feel pessimistic and disappointed.',
        24: 'Anyone who has the ability and is willing to work hard can succeed.',
        25: 'Recently, I often feel disappointed.',
        26: 'Sometimes I am strongly attracted to other people\'s things, like shoes or gloves. Although these things are useless to me, I always want to touch them or steal them.',
        27: 'I really lack self-confidence.',
        28: 'To make most people believe the truth, it takes some debate.',
        29: 'Sometimes I put off things I should do today until tomorrow.',
        30: 'I don\'t mind if people make fun of me.',
        31: 'I think most people are willing to lie to get ahead.',
        32: 'Many things I have done, I later regret.',
        33: 'I hardly ever argue with my family.',
        34: 'I think the hardest thing is to control myself.',
        35: 'I seem not to care about anything.',
        36: 'When I am unwell, I sometimes lose my temper.',
        37: 'I always feel like I have done something wrong or committed a crime.',
        38: 'I am often happy.',
        39: 'Some people are too domineering. Even if I know they are right, I still oppose them.',
        40: 'Someone wants to harm me.',
        41: 'I have never done dangerous things for excitement.',
        42: 'I often feel that I must stick to what I think is right.',
        43: 'Most people are honest mainly because they are afraid of being caught.',
        44: 'When I was at school, I was sometimes called to the principal\'s office for misbehaving.',
        45: 'When I eat out with friends, I am much more well-behaved than at home.',
        46: 'I believe someone is plotting against me.',
        47: 'I seem to be as capable as the people around me.',
        48: 'I believe someone is following me.',
        49: 'Most people are willing to use improper means to gain benefits rather than miss opportunities.',
        50: 'I know who is causing my troubles.',
        51: 'I often don\'t understand why I get so angry and complain.',
        52: 'I have cried over certain things before.',
        53: 'I have never spit blood or coughed up blood.',
        54: 'I never worry about getting sick.',
        55: 'Sometimes my thoughts race so fast I can\'t express them.',
        56: 'If I could watch movies for free without getting caught, I might do it.',
        57: 'If someone is nice to me, I often suspect they have ulterior motives.',
        58: 'I believe my family life is as happy as many people I know.',
        59: 'Sometimes I feel like I must hurt myself or others.',
        60: 'My behavior is mostly influenced by the habits of people around me.',
        61: 'Sometimes I feel completely useless.',
        62: 'Sometimes I want to pick a fight with someone.',
        63: 'When I am doing something important and someone asks me for help or interrupts me, I get impatient.',
        64: 'When playing games, I only want to win, not lose.',
        65: 'Just thinking about some foods makes me want to vomit.',
        66: 'Someone has been trying to poison me.',
        67: 'My weight has neither increased nor decreased lately.',
        68: 'There was a time when I couldn\'t remember things I had done.',
        69: 'I feel like I am being punished for no reason.',
        70: 'I cry easily.',
        71: 'I can\'t understand what I read as well as before.',
        72: 'In my life, I have never felt as good as I do now.',
        73: 'I like to study and read things related to my current work.',
        74: 'I like meeting important people to feel important myself.',
        75: 'There is something wrong with my mind.',
        76: 'I don\'t care what others think of me.',
        77: 'At parties, I feel uncomfortable when someone shows off.',
        78: 'I often need to try hard not to appear shy.',
        79: 'I used to like going to school.',
        80: 'My mother is a good person.',
        81: 'My memory seems pretty good.',
        82: 'Issues related to sex trouble me.',
        83: 'I feel like I don\'t know what to say when I meet strangers.',
        84: 'I am afraid I will go crazy.',
        85: 'I refuse to give money to beggars.',
        86: 'I often hear voices without knowing where they come from.',
        87: 'My hearing is apparently as good as most people\'s.',
        88: 'I have thought about dying.',
        89: 'Many times, I feel weak all over.',
        90: 'Sometimes when I am embarrassed, I sweat a lot, which bothers me.',
        91: 'I have no trouble walking steadily.',
        92: 'I don\'t like everyone I know.',
        93: 'I like to travel to places I have never been.',
        94: 'Someone has been trying to rob me.',
        95: 'Someone is trying to steal my thoughts and plans.',
        96: 'I hope I won\'t be as shy as I am now in the future.',
        97: 'I believe I am a condemned person.',
        98: 'Sometimes I can\'t control the urge to steal.',
        99: 'I like many different kinds of games and entertainment.',
        100: 'I often feel tired.',
        101: 'Sometimes I feel like my thoughts are disconnected.',
        102: 'My judgment is better than ever.',
        103: 'My grades in school were mostly A or B.',
        104: 'I have never had sexual relations with anyone.',
        105: 'My feelings are not easily hurt.',
        106: 'I often find that others envy my good ideas.',
        107: 'I rarely have worries.',
        108: 'I often feel hopeless about the future.',
        109: 'I have had very special religious experiences.',
        110: 'I have felt like I was a sinner.',
        111: 'I believe one should be very considerate of others\' feelings.',
        112: 'I often feel like someone is trying to take advantage of me.',
        113: 'I like children.',
        114: 'I often feel hated by people.',
        115: 'I often stay alert.',
        116: 'I often feel like a failure.',
        117: 'My words and actions are mostly self-centered.',
        118: 'I like making changes and innovations.',
        119: 'I like doing things that are not good for me.',
        120: 'I like making friends.',
        121: 'I have never argued with my parents.',
        122: 'I like talking loudly.',
        123: 'I feel superior to others.',
        124: 'I feel I can control myself.',
        125: 'I like talking about myself.',
        126: 'I feel more sensitive than most people.',
        127: 'I like watching others dance.',
        128: 'I feel I should not be blamed.',
        129: 'I often feel depressed.',
        130: 'I like taking risks.',
        131: 'I feel I can endure anything.',
        132: 'I like watching tragic movies.',
        133: 'I like socializing with the opposite sex.',
        134: 'I like reminiscing about the past.',
        135: 'I like working alone.',
        136: 'I like helping others.',
        137: 'I like listening to music.',
        138: 'Sometimes I have strange thoughts.',
        139: 'I like competing with others.',
        140: 'Sometimes I feel like I am in a dream.',
        141: 'I like planning things.',
        142: 'I often feel anxious.',
        143: 'I like doing bold things.',
        144: 'Sometimes I feel hopeless.',
        145: 'I like criticizing others.',
        146: 'I like traveling.',
        147: 'Sometimes I feel lonely.',
        148: 'I like reading.',
        149: 'Sometimes I feel nervous.',
        150: 'I like doing challenging things.',
        151: 'I think I am an ordinary person.',
        152: 'Sometimes I feel afraid.',
        153: 'I like attending social activities.',
        154: 'Sometimes I feel irritable.',
        155: 'I like learning new knowledge.',
        156: 'Sometimes I feel tired.',
        157: 'I like watching sports.',
        158: 'Sometimes I feel helpless.',
        159: 'I like trying new things.',
        160: 'Sometimes I feel confused.',
        161: 'I like working with others.',
        162: 'Sometimes I feel disappointed.',
        163: 'I like appreciating art.',
        164: 'Sometimes I feel pain.',
        165: 'I like outdoor activities.',
        166: 'Sometimes I feel angry.',
        167: 'I like thinking about problems.',
        168: 'Sometimes I feel anxious.',
        169: 'I like helping others.',
        170: 'Sometimes I feel melancholy.',
        171: 'I like teamwork.',
        172: 'Sometimes I feel uneasy.',
        173: 'I like challenging myself.',
        174: 'Sometimes I feel depressed.',
        175: 'I like making friends.',
        176: 'Sometimes I feel puzzled.',
        177: 'I like exercising.',
        178: 'Sometimes I feel nervous and uneasy.',
        179: 'I like pursuing dreams.',
        180: 'Sometimes I feel lost.',
        181: 'I like communicating with others.',
        182: 'Sometimes I feel helpless.',
        183: 'I like reading books.',
        184: 'Sometimes I feel anxious and uneasy.',
        185: 'I like learning skills.',
        186: 'Sometimes I feel irritable and uneasy.',
        187: 'I like participating in activities.',
        188: 'Sometimes I feel overwhelmed.',
        189: 'I like solving problems.',
        190: 'Sometimes I feel helpless.',
        191: 'I like creating things.',
        192: 'Sometimes I feel depressed.',
        193: 'I like exploring the unknown.',
        194: 'Sometimes I feel confused.',
        195: 'I like enjoying life.',
        196: 'Sometimes I feel lonely.',
        197: 'I like socializing with others.',
        198: 'Sometimes I feel nervous.',
        199: 'I like trying new methods.',
        200: 'Sometimes I feel uneasy.',
        201: 'I have a strong sense of responsibility.',
        202: 'I often feel stressed.',
        203: 'I am good at communicating with others.',
        204: 'I often feel emotionally low.',
        205: 'I have good teamwork spirit.',
        206: 'I often feel anxious.',
        207: 'I can manage my time well.',
        208: 'I often feel exhausted.',
        209: 'I have strong learning ability.',
        210: 'I often feel irritable.',
        211: 'I can stay calm.',
        212: 'I often feel nervous.',
        213: 'I am good at solving problems.',
        214: 'I often feel uneasy.',
        215: 'I have innovative spirit.',
        216: 'I often feel confused.',
        217: 'I can handle pressure.',
        218: 'I often feel lonely.',
        219: 'I have leadership ability.',
        220: 'I often feel lost.',
        221: 'I am good at listening to others.',
        222: 'I often feel helpless.',
        223: 'I have good communication skills.',
        224: 'I often feel emotionally volatile.',
        225: 'I can adapt to changes.',
        226: 'I often feel anxious and uneasy.',
        227: 'I have teamwork ability.',
        228: 'I often feel tired.',
        229: 'I can work independently.',
        230: 'I often feel irritable and uneasy.',
        231: 'I have a sense of responsibility.',
        232: 'I often feel overwhelmed.',
        233: 'I am good at analyzing problems.',
        234: 'I often feel depressed.',
        235: 'I have decision-making ability.',
        236: 'I often feel confused.',
        237: 'I can build good relationships with others.',
        238: 'I often feel lonely.',
        239: 'I have organizational ability.',
        240: 'I often feel nervous.',
        241: 'I am good at expressing myself.',
        242: 'I often feel uneasy.',
        243: 'I have self-management ability.',
        244: 'I often feel stressed.',
        245: 'I can accept criticism.',
        246: 'I often feel emotionally low.',
        247: 'I have team spirit.',
        248: 'I often feel anxious.',
        249: 'I can be proactive.',
        250: 'I often feel exhausted.',
        251: 'I have good psychological quality.',
        252: 'I often feel irritable.',
        253: 'I can stay optimistic.',
        254: 'I often feel nervous.',
        255: 'I have pressure resistance ability.',
        256: 'I often feel uneasy.',
        257: 'I can self-regulate.',
        258: 'I often feel confused.',
        259: 'I have a good mindset.',
        260: 'I often feel lonely.',
        261: 'I can cooperate with others.',
        262: 'I often feel lost.',
        263: 'I have a sense of responsibility and mission.',
        264: 'I often feel helpless.',
        265: 'I can adapt to the environment.',
        266: 'I often feel emotionally volatile.',
        267: 'I have good communication skills.',
        268: 'I often feel anxious and uneasy.',
        269: 'I can handle pressure.',
        270: 'I often feel tired.',
        271: 'I have teamwork spirit.',
        272: 'I often feel irritable and uneasy.',
        273: 'I can think independently.',
        274: 'I often feel overwhelmed.',
        275: 'I have innovative thinking.',
        276: 'I often feel depressed.',
        277: 'I can make decisions.',
        278: 'I often feel confused.',
        279: 'I have leadership talent.',
        280: 'I often feel lonely.',
        281: 'I can get along with others.',
        282: 'I often feel nervous.',
        283: 'I have good professional ethics.',
        284: 'I often feel uneasy.',
        285: 'I can take responsibility.',
        286: 'I often feel stressed.',
        287: 'I have a positive attitude.',
        288: 'I often feel emotionally low.',
        289: 'I can accept challenges.',
        290: 'I often feel anxious.',
        291: 'I have teamwork ability.',
        292: 'I often feel exhausted.',
        293: 'I can stay focused.',
        294: 'I often feel irritable.',
        295: 'I have good psychological quality.',
        296: 'I often feel nervous.',
        297: 'I can motivate myself.',
        298: 'I often feel uneasy.',
        299: 'I have pressure resistance ability.',
        300: 'I often feel confused.',
        301: 'I can adapt to military life.',
        302: 'I often feel lonely.',
        303: 'I have a sense of obedience.',
        304: 'I often feel lost.',
        305: 'I can abide by discipline.',
        306: 'I often feel helpless.',
        307: 'I have team spirit.',
        308: 'I often feel emotionally volatile.',
        309: 'I can execute orders.',
        310: 'I often feel anxious and uneasy.',
        311: 'I have a sense of responsibility.',
        312: 'I often feel tired.',
        313: 'I can endure hardships.',
        314: 'I often feel irritable and uneasy.',
        315: 'I can abide by military discipline.',
        316: 'I often feel uneasy.',
        317: 'I have good psychological quality.',
        318: 'I often feel nervous.',
        319: 'I can complete tasks.',
        320: 'I often feel anxious.',
        321: 'I have teamwork spirit.',
        322: 'I often feel tired.',
        323: 'I can handle pressure.',
        324: 'I often feel lonely.',
        325: 'I have a sense of responsibility.',
        326: 'I often feel lost.',
        327: 'I can communicate with others.',
        328: 'I often feel helpless.',
        329: 'I have leadership ability.',
        330: 'I often feel confused.',
        331: 'I can adapt to the environment.',
        332: 'I often feel emotionally volatile.',
        333: 'I have a good mindset.',
        334: 'I often feel irritable.',
        335: 'I can self-regulate.',
        336: 'I often feel nervous and uneasy.',
        337: 'I have pressure resistance ability.',
        338: 'I often feel exhausted.',
        339: 'I can stay calm.',
        340: 'I often feel emotionally low.',
        341: 'I have a positive attitude.',
        342: 'I often feel anxious and uneasy.',
        343: 'I can handle problems.',
        344: 'I often feel overwhelmed.',
        345: 'I have good communication skills.',
        346: 'I often feel depressed.',
        347: 'I can accept criticism.',
        348: 'I often feel lonely.',
        349: 'I have teamwork ability.',
        350: 'I often feel uneasy.',
        351: 'I can make decisions.',
        352: 'I often feel confused.',
        353: 'I have innovative spirit.',
        354: 'I often feel nervous.',
        355: 'I can work independently.',
        356: 'I often feel irritable and uneasy.',
        357: 'I have organizational ability.',
        358: 'I often feel tired.',
        359: 'I can cooperate with others.',
        360: 'I often feel emotionally volatile.',
        361: 'I have good professional ethics.',
        362: 'I often feel anxious.',
        363: 'I can take responsibility.',
        364: 'I often feel stressed.',
        365: 'I have self-management ability.',
        366: 'I often feel helpless.',
        367: 'I can adapt to changes.',
        368: 'I often feel lost.',
        369: 'I have learning ability.',
        370: 'I often feel depressed.',
        371: 'I can stay focused.',
        372: 'I often feel confused.',
        373: 'I have good psychological quality.',
        374: 'I often feel lonely.',
        375: 'I can get along with others.',
        376: 'I often feel nervous and uneasy.',
        377: 'I have leadership talent.',
        378: 'I often feel irritable.',
        379: 'I can solve problems.',
        380: 'I often feel anxious.',
        381: 'I have team spirit.',
        382: 'I often feel exhausted.',
        383: 'I can accept challenges.',
        384: 'I often feel emotionally low.',
        385: 'I have a positive attitude.',
        386: 'I often feel uneasy.',
        387: 'I can endure hardships.',
        388: 'I often feel overwhelmed.',
        389: 'I have good communication skills.',
        390: 'I often feel irritable and uneasy.',
        391: 'I can execute orders.',
        392: 'I often feel nervous.',
        393: 'I can maintain firm beliefs in the face of pressure and challenges.',
        394: 'I have strong self-control and willpower.',
        395: 'I can accept all training and work arrangements in the military.',
        396: 'I am willing to dedicate my youth and blood to defend the motherland.',
        397: 'I can take the initiative and play a leading role in the team.',
        398: 'I have good psychological quality and pressure resistance ability.',
        399: 'I fully meet the psychological requirements and quality standards for soldiers.'
    },
    'zh-tw': {
        1: '我的胃口很好。',
        2: '我早上起來的時候，多半覺得睡眠充足，頭腦清醒。',
        3: '我喜歡看報紙上的犯罪新聞。',
        4: '有時我常感到困難重重，無法克服。',
        5: '我時常遇見一些所謂的專家，他們並不比我高明。',
        6: '我的日常生活中，充滿了使我感興趣的事情。',
        7: '最好是把所有的法律全部不要。',
        8: '有時我覺得我的靈魂離開了我的身體。',
        9: '我的身體和我大多數朋友一樣地健康。',
        10: '遇到同學或不常見的朋友，除非他們先向我打招呼，不然我就裝作沒看見。',
        11: '我能看到我旁邊的人看不到的東西、動物或人。',
        12: '認識我的人差不多都喜歡我。',
        13: '我小時候，曾經因為胡鬧而受過學校的處分。',
        14: '我不是每天都看報紙上的每一篇社論。',
        15: '我從未有過正常的生活。',
        16: '有時我會不停地做一件事，直到別人不耐煩為止。',
        17: '我愛我的父親。',
        18: '我能在我周圍看到其他人所看不到的東西、動物和人。',
        19: '我希望我能像別人那樣快樂。',
        20: '我覺得許多人喜歡誇大自己的不幸，以便得到別人的同情和幫助。',
        21: '我有時發怒。',
        22: '我的空間推理能力比一般人強。',
        23: '我時常感到悲觀失望。',
        24: '任何人只要他有能力，而且願意努力工作是能成功的。',
        25: '近來，我經常有失望的感覺。',
        26: '有時我被別人的東西，如鞋、手套等所強烈吸引，雖然這些東西對我毫無用處，但我總想摸摸它或把它偷來。',
        27: '我確實缺少自信心。',
        28: '要使大多數人相信事實的真相，是要經過一番辯論的。',
        29: '有時我將今天應該做的事，拖到明天去做。',
        30: '我不在乎別人拿我開玩笑。',
        31: '我覺得大多數人是為了向上爬而不惜說謊的。',
        32: '許多事情，我做過以後就後悔了。',
        33: '我幾乎沒有和家裡人吵過嘴。',
        34: '我認為最難的是控制我自己。',
        35: '我似乎對什麼事情都不在乎。',
        36: '我身體不舒服的時候，我有時發脾氣。',
        37: '我總覺得我自己好像做錯了什麼事或犯了什麼罪。',
        38: '我經常是快樂的。',
        39: '有些人太霸道，即使我明知他們是對的，也要和他們對著幹。',
        40: '有人想害我。',
        41: '我從來沒有為尋求刺激而去做危險的事。',
        42: '我時常認為必須堅持那些我認為正確的事。',
        43: '大部分人之所以是誠實的，主要是因為怕被人識破。',
        44: '我在上學的時候，有時因胡鬧而被領導叫去。',
        45: '我在外邊和朋友們一起吃飯的時候，比在家規矩得多。',
        46: '我相信有人暗算我。',
        47: '我似乎和我周圍的人一樣精明能幹。',
        48: '我相信有人在跟蹤我。',
        49: '多數人不惜用不正當的手段謀取利益，而不願失掉機會。',
        50: '我知道我的煩惱是誰造成的。',
        51: '我自己時常弄不清為什麼會這樣愛生氣和發牢騷。',
        52: '我曾經因為某些事情而大哭。',
        53: '我從來沒有吐過血，或咯過血。',
        54: '我從不為得病而擔心。',
        55: '有時我的思想過於奔放，甚至都來不及表達出來。',
        56: '假如我能不買票白看電影，而且不會被人發覺，我可能會去做的。',
        57: '如果別人待我好，我常常懷疑他們別有用心。',
        58: '我相信我的家庭生活，和我認識的許多人一樣幸福快樂。',
        59: '有時，我彷彿覺得我必須傷害自己或別人。',
        60: '我的行為多半受我周圍人的習慣所支配。',
        61: '有時我覺得我真是毫無用處。',
        62: '有時我想借故和別人打架。',
        63: '當我正在做一件重要事情的時候，如果有人向我請教或打擾我，我會不耐煩的。',
        64: '做遊戲的時候，我只願贏而不願輸。',
        65: '有些食物一想起來就要嘔吐。',
        66: '有人一直想毒死我。',
        67: '現在我的體重既沒有增加也沒有減輕。',
        68: '有一段時間，我自己做過的事情全不記得了。',
        69: '我覺得我時常無緣無故地受到懲罰。',
        70: '我很容易哭。',
        71: '我不能像從前那樣理解我所讀的東西了。',
        72: '在我一生中，我從來沒有感覺到像現在這麼好。',
        73: '我喜歡研究和閱讀與我目前工作有關的東西。',
        74: '我喜歡結識一些重要人物，這樣使我感到自己也很重要。',
        75: '我的腦子有點毛病。',
        76: '我不在乎別人對我有什麼看法。',
        77: '在聚會當中，如果有人出風頭，我會感到很不舒服。',
        78: '我時常需要努力使自己不顯出怕羞的樣子。',
        79: '我過去喜歡上學。',
        80: '我母親是個好人。',
        81: '我的記憶力似乎還不錯。',
        82: '有關性方面的問題，使我煩惱。',
        83: '我覺得我遇到生人的時候就不知道說什麼好了。',
        84: '我怕自己會瘋掉。',
        85: '我拒絕把錢給乞丐。',
        86: '我時常聽到說話的聲音，而不知是從哪裡來的。',
        87: '我的聽覺顯然和大多數人一樣好。',
        88: '我曾經想過死。',
        89: '許多時候，我覺得渾身無力。',
        90: '有時，難為情的時候，會出很多的汗，這使我非常苦惱。',
        91: '我走路時保持平穩，並不困難。',
        92: '我所認識的人裡不是個個我都喜歡。',
        93: '我喜歡到我從來沒有到過的地方去遊覽。',
        94: '有人一直想搶我的東西。',
        95: '有人想竊取我的思想和計劃。',
        96: '但願將來我不會像現在這樣害羞。',
        97: '我相信我是一個被譴責的人。',
        98: '有時我控制不住自己，想要偷點東西。',
        99: '我喜歡許多不同種類的遊戲和娛樂。',
        100: '我常常感到疲倦。',
        101: '有時我覺得我的思維好像不連貫。',
        102: '我的判斷力比以往任何時候都好。',
        103: '我在學校裡的成績多半是A或B。',
        104: '我從來沒有和別人發生過性關係。',
        105: '我的感情不容易受傷害。',
        106: '我常常發現別人妒忌我的好主意。',
        107: '我很少有煩惱。',
        108: '我常常感到前途渺茫。',
        109: '我曾經有過非常特別的宗教體驗。',
        110: '我曾經覺得我是一個罪人。',
        111: '我相信一個人應該十分周到地對待別人的感受。',
        112: '我常常覺得有人想占我的便宜。',
        113: '我喜歡小孩子。',
        114: '我常常覺得自己被人們討厭。',
        115: '我常常保持警覺。',
        116: '我時常覺得我是失敗者。',
        117: '我的言行大多以自我為中心。',
        118: '我喜歡搞變化和革新。',
        119: '我喜歡做對我沒有好處的事。',
        120: '我喜歡交朋友。',
        121: '我從來沒有和父母吵過架。',
        122: '我喜歡大聲說話。',
        123: '我覺得自己比別人優越。',
        124: '我覺得我能克制我自己。',
        125: '我喜歡談論我自己。',
        126: '我覺得我比大多數人更敏感。',
        127: '我喜歡看別人跳舞。',
        128: '我覺得我不應該受到責備。',
        129: '我時常感到沮喪。',
        130: '我喜歡冒險。',
        131: '我覺得我能忍受任何事情。',
        132: '我喜歡看悲劇影片。',
        133: '我喜歡和異性交往。',
        134: '我喜歡回憶過去。',
        135: '我喜歡獨自工作。',
        136: '我喜歡幫助別人。',
        137: '我喜歡聽音樂。',
        138: '有時我會產生一些奇怪的念頭。',
        139: '我喜歡和別人競爭。',
        140: '有時我會覺得自己好像在夢中。',
        141: '我喜歡計劃事情。',
        142: '我時常感到焦慮不安。',
        143: '我喜歡做一些大膽的事情。',
        144: '有時我會感到絕望。',
        145: '我喜歡批評別人。',
        146: '我喜歡旅行。',
        147: '有時我會感到孤獨。',
        148: '我喜歡閱讀。',
        149: '有時我會感到緊張。',
        150: '我喜歡做一些有挑戰性的事情。',
        151: '我認為自己是一個很普通的人。',
        152: '有時我會感到害怕。',
        153: '我喜歡參加社交活動。',
        154: '有時我會感到煩躁。',
        155: '我喜歡學習新知識。',
        156: '有時我會感到疲憊。',
        157: '我喜歡看體育比賽。',
        158: '有時我會感到無助。',
        159: '我喜歡嘗試新事物。',
        160: '有時我會感到迷茫。',
        161: '我喜歡與人合作。',
        162: '有時我會感到失望。',
        163: '我喜歡欣賞藝術。',
        164: '有時我會感到痛苦。',
        165: '我喜歡戶外活動。',
        166: '有時我會感到憤怒。',
        167: '我喜歡思考問題。',
        168: '有時我會感到焦慮。',
        169: '我喜歡幫助他人。',
        170: '有時我會感到憂鬱。',
        171: '我喜歡團隊合作。',
        172: '有時我會感到不安。',
        173: '我喜歡挑戰自我。',
        174: '有時我會感到壓抑。',
        175: '我喜歡結交朋友。',
        176: '有時我會感到困惑。',
        177: '我喜歡鍛煉身體。',
        178: '有時我會感到緊張不安。',
        179: '我喜歡追求夢想。',
        180: '有時我會感到失落。',
        181: '我喜歡與人交流。',
        182: '有時我會感到無奈。',
        183: '我喜歡閱讀書籍。',
        184: '有時我會感到焦慮不安。',
        185: '我喜歡學習技能。',
        186: '有時我會感到煩躁不安。',
        187: '我喜歡參加活動。',
        188: '有時我會感到不知所措。',
        189: '我喜歡解決問題。',
        190: '有時我會感到無助。',
        191: '我喜歡創造事物。',
        192: '有時我會感到沮喪。',
        193: '我喜歡探索未知。',
        194: '有時我會感到迷茫。',
        195: '我喜歡享受生活。',
        196: '有時我會感到孤獨。',
        197: '我喜歡與人交往。',
        198: '有時我會感到緊張。',
        199: '我喜歡嘗試新方法。',
        200: '有時我會感到不安。',
        201: '我有很強的責任感。',
        202: '我經常感到壓力很大。',
        203: '我善於與人溝通。',
        204: '我經常感到情緒低落。',
        205: '我有良好的團隊合作精神。',
        206: '我經常感到焦慮。',
        207: '我能夠很好地管理時間。',
        208: '我經常感到疲憊不堪。',
        209: '我具有很強的學習能力。',
        210: '我經常感到煩躁。',
        211: '我能夠保持冷靜。',
        212: '我經常感到緊張。',
        213: '我善於解決問題。',
        214: '我經常感到不安。',
        215: '我具有創新精神。',
        216: '我經常感到迷茫。',
        217: '我能夠承受壓力。',
        218: '我經常感到孤獨。',
        219: '我具有領導能力。',
        220: '我經常感到失落。',
        221: '我善於傾聽他人。',
        222: '我經常感到無助。',
        223: '我具有良好的溝通能力。',
        224: '我經常感到情緒波動。',
        225: '我能夠適應變化。',
        226: '我經常感到焦慮不安。',
        227: '我具有團隊協作能力。',
        228: '我經常感到疲憊。',
        229: '我能夠獨立工作。',
        230: '我經常感到煩躁不安。',
        231: '我具有責任心。',
        232: '我經常感到不知所措。',
        233: '我善於分析問題。',
        234: '我經常感到沮喪。',
        235: '我具有決策能力。',
        236: '我經常感到迷茫。',
        237: '我能夠與人建立良好關係。',
        238: '我經常感到孤獨。',
        239: '我具有組織能力。',
        240: '我經常感到緊張。',
        241: '我善於表達自己。',
        242: '我經常感到不安。',
        243: '我具有自我管理能力。',
        244: '我經常感到壓力。',
        245: '我能夠接受批評。',
        246: '我經常感到情緒低落。',
        247: '我具有團隊精神。',
        248: '我經常感到焦慮。',
        249: '我能夠積極主動。',
        250: '我經常感到疲憊不堪。',
        251: '我具有良好的心理素質。',
        252: '我經常感到煩躁。',
        253: '我能夠保持樂觀。',
        254: '我經常感到緊張。',
        255: '我具有抗壓能力。',
        256: '我經常感到不安。',
        257: '我能夠自我調節。',
        258: '我經常感到迷茫。',
        259: '我具有良好的心態。',
        260: '我經常感到孤獨。',
        261: '我能夠與人合作。',
        262: '我經常感到失落。',
        263: '我具有責任心和使命感。',
        264: '我經常感到無助。',
        265: '我能夠適應環境。',
        266: '我經常感到情緒波動。',
        267: '我具有良好的溝通技巧。',
        268: '我經常感到焦慮不安。',
        269: '我能夠處理壓力。',
        270: '我經常感到疲憊。',
        271: '我具有團隊協作精神。',
        272: '我經常感到煩躁不安。',
        273: '我能夠獨立思考。',
        274: '我經常感到不知所措。',
        275: '我具有創新思維。',
        276: '我經常感到沮喪。',
        277: '我能夠做出決策。',
        278: '我經常感到迷茫。',
        279: '我具有領導才能。',
        280: '我經常感到孤獨。',
        281: '我能夠與人相處。',
        282: '我經常感到緊張。',
        283: '我具有良好的職業道德。',
        284: '我經常感到不安。',
        285: '我能夠承擔責任。',
        286: '我經常感到壓力。',
        287: '我具有積極向上的態度。',
        288: '我經常感到情緒低落。',
        289: '我能夠接受挑戰。',
        290: '我經常感到焦慮。',
        291: '我具有團隊合作能力。',
        292: '我經常感到疲憊不堪。',
        293: '我能夠保持專注。',
        294: '我經常感到煩躁。',
        295: '我具有良好的心理素質。',
        296: '我經常感到緊張。',
        297: '我能夠自我激勵。',
        298: '我經常感到不安。',
        299: '我具有抗壓能力。',
        300: '我經常感到迷茫。',
        301: '我能夠適應軍隊生活。',
        302: '我經常感到孤獨。',
        303: '我具有服從意識。',
        304: '我經常感到失落。',
        305: '我能夠遵守紀律。',
        306: '我經常感到無助。',
        307: '我具有團隊精神。',
        308: '我經常感到情緒波動。',
        309: '我能夠執行命令。',
        310: '我經常感到焦慮不安。',
        311: '我具有責任感。',
        312: '我經常感到疲憊。',
        313: '我能夠吃苦耐勞。',
        314: '我經常感到煩躁不安。',
        315: '我能夠遵守軍隊紀律。',
        316: '我經常感到不安。',
        317: '我具有良好的心理素質。',
        318: '我經常感到緊張。',
        319: '我能夠完成任務。',
        320: '我經常感到焦慮。',
        321: '我具有團隊合作精神。',
        322: '我經常感到疲憊。',
        323: '我能夠承受壓力。',
        324: '我經常感到孤獨。',
        325: '我具有責任感。',
        326: '我經常感到失落。',
        327: '我能夠與人溝通。',
        328: '我經常感到無助。',
        329: '我具有領導能力。',
        330: '我經常感到迷茫。',
        331: '我能夠適應環境。',
        332: '我經常感到情緒波動。',
        333: '我具有良好的心態。',
        334: '我經常感到煩躁。',
        335: '我能夠自我調節。',
        336: '我經常感到緊張不安。',
        337: '我具有抗壓能力。',
        338: '我經常感到疲憊不堪。',
        339: '我能夠保持冷靜。',
        340: '我經常感到情緒低落。',
        341: '我具有積極向上的態度。',
        342: '我經常感到焦慮不安。',
        343: '我能夠處理問題。',
        344: '我經常感到不知所措。',
        345: '我具有良好的溝通能力。',
        346: '我經常感到沮喪。',
        347: '我能夠接受批評。',
        348: '我經常感到孤獨。',
        349: '我具有團隊協作能力。',
        350: '我經常感到不安。',
        351: '我能夠做出決策。',
        352: '我經常感到迷茫。',
        353: '我具有創新精神。',
        354: '我經常感到緊張。',
        355: '我能夠獨立工作。',
        356: '我經常感到煩躁不安。',
        357: '我具有組織能力。',
        358: '我經常感到疲憊。',
        359: '我能夠與人合作。',
        360: '我經常感到情緒波動。',
        361: '我具有良好的職業道德。',
        362: '我經常感到焦慮。',
        363: '我能夠承擔責任。',
        364: '我經常感到壓力。',
        365: '我具有自我管理能力。',
        366: '我經常感到無助。',
        367: '我能夠適應變化。',
        368: '我經常感到失落。',
        369: '我具有學習能力。',
        370: '我經常感到沮喪。',
        371: '我能夠保持專注。',
        372: '我經常感到迷茫。',
        373: '我具有良好的心理素質。',
        374: '我經常感到孤獨。',
        375: '我能夠與人相處。',
        376: '我經常感到緊張不安。',
        377: '我具有領導才能。',
        378: '我經常感到煩躁。',
        379: '我能夠解決問題。',
        380: '我經常感到焦慮。',
        381: '我具有團隊精神。',
        382: '我經常感到疲憊不堪。',
        383: '我能夠接受挑戰。',
        384: '我經常感到情緒低落。',
        385: '我具有積極的態度。',
        386: '我經常感到不安。',
        387: '我能夠吃苦耐勞。',
        388: '我經常感到不知所措。',
        389: '我具有良好的溝通技巧。',
        390: '我經常感到煩躁不安。',
        391: '我能夠執行命令。',
        392: '我經常感到緊張。',
        393: '我能在壓力和挑戰面前保持堅定的信念。',
        394: '我有較強的自我控制能力和意志力。',
        395: '我能接受軍隊的一切訓練和工作安排。',
        396: '我願意為了保衛祖國奉獻自己的青春和熱血。',
        397: '我能在團隊中積極主動，發揮帶頭作用。',
        398: '我有良好的心理素質和抗壓能力。',
        399: '我完全符合軍人的心理要求和素質標準。'
    }
};

let currentLang = 'zh';

function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

document.addEventListener('DOMContentLoaded', function() {
    const langParam = getUrlParameter('lang');
    if (langParam && ['zh', 'en', 'zh-tw'].includes(langParam)) {
        document.body.className = `lang-${langParam}`;
        changeLanguage(langParam);
        const langNames = {
            'zh': '中文',
            'en': 'English',
            'zh-tw': '繁體'
        };
        const toggleBtn = document.getElementById('langToggle');
        if (toggleBtn) {
            toggleBtn.textContent = langNames[langParam];
        }
    } else {
        document.body.className = 'lang-zh';
    }
});

function toggleLanguageMenu() {
    const dropdown = document.getElementById('languageDropdown');
    dropdown.classList.toggle('show');
}

function selectLanguage(lang) {
    changeLanguage(lang);
    const dropdown = document.getElementById('languageDropdown');
    dropdown.classList.remove('show');
    
    const langNames = {
        'zh': '中文',
        'en': 'English',
        'zh-tw': '繁體'
    };
    const toggleBtn = document.getElementById('langToggle');
    if (toggleBtn) {
        toggleBtn.textContent = langNames[lang];
    }
}

function changeLanguage(lang) {
    currentLang = lang;
    document.body.className = `lang-${lang}`;
    const langData = translations[lang];
    
    Object.keys(langData).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            if (key.startsWith('interpret')) {
                element.innerHTML = langData[key];
            } else {
                element.textContent = langData[key];
            }
        }
    });
    
    const prevBtn = document.getElementById('prevBtn');
    if (prevBtn) prevBtn.textContent = langData['prevBtnText'];
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) nextBtn.textContent = langData['nextBtnText'];
    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) submitBtn.textContent = langData['submitBtnText'];
    
    updateLangButtonStyle(lang);
    
    const copyrightText = document.getElementById('copyrightText');
    if (copyrightText) {
        copyrightText.innerHTML = `${langData['copyright']}<a href="https://0x21c.cc" target="_blank">https://0x21c.cc</a>`;
    }
    
    if (document.getElementById('testContainer').style.display === 'flex') {
        loadQuestion(currentQuestion);
    }
}

function updateLangButtonStyle(activeLang) {
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(btn => {
        btn.classList.remove('active');
        if (btn.id === `lang-${activeLang}`) {
            btn.classList.add('active');
        }
    });
}

document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('languageDropdown');
    const toggleBtn = document.getElementById('langToggle');
    if (dropdown && !dropdown.contains(event.target) && event.target !== toggleBtn) {
        dropdown.classList.remove('show');
    }
});

function getTranslation(key) {
    return translations[currentLang][key] || translations['zh'][key];
}