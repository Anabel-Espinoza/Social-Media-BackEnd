const usernames = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdirahman',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Abdulbasir',
    'Abdulkadir',
    'Abdulkarem',
    'Smith',
    'Jones',
    'Coollastname',
    'Ze',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zen',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    'Zhuo',
    'Zi',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Ziyaan',
    'Zohaib',
    'Zohair',
    'Zoubaeir',
    'Zubair',
    'Zubayr',
    'Zuriel',
    'Xander',
    'Jared',
    'Courtney',
    'Gillian',
    'Clark',
    'Jared',
    'Grace',
    'Kelsey',
    'Tamar',
    'Alex',
    'Mark',
    'Tamar',
    'Farish',
    'Sarah',
    'Nathaniel',
    'Parker',
  ];
  
  const thoughts = [
    'If animals could talk, which species would be the funniest conversationalists?',
    'Imagine a world where gravity worked in reverse!',
    'What if you could have a superpower that worked only on Tuesdays?',
    'What if all the colors in the world suddenly turned fluorescent?',
    'Imagine a world where everywhere had a personal robot assistant.',
    'What if laughter was a form of currency?',
    'What if socks had minds of their own and run away?',
    'Why do we park on driveways and drive on parkways?',
    'If two vegans are arguing, is it still considered beef?',
    'The laundry pile seems to multiply like rabbits, no matter what.',
    'Ninja skills developed while trying to avoid squeaky toys should be recognized as a talent.',
    "Getting a full night's sleep becomes an elusive dream, much like a unicorn."
  ];

const getRandomUser = () => {
    let randomName = Math.floor(Math.random() * usernames.length)
    let randomNumber = Math.floor(Math.random() * 100)
    return usernames[randomName] + randomNumber
}

const getRandomThought = () => {
    let randomThought = Math.floor(Math.random() * thoughts.length)
    return thoughts[randomThought]
}

console.log(getRandomUser(usernames))
console.log(getRandomThought(thoughts))

module.exports = { getRandomUser, getRandomThought }