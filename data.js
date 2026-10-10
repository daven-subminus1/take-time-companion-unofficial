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
      image: "assets/modifiers/pass_card.webp"
    },
    {
      id: "solar_first",
      title: "Solar Placement",
      desc: "Vào lượt của bạn, bạn BẮT BUỘC phải đặt một lá bài Mặt Trời nếu có thể. (Không áp dụng cho Chapter IV - Roar).",
      icon: "☀️",
      image: "assets/modifiers/solar_first.webp"
    },
    {
      id: "diff_limit",
      title: "Difference Limit ≤ 12",
      desc: "Chênh lệch giữa cung giờ có giá trị cao nhất và thấp nhất không được vượt quá 12.",
      icon: "⚖️",
      image: "assets/modifiers/diff_limit.webp"
    },
    {
      id: "high_cards_minus",
      title: "High Cards Reduced (-10)",
      desc: "Các lá 10, 11 (J) và 12 (Q) bị giảm 10 điểm giá trị nếu chúng KHÔNG PHẢI là lá duy nhất cạnh cung giờ đó.",
      icon: "🔟",
      image: "assets/modifiers/high_cards_minus.webp"
    },
    {
      id: "reduced_faceup",
      title: "Face-Up Reduced by 2",
      desc: "Số lượng lá bài lật ngửa công khai trên bàn giảm đi 2 lá.",
      icon: "👁️",
      image: "assets/modifiers/reduced_faceup.webp"
    },
    {
      id: "second_hand",
      title: "Second Hand (Kim Giây)",
      desc: "KHÔNG ĐƯỢC đặt bài vào 2 cung giờ mà kim giây đang chỉ vào! Sau mỗi lượt người chơi, xoay kim giây theo chiều kim đồng hồ.",
      icon: "⏱️",
      image: "assets/modifiers/second_hand.webp"
    }
  ],
  chapters: [
    {
      id: 1,
      roman: "I",
      title: "Awakening",
      subtitle: "Sự Thức Tỉnh",
      description: "Khởi đầu hành trình thấu hiểu cấu trúc các cung giờ và học cách phân phối các cặp thẻ Mặt Trời - Mặt Trăng cân bằng.",
      front: "assets/sleeves/chapter_1_front.webp",
      back: "assets/sleeves/chapter_1_back.webp",
      levels: [
        {
          id: "1.1",
          name: "Level 1.1",
          url: "assets/boards/board_1_1.webp",
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
          id: "1.2", name: "Level 1.2", url: "assets/boards/board_1_2.webp",
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
          id: "1.3", name: "Level 1.3", url: "assets/boards/board_1_3.webp",
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
          id: "1.4", name: "Level 1.4", url: "assets/boards/board_1_4.webp",
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
      front: "assets/sleeves/chapter_2_front.webp",
      back: "assets/sleeves/chapter_2_back.webp",
      levels: [
        {
          id: "2.1", name: "Level 2.1", url: "assets/boards/board_2_1.webp",
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
          id: "2.2", name: "Level 2.2", url: "assets/boards/board_2_2.webp",
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
          id: "2.3", name: "Level 2.3", url: "assets/boards/board_2_3.webp",
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
          id: "2.4", name: "Level 2.4", url: "assets/boards/board_2_4.webp",
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
      front: "assets/sleeves/chapter_3_front.webp",
      back: "assets/sleeves/chapter_3_back.webp",
      levels: [
        {
          id: "3.1", name: "Level 3.1", url: "assets/boards/board_3_1.webp",
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
          id: "3.2", name: "Level 3.2", url: "assets/boards/board_3_2.webp",
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
          id: "3.3", name: "Level 3.3", url: "assets/boards/board_3_3.webp",
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
          id: "3.4", name: "Level 3.4", url: "assets/boards/board_3_4.webp",
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
      front: "assets/sleeves/chapter_4_front.webp",
      back: "assets/sleeves/chapter_4_back.webp",
      levels: [
        {
          id: "4.1", name: "Level 4.1", url: "assets/boards/board_4_1.webp",
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
          id: "4.2", name: "Level 4.2", url: "assets/boards/board_4_2.webp",
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
          id: "4.3", name: "Level 4.3", url: "assets/boards/board_4_3.webp",
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
          id: "4.4", name: "Level 4.4", url: "assets/boards/board_4_4.webp",
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
      front: "assets/sleeves/chapter_5_front.webp",
      back: "assets/sleeves/chapter_5_back.webp",
      levels: [
        {
          id: "5.1", name: "Level 5.1", url: "assets/boards/board_5_1.webp",
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
          id: "5.2", name: "Level 5.2", url: "assets/boards/board_5_2.webp",
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
          id: "5.3", name: "Level 5.3", url: "assets/boards/board_5_3.webp",
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
          id: "5.4", name: "Level 5.4", url: "assets/boards/board_5_4.webp",
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
      front: "assets/sleeves/chapter_6_front.webp",
      back: "assets/sleeves/chapter_6_back.webp",
      levels: [
        {
          id: "6.1", name: "Level 6.1", url: "assets/boards/board_6_1.webp",
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
          id: "6.2", name: "Level 6.2", url: "assets/boards/board_6_2.webp",
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
          id: "6.3", name: "Level 6.3", url: "assets/boards/board_6_3.webp",
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
          id: "6.4", name: "Level 6.4", url: "assets/boards/board_6_4.webp",
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
      front: "assets/sleeves/chapter_7_front.webp",
      back: "assets/sleeves/chapter_7_back.webp",
      levels: [
        {
          id: "7.1", name: "Level 7.1", url: "assets/boards/board_7_1.webp",
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
          id: "7.2", name: "Level 7.2", url: "assets/boards/board_7_2.webp",
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
          id: "7.3", name: "Level 7.3", url: "assets/boards/board_7_3.webp",
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
          id: "7.4", name: "Level 7.4", url: "assets/boards/board_7_4.webp",
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
      front: "assets/sleeves/chapter_8_front.webp",
      back: "assets/sleeves/chapter_8_back.webp",
      levels: [
        {
          id: "8.1", name: "Level 8.1", url: "assets/boards/board_8_1.webp",
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
          id: "8.2", name: "Level 8.2", url: "assets/boards/board_8_2.webp",
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
          id: "8.3", name: "Level 8.3", url: "assets/boards/board_8_3.webp",
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
          id: "8.4", name: "Level 8.4", url: "assets/boards/board_8_4.webp",
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
      front: "assets/sleeves/chapter_9_front.webp",
      back: "assets/sleeves/chapter_9_back.webp",
      levels: [
        {
          id: "9.1", name: "Level 9.1", url: "assets/boards/board_9_1.webp",
          guides: [
            {
              pos: 3.5,
              title: "Chênh lệch giữa 2 ô phải ít nhất 6 giá trị"
            },
            {
              pos: 4,
              title: "Lá lớn nhất phải được đánh vào đây"
            },
            {
              pos: 8,
              title: "Giới hạn tổng 1 ô là 24. Được chọn vị trí kim đồng hồ"
            }
          ]
        },
        {
          id: "9.2", name: "Level 9.2", url: "assets/boards/board_9_2.webp",
          guides: [
            {
              pos: 1.5,
              title: "Chênh lệch giữa 2 ô phải ít nhất 2 giá trị"
            },
            {
              pos: 8,
              title: "Giới hạn tổng 1 ô là 24. Được chọn vị trí kim đồng hồ"
            }
          ]
        },
        {
          id: "9.3", name: "Level 9.3", url: "assets/boards/board_9_3.webp",
          guides: [
            {
              pos: 1,
              title: "Lá nhỏ nhất phải được đánh vào đây"
            },
            {
              pos: 1.5,
              title: "Giá trị 2 ô phải bằng nhau"
            },
            {
              pos: 4,
              title: "Lá nhỏ nhất phải được đánh vào đây"
            },
            {
              pos: 4.5,
              title: "Giá trị 2 ô phải bằng nhau"
            },
            {
              pos: 8,
              title: "Giới hạn tổng 1 ô là 24. Được chọn vị trí kim đồng hồ"
            }
          ]
        },
        {
          id: "9.4", name: "Level 9.4", url: "assets/boards/board_9_4.webp",
          guides: [

            {
              pos: 7,
              title: "Chênh lệch giữa ô nhỏ nhất và lớn nhất không được vượt quá 4 giá trị"
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
      id: 10,
      roman: "X",
      title: "Cohesiveness",
      subtitle: "Gắn Kết Hoàn Hảo",
      description: "Hồi kết hoành tráng của chiến dịch chính. Mọi sai số nhỏ đều dẫn tới sự sụp đổ của chu kỳ thời gian.",
      front: "assets/sleeves/chapter_10_front.webp",
      back: "assets/sleeves/chapter_10_back.webp",
      levels: [
        {
          id: "10.1", name: "Level 10.1", url: "assets/boards/board_10_1.webp",
          guides: [
            {
              pos: 8,
              title: "Giới hạn tổng 1 ô là 24. Lá đầu tiên mỗi ô sẽ được tính riêng theo chiều kim giờ"
            }
          ]
        },
        {
          id: "10.2", name: "Level 10.2", url: "assets/boards/board_10_2.webp",
          guides: [
            {
              pos: 2,
              title: "Có đúng 2 lá được đánh vào đây"
            },
            {
              pos: 8,
              title: "Giới hạn tổng 1 ô là 24. Lá đầu tiên mỗi ô sẽ được tính riêng theo chiều kim giờ"
            }
          ]
        },
        {
          id: "10.3", name: "Level 10.3", url: "assets/boards/board_10_3.webp",
          guides: [
            {
              pos: 2,
              title: "Lá đầu tiên phải được đánh vào đây"
            },
            {
              pos: 5,
              title: "Lá cuối cùng phải được đánh vào đây"
            },
            {
              pos: 8,
              title: "Giới hạn tổng 1 ô là 24. Lá đầu tiên mỗi ô sẽ được tính riêng theo chiều kim giờ"
            }
          ]
        },
        {
          id: "10.4", name: "Level 10.4", url: "assets/boards/board_10_4.webp",
          guides: [
            {
              pos: 7,
              title: "Không được đánh vào 2 ô bị chặn, sau mỗi lượt đánh thì xoay thanh chặn theo chiều kim đồng hồ"
            },
            {
              pos: 8,
              title: "Giới hạn tổng 1 ô là 24. Lá đầu tiên mỗi ô sẽ được tính riêng theo chiều kim giờ"
            }
          ]
        }
      ]
    }
  ],
  bonusTokens: [
    { name: "Bonus Token 1", image: "assets/tokens/bonus_token_1.webp" },
    { name: "Bonus Token 2", image: "assets/tokens/bonus_token_2.webp" }
  ]
};
