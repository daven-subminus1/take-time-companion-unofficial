/**
 * Take Time - Complete Data (TTS Mod 3572602318)
 * 40 Boards, 12 Chapters, Sleeves Front/Back, Modifiers & Rules
 */

const TAKE_TIME_DATA = {
  name: "Take Time",
  subtitle: "Hành trình giải đố mặt đồng hồ theo chương (Co-op / Solitaire)",
  description: "Trò chơi giải đố kết hợp thời gian và các con số trên mặt đồng hồ 12 cung giờ. Sử dụng 1 bộ bài Tây quy đổi 24 lá (12 lá Mặt Trời + 12 lá Mặt Trăng).",
  deckMapping: {
    title: "Cách chuẩn bị bài từ Bộ Bài Tây (52 lá)",
    instructions: [
      {
        label: "Thẻ Mặt Trời (Solar Cards - 12 lá)",
        detail: "Lấy các lá bài ĐỎ (Cơ ♥ hoặc Rô ♦) từ lá Át (1) đến Q (12). Ví dụ: A♥, 2♥, 3♥, 4♥, 5♥, 6♥, 7♥, 8♥, 9♥, 10♥, J♥ (11), Q♥ (12)."
      },
      {
        label: "Thẻ Mặt Trăng (Lunar Cards - 12 lá)",
        detail: "Lấy các lá bài ĐEN (Bích ♠ hoặc Chuồn ♣) từ lá Át (1) đến Q (12). Ví dụ: A♠, 2♠, 3♠, 4♠, 5♠, 6♠, 7♠, 8♠, 9♠, 10♠, J♠ (11), Q♠ (12)."
      },
      {
        label: "Lá K (King) & Joker",
        detail: "Không sử dụng trong ván tiêu chuẩn (có thể dùng làm Token hoặc Đánh dấu lượt chơi)."
      }
    ],
    playerCountSetup: [
      { players: 1, handSize: "4 lá", faceUpCards: "4 lá lật ngửa", desc: "Chơi đơn: Rút bài từ chồng bài tẩy và sắp xếp vào các cung giờ." },
      { players: 2, handSize: "3 lá mỗi người", faceUpCards: "3 lá lật ngửa", desc: "2 người chơi hợp tác." },
      { players: 3, handSize: "2 lá mỗi người", faceUpCards: "2 lá lật ngửa", desc: "3 người chơi hợp tác." },
      { players: 4, handSize: "2 lá mỗi người", faceUpCards: "1 lá lật ngửa", desc: "4 người chơi hợp tác." }
    ]
  },
  rulesSummary: [
    {
      title: "Mục tiêu trò chơi",
      content: "Đặt hết 24 lá bài vào đúng 12 cung giờ (mỗi cung giờ gồm 2 lá: 1 Mặt Trời & 1 Mặt Trăng) sao cho thỏa mãn toàn bộ điều kiện và đường nối (links) của bản đồ mặt đồng hồ."
    },
    {
      title: "Quy tắc cơ bản của Cung Giờ",
      content: "Tổng hoặc Hiệu hoặc Mối quan hệ giữa 2 lá bài tại 1 cung giờ phải tuân thủ ký hiệu trên mặt đồng hồ của màn đó. Không được vi phạm bất kỳ đường liên kết nào giữa các cung liền kề."
    },
    {
      title: "Xoay đồng hồ (Chapter 8)",
      content: "Ở Chapter 8 (Revolution), mặt đồng hồ có thể xoay 60° (tương đương 2 cung giờ) theo chiều hoặc ngược chiều kim đồng hồ khi kích hoạt."
    }
  ],
  modifiers: [
    {
      id: "pass_card",
      title: "Pass Card Rule",
      desc: "Vào lượt của bạn, bạn BẮT BUỘC phải chuyển 1 lá bài cho người bên trái đánh. Bạn quyết định lá bài đó đánh úp hay mở (nếu úp, họ không được nhìn trước).",
      icon: "🎴",
      image: "https://steamusercontent-a.akamaihd.net/ugc/16919719627863451334/CFBACD2BDD0F041265C9F0888C8C9E3F55F6A1B2/"
    },
    {
      id: "solar_first",
      title: "Solar Placement",
      desc: "Vào lượt của bạn, bạn BẮT BUỘC phải đặt một lá bài Mặt Trời nếu có thể. (Không áp dụng cho Chapter IV - Roar).",
      icon: "☀️",
      image: "https://steamusercontent-a.akamaihd.net/ugc/16517535301718967045/A94BC989CB10CAD047E65C37B24DBF940EB54EF7/"
    },
    {
      id: "diff_limit",
      title: "Difference Limit ≤ 12",
      desc: "Chênh lệch giữa cung giờ có giá trị cao nhất và thấp nhất không được vượt quá 12.",
      icon: "⚖️",
      image: "https://steamusercontent-a.akamaihd.net/ugc/10139218142692096890/7B4B441D99A14943B7E114D963C9A20283896B4B/"
    },
    {
      id: "high_cards_minus",
      title: "High Cards Reduced (-10)",
      desc: "Các lá 10, 11 (J) và 12 (Q) bị giảm 10 điểm giá trị nếu chúng KHÔNG PHẢI là lá duy nhất cạnh cung giờ đó.",
      icon: "🔟",
      image: "https://steamusercontent-a.akamaihd.net/ugc/9952422534006106882/F5266481CC6038EABEE8C783DF1038FCBBE37673/"
    },
    {
      id: "reduced_faceup",
      title: "Face-Up Reduced by 2",
      desc: "Số lượng lá bài lật ngửa công khai trên bàn giảm đi 2 lá.",
      icon: "👁️",
      image: "https://steamusercontent-a.akamaihd.net/ugc/11942723858848165840/284981A53E2DD55544251CE5E1972D3646B08CEC/"
    },
    {
      id: "second_hand",
      title: "Second Hand (Kim Giây)",
      desc: "KHÔNG ĐƯỢC đặt bài vào 2 cung giờ mà kim giây đang chỉ vào! Sau mỗi lượt người chơi, xoay kim giây theo chiều kim đồng hồ.",
      icon: "⏱️",
      image: "https://steamusercontent-a.akamaihd.net/ugc/17757277670682377376/6009313F4EE0E659977D3F6ED8D056882E6DFE86/"
    }
  ],
  chapters: [
    {
      id: 1,
      roman: "I",
      title: "Awakening",
      subtitle: "Sự Thức Tỉnh",
      description: "Khởi đầu hành trình thấu hiểu cấu trúc các cung giờ và học cách phân phối các cặp thẻ Mặt Trời - Mặt Trăng cân bằng.",
      front: "https://steamusercontent-a.akamaihd.net/ugc/18425523817910442540/97F351686A277A3C1537FD4A78F4BF6DD0FE5ED0/",
      back: "https://steamusercontent-a.akamaihd.net/ugc/11932575797834154883/07BC7734487955D2F19B344A2CF6CBB45E7DA293/",
      levels: [
        {
          id: "1.1",
          name: "Level 1.1",
          url: "https://steamusercontent-a.akamaihd.net/ugc/15703307762668170147/9654F9ED69D778DEFF959297D5689E3E3E041FEA/",
          guides: [
            {
              pos: 1,
              title: "Có đúng 1 lá trắng phải được đánh vào đây"
            },
            {
              pos: 6,
              title: "Có đúng 3 lá phải được đánh vào đây"
            },
            {
              pos: 7,
              title: "Bỏ giới hạn tổng tối đa là 24"
            }
          ]
        },
        {
          id: "1.2", name: "Level 1.2", url: "https://steamusercontent-a.akamaihd.net/ugc/10385147287207204669/0D522E0BC3A3B3FD3693E2C10DC4AAA008C03100/",
          guides: [
            {
              pos: 3,
              title: "Giá trị trong 8-12"
            },
            {
              pos: 4,
              title: "Có đúng 3 lá phải được đánh vào đây"
            },
            {
              pos: 7,
              title: "Bỏ giới hạn tổng tối đa là 24"
            }
          ]
        },
        {
          id: "1.3", name: "Level 1.3", url: "https://steamusercontent-a.akamaihd.net/ugc/17233917275871474503/8B2EC3D78605E829B6F4CFA507EB9BA62C59A5FE/",
          guides: [
            {
              pos: 2,
              title: "Lá thứ 2 phải đánh vào đây"
            },
            {
              pos: 3,
              title: "Lá thứ nhất phải đánh vào đây"
            },
            {
              pos: 6,
              title: "Giá trị trong 20-30"
            },
            {
              pos: 7,
              title: "Bỏ giới hạn tổng tối đa là 24"
            }
          ]
        },
        {
          id: "1.4", name: "Level 1.4", url: "https://steamusercontent-a.akamaihd.net/ugc/15600617884164400557/BEEA32E60496751716054F74939F2A78E1D128BF/",
          guides: [
            {
              pos: 1,
              title: "Ô này phải có giá trị gần 6 nhất"
            },
            {
              pos: 4,
              title: "Có đúng 1 lá đen và 1 lá trắng"
            },
            {
              pos: 8,
              title: "Giới hạn tổng 1 ô là 24"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      roman: "II",
      title: "Limitation / Hinderance",
      subtitle: "Giới Hạn & Trở Ngại",
      description: "Các quy tắc ràng buộc xuất hiện giữa các nhánh đối xứng, thử thách khả năng tính toán bước đi.",
      front: "https://steamusercontent-a.akamaihd.net/ugc/17074682661745434999/2B3127AFEB91183D94C0A24534B918167FCE491B/",
      back: "https://steamusercontent-a.akamaihd.net/ugc/16201933518253320487/F25AF1F4C97352D37859782D3E632225E76DA0EB/",
      levels: [
        {
          id: "2.1", name: "Level 2.1", url: "https://steamusercontent-a.akamaihd.net/ugc/14280661180766557701/020371840632CFF58B67C301001323B88B6ACC53/",
          guides: [
            {
              pos: 1,
              title: "Không được đánh các lá 1 2 3"
            },
            {
              pos: 2,
              title: "Không được đánh các lá 1 2 3"
            },
            {
              pos: 3,
              title: "Không được đánh các lá 1 2 3"
            },
            {
              pos: 8,
              title: "Giới hạn tổng 1 ô là 24"
            }
          ]
        },
        {
          id: "2.2", name: "Level 2.2", url: "https://steamusercontent-a.akamaihd.net/ugc/10900870861288750109/2AA06E982F30B9EADB0C45D9AB87F0C6DCEB06AC/",
          guides: [
            {
              pos: 3,
              title: "Không được đánh các lá 7 8 9"
            },
            {
              pos: 4,
              title: "Không được đánh các lá 7 8 9"
            },
            {
              pos: 8,
              title: "Giới hạn tổng 1 ô là 24"
            }
          ]
        },
        {
          id: "2.3", name: "Level 2.3", url: "https://steamusercontent-a.akamaihd.net/ugc/15145851534642029728/86B69D30E940A5F6C7AED56961E20E5F9522DE23/",
          guides: [
            {
              pos: 1,
              title: "Không được đánh các lá 1 2 3"
            },
            {
              pos: 3,
              title: "Không được đánh các lá 4 5 6"
            },
            {
              pos: 4,
              title: "Không được đánh các lá 7 8 9"
            },
            {
              pos: 6,
              title: "Không được đánh các lá 10 11 12"
            },
            {
              pos: 8,
              title: "Giới hạn tổng 1 ô là 24"
            }
          ]
        },
        {
          id: "2.4", name: "Level 2.4", url: "https://steamusercontent-a.akamaihd.net/ugc/9770768207491621603/6287A814B52A47F3292497569FDD04FD3FB34995/",
          guides: [
            {
              pos: 7,
              title: "Không được mở bài"
            }
          ]
        }
      ]
    },
    {
      id: 3,
      roman: "III",
      title: "As Within, So Without",
      subtitle: "Tương Phản Nội Ngoại",
      description: "Quy luật tương xứng giữa vòng tròn trung tâm và các cung giờ ngoài rìa.",
      front: "https://steamusercontent-a.akamaihd.net/ugc/10587086111790280091/F26006FC74B0641147391B91AD4A48115D4877D0/",
      back: "https://steamusercontent-a.akamaihd.net/ugc/9993798305807766154/267F77114A2A3C9D177A9DDA840723258195E4D8/",
      levels: [
        {
          id: "3.1", name: "Level 3.1", url: "https://steamusercontent-a.akamaihd.net/ugc/11525862569977917742/B7AA2B3B1B2B9B877921534563004E51EFBCC6F7/",
          guides: [
            {
              pos: 2,
              title: "Lá lớn nhất phải được đánh vào đây"
            },
            {
              pos: 4,
              title: "Ô này phải có giá trị gần 20 nhất"
            },
            {
              pos: 8,
              title: "Giới hạn tổng 1 ô là 24. Được chọn vị trí kim đồng hồ"
            }
          ]
        },
        {
          id: "3.2", name: "Level 3.2", url: "https://steamusercontent-a.akamaihd.net/ugc/12207272073620259158/866D8B28B0273D30E67C969D9E046ECBB718DEB9/",
          guides: [
            {
              pos: 3,
              title: "Lá nhỏ nhất phải dược đánh vào đây"
            },
            {
              pos: 6,
              title: "Lá nhỏ nhất phải được đánh vào đây"
            },
            {
              pos: 4,
              title: "Lá cuối cùng phải được đánh vào đây"
            },
            {
              pos: 8,
              title: "Giới hạn tổng 1 ô là 24. Được chọn vị trí kim đồng hồ"
            }
          ]
        },
        {
          id: "3.3", name: "Level 3.3", url: "https://steamusercontent-a.akamaihd.net/ugc/10591514710080541563/B694A0C294C5A5B6806D5613DDA1A2B8B66B8F9F/",
          guides: [
            {
              pos: 1,
              title: "Lá lớn nhất phải dược đánh vào đây"
            },
            {
              pos: 3,
              title: "Lá nhỏ nhất phải được đánh vào đây"
            },
            {
              pos: 4,
              title: "Lá đầu tiên và thứ 2 phải được đánh vào đây"
            },
            {
              pos: 8,
              title: "Giới hạn tổng 1 ô là 24. Được chọn vị trí kim đồng hồ"
            }
          ]
        },
        {
          id: "3.4", name: "Level 3.4", url: "https://steamusercontent-a.akamaihd.net/ugc/13461586841218597994/FED77033A3A99785906161BC7D766CD6B643A61F/",
          guides: [
            {
              pos: 1,
              title: "Lá đen lớn nhất phải dược đánh vào đây"
            },
            {
              pos: 3,
              title: "Có đúng 2 lá phải được đánh vào đây"
            },
            {
              pos: 4,
              title: "Ô này phải có giá trị gần 6 nhất"
            },
            {
              pos: 5,
              title: "Lá trắng nhỏ nhất phải dược đánh vào đây"
            },
            {
              pos: 8,
              title: "Giới hạn tổng 1 ô là 24. Được chọn vị trí kim đồng hồ"
            }
          ]
        }
      ]
    },
    {
      id: 4,
      roman: "IV",
      title: "Roar",
      subtitle: "Tiếng Gầm Năng Lượng",
      description: "Thử thách yêu cầu tối ưu chuỗi số liên tục mà không bị gãy nhịp.",
      front: "https://steamusercontent-a.akamaihd.net/ugc/14906018738597907214/FA7E0D91DA8C5EA34F9324D5089730C2F6E359D5/",
      back: "https://steamusercontent-a.akamaihd.net/ugc/9583469647816950024/7FC484F2A7641A295696BF1877CE331C9F46767B/",
      levels: [
        {
          id: "4.1", name: "Level 4.1", url: "https://steamusercontent-a.akamaihd.net/ugc/16444579309301025687/A3275FBFBB379EE5D4230693A13ABA118B7BD313/",
          guides: [
            {
              pos: 2,
              title: "Lá đầu tiên phải dược đánh vào đây"
            },
            {
              pos: 5,
              title: "Có đúng 1 lá phải được đánh vào đây"
            },
            {
              pos: 7,
              title: "Người chơi phải đánh từ lá lớn nhất trên tay đến lá nhỏ nhất"
            },
            {
              pos: 8,
              title: "Giới hạn tổng 1 ô là 24. Được chọn vị trí kim đồng hồ"
            }
          ]
        },
        {
          id: "4.2", name: "Level 4.2", url: "https://steamusercontent-a.akamaihd.net/ugc/10558589716375396552/59611CDEEA19AE22FBA98940AAE29D4209FB5928/",
          guides: [
            {
              pos: 1,
              title: "Lá lớn nhất phải dược đánh vào đây"
            },
            {
              pos: 6,
              title: "Lá đầu tiên phải được đánh vào đây"
            },
            {
              pos: 7,
              title: "Người chơi phải đánh từ lá nhỏ nhất trên tay đến lá lớn nhất"
            },
            {
              pos: 8,
              title: "Giới hạn tổng 1 ô là 24. Được chọn vị trí kim đồng hồ"
            }
          ]
        },
        {
          id: "4.3", name: "Level 4.3", url: "https://steamusercontent-a.akamaihd.net/ugc/14620381300433252122/B116D4A35A9274E1B6016D2C8D29895D86D02566/",
          guides: [
            {
              pos: 1,
              title: "Không được đánh các lá 1 2 3"
            },
            {
              pos: 3,
              title: "Không được đánh các lá 1 2 3"
            },
            {
              pos: 5,
              title: "Không được đánh các lá 1 2 3"
            },
            {
              pos: 7,
              title: "Khi bốc bài lên, người chơi không được sắp xếp lại tay và phải đánh từ trái sang phải"
            },
            {
              pos: 8,
              title: "Giới hạn tổng 1 ô là 24. Được chọn vị trí kim đồng hồ"
            }
          ]
        },
        {
          id: "4.4", name: "Level 4.4", url: "https://steamusercontent-a.akamaihd.net/ugc/15862743864655057638/41DED24062D0242497ABD6505F684451BAE0DF1D/",
          guides: [
            {
              pos: 3,
              title: "Ô này phải có giá trị gần 12 nhất"
            },
            {
              pos: 4,
              title: "Lá nhỏ nhất phải được đánh vào đây"
            },
            {
              pos: 5,
              title: "Lá lớn nhất phải dược đánh vào đây"
            },
            {
              pos: 7,
              title: "Khi bốc bài lên, người chơi không được sắp xếp lại tay và phải đánh từ trái sang phải"
            },
            {
              pos: 8,
              title: "Giới hạn tổng 1 ô là 24. Được chọn vị trí kim đồng hồ"
            }
          ]
        }
      ]
    },
    {
      id: 5,
      roman: "V",
      title: "Tranquility",
      subtitle: "Tĩnh Lặng & Cân Bằng",
      description: "Đạt đến sự hài hòa giữa các nhánh thời gian đối đỉnh.",
      front: "https://steamusercontent-a.akamaihd.net/ugc/9928243897033159740/9DDD41C6DB5CB44DFADB1322011C1FF52DD870F7/",
      back: "https://steamusercontent-a.akamaihd.net/ugc/12737249636443287020/AB3AF7AA13B38A713686E705CDF6A4E00C89BE4C/",
      levels: [
        {
          id: "5.1", name: "Level 5.1", url: "https://steamusercontent-a.akamaihd.net/ugc/16235257271052605664/19E86EE46284433DCD5642E95557E0D210A5CF2F/",
          guides: [
            {
              pos: 7,
              title: "Mỗi ô phải có đúng 2 lá"
            },
            {
              pos: 8,
              title: "Giới hạn tổng 1 ô là 24. Được chọn vị trí kim đồng hồ"
            }
          ]
        },
        {
          id: "5.2", name: "Level 5.2", url: "https://steamusercontent-a.akamaihd.net/ugc/12870573118539567545/6542CE775ECCE03B3489DDADB7AFCF60B8206150/",
          guides: [
            {
              pos: 4,
              title: "Ô này phải có giá trị gần 15 nhất"
            },
            {
              pos: 6,
              title: "Lá nhỏ nhất phải được đánh vào đây"
            },
            {
              pos: 7,
              title: "Mỗi ô phải có đúng 2 lá"
            },
            {
              pos: 8,
              title: "Giới hạn tổng 1 ô là 24. Được chọn vị trí kim đồng hồ"
            }
          ]
        },
        {
          id: "5.3", name: "Level 5.3", url: "https://steamusercontent-a.akamaihd.net/ugc/12025694528045916903/51462E13E6F1B5AFBCCB281EEEC1F75BC6F7858A/",
          guides: [
            {
              pos: 1,
              title: "Lá lớn nhất phải được đánh vào đây"
            },
            {
              pos: 6,
              title: "Lá nhỏ nhất phải được đánh vào đây"
            },
            {
              pos: 7,
              title: "Mỗi ô phải có đúng 2 lá"
            },
            {
              pos: 8,
              title: "Giới hạn tổng 1 ô là 24. Được chọn vị trí kim đồng hồ"
            }
          ]
        },
        {
          id: "5.4", name: "Level 5.4", url: "https://steamusercontent-a.akamaihd.net/ugc/12757718271765149734/87BEB2F9D07A7071DBEF88732CADABC31746C169/",
          guides: [
            {
              pos: 2,
              title: "Lá thứ 3 phải được đánh vào đây"
            },
            {
              pos: 3,
              title: "Có đúng 1 lá đen và 1 lá trắng"
            },
            {
              pos: 4,
              title: "Có đúng 1 lá đen và 1 lá trắng"
            },
            {
              pos: 5,
              title: "Lá thứ 2 phải được đánh vào đây"
            },
            {
              pos: 7,
              title: "Mỗi ô phải có đúng 2 lá"
            },
            {
              pos: 8,
              title: "Giới hạn tổng 1 ô là 24. Được chọn vị trí kim đồng hồ"
            }
          ]
        }
      ]
    },
    {
      id: 6,
      roman: "VI",
      title: "As Above, So Below",
      subtitle: "Trên Sao Dưới Vậy",
      description: "Quy luật tương hợp toàn diện, mở rộng mạng lưới liên kết giữa nửa trên và nửa dưới đồng hồ.",
      front: "https://steamusercontent-a.akamaihd.net/ugc/17039095636279151332/9910D49F9BCB0C301061B77A09709CA271990BF5/",
      back: "https://steamusercontent-a.akamaihd.net/ugc/10035995877005405325/32A9FFC99F62FC342BF7CD4A3FEB7876364FB8E2/",
      levels: [
        {
          id: "6.1", name: "Level 6.1", url: "https://steamusercontent-a.akamaihd.net/ugc/14291589495058044977/50CA6BC751A8FB3C7735A31657ABDB54B8F4F7F2/",
          guides: [
            {
              pos: 3,
              title: "Lá lớn nhất phải được đánh vào đây"
            },
            {
              pos: 7,
              title: "Mỗi ô phải có đúng 2 lá, giá trị của 1 ô được tính bằng hiệu của 2 lá"
            },
            {
              pos: 8,
              title: "Giới hạn tổng 1 ô là 24. Được chọn vị trí kim đồng hồ"
            }
          ]
        },
        {
          id: "6.2", name: "Level 6.2", url: "https://steamusercontent-a.akamaihd.net/ugc/18120938985591900711/DD56AF52EE61EC43BE6B691AE93CC7BBF1DB17DE/",
          guides: [
            {
              pos: 4,
              title: "Không được đánh các lá 1 2 3"
            },
            {
              pos: 5,
              title: "Có đúng 1 lá đen và 1 lá trắng"
            },
            {
              pos: 7,
              title: "Mỗi ô phải có đúng 2 lá, giá trị của 1 ô được tính bằng hiệu của 2 lá"
            },
            {
              pos: 8,
              title: "Giới hạn tổng 1 ô là 24. Được chọn vị trí kim đồng hồ"
            }
          ]
        },
        {
          id: "6.3", name: "Level 6.3", url: "https://steamusercontent-a.akamaihd.net/ugc/12543330935849795254/7055DBEB8380F6BD43C126F82F98BF23AD46B589/",
          guides: [
            {
              pos: 2,
              title: "Ô này phải có giá trị gần 12 nhất"
            },
            {
              pos: 5,
              title: "Lá thứ 2 và thú 3 phải được đánh vào đây"
            },
            {
              pos: 7,
              title: "Mỗi ô phải có đúng 2 lá, giá trị của 1 ô được tính bằng hiệu của 2 lá"
            },
            {
              pos: 8,
              title: "Giới hạn tổng 1 ô là 24. Được chọn vị trí kim đồng hồ"
            }
          ]
        },
        {
          id: "6.4", name: "Level 6.4", url: "https://steamusercontent-a.akamaihd.net/ugc/15670765100291722138/D13C58481B51CF8F7CF889F8782CD2AB3EF29CF9/",
          guides: [
            {
              pos: 1,
              title: "Lá trắng nhỏ nhất phải được đánh vào đây"
            },
            {
              pos: 2,
              title: "Ô này phải có giá trị gần 24 nhất"
            },
            {
              pos: 4,
              title: "Lá đen lớn nhất phải được đánh vào đây"
            },
            {
              pos: 7,
              title: "Mỗi ô phải có đúng 2 lá, giá trị của 1 ô được tính bằng hiệu của 2 lá"
            },
            {
              pos: 8,
              title: "Giới hạn tổng 1 ô là 24. Được chọn vị trí kim đồng hồ"
            }
          ]
        }
      ]
    },
    {
      id: 7,
      roman: "VII",
      title: "Intrusion",
      subtitle: "Sự Xâm Nhập",
      description: "Các điểm giao cắt phức tạp ngăn cản các phép tính thông thường.",
      front: "https://steamusercontent-a.akamaihd.net/ugc/15376976337434863150/2E7695FDA25FBBA61B9A0B400879C3AEAC26A447/",
      back: "https://steamusercontent-a.akamaihd.net/ugc/10172050096311081221/B9522629807742112A466AEF2793CC329941956B/",
      levels: [
        {
          id: "7.1", name: "Level 7.1", url: "https://steamusercontent-a.akamaihd.net/ugc/12824740814417941728/C233DFDE69A9562F0EB06E26FFDBF55003EE7EF5/",
          guides: [
            {
              pos: 1,
              title: "Đánh vào đây thì phải rút thêm 1 lá"
            },
            {
              pos: 3,
              title: "Không được đánh các lá 7 8 9"
            },
            {
              pos: 4,
              title: "Không được đánh các lá 7 8 9"
            },
            {
              pos: 8,
              title: "Giới hạn tổng 1 ô là 24. Được chọn vị trí kim đồng hồ"
            }
          ]
        },
        {
          id: "7.2", name: "Level 7.2", url: "https://steamusercontent-a.akamaihd.net/ugc/13676744455971127771/DF88B5917F70A080939F2AB2BAF6A9C589057A2D/",
          guides: [
            {
              pos: 3,
              title: "Đánh vào đây thì phải rút thêm 1 lá"
            },
            {
              pos: 4,
              title: "Lá cuối cùng phải được đánh vào đây"
            },
            {
              pos: 6,
              title: "Đánh vào đây thì phải rút thêm 1 lá"
            },
            {
              pos: 8,
              title: "Giới hạn tổng 1 ô là 24. Được chọn vị trí kim đồng hồ"
            }
          ]
        },
        {
          id: "7.3", name: "Level 7.3", url: "https://steamusercontent-a.akamaihd.net/ugc/13398618883690484413/57173EFA23834F99670F8238472EB848DB928C34/",
          guides: [
            {
              pos: 4,
              title: "Lá đen lớn nhất và lá trắng nhỏ nhất phải được đánh vào đây"
            },
            {
              pos: 5,
              title: "Đánh vào đây thì phải rút thêm 1 lá"
            },
            {
              pos: 6,
              title: "Có đúng 2 lá đen và 2 lá trắng"
            },
            {
              pos: 8,
              title: "Giới hạn tổng 1 ô là 24. Được chọn vị trí kim đồng hồ"
            }
          ]
        },
        {
          id: "7.4", name: "Level 7.4", url: "https://steamusercontent-a.akamaihd.net/ugc/16939947217815271747/11331B9F4F9AB17C6BB00E4FE963AE3996FCA825/",
          guides: [
            {
              pos: 1,
              title: "Đánh vào đây thì phải rút thêm 1 lá"
            },
            {
              pos: 3,
              title: "Đánh vào đây thì phải rút thêm 1 lá"
            },
            {
              pos: 5,
              title: "Đánh vào đây thì phải rút thêm 1 lá"
            },
            {
              pos: 8,
              title: "Giới hạn tổng 1 ô là 24. Được chọn vị trí kim đồng hồ"
            }
          ]
        }
      ]
    },
    {
      id: 8,
      roman: "VIII",
      title: "Revolution",
      subtitle: "Vòng Xoay Cách Mạng 🔄",
      description: "CHƯƠNG ĐẶC BIỆT: Mặt đồng hồ có thể xoay mỗi 60° (2 cung giờ) theo chiều hoặc ngược chiều kim đồng hồ! Sử dụng nút xoay tương tác để quan sát.",
      hasRotation: true,
      front: "https://steamusercontent-a.akamaihd.net/ugc/14752502855473050095/19E66FF5535A6E1DF10690138A215DA2D5E086A0/",
      back: "https://steamusercontent-a.akamaihd.net/ugc/10149326474241840215/644E4BFB81A64CF01E7F137CDDE028FC54CE05AB/",
      levels: [
        {
          id: "8.1", name: "Level 8.1", url: "https://steamusercontent-a.akamaihd.net/ugc/9611437470663852418/B216C8D23748622481772E25EBFE9B1DCE2562B4/",
          guides: [
            {
              pos: 2,
              title: "Không được đánh vào đây"
            },
            {
              pos: 4,
              title: "Ô này phải có giá trị trong khoảng 16-20"
            },
            {
              pos: 6,
              title: "Đánh vào đây sẽ xoay đồng hồ"
            },
            {
              pos: 8,
              title: "Giới hạn tổng 1 ô là 24. Được chọn vị trí kim đồng hồ"
            }
          ]
        },
        {
          id: "8.2", name: "Level 8.2", url: "https://steamusercontent-a.akamaihd.net/ugc/9850145143649572277/80ECB0911F8E6C4ED779118D691A4E915EE06085/",
          guides: [
            {
              pos: 1,
              title: "Đánh vào đây sẽ xoay đồng hồ"
            },
            {
              pos: 2,
              title: "Không được đánh vào đây"
            },
            {
              pos: 3,
              title: "Không được đánh vào đây"
            },
            {
              pos: 4,
              title: "Đánh vào đây sẽ xoay đồng hồ"
            },
            {
              pos: 6,
              title: "Không được đánh vào đây"
            },
            {
              pos: 8,
              title: "Giới hạn tổng 1 ô là 24. Được chọn vị trí kim đồng hồ"
            }
          ]
        },
        {
          id: "8.3", name: "Level 8.3", url: "https://steamusercontent-a.akamaihd.net/ugc/9927209626888507396/DFB0FD349042DB1EFB6B24E8855ECF4589D8F25F/",
          guides: [
            {
              pos: 1,
              title: "Có đúng 2 lá được đánh vào đây"
            },

            {
              pos: 3,
              title: "Có đúng 1 lá được đánh vào đây"
            },
            {
              pos: 4,
              title: "Đánh vào đây sẽ xoay đồng hồ"
            },
            {
              pos: 5,
              title: "Đánh vào đây sẽ xoay đồng hồ"
            },
            {
              pos: 6,
              title: "Đánh vào đây sẽ xoay đồng hồ"
            },
            {
              pos: 8,
              title: "Giới hạn tổng 1 ô là 24. Được chọn vị trí kim đồng hồ"
            }
          ]
        },
        {
          id: "8.4", name: "Level 8.4", url: "https://steamusercontent-a.akamaihd.net/ugc/17517382117583532714/BD3354D792A17EDAA3BE94EE4138B3E5A90809BC/",
          guides: [
            {
              pos: 1,
              title: "Đánh vào đây sẽ xoay đồng hồ"
            },

            {
              pos: 2,
              title: "Đánh vào đây sẽ xoay đồng hồ"
            },
            {
              pos: 5,
              title: "Đánh vào đây sẽ xoay đồng hồ"
            },
            {
              pos: 6,
              title: "Đánh vào đây sẽ xoay đồng hồ"
            },
            {
              pos: 8,
              title: "Giới hạn tổng 1 ô là 24"
            }
          ]
        }
      ]
    },
    {
      id: 9,
      roman: "IX",
      title: "Unity",
      subtitle: "Hợp Nhất Toàn Diện",
      description: "Thử thách đỉnh cao kết nối toàn bộ 12 cung giờ vào một hệ thống mạch lạc duy nhất.",
      front: "https://steamusercontent-a.akamaihd.net/ugc/11839561899435177992/BC15A4EE328F9E2006BC00506C98BD3E2BFA887B/",
      back: "https://steamusercontent-a.akamaihd.net/ugc/15798326317776591506/21366FA2A3E913018DA92E1D44D5293D4773D71C/",
      levels: [
        {
          id: "9.1", name: "Level 9.1", url: "https://steamusercontent-a.akamaihd.net/ugc/17328735450066306026/2150C13402F22FCA1970C5E1425480BD5D8005A6/",
          guides: [
            {
              pos: 1,
              title: "Đánh vào đây sẽ xoay đồng hồ"
            },

            {
              pos: 2,
              title: "Đánh vào đây sẽ xoay đồng hồ"
            },
            {
              pos: 5,
              title: "Đánh vào đây sẽ xoay đồng hồ"
            },
            {
              pos: 6,
              title: "Đánh vào đây sẽ xoay đồng hồ"
            },
            {
              pos: 8,
              title: "Giới hạn tổng 1 ô là 24"
            }
          ]
        },
        { id: "9.2", name: "Level 9.2", url: "https://steamusercontent-a.akamaihd.net/ugc/11675917358681693593/0C6EAB6D75BBE2E9D07FC1C6B2C66F7A4D30762F/" },
        { id: "9.3", name: "Level 9.3", url: "https://steamusercontent-a.akamaihd.net/ugc/10674890130604616084/58C99D7B5AFB6E1FBA9A58DD8B0DD28AA7F9C5EE/" },
        { id: "9.4", name: "Level 9.4", url: "https://steamusercontent-a.akamaihd.net/ugc/15592390808083619315/2CC6AA643015BE43F0834CCC6C917F691EB22BAD/" }
      ]
    },
    {
      id: 10,
      roman: "X",
      title: "Cohesiveness",
      subtitle: "Gắn Kết Hoàn Hảo",
      description: "Hồi kết hoành tráng của chiến dịch chính. Mọi sai số nhỏ đều dẫn tới sự sụp đổ của chu kỳ thời gian.",
      front: "https://steamusercontent-a.akamaihd.net/ugc/10478704005505952889/C4187FE99132BDF5571DF62DA04D45EECC8EA3D2/",
      back: "https://steamusercontent-a.akamaihd.net/ugc/13516358486532771617/5BFA29BCCEBD274B8C367B35A50E4252AD39F6E6/",
      levels: [
        { id: "10.1", name: "Level 10.1", url: "https://steamusercontent-a.akamaihd.net/ugc/10766547707526683105/4ADE68F08EF2A933D11234F7AF10F4DDD4A76B64/" },
        { id: "10.2", name: "Level 10.2", url: "https://steamusercontent-a.akamaihd.net/ugc/17188336104454836334/40FED1E0B3A9E441B3E253D3387C6984DA17BE20/" },
        { id: "10.3", name: "Level 10.3", url: "https://steamusercontent-a.akamaihd.net/ugc/9261135796523656428/01A548380839E0DB9ECC61217C38318F992CDB70/" },
        { id: "10.4", name: "Level 10.4", url: "https://steamusercontent-a.akamaihd.net/ugc/13987952581233767420/DBA069A4FBEFCE5D9271B737D44111B7ECD491BA/" }
      ]
    }
  ],
  bonusTokens: [
    { name: "Bonus Token 1", image: "https://steamusercontent-a.akamaihd.net/ugc/12826408705447611108/F6C127A0872FEEF980ADAAB94CD3DF61198F2ADE/" },
    { name: "Bonus Token 2", image: "https://steamusercontent-a.akamaihd.net/ugc/14135245268745243947/48C0F7CC258D6055952B832C4B94B7DCE81B7C64/" }
  ]
};
