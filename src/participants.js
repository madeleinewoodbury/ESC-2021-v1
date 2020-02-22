const participants = [
  {
    id: 1,
    country: 'Albania',
    emoji: '🇦🇱',
    artist: 'Arilena Ara',
    song: 'Shaj',
    imageUrl:
      'https://eurovision.tv/image/8f6eb1ff-6648-46bc-9b49-1495b24ef09d/card.png',
    flag:
      'https://eurovision.tv/image/8d938a00-42af-4b60-835f-415a224a66cd.svg',
    bio: [
      "Arilena Ara rose to fame in Albania after winning the second season of Albania's 'X Factor'",
      'The Shkodra singer has topped international rankings on networks such as Itunes for weeks with her song "Nëntori", one that earned her a ticket to the prestigious Europe Plus festival in Russia and Astana Dausy in Kazakhstan in 2016.'
    ],
    writtenBy: 'Lindon Berisha',
    composedBy: 'Darko Dimitrov, Lazar Cvetkovski',
    firstSemi: false,
    secondSemi: true,
    final: false,
    youtube: 'https://www.youtube.com/embed/5jh3f1J-eJE'
  },
  {
    id: 2,
    country: 'Armenia',
    emoji: '🇦🇲',
    artist: 'Athena Manoukian',
    song: 'Chains On You',
    imageUrl:
      'https://eurovision.tv/image/8fe03e0d-2687-4394-824b-f6b63a5309f7/card.jpg',
    flag:
      'https://eurovision.tv/image/8d93896f-fd4c-4afe-bd6e-9caaab1fde55.svg',
    bio: [
      "Armenia’s national selection show ‘Depi Evratesil’ was won by Athena Manoukian with 168 points. Athena will sing 'Chains On You' in Rotterdam this May.",
      'Athena won with 168 points; 60 from the international jury, 58 from the AMPTV jury and 50 from the public televote.'
    ],
    writtenBy: 'Unknown',
    composedBy: 'Unknown',
    firstSemi: false,
    secondSemi: true,
    final: false,
    youtube: 'https://www.youtube.com/embed/bgT9EjD_0No'
  },
  {
    id: 3,
    country: 'Australia',
    emoji: '🇦🇺',
    artist: 'Montaigne',
    song: "Don't Break Me",
    imageUrl:
      'https://eurovision.tv/image/8fce584b-6a67-435b-947a-c01273f72faa/card.png',
    flag:
      'https://eurovision.tv/image/8d93895c-9990-4097-af10-1e22a057fb79.svg',

    bio: [
      "At only 24, Sydney-based artist Montaigne has become a major name in Aussie indie music. In the past few years, she was recognized for her work with multiple spots on the Triple J’s Hottest 100, an ARIA award for Best Breakthrough Artist and a nomination for Best Female Artist on her debut album Glorious Heights. Her second album 'COMPLEX' was released in August to critical acclaim.",
      "After winning over the Australian public with 54 points and a jury of industry experts with 53 points, an impressive 107 points overall, Montaigne was crowned the winner of the second Eurovision - Australia Decides. She will perform Don't Break Me in the first half of the first Semi-Final on 12 May."
    ],
    writtenBy: 'Anthony Egizii, Jessica Cerro',
    composedBy: 'Anthony Egizii, David Musumeci, Jessica Cerro',
    firstSemi: true,
    secondSemi: false,
    final: false,
    youtube: 'https://www.youtube.com/embed/gr-wWxu4974'
  },
  {
    id: 4,
    country: 'Austria',
    emoji: '🇦🇹',
    artist: 'Vincent Bruno',
    song: 'Alive',
    imageUrl:
      'https://eurovision.tv/image/8f57ad1f-3d7a-4cdc-a004-16d519059f33/card.jpg',
    flag:
      'https://eurovision.tv/image/8d93895c-40a0-4991-b0c2-ece12225bf32.svg',
    bio: [
      "34-year-old Vincent from Vienna will perform the up-tempo song ‘Alive' in May in Rotterdam. Austrian broadcaster ORF will reveal his participating song in March 2020.",
      'Vincent describes himself as someone who is motivated, loves to laugh and is full of love all around. "I love my family above all, have a deep faith and both give me strength in my life. I love music, I love people. I’m very sensitive, which can sometimes be a disadvantage – ‘open-hearted’."',
      'Austrian broadcaster ORF shared the following clues that reveal what Vincent and his song \'Alive\' will be all about in the form of personal hashtags such as #vincentbueno, #alive, #fireshots and #hiddenheroes, about which Vincent explained: "Each and every one of us has the DNA of a hero or a heroine."'
    ],
    writtenBy: 'Unknown',
    composedBy: 'Unknown',
    firstSemi: false,
    secondSemi: true,
    final: false,
    youtube: ''
  },
  {
    id: 5,
    country: 'Azerbaijan',
    emoji: '🇦🇿',
    artist: 'To be announced',
    song: '',
    imageUrl:
      'https://eurovision.tv/images/placeholder.jpg?id=cb2836e4db74575ca788',
    flag:
      'https://eurovision.tv/image/8d93895b-f5a2-40c3-8e80-ccb3100837fb.svg',
    bio: '',
    writtenBy: '',
    composedBy: '',
    firstSemi: false,
    secondSemi: false,
    final: false,
    youtube: ''
  },
  {
    id: 6,
    country: 'Belarus',
    emoji: '🇧🇾',
    artist: 'To be announced',
    song: '',
    imageUrl:
      'https://eurovision.tv/images/placeholder.jpg?id=cb2836e4db74575ca788',
    flag:
      'https://eurovision.tv/image/8d9388bf-2507-4a4e-be3c-b3c5d0e6180f.svg',
    bio: '',
    writtenBy: '',
    composedBy: '',
    firstSemi: false,
    secondSemi: false,
    final: false,
    youtube: ''
  },
  {
    id: 7,
    country: 'Belgium',
    emoji: '🇧🇪',
    artist: 'Hooverphonic',
    song: 'Release Me',
    imageUrl:
      'https://eurovision.tv/image/8ec984e0-e133-49f9-bf26-71a555a56f36/card.jpg',
    flag:
      'https://eurovision.tv/image/8d93893e-237b-427a-b982-a0c7d1c41fde.svg',
    bio: [
      'Over the course of their 25-year career, Hooverphonic developed an instantly recognizable sound, somewhere between trip-hop and pop. From day 1, Alex Callier (producer/songwriter) & Raymond Geerts (guitar player) have formed the core of the band and over the years, they have worked with a variety of singers. Since 2018, Luka Cruysberghs is Hooverphonic’s singer. In 2017 she won The Voice of Flanders, with Alex as her coach.',
      'Hooverphonic’s sound has seen an evolution from the earlier albums A New Stereophonic Sound Spectacular and The Magnificent Tree to the recent (gold) album Looking For Stars. Songs like With Orchestra and In Wonderland show that Hooverphonic succeeds in sounding fresh time and time again, without sacrificing the identity of the band or the connection with their fans.',
      'Singles Mad About You, Badaboum, 2 Wicky, Romantic and Eden were international successes and form the basis of the band’s live set. Hooverphonic has toured the United States and Europe multiple times, both on their own and with artists like Moloko and Massive Attack. Recently, the band performed in Japan, representing Belgium at the Belgian Beer Weekend. And in October 2019, they will set off on an extensive European tour.'
    ],
    writtenBy: 'Alex Callier',
    composedBy: 'Alex Callier, Luca Chiaravalli',
    firstSemi: false,
    secondSemi: false,
    final: false,
    youtube: ''
  },
  {
    id: 8,
    country: 'Bulgaria',
    emoji: '🇧🇬',
    artist: 'VICTORIA',
    song: 'No song yet',
    imageUrl:
      'https://eurovision.tv/image/8f35d9c9-0fe7-4a9b-9bb1-5d3b0ad59627/card.jpg',
    flag:
      'https://eurovision.tv/image/8d9388c1-04f7-4d41-818d-6d3bacf4253a.svg',
    bio: [
      "VICTORIA was announced as Bulgaria's representative for their return to the Eurovision Song Contest at a press conference in Sofia, organized by the Bulgarian public broadcaster Bulgarian National Television (BNT) and her producers from Ligna Studios.",
      'VICTORIA’s distinctive voice and style position her as one of the most promising new music artists from Bulgaria. The Bulgarian entry will be selected internally and will be presented in early March. VICTORIA became popular after participating in the 4th season of X Factor Bulgaria. Her latest single, I Wanna Know, gained hundreds of thousands of streams across YouTube and Spotify over the summer. She presented the official video of the song in Sofia and Madrid. Her debut solo album is expected to be released in 2020.'
    ],
    writtenBy: 'Unknown',
    composedBy: 'Unknown',
    firstSemi: false,
    secondSemi: false,
    final: false,
    youtube: ''
  },
  {
    id: 9,
    country: 'Croatia',
    emoji: '🇭🇷',
    artist: 'To be announced',
    song: '',
    imageUrl:
      'https://eurovision.tv/images/placeholder.jpg?id=cb2836e4db74575ca788',
    flag:
      'https://eurovision.tv/image/8d93887c-4206-405c-bcf9-2f15ab74d1ac.svg',
    bio: '',
    writtenBy: '',
    composedBy: '',
    firstSemi: false,
    secondSemi: false,
    final: false,
    youtube: ''
  },
  {
    id: 10,
    country: 'Cyprus',
    emoji: '🇨🇾',
    artist: 'Sandro',
    song: 'Running',
    imageUrl:
      'https://eurovision.tv/image/8f3fe88f-3bd3-42e0-8f95-c03621ae90c7/card.png',
    flag:
      'https://eurovision.tv/image/8d9388bc-39b2-4c25-ac07-51f9e63967c0.svg',
    bio: [
      "Sandro, born Alessandro H. Ruetten was born on 2 August 1996 in Germany, where he currently resides. The German, English and Greek artist was chosen by CyBC, Cyprus' public broadcaster, to represent the country in Rotterdam in 2020 not only to his Greek roots but his unique voice and artistic vision. He is currently working with internationally acclaimed songwriters and producers on new songs and in preparation for Cyprus' entry",
      'Sandro began his music career at the early age of 4 when he started to sing and play the drums. Influenced by his musically‐inclined family, Sandro started playing the guitar when he was 8 and at 19 the piano was added to his list of talents. He founded his first band when he was 15 years old and it was at this teenage stage that he started to write and produce his own songs, predominantly of the rock and pop genres. Sandro is characterized by his recognizable and colourful voice and his natural ability to connect with the audience and thus convey the emotions of the songs he performs.',
      "In 2018, Sandro’s cousin filed an application on his behalf for The Voice of Germany. Sandro reached the 'blind auditions', making his TV debut with a cover of In My Blood by Shawn Mendes. Strengthened by all that he gained from “The Voice”, Sandro was invited to represent the United States at the 2019 “New Wave” festival, the most prestigious International singing event in Russia, broadcasted live by Channel 1, Russia's public broadcaster."
    ],
    writtenBy: '',
    composedBy: '',
    firstSemi: false,
    secondSemi: false,
    final: false,
    youtube: ''
  },
  {
    id: 11,
    country: 'Czech Republic',
    emoji: '🇨🇿',
    artist: 'Benny Cristo',
    song: 'Kemama',
    imageUrl:
      'https://eurovision.tv/image/8fc46eaa-e939-4f37-9e37-233184ba2024/card.png',
    flag:
      'https://eurovision.tv/image/8d9388b8-1024-4996-b07f-f858b38d5a4d.svg',
    bio: [
      "Benny Cristo has been a regular on the Czech music scene for over 10 years. In 2019, he released his new EP 'Kontakt', which contains a total of 6 songs including hits 'Aleiaio' and 'Plan'. His biggest hits so far are 'Bomby' (24 million views on YouTube), 'Asio' (14 million views) and 'Padam' (24 million views).",
      'Over the years, Benny has built a strong fan base on social networks; he is followed by nearly 800,000 people on Instagram alone. In addition to his musical career, he is a professional jiu-jitsu competitor, holding prestigious awards from international tournaments in his category.'
    ],
    writtenBy: 'Unknown',
    composedBy: 'Unknown',
    firstSemi: false,
    secondSemi: false,
    final: false,
    youtube: ''
  },
  {
    id: 12,
    country: 'Denmark',
    emoji: '🇩🇰',
    artist: 'To be announced',
    song: '',
    imageUrl:
      'https://eurovision.tv/images/placeholder.jpg?id=cb2836e4db74575ca788',
    flag:
      'https://eurovision.tv/image/8d9388b2-4037-42a1-80d4-9d707d193b52.svg',
    bio: [''],
    writtenBy: '',
    composedBy: '',
    firstSemi: false,
    secondSemi: false,
    final: false,
    youtube: ''
  },
  {
    id: 13,
    country: 'Estonia',
    emoji: '🇪🇪',
    artist: 'To be announced',
    song: '',
    imageUrl:
      'https://eurovision.tv/images/placeholder.jpg?id=cb2836e4db74575ca788',
    flag:
      'https://eurovision.tv/image/8d9388b0-cfa5-47fe-8d1c-ec1a9d773af2.svg',
    bio: [''],
    writtenBy: '',
    composedBy: '',
    firstSemi: false,
    secondSemi: false,
    final: false,
    youtube: ''
  },
  {
    id: 14,
    country: 'Finland',
    emoji: '🇫🇮',
    artist: 'To be announced',
    song: '',
    imageUrl:
      'https://eurovision.tv/images/placeholder.jpg?id=cb2836e4db74575ca788',
    flag:
      'https://eurovision.tv/image/8d938883-a75b-4720-8911-8e3796f2a7d1.svg',
    bio: [''],
    writtenBy: '',
    composedBy: '',
    firstSemi: false,
    secondSemi: false,
    final: false,
    youtube: ''
  },
  {
    id: 15,
    country: 'France',
    emoji: '🇫🇷',
    artist: 'Tom Leeb',
    song: 'The Best In Me',
    imageUrl:
      'https://eurovision.tv/image/8f9c6aac-8d75-4d4e-bdeb-bc98ffc65d49/card.png',
    flag:
      'https://eurovision.tv/image/8d938882-e456-4901-a2d2-de3b6ccc7cdb.svg',
    bio: [
      'The 30-year-old singer, actor and comedian Tom Leeb has been selected internally by public broadcaster France Télévisions.',
      'In September 2019, he released his debut album Recollection. The audio clip of Are We Too Late has reached an impressive 25 million YouTube views. Tom has played as a support act for international stars such as Sting and Tom Jones. His music inspirations are male singer-songwriters like Ben Howard, Matt Corby, Bon Iver and John Mayer.',
      'Tom spent 5 years in New York, studying theatre, cinema and singing. He previously performed in a theatrical adaption of Mrs Doubtfire, acted in various French TV shows and movies alongside established stars such as Jean Reno. He is part of a comedy duo with fellow comedian Kevin Levy. As the illustrious Kevin & Tom, the pair have a popular YouTube channel, where they upload skits and songs.'
    ],
    writtenBy:
      'Peter Boström, Thomas G:son, John Lundvik, Tom Leeb, Amir Haddad, Lea Ivanne',
    composedBy: 'Peter Boström, Thomas G:son',
    firstSemi: false,
    secondSemi: false,
    final: false,
    youtube: ''
  },
  {
    id: 16,
    country: 'Georgia',
    emoji: '🇬🇪',
    artist: 'Tornike Kipiani',
    song: 'No song yet',
    imageUrl:
      'https://eurovision.tv/image/8f806df4-eefc-4f39-b999-9524888dde60/card.png',
    flag:
      'https://eurovision.tv/image/8d938882-5102-4e3c-8e83-527766ab211c.svg',
    bio: [
      "Tornike, or Kipo, is a 31-year-old singer from Georgia. He became famous with the Georgian public after winning the X-factor in 2014. Tornike's mentor on the show was none other than 2019 Cyprus delegate Tamta.",
      'Tornike was in the running to represent Georgia at the Eurovision Song Contest in 2017, hosted in Kyiv, but his song You Are My Sunshine was not chosen that year. In 2019, he won Georgian Idol with 33.82% of the public votes and will therefore represent the country at the Eurovision Song Contest 2020 in Rotterdam'
    ],
    writtenBy: '',
    composedBy: '',
    firstSemi: false,
    secondSemi: false,
    final: false,
    youtube: ''
  },
  {
    id: 17,
    country: 'Germany',
    emoji: '🇩🇪',
    artist: 'To be announced',
    song: '',
    imageUrl:
      'https://eurovision.tv/images/placeholder.jpg?id=cb2836e4db74575ca788',
    flag:
      'https://eurovision.tv/image/8d9388b6-92cc-4f05-a687-e4ebe31966cb.svg',
    bio: [''],
    writtenBy: '',
    composedBy: '',
    firstSemi: false,
    secondSemi: false,
    final: false,
    youtube: ''
  },
  {
    id: 18,
    country: 'Greece',
    emoji: '🇬🇷',
    artist: 'Stefania',
    song: 'SUPERGIRL',
    imageUrl:
      'https://eurovision.tv/image/8fc4cd9b-da65-4568-8c17-6df573f3e32c/card.jpg',
    flag:
      'https://eurovision.tv/image/8d93887d-4341-4b77-9c5c-7ad22f3262b3.svg',
    bio: [
      "Stefania was born in the Dutch city of Utrecht in 2002. She started singing at the age of 8 and rose to fame 2 years later, when she competed in 'The Voice Kids'. She also sang as part of the Dutch kids choir 'Kinderen voor Kinderen (Kids for Kids)'.",
      'In 2016, Stefania represented the Netherlands at the Junior Eurovision Song Contest as part of the girl group Kisses. They finished 8th at the contest in Valletta, Malta. Since then, Stefania has been performing as a solo singer and has her own YouTube channel and popular TikTok account.'
    ],
    writtenBy: 'Dimitris Kontopoulos, Arcade, Sharon Vaughn',
    composedBy: 'Dimitris Kontopoulos, Arcade',
    firstSemi: false,
    secondSemi: false,
    final: false,
    youtube: ''
  },
  {
    id: 19,
    country: 'Iceland',
    emoji: '🇮🇸',
    artist: 'To be announced',
    song: '',
    imageUrl:
      'https://eurovision.tv/images/placeholder.jpg?id=cb2836e4db74575ca788',
    flag:
      'https://eurovision.tv/image/8d9a46c4-def5-4b18-b4af-375320fbac0e.svg',
    bio: [''],
    writtenBy: '',
    composedBy: '',
    firstSemi: false,
    secondSemi: false,
    final: false,
    youtube: ''
  },
  {
    id: 20,
    country: 'Ireland',
    emoji: '🇮🇪',
    artist: 'To be announced',
    song: '',
    imageUrl:
      'https://eurovision.tv/images/placeholder.jpg?id=cb2836e4db74575ca788',
    flag:
      'https://eurovision.tv/image/8d93887b-7df6-40dc-bfa5-aa99d70ac957.svg',
    bio: [''],
    writtenBy: '',
    composedBy: '',
    firstSemi: false,
    secondSemi: false,
    final: false,
    youtube: ''
  },
  {
    id: 21,
    country: 'Israel',
    emoji: '🇮🇱',
    artist: 'Eden Alene',
    song: 'No song yet',
    imageUrl:
      'https://eurovision.tv/image/8fc89f60-293f-45dd-9428-cac9c33caf61/card.png',
    flag:
      'https://eurovision.tv/image/8d93886a-4c64-40a7-8e95-ad0732715a38.svg',
    bio: [
      "Born and raised in Jerusalem, the 19-year-old Eden won over Israel with her powerful voice and electrifying performances in the country's national selection tv programme 'The Next Star'.",
      'With her parents both hailing from Ethiopia, Eden will bring a fresh and contemporary combination of sounds and influences to the Eurovision Song Contest.'
    ],
    writtenBy: '',
    composedBy: '',
    firstSemi: false,
    secondSemi: false,
    final: false,
    youtube: ''
  },
  {
    id: 22,
    country: 'Italy',
    emoji: '🇮🇹',
    artist: 'Diodato',
    song: 'Fai Rumore',
    imageUrl:
      'https://eurovision.tv/image/8fd82d58-c5b6-4dbe-b415-333fa928bb46/card.jpg',
    flag:
      'https://eurovision.tv/image/8d93886a-27ac-4996-bc17-2f12b47b2a0e.svg',
    bio: [
      'Antonio Diodato, born 30 August 1981, is an Italian singer/songwriter born in Aosta and has lived in Taranto and Rome. After making his first music in Stockholm, he came back to Italy where he has released 3 albums so far.',
      "Diodato made his record debut in April 2013 with E forse sono pazzo (And maybe I’m crazy) which was met with critical acclaim. The following year, he participated in the 64th Edition of Sanremo Festival ‘Newcomers’ category with his song Babilonia, where he reached second place. In the same year, he also won the Italian 'Best Newcomer' award at the MTV Awards.",
      'Written and composed by Diodato, in collaboration with Edwyn Roberts, Fai Rumore quickly conquered the Italian streaming, download and radio charts. The song is released on his fourth album, Che vita meravigliosa.'
    ],
    writtenBy: 'Diodato',
    composedBy: 'Diodato, Edwin Roberts',
    firstSemi: false,
    secondSemi: false,
    final: false,
    youtube: ''
  },
  {
    id: 23,
    country: 'Latvia',
    emoji: '🇱🇻',
    artist: 'Samanta Tina',
    song: 'Still Breathing',
    imageUrl:
      'https://eurovision.tv/image/8fcf0a08-8a05-4929-9d4c-09436c5c684d/card.jpg',
    flag:
      'https://eurovision.tv/image/8d938866-37b5-494b-bf22-b216ab1d8fce.svg',
    bio: [
      'Samanta Tīna is a singer from the small town of Tukums in Latvia. This year marks her sixth time entering the Latvian Eurovision selection process.',
      'Whilst bringing very different songs each time, what remains the same are her powerful vocals. She describes her voice as a god-given talent that needs to be heard on the big stage. Her power doesn’t stop there; Samanta will serve you a large slice of girl power whenever there is an audience or camera in front of her.'
    ],
    writtenBy: 'Unknown',
    composedBy: 'Unknown',
    firstSemi: false,
    secondSemi: false,
    final: false,
    youtube: ''
  },
  {
    id: 24,
    country: 'Lithuania',
    emoji: '🇱🇹',
    artist: 'The Roop',
    song: 'On Fire',
    imageUrl:
      'https://eurovision.tv/image/8fd8837b-fb88-461b-8ac7-412b3612146e/card.jpg',
    flag:
      'https://eurovision.tv/image/8d938867-7e59-4252-979c-a9f152caa024.svg',
    bio: [
      'The Roop are 3 band members from Lithuania who describe their musical style as a mix of pop-rock and indie. Although they have only been working together since 2014, all band members have been involved in the music industry much longer.',
      'The Roop\'s debut album, To Whom It May Concern, came out in 2015. The band has since played music around the world, from Lithuania to Belgium, Serbia and Brazil. The band previously tried their hand at Lithuania\'s national selection in 2018 but came up short that time. Talking about giving it another shot, lead singer Vaidotas Valiukevičius said: "This year’s song is about something I carried within and observed around myself. It’s about writing yourself off too quickly. We are underestimating ourselves too often. We think we don’t meet some standards or that we are uninteresting, too young, too old."'
    ],
    writtenBy: 'Unknown',
    composedBy: 'Unknown',
    firstSemi: false,
    secondSemi: false,
    final: false,
    youtube: ''
  },
  {
    id: 25,
    country: 'Malta',
    emoji: '🇲🇹',
    artist: 'Destiny Chukunyere',
    song: 'No song yet',
    imageUrl:
      'https://eurovision.tv/image/8fcf3943-32f6-4464-b7d6-5af400020c19/card.jpg',
    flag: '',
    bio: [''],
    writtenBy: '',
    composedBy: '',
    firstSemi: false,
    secondSemi: false,
    final: false,
    youtube: ''
  },
  {
    id: 26,
    country: 'Moldova',
    emoji: '🇲🇩',
    artist: 'To be announced',
    song: '',
    imageUrl:
      'https://eurovision.tv/images/placeholder.jpg?id=cb2836e4db74575ca788',
    flag:
      'https://eurovision.tv/image/8d938863-f530-484c-9b17-ff4a299bac5d.svg',
    bio: [''],
    writtenBy: '',
    composedBy: '',
    firstSemi: false,
    secondSemi: false,
    final: false,
    youtube: ''
  },
  {
    id: 27,
    country: 'North Macedonia',
    emoji: '🇲🇰',
    artist: 'Vasil',
    song: 'No song yet',
    imageUrl:
      'https://eurovision.tv/image/8f93f7f8-0495-44fe-86f3-41a3891e2344/card.png',
    flag:
      'https://eurovision.tv/image/8d938863-a50c-4ded-8acf-3205851eae1f.svg',
    bio: [
      'From child pop star to over 50 operatic roles and recitals at music festivals across the world and collaborations with some of the world’s most prolific artists, Vasil’s motto in life is simple: wherever words fail, sing.',
      'Vasil Garvanliev started his musical journey at age 7, performing at some of North Macedonia’s most popular children’s festivals. Soon thereafter, he moved with his family to the United States, where he continued his career as a soloist at the Chicago Children’s Choir.',
      'Since his return to North Macedonia in 2018, Vasil has released 3 highly successful singles: Gjerdan (Necklace), “Patuvam (Travelling) and Mojata Ulica (My Street). His first solo concert in his native Strumica in November 2019 was sold out and showcased his vast musical experience from across the world.'
    ],
    writtenBy: '',
    composedBy: '',
    firstSemi: false,
    secondSemi: false,
    final: false,
    youtube: ''
  },
  {
    id: 28,
    country: 'Norway',
    emoji: '🇳🇴',
    artist: 'Ulrikke',
    song: 'Attention',
    imageUrl:
      'https://eurovision.tv/image/8fe0ac58-1e70-4263-8c08-1a7e668f5043/card.jpg',
    flag:
      'https://eurovision.tv/image/8d9387de-68de-403d-b3d0-1bdcf1c361e6.svg',
    bio: [
      'Ulrikke Brandstorp (24) from Sarpsborg became well known to the Norwegian public when she came second in the TV show Stjernekamp (NRK) in 2018.',
      'Later, she has been featured at Addresse: Tel Aviv (a show about Eurovision), the charity show Håp i ei gryte and Idrettsgallaen where she paid tribute to ski athletes Marit Bjørgen and Ole Einar Bjørndalen with an emotional performance.',
      'Ulrikke is known to fans of MGP as she participated in 2017 and made it to the Gold Final with the song Places. Throughout the fall of 2019 and until March 2020, Ulrikke can be seen performing at Folketeateret in Oslo. She plays Liesl, who is one of the lead roles in Sound of Music.'
    ],
    writtenBy: 'Unknown',
    composedBy: 'Unknown',
    firstSemi: false,
    secondSemi: false,
    final: false,
    youtube: ''
  },
  {
    id: 29,
    country: 'Poland',
    emoji: '🇵🇱',
    artist: 'To be announced',
    song: '',
    imageUrl:
      'https://eurovision.tv/images/placeholder.jpg?id=cb2836e4db74575ca788',
    flag:
      'https://eurovision.tv/image/8d9387d4-cc6f-437f-a646-cb3bde395dc2.svg',
    bio: [''],
    writtenBy: '',
    composedBy: '',
    firstSemi: false,
    secondSemi: false,
    final: false,
    youtube: ''
  },
  {
    id: 30,
    country: 'Portugal',
    emoji: '🇵🇹',
    artist: 'To be announced',
    song: '',
    imageUrl:
      'https://eurovision.tv/images/placeholder.jpg?id=cb2836e4db74575ca788',
    flag:
      'https://eurovision.tv/image/8d9387d4-255c-4052-b159-b62ef4ea2394.svg',
    bio: [''],
    writtenBy: '',
    composedBy: '',
    firstSemi: false,
    secondSemi: false,
    final: false,
    youtube: ''
  },
  {
    id: 31,
    country: 'Romania',
    emoji: '🇷🇴',
    artist: 'Roxen',
    song: 'No song yet',
    imageUrl:
      'https://eurovision.tv/image/8fd4d5c3-ea38-4044-8e55-b9968dec2c09/card.jpg',
    flag:
      'https://eurovision.tv/image/8d9a45ac-baef-4080-a24a-1afa3361e0ec.svg',
    bio: [
      '20-year-old Roxen will represent Romania at the Eurovision Song Contest 2020 in Rotterdam, the Netherlands. She became the country’s representative via a songwriting camp that public broadcaster TVR organized in collaboration with the music label Global Records.',
      'At a young age, Roxen already knew that music meant the world to her. She started singing at the age of 7 and won several musical competitions throughout the years.'
    ],
    writtenBy: '',
    composedBy: '',
    firstSemi: false,
    secondSemi: false,
    final: false,
    youtube: ''
  },
  {
    id: 32,
    country: 'Russia',
    emoji: '🇷🇺',
    artist: 'To be announced',
    song: '',
    imageUrl:
      'https://eurovision.tv/images/placeholder.jpg?id=cb2836e4db74575ca788',
    flag:
      'https://eurovision.tv/image/8d9387d3-056c-418a-a660-c192add9a5b9.svg',
    bio: [''],
    writtenBy: '',
    composedBy: '',
    firstSemi: false,
    secondSemi: false,
    final: false,
    youtube: ''
  },
  {
    id: 33,
    country: 'San Marino',
    emoji: '🇸🇲',
    artist: 'To be announced',
    song: '',
    imageUrl:
      'https://eurovision.tv/images/placeholder.jpg?id=cb2836e4db74575ca788',
    flag:
      'https://eurovision.tv/image/8d9387d1-bb97-4d83-b573-ba00a2eae728.svg',
    bio: [''],
    writtenBy: '',
    composedBy: '',
    firstSemi: false,
    secondSemi: false,
    final: false,
    youtube: ''
  },
  {
    id: 34,
    country: 'Serbia',
    emoji: '🇷🇸',
    artist: 'To be announced',
    song: '',
    imageUrl:
      'https://eurovision.tv/images/placeholder.jpg?id=cb2836e4db74575ca788',
    flag:
      'https://eurovision.tv/image/8d9387d0-c64f-4ab5-bd48-6fb25e5b343d.svg',
    bio: [''],
    writtenBy: '',
    composedBy: '',
    firstSemi: false,
    secondSemi: false,
    final: false,
    youtube: ''
  },
  {
    id: 35,
    country: 'Slovenia',
    emoji: '🇸🇮',
    artist: 'To be announced',
    song: '',
    imageUrl:
      'https://eurovision.tv/images/placeholder.jpg?id=cb2836e4db74575ca788',
    flag:
      'https://eurovision.tv/image/8d938784-099c-474a-99fb-51ec49400899.svg',
    bio: [''],
    writtenBy: '',
    composedBy: '',
    firstSemi: false,
    secondSemi: false,
    final: false,
    youtube: ''
  },
  {
    id: 36,
    country: 'Spain',
    emoji: '🇪🇸',
    artist: 'Blas Cantó',
    song: 'Universo',
    imageUrl:
      'https://eurovision.tv/image/8ed1034a-7724-4207-b124-0d2d38abf6eb/card.jpg',
    flag:
      'https://eurovision.tv/image/8d9388b1-0d59-43b4-9777-ec7b545077f3.svg',
    bio: [
      'Last October, RTVE internally appointed Blas Cantó as the Spanish representative in the Eurovision Song Contest 2020. A seasoned performer with extensive experience in both television and live stages, the artist from Murcia is one of the most interesting musical happenings in Spain in recent years, first with his band Auryn and now as a successful solo artist.',
      'Blas Cantó (27) is a young popular Spanish artist, who already participated in the 2011 national selection for the Eurovision Song Contest with the successful band Auryn. They just missed out on winning the ticket to Düsseldorf, finishing second with the song Volver. Blas became a household name in Spain after his participation in EuroJunior, the Spanish selection for the Junior Eurovision Song Contest in 2004.',
      'To date, Blas has released five albums. His first four albums were released with the boyband Auryn, which became the Best Spanish Act in the MTV Europe Music Awards. His first solo album Complicado, which included the big hit Él No Soy Yo, was released in 2018.'
    ],
    writtenBy: '',
    composedBy: '',
    firstSemi: false,
    secondSemi: false,
    final: false,
    youtube: ''
  },
  {
    id: 37,
    country: 'Sweden',
    emoji: '🇸🇪',
    artist: 'To be announced',
    song: '',
    imageUrl:
      'https://eurovision.tv/images/placeholder.jpg?id=cb2836e4db74575ca788',
    flag:
      'https://eurovision.tv/image/8d938783-ccc9-42c9-9f74-89c607bb7dfe.svg',
    bio: [''],
    writtenBy: '',
    composedBy: '',
    firstSemi: false,
    secondSemi: false,
    final: false,
    youtube: ''
  },
  {
    id: 38,
    country: 'Switzerland',
    emoji: '🇨🇭',
    artist: 'To be announced',
    song: '',
    imageUrl:
      'https://eurovision.tv/images/placeholder.jpg?id=cb2836e4db74575ca788',
    flag:
      'https://eurovision.tv/image/8d9388bd-8cdd-47ae-9c14-eba17dcc8d6f.svg',
    bio: [''],
    writtenBy: '',
    composedBy: '',
    firstSemi: false,
    secondSemi: false,
    final: false,
    youtube: ''
  },
  {
    id: 39,
    country: 'The Netherlands',
    emoji: '🇳🇱',
    artist: 'Jeangu Macrooy',
    song: 'No song yet',
    imageUrl:
      'https://eurovision.tv/image/8f941a99-54a3-43dd-ba50-80b5ecca848a/card.jpg',
    flag:
      'https://eurovision.tv/image/8d9387e9-8829-478f-b985-db9da30f4277.svg',
    bio: [
      'Jeangu Macrooy was born in 1993 in Paramaribo, Suriname. The seeds to Jeangu’s journey were planted when he received a guitar as a 13th birthday present from his parents.',
      'Jeangu’s musical ambition turned out to be bigger than the music scene in his native Suriname, leading to his move to the Netherlands in 2014. There he met producer and composer Perquisite who signed him to his label, Unexpected Records. From that moment, Jeangu’s career in the Dutch music industry was on the fast track. He has since played several big Dutch festivals, is a recurring guest in TV shows and has been nominated twice for an Edison Award, the Dutch equivalent to the American Grammy Awards.',
      'Jeangu is delighted to represent the Netherlands at the Eurovision Song Contest: “I am indescribably honoured! It’s a dream come true and the most beautiful thing that has come my way so far. My team and I are excited to make the Netherlands proud! Let’s go!”'
    ],
    writtenBy: '',
    composedBy: '',
    firstSemi: false,
    secondSemi: false,
    final: false,
    youtube: ''
  },
  {
    id: 40,
    country: 'Ukraine',
    emoji: '🇺🇦',
    artist: 'To be announced',
    song: '',
    imageUrl:
      'https://eurovision.tv/images/placeholder.jpg?id=cb2836e4db74575ca788',
    flag:
      'https://eurovision.tv/image/8d9386fe-147d-4043-989b-6d8eed8c322e.svg',
    bio: [''],
    writtenBy: '',
    composedBy: '',
    firstSemi: false,
    secondSemi: false,
    final: false,
    youtube: ''
  },
  {
    id: 41,
    country: 'United Kingdom',
    emoji: '🇬🇧',
    artist: 'To be announced',
    song: '',
    imageUrl:
      'https://eurovision.tv/images/placeholder.jpg?id=cb2836e4db74575ca788',
    flag:
      'https://eurovision.tv/image/8d938882-af21-4fa6-b0d6-35a5fa6a0939.svg',
    bio: [''],
    writtenBy: '',
    composedBy: '',
    firstSemi: false,
    secondSemi: false,
    final: false,
    youtube: ''
  }
];

export default participants;
