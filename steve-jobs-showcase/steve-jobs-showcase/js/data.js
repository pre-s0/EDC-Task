// All page content lives here. Edit this file to change the person or the facts.
// Each "src" number points to an entry in SOURCES.
const SOURCES = [
  {id:1, title:"Steve Jobs, Stanford Commencement Address (Stanford News, 2005)", url:"https://news.stanford.edu/stories/2005/06/youve-got-find-love-jobs-says"},
  {id:2, title:"Letter from Steve Jobs, 24 August 2011 (Apple Newsroom)", url:"https://www.apple.com/newsroom/2011/08/24Letter-from-Steve-Jobs/"},
  {id:3, title:"Statement by Apple's Board of Directors, 5 October 2011 (Apple Newsroom)", url:"https://www.apple.com/newsroom/2011/10/05Statement-by-Apples-Board-of-Directors/"},
  {id:4, title:"Apple Reinvents the Phone with iPhone, 9 January 2007 (Apple Newsroom)", url:"https://www.apple.com/newsroom/2007/01/09Apple-Reinvents-the-Phone-with-iPhone/"},
  {id:5, title:"Apple Computer Announces Plans to Acquire NeXT Software, 1996 (Apple Newsroom)", url:"https://www.apple.com/newsroom/1996/12/20Apple-Computer-Announces-Plans-to-Acquire-NeXT-Software/"},
  {id:6, title:"Pixar Animation Studios (official site)", url:"https://www.pixar.com"},
  {id:7, title:"Apple (official site)", url:"https://www.apple.com"},
  {id:8, title:"Steve Jobs, general reference used to cross-check dates (Wikipedia)", url:"https://en.wikipedia.org/wiki/Steve_Jobs"}
];

const MILESTONES = [
  {year:"1955", title:"Born and adopted in San Francisco", src:[1,8], text:"Steve Jobs was born on 24 February 1955 and adopted by Paul and Clara Jobs. He later dropped out of Reed College after six months but kept attending classes that interested him."},
  {year:"1976", title:"Co-founds Apple", src:[1,8], text:"With Steve Wozniak he started Apple Computer, beginning in his parents' garage. Ronald Wayne was a third co-founder who left within weeks."},
  {year:"1985", title:"Leaves Apple and starts NeXT", src:[1,8], text:"After a power struggle he left Apple. He describes it as being fired from the company he started. He then founded NeXT to build computers for universities and businesses."},
  {year:"1986", title:"Takes over what becomes Pixar", src:[1,6,8], text:"He bought the computer graphics group of Lucasfilm and turned it into the independent company Pixar Animation Studios."},
  {year:"1996-97", title:"Returns to Apple through NeXT", src:[5,8], text:"Apple announced the NeXT acquisition in December 1996. Jobs came back to the company and became interim CEO in 1997."},
  {year:"2007", title:"Introduces the iPhone", src:[4], text:"On 9 January 2007 Apple announced the iPhone, combining a phone, an iPod and an internet device in one product."},
  {year:"2011", title:"Steps down as CEO and passes away", src:[2,3], text:"He resigned as Apple's CEO on 24 August 2011, recommending Tim Cook as successor. He passed away on 5 October 2011."}
];

const VENTURES = [
  {name:"Apple", tags:["Hardware","Software"], role:"Co-founder (1976), CEO from 1997 to 2011", src:[1,2,7], text:"Jobs co-founded Apple, left in 1985, and returned to lead it for fourteen years. The company became known for products that join hardware, software and design.", links:[["Apple official site","https://www.apple.com"]]},
  {name:"Pixar", tags:["Media"], role:"CEO of Pixar Animation Studios", src:[1,6,8], text:"Jobs led Pixar after buying it from Lucasfilm in 1986. The studio released Toy Story in 1995, the first full-length computer-animated feature film.", links:[["Pixar official site","https://www.pixar.com"]]},
  {name:"NeXT", tags:["Hardware","Software"], role:"Founder (1985)", src:[1,5], text:"NeXT built advanced workstations and software. Apple bought the company in 1996, which brought Jobs and NeXT's software technology back to Apple.", links:[["Apple announcement of the NeXT acquisition","https://www.apple.com/newsroom/1996/12/20Apple-Computer-Announces-Plans-to-Acquire-NeXT-Software/"]]},
  {name:"iPhone", tags:["Hardware","Mobile"], role:"Product introduced by Jobs as Apple's CEO", src:[4,7], text:"Announced in 2007, the iPhone put a touchscreen, a phone, music and the internet into one device and started a new product line for Apple.", links:[["Apple's 2007 announcement","https://www.apple.com/newsroom/2007/01/09Apple-Reinvents-the-Phone-with-iPhone/"],["iPhone on apple.com","https://www.apple.com/iphone/"]]}
];

const ACHIEVEMENTS = [
  {text:"Helped bring the modern smartphone to mainstream users with the iPhone in 2007.", src:[4]},
  {text:"Led Pixar to Toy Story, the first full-length computer-animated feature film.", src:[6,8]}
];
const LESSONS = [
  {text:"Follow your curiosity even when the payoff is unclear. Jobs argued that you can only connect the dots looking back.", src:[1]},
  {text:"Do work you love, and keep looking until you find it. A setback like being fired can open a new start.", src:[1]}
];
